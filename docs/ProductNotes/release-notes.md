---
id: release-notes
sidebar_position: 1
---

# Release Notes
**0.6.0**
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
