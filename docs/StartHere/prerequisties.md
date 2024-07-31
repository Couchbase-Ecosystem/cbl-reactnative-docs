---
id: prerequisites
sidebar_position: 1
---

# Prerequisites

Couchbase Lite for React Native is provided as a [Native Module](https://reactnative.dev/docs/native-modules-intro).

The Native Module can be found at the following repository [Couchbase Lite for React Native](https://github.com/Couchbase-Ecosystem/cbl-reactnative).  This plugin is actively developed and maintained by the community.  It is not an official Couchbase product.  

A developer using this plugin should have a basic understanding of the following technologies:
- [React Native](https://reactnative.dev/)
- [React Native - Native Modules](https://reactnative.dev/docs/native-modules-intro)
- [Expo Framework](https://docs.expo.dev/)
- [Couchbase Lite](https://docs.couchbase.com/couchbase-lite/current/index.html)

## Expo Note
React Native's recommmendation is to use Expo for development per this [blog post](https://reactnative.dev/blog/2024/06/25/use-a-framework-to-build-react-native-apps).   The example app that comes with the cbl-reactnative repo is an Expo based app, thus this Native Module can work in Expo apps.  Note using Expo Go is not supported due to Expo Go not supporting loading 3rd party Native Modules.  You will need to be familiar with the [Expo Dev Client](https://docs.expo.dev/guides/local-app-development/#local-builds-with-expo-dev-client) process to use this Native Module in an Expo app. 

## Supported Platforms
- The React Native - Native Module is supported on iOS and Android platforms.  MacOS and Windows support is not available at this time.

## React Native Version
- The plugin is built using React Native 0.74.3. Support for older versions of React Native is not guaranteed and apps should be based on 0.74.3 or higher. 

## Development Environment
- Javascript
    - [Node >= 20](https://formulae.brew.sh/formula/node@18)
- React Native
    - [React Native Docs](https://reactnative.dev/)
    - [Understanding React Native - Native Modules ](https://reactnative.dev/docs/native-modules-intro)
- Expo (if you choose to use Expo, not required but recommended)
    - [Expo Docs](https://docs.expo.dev/)
    - [Expo Dev Client](https://docs.expo.dev/guides/local-app-development/#local-builds-with-expo-dev-client)
    - [Expo Mono Repos](https://docs.expo.dev/guides/monorepos/)
    - [Expo Plugin and mods](https://docs.expo.dev/config-plugins/plugins-and-mods/)
- IDEs
    - [Visual Studio Code](https://code.visualstudio.com/download)
    - [IntelliJ IDEA](https://www.jetbrains.com/idea/download/)
- iOS Development
    - A modern Mac 
    - [XCode 15](https://developer.apple.com/xcode/) or higher installed and working 
    - [iOS 13 or higher].  Any apps using the plugin must be upgraded to iOS 13 or higher.
    - [XCode Command Line Tools](https://developer.apple.com/download/more/) installed 
    - [Simulators](https://developer.apple.com/documentation/safari-developer-tools/installing-xcode-and-simulators) downloaded and working
    - [Homebrew](https://brew.sh/) 
    - [Cocopods](https://formulae.brew.sh/formula/cocoapods)
    - A valid Apple Developer account and certificates installed and working
- Android Development
    - [API 23 (Android 6)] or higher.  Any apps using the plugin must be upgraded to API 23 or higher.  Any older versions of Android are not supported by React Native and Expo.
    - [Android Studio](https://developer.android.com/studio?gad_source=1&gclid=CjwKCAjwzN-vBhAkEiwAYiO7oALYfxbMYW_zkuYoacS9TX16aItdvLYe6GB7_j1QwvXBjFDRkawfUBoComcQAvD_BwE&gclsrc=aw.ds) installed and working
    - Android SDK 34 >= installed and working (with command line tools)
    - Java SDK v17 installed and configured to work with Android Studio
    - An Android Emulator downloaded and working 