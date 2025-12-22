---
id: live-queries
sidebar_position: 6 
---

# Live Queries 

> Description - _Couchbase Lite Live Query Concepts_
> Related Content - [SQL++ for Mobile](sqlplusplus.md)

## Activating a Live Query

A live query is a query that, once activated, remains active and monitors the database for changes; refreshing the result set whenever a change occurs. As such, it is a great way to build reactive user interfaces — especially table/list views — that keep themselves up to date.

**So, a simple use case may be:** A replicator running and pulling new data from a server, whilst a live-query-driven UI automatically updates to show the data without the user having to manually refresh. This helps your app feel quick and responsive.

With Couchbase Lite for React Native, live queries can be watched through:

    * Listener callbacks: `Query.addChangeListener`

Each time you start watching a live query, the query is executed and an initial change notification is dispatched. The query is then kept active and further change notifications are dispatched whenever a change occurs.

#### Example 1. Starting a Live Query - Change Listener

```typescript
import { ListenerToken } from 'cbl-reactnative';

// Register a change listener
const token: ListenerToken = await query.addChangeListener((change) => {  
  if (change.error) {  
    console.error('Query error:', change.error);
    return;
  }
  
  const results = change.results;  
  // results is an array of result objects
  for (const doc of results) {  
    console.log('Result:', doc);                
  }  
}); 
```

:::note Version 1.0
Change listeners now return a `ListenerToken` object with a `remove()` method for cleanup.
:::

#### Example 2. Stopping a Live Query - Change Listener

```typescript
// Remove listener using new API
await token.remove();
```

:::caution Deprecated
The old `query.removeChangeListener(token)` method is deprecated but still works:

**Old way (deprecated):**
```typescript
await query.removeChangeListener(token);  // Still works
```

**New way (recommended):**
```typescript
await token.remove();  // Use this
```
:::

For complete information on query change listeners and all other listener types, see [Change Listeners](../change-listeners.md).