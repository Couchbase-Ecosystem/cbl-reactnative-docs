---
id: release-notes
sidebar_position: 1
---

# Release Notes

**1.0.0** (December 2025)

New Features:
- Log Sink API - Console, File, and Custom log sinks with configurable levels and domains
- LogDomain.ALL - New domain to enable all log categories at once
- Listener Token Management - New `ListenerToken` class with `token.remove()` API
- Collection Change Listeners - Monitor all documents in a collection
- Document Change Listeners - Monitor specific documents by ID
- Query Change Listeners (Live Queries) - Real-time query results
- Replicator Status Change Listeners - Monitor replication state and progress
- Replicator Document Change Listeners - Track individual document replication
- New ReplicatorConfiguration API - Collections passed during initialization using CollectionConfiguration
- Collection.fullName() method - Get fully qualified collection name (scope.collection)
- Couchbase Lite 3.3.0 - Updated iOS and Android SDKs to latest stable version

Breaking Changes:
- TypeScript: ListenerToken type changed from string to ListenerToken object (affects explicitly typed code only)

Deprecated APIs (Remain available for backward compatibility):
- Database.setLogLevel() - Use LogSinks.setConsole() instead. Note: Old and new logging APIs cannot be used in tandem.
- config.addCollection(collection) - Pass CollectionConfiguration array in constructor instead
- removeChangeListener() methods - Use token.remove() instead
- ListenerToken type changed from string to ListenerToken object (TypeScript breaking change for explicitly typed code)

Bug Fixes:
- Fixed encryption key crash when key not required
- Fixed Kotlin import paths and enhanced logging methods
- Improved blob data validation and array handling
- Fixed custom delete issues

Migration from 0.6.x:
1. Replace Database.setLogLevel() with LogSinks.setConsole() (required - APIs cannot be mixed)
2. Update ReplicatorConfiguration to use new constructor pattern (recommended)
3. Update listener cleanup to use token.remove() (recommended)
4. Update TypeScript code that explicitly typed tokens as string to use ListenerToken (required for TypeScript)

See [Migration Guide](../Guides/Migration/v1.md) for detailed instructions.

---

**0.6.3**
- Array handling and improve blob data validation in DataAdapter [null-pointer issue](https://github.com/Couchbase-Ecosystem/cbl-reactnative/pull/73)
- Fix a crash caused by improper handling of encryption key

**0.6.1**
- Implemented [Collection Change Listeners](https://github.com/Couchbase-Ecosystem/cbl-reactnative/pull/54) on Android
- Implemented [Query Change Listeners](https://github.com/Couchbase-Ecosystem/cbl-reactnative/pull/55) on Android
- Fixed data adapter issues and improved testing
- Fixed [issue](https://github.com/Couchbase-Ecosystem/cbl-reactnative/issues/38) related to collection `getDocument` always pulling blob content

**0.5.0**
- Implemented Collection Document Change
- Implemented Query Change Listener (Live Query)
- Implemented Replicator Status Change and Replicator Document Change (iOS)
- Fixed issue related to creation of two database instances

**0.2.3**
- Couchbase Lite 3.2.1 support
- React Native 0.76.3 support
- Updated Documents and Blob API to support new way of processing documents due to changes made in cbl-ionic to support nested arrays in Android
- Expo Example App
   - Updated to Expo 52.0.11
   - Added Test Runners and support for cblite-js-tests
   - Validated all implemented tests pass
- Started working on fixes for emitter problems with listeners

Known Issues:
- Emitter problems with listeners, features like Live Query and Replicator Status are not working.

**0.2.0**
- Initial Release
