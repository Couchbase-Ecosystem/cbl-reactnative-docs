---
id: change-listeners
sidebar_position: 8
---

# Change Listeners

> Description — _Couchbase Lite for React Native — Real-time Data Change Notifications_  
> Related Content — [Documents](documents.md) | [Live Queries](Queries/live-queries.md) | [Remote Sync](DataSync/remote-sync-gateway.md)

:::important AT A GLANCE
Couchbase Lite provides 5 types of change listeners for real-time data notifications:

* **Collection Change Listeners** - Monitor all document changes in a collection
* **Document Change Listeners** - Monitor a specific document by ID
* **Query Change Listeners** - Monitor query results in real-time (Live Queries)
* **Replicator Status Listeners** - Monitor replication state and progress
* **Replicator Document Listeners** - Monitor individual document replication

All listeners return a `ListenerToken` object for lifecycle management.
:::

## Listener Token API

Version 1.0 introduces the `ListenerToken` class for improved listener management.

All `addChangeListener` methods return a `ListenerToken` object with these methods:

**remove()** - Removes the listener (recommended)

```typescript
const token = await collection.addChangeListener(...);
await token.remove();
```

**getUuidToken()** - Gets the internal UUID string (for debugging)

```typescript
const uuid = token.getUuidToken();
console.log('Token:', uuid); // "listener-abc-123-def-456"
```

**isRemoved()** - Checks if listener was already removed

```typescript
if (!token.isRemoved()) {
  await token.remove();
}
```

:::caution Deprecated Methods
The old `removeChangeListener()` methods are deprecated but still functional for backward compatibility:

```typescript
// OLD WAY (deprecated but still works)
await collection.removeChangeListener(token);
await query.removeChangeListener(token);
await replicator.removeChangeListener(token);

// NEW WAY (recommended)
await token.remove();
```

Use `token.remove()` for all new code.
:::

## Collection Change Listeners

Monitor all changes to any document in a collection.

### When to Use

- Refresh list views when data changes
- Trigger background sync after local updates
- Audit logging of collection activity
- Real-time collaboration features

### Data Structure

When a collection changes, your callback receives a `CollectionChange` object:

```typescript
interface CollectionChange {
  documentIDs: string[];  // Array of changed document IDs
  collection: Collection; // Reference to the collection
}
```

:::caution Property Names
The property is `documentIDs` (capital IDs), not `documentIds`.

There is NO direct `database` property. Access it via `change.collection.database`.
:::

#### Example 1. Basic Collection Listener

```typescript
import { Collection, ListenerToken } from 'cbl-reactnative';

const collection = await database.createCollection('users');

const token: ListenerToken = await collection.addChangeListener((change) => {
  console.log('Collection changed!');
  console.log('Changed documents:', change.documentIDs);
  // Example output: ['user-123', 'user-456']
  
  console.log('Collection name:', change.collection.name);
  // Output: users
  
  console.log('Database name:', change.collection.database.getName());
  // Output: mydb
});

// Remove listener when done
await token.remove();
```

#### Example 2. React Hook Pattern

```typescript
import { useEffect } from 'react';
import { ListenerToken } from 'cbl-reactnative';

function UserListScreen({ collection }) {
  useEffect(() => {
    if (!collection) return;

    let token;
    
    const setup = async () => {
      token = await collection.addChangeListener((change) => {
        console.log(`${change.documentIDs.length} documents changed`);
        refreshUserList();
      });
    };
    setup();

    // Cleanup on unmount
    return () => {
      if (token) token.remove();
    };
  }, [collection]);
}
```

:::important Limitation
Only ONE collection-wide listener is allowed per collection instance. Calling `addChangeListener` twice will throw an error.

However, you can have MULTIPLE document listeners (see next section).
:::

## Document Change Listeners

Monitor changes to a specific document by ID.

### When to Use

- Watch a user profile for updates
- Monitor a shopping cart
- Track order status changes
- Real-time document collaboration

### Data Structure

```typescript
interface DocumentChange {
  documentId: string;     // Document ID (lowercase Id)
  collection: Collection; // Collection reference
  database: Database;     // Database reference (available!)
}
```

:::note
Unlike collection listeners, document change listeners DO have a direct `database` property.
:::

#### Example 3. Monitor Specific Document

```typescript
import { ListenerToken } from 'cbl-reactnative';

const token: ListenerToken = await collection.addDocumentChangeListener(
  'user-123',
  async (change) => {
    console.log(`Document ${change.documentId} changed`);
    
    // Fetch latest version
    const doc = await collection.document(change.documentId);
    if (doc) {
      console.log('New data:', doc.getData());
    } else {
      console.log('Document was deleted');
    }
  }
);

// Remove when done
await token.remove();
```

#### Example 4. Multiple Document Listeners

```typescript
// Monitor multiple specific documents
const userToken = await collection.addDocumentChangeListener('user-123', (change) => {
  console.log('User changed');
});

const cartToken = await collection.addDocumentChangeListener('cart-abc', (change) => {
  console.log('Cart changed');
});

// Cleanup all
await Promise.all([userToken.remove(), cartToken.remove()]);
```

## Query Change Listeners

Monitor query results in real-time. Also known as "Live Queries".

### Data Structure

```typescript
interface QueryChange {
  error: string;      // Error message if query failed
  query: Query;       // Reference to the query
  results: ResultSet; // Array of result objects
}
```

#### Example 5. Live Query

```typescript
import { ListenerToken } from 'cbl-reactnative';

const query = database.createQuery(
  'SELECT META().id, name, email FROM _default.users WHERE isActive = true'
);

const token: ListenerToken = await query.addChangeListener((change) => {
  if (change.error) {
    console.error('Query error:', change.error);
    return;
  }

  console.log(`Found ${change.results.length} active users`);
  change.results.forEach(result => {
    console.log(`User: ${result.name} - ${result.email}`);
  });
});

// Remove when done
await token.remove();
```

