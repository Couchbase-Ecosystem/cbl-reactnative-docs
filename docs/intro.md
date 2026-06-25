---
slug: /
sidebar_position: 1 
sidebar_label: Overview
id: intro
title: Overview 
description:
  Couchbase Lite is an embedded, document-style NoSQL database that is syncable and makes it easy to build offline-enabled applications.
---

# Couchbase Lite for React Native 

Couchbase Lite is an embedded, document-style NoSQL database that is syncable and makes it easy to build offline-enabled applications.

Couchbase Lite for React Native is a Native Module implementation of Couchbase Lite for React Native using Typescript. It has feature parity with Couchbase Lite implementations for other platforms, with a few exceptions.

Version 1.1 adds official React Native New Architecture support through TurboModules.

More information on React Native - Native Modules can be found here: [React Native Docs](https://reactnative.dev/docs/legacy/native-modules-intro)

:::note
Couchbase Lite for React Native has officially graduated from a community project to a fully Enterprise-Supported offering
:::

The version of this Native Module is based on supporting Couchbase Lite Enterprise for iOS and Android.  A [license](https://www.couchbase.com/pricing/) is required to use Couchbase Lite Enterprise edition.  

## Features
* Offline First
* Documents
 	- Schemaless 
 	- Stored in efficient binary format 
* Blobs
 	- Store and sync binary data, for example JPGs or PDFs
* Queries
 	- SQL++ Query Language
		- Extension of familiar SQL for JSON-like data 
		- Many built-in functions
	- Full-Text Search
	- Indexing
* Data Sync
	- [Couchbase Capella App Servcies](https://www.couchbase.com/products/capella) - Sync your data from your mobile app to the Cloud 
	- Remote On-Premise via [Sync Gateway](https://www.couchbase.com/products/sync-gateway)
* Change Notifications for
	- Documents
	- Collections
	- Queries
	- Replication
* Encryption
	- Full Database 
* React Native New Architecture
	- TurboModule support for iOS and Android
* Logging
	- Console, file, and custom log sinks
	- React Native wrapper logs can be forwarded to file and custom sinks

:::note
This plugin only works with iOS and Android platforms.  Web, Windows, and MacOS support is not available.
:::

## Upgrading?

If you are upgrading from 1.0.x to 1.1, see the [Version 1.1 Migration Guide](Guides/Migration/v1.1.md).

If you are upgrading from 0.6.x, see the [Version 1.0 Migration Guide](Guides/Migration/v1.md) for detailed instructions on upgrading to version 1.0.

:::note
Migrating from 0.6.x directly to 1.1? Follow both guides in order — complete the [Version 1.0 Migration Guide](Guides/Migration/v1.md) first, then the [Version 1.1 Migration Guide](Guides/Migration/v1.1.md).
:::

## Limitations
Some of the features supported by other platform implementations of Couchbase Lite are currently not supported:

* Vector Search
	- This is still in beta for the native platforms and is not yet supported in the plugin.

* Peer-to-Peer Sync
	- There is no "platform" specific code built into the plugin to allow you to find other peers. 