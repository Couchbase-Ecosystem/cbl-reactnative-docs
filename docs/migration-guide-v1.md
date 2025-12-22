---
id: migration-guide-v1
sidebar_position: 9
---

# Migration Guide: Version 1.0

> Description — _Quick reference for all API changes in cbl-reactnative version 1.0_  
> Related Content — [Release Notes](ProductNotes/release-notes.md) | [Change Listeners](change-listeners.md) | [Using Logs](Troubleshooting/using-logs.md)

:::important AT A GLANCE
Version 1.0 introduces three major API changes:

1. **Log Sink API** - Replaces `Database.setLogLevel()` with `LogSinks` API (BREAKING)
2. **Listener Token API** - New `token.remove()` replaces `removeChangeListener()` (DEPRECATED)
3. **New ReplicatorConfiguration** - Collections passed in constructor (DEPRECATED old way)
:::

## Breaking Changes

### 1. Logging API Replaced

**OLD (Removed in 1.0):**
```typescript
// This no longer works
await db.setLogLevel(LogDomain.ALL, LogLevel.VERBOSE);
await Database.setLogLevel(LogDomain.DATABASE, LogLevel.INFO);
```

**NEW (Required in 1.0):**
```typescript
import { LogSinks, LogLevel, LogDomain } from 'cbl-reactnative';

await LogSinks.setConsole({
  level: LogLevel.VERBOSE,
  domains: [LogDomain.ALL]
});
```

**Migration:** Search your code for `setLogLevel` and replace with `LogSinks.setConsole`.

See: [Using Logs](Troubleshooting/using-logs.md)

---

### 2. ReplicatorConfiguration API Changed

**OLD (Deprecated but works):**
```typescript
const config = new ReplicatorConfiguration(endpoint);
config.addCollection(collection);
const replicator = await Replicator.create(config);
```

**NEW (Recommended in 1.0):**
```typescript
import { CollectionConfiguration } from 'cbl-reactnative';

const collectionConfig = new CollectionConfiguration(collection);
const config = new ReplicatorConfiguration([collectionConfig], endpoint);
const replicator = await Replicator.create(config);
```

**Migration:** Old way still works but update when convenient.

See: [Remote Sync](DataSync/remote-sync-gateway.md#example-1-replication-configuration-and-initialization)

---

## Deprecated APIs (Still Work)

### Listener Removal Methods

**OLD (Deprecated in 1.0):**
```typescript
await collection.removeChangeListener(token);
await query.removeChangeListener(token);
await replicator.removeChangeListener(token);
```

**NEW (Recommended in 1.0):**
```typescript
await token.remove();
```

**Migration:** Old way still works, update when convenient.

See: [Change Listeners](change-listeners.md#listener-token-api)

---

## New Features in 1.0

### 1. Three Log Sink Types

```typescript
// Console Sink - for development
await LogSinks.setConsole({ 
  level: LogLevel.VERBOSE, 
  domains: [LogDomain.ALL] 
});

// File Sink - for production logging
await LogSinks.setFile({ 
  level: LogLevel.WARNING, 
  directory: logDir,
  maxKeptFiles: 5,
  maxFileSize: 1024 * 1024,
  usePlaintext: true
});

// Custom Sink - for analytics
await LogSinks.setCustom({ 
  level: LogLevel.ERROR, 
  domains: [LogDomain.ALL],
  callback: (level, domain, message) => {
    Analytics.log({ level, domain, message });
  }
});
```

See: [Using Logs](Troubleshooting/using-logs.md)

---

### 2. All 5 Change Listener Types

Now fully documented with examples:

```typescript
// 1. Collection Change Listener
const token1 = await collection.addChangeListener((change) => {
  console.log('Changed docs:', change.documentIDs); // Capital IDs!
});

// 2. Document Change Listener
const token2 = await collection.addDocumentChangeListener('doc-id', (change) => {
  console.log('Doc changed:', change.documentId); // Lowercase Id!
});

// 3. Query Change Listener (Live Query)
const token3 = await query.addChangeListener((change) => {
  console.log('Results:', change.results);
});

// 4. Replicator Status Listener
const token4 = await replicator.addChangeListener((change) => {
  const status = change.status;
  console.log('Level:', status.getActivityLevel());
  console.log('Progress:', status.getProgress().getCompleted());
});

// 5. Replicator Document Listener
const token5 = await replicator.addDocumentChangeListener((change) => {
  console.log('Direction:', change.isPush ? 'Push' : 'Pull');
});

// All use same removal pattern
await token1.remove();
```

See: [Change Listeners](change-listeners.md)

---

### 3. Collection.fullName()

```typescript
const fullName = await collection.fullName();
console.log(fullName); // "production.users"
```

See: [Scopes and Collections](scopes-collections.md#get-collection-full-name)

---

## Quick Migration Steps

**Step 1: Update Logging (REQUIRED)**

Find and replace in your code:

```bash
# Search for old API
grep -r "setLogLevel" .

# Replace with LogSinks.setConsole
```

**Step 2: Update ReplicatorConfiguration (Optional)**

```typescript
// Old (works but deprecated)
const config = new ReplicatorConfiguration(endpoint);
config.addCollection(collection);

// New (recommended)
const collectionConfig = new CollectionConfiguration(collection);
const config = new ReplicatorConfiguration([collectionConfig], endpoint);
```

**Step 3: Update Listener Cleanup (Optional)**

```typescript
// Old (works but deprecated)
await collection.removeChangeListener(token);

// New (recommended)
await token.remove();
```

---

## Important Property Names

| Listener Type | Property | Correct | Wrong |
|--------------|----------|---------|-------|
| Collection Change | Document IDs | `documentIDs` | `documentIds` |
| Document Change | Document ID | `documentId` | `documentID` |
| Collection Change | Database | `collection.database` | `database` |
| Document Change | Database | `database` | N/A |
| Replicator Progress | Completed | `getCompleted()` | `completed` |
| Replicator Progress | Total | `getTotal()` | `total` |

---

## Files Updated in Documentation

| File | Change Type |
|------|-------------|
| [using-logs.md](Troubleshooting/using-logs.md) | BREAKING |
| [databases.md](databases.md) | BREAKING |
| [remote-sync-gateway.md](DataSync/remote-sync-gateway.md) | BREAKING + DEPRECATED |
| [change-listeners.md](change-listeners.md) | NEW |
| [documents.md](documents.md) | DEPRECATED + BUG FIX |
| [live-queries.md](Queries/live-queries.md) | DEPRECATED |
| [scopes-collections.md](scopes-collections.md) | NEW |
| [intro.md](intro.md) | UPDATE |
| [release-notes.md](ProductNotes/release-notes.md) | NEW |
| [migration-guide-v1.md](migration-guide-v1.md) | NEW |

---

## Need Help?

- **Full API Reference:** [Change Listeners](change-listeners.md)
- **Log Sink Examples:** [Using Logs](Troubleshooting/using-logs.md)
- **Replication Setup:** [Remote Sync](DataSync/remote-sync-gateway.md)
- **Full Release Notes:** [Version 1.0](ProductNotes/release-notes.md)