For more information on live queries, see [Live Queries](Queries/live-queries.md).

## Replicator Status Change Listeners

Monitor replication status, progress, and errors.

### Data Structure

```typescript
interface ReplicatorStatusChange {
  status: ReplicatorStatus;
}
```

**ReplicatorStatus Methods:**
- `getActivityLevel()` - Returns 0-4 (see table below)
- `getProgress()` - Returns ReplicatorProgress object
- `getError()` - Returns error message string or undefined

**ReplicatorProgress Methods:**
- `getCompleted()` - Returns number of changes completed
- `getTotal()` - Returns total number of changes

**Activity Levels:**

| Value | Constant | Meaning |
|-------|----------|---------|
| 0 | STOPPED | Replication stopped or fatal error |
| 1 | OFFLINE | Cannot reach remote server |
| 2 | CONNECTING | Connecting to server |
| 3 | IDLE | Connected, no changes to sync |
| 4 | BUSY | Actively transferring data |

#### Example 6. Monitor Replication Status

```typescript
import { ListenerToken, ReplicatorActivityLevel } from 'cbl-reactnative';

const token: ListenerToken = await replicator.addChangeListener((change) => {
  const status = change.status;
  const level = status.getActivityLevel();
  const progress = status.getProgress();
  
  console.log(`Activity: ${level}`);
  console.log(`Progress: ${progress.getCompleted()}/${progress.getTotal()}`);
  
  if (status.getError()) {
    console.error('Replication error:', status.getError());
  }
  
  // Check specific states
  if (level === ReplicatorActivityLevel.IDLE) {
    console.log('Sync complete');
  } else if (level === ReplicatorActivityLevel.BUSY) {
    console.log('Syncing data...');
  }
});

// Remove when done
await token.remove();
```

#### Example 7. Deprecated Removal Pattern

```typescript
const token = await replicator.addChangeListener(...);

// OLD WAY (deprecated but still works)
await replicator.removeChangeListener(token);

// NEW WAY (recommended)
await token.remove();
```

:::caution Deprecated
`replicator.removeChangeListener(token)` is deprecated. Use `token.remove()` instead.
:::

## Replicator Document Change Listeners

Monitor individual documents being replicated.

### When to Use

- Track which specific documents are syncing
- Detect replication conflicts
- Handle document-level replication errors
- Monitor deleted documents during sync

### Data Structure

```typescript
interface DocumentReplicationRepresentation {
  isPush: boolean;              // true = push, false = pull
  documents: ReplicatedDocument[];
}

interface ReplicatedDocument {
  id: string;                   // Document ID
  scopeName: string;            // Scope name
  collectionName: string;       // Collection name
  flags: string[];              // ['DELETED', 'ACCESS_REMOVED']
  error?: { message: string };  // Present if replication failed
}
```

**Document Flags:**
- `'DELETED'` - Document was deleted
- `'ACCESS_REMOVED'` - User lost access to document

#### Example 8. Monitor Document Replication

```typescript
import { ListenerToken } from 'cbl-reactnative';

const token: ListenerToken = await replicator.addDocumentChangeListener((change) => {
  const direction = change.isPush ? 'PUSH' : 'PULL';
  console.log(`${direction}: ${change.documents.length} documents`);

  change.documents.forEach(doc => {
    console.log(`  ${doc.id}`);
    
    if (doc.flags.includes('DELETED')) {
      console.log('    Document was deleted');
    }
    
    if (doc.error) {
      console.error(`    Error: ${doc.error.message}`);
    }
  });
});

// Remove when done
await token.remove();
```

## Best Practices

**Always Remove Listeners**

In React components, use the cleanup function:

```typescript
useEffect(() => {
  let token;
  
  const setup = async () => {
    token = await collection.addChangeListener((change) => {
      // Handle changes
    });
  };
  setup();
  
  return () => {
    if (token && !token.isRemoved()) {
      token.remove();
    }
  };
}, [collection]);
```

**Check Before Removing**

```typescript
if (!token.isRemoved()) {
  await token.remove();
}
```

## Common Pitfalls

:::caution Property Name Gotchas
**Collection Change Listener:**
```typescript
change.documentIDs  // CORRECT (capital IDs)
change.documentIds  // WRONG - will be undefined

change.collection.database  // CORRECT way to access database
change.database             // WRONG - property doesn't exist
```

**Document Change Listener:**
```typescript
change.documentId  // CORRECT (lowercase Id)
change.documentID  // WRONG - will be undefined

change.database    // CORRECT - direct property exists
```

Getting these property names wrong is the most common source of errors.
:::

**Multiple Collection Listeners**

```typescript
// WRONG - will throw error
const token1 = await collection.addChangeListener(...);
const token2 = await collection.addChangeListener(...); // ERROR!

// CORRECT - only one collection listener per instance
const token = await collection.addChangeListener(...);

// CORRECT - multiple document listeners are fine
const t1 = await collection.addDocumentChangeListener('user-123', ...);
const t2 = await collection.addDocumentChangeListener('user-456', ...);
```

**Async Handling in Callbacks**

```typescript
// WRONG - promise not awaited
const token = await collection.addChangeListener((change) => {
  change.documentIDs.forEach(id => {
    collection.document(id);  // Returns promise, not awaited!
  });
});

// CORRECT - proper async handling
const token = await collection.addChangeListener(async (change) => {
  const docs = await Promise.all(
    change.documentIDs.map(id => collection.document(id))
  );
  console.log('Documents:', docs);
});
```

