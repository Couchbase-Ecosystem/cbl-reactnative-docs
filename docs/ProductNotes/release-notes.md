---
id: release-notes
sidebar_position: 1
---

# Release Notes

**1.1.0** (June 2026)

New Features:
- Official React Native New Architecture / TurboModule support for iOS and Android native modules.
- Improved file logging: React Native wrapper diagnostics can now be forwarded into configured file and custom log sinks.
- React Native-originated log lines are prefixed with `RN ::LEVEL::` so they are easy to distinguish from native Couchbase Lite log output.
- `LogSinks.write()` API for writing app-authored messages into the Couchbase Lite logging pipeline.
- `FileSystem.getFilesInDirectory(path)` API for listing files in a directory, useful when discovering generated log files.

Improvements and Fixes:
- Updated Couchbase Lite Android and iOS Enterprise SDKs to 3.3.3.
- Improved listener reliability for collection, query, and replicator events on the New Architecture event path.
- Replicator event payloads now include error fields where applicable.
- Document expiration handling now supports clearing expiration with `null` and uses stricter UTC ISO-8601 parsing.
- Delete operations using `ConcurrencyControl.FAIL_ON_CONFLICT` now honor revision IDs more consistently.
- Android replicator filters can use JavaScript arrow functions in the V8 evaluation path.

Repository Updates:
- Official npm package: [@couchbase/couchbase-lite-react-native](https://www.npmjs.com/package/@couchbase/couchbase-lite-react-native)
- The legacy `cbl-reactnative` package is superseded; new installs and upgrades should use the scoped package
- Main React Native repository: [couchbase/couchbase-lite-react-native](https://github.com/couchbase/couchbase-lite-react-native)
- Shared JavaScript library repository: [couchbase/couchbase-lite-js-common](https://github.com/couchbase/couchbase-lite-js-common)

Migration from 1.0.x:
- Existing application-level APIs remain largely compatible.
- Enable React Native New Architecture to use the TurboModule implementation.
- Review logging setup if you want React Native wrapper logs included in file or custom log sinks.

See [Migration Guide](../Guides/Migration/v1.1.md) for detailed instructions.

---

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
- Couchbase Lite 3.3.0 - Updated iOS and Android SDKs to Couchbase Lite 3.3.0

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
- Array handling and improve blob data validation in DataAdapter [null-pointer issue](https://github.com/couchbase/couchbase-lite-react-native/pull/73)
- Fix a crash caused by improper handling of encryption key

**0.6.1**
- Implemented [Collection Change Listeners](https://github.com/couchbase/couchbase-lite-react-native/pull/54) on Android
- Implemented [Query Change Listeners](https://github.com/couchbase/couchbase-lite-react-native/pull/55) on Android
- Fixed data adapter issues and improved testing
- Fixed [issue](https://github.com/couchbase/couchbase-lite-react-native/issues/38) related to collection `getDocument` always pulling blob content

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
