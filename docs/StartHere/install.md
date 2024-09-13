---
id: install
sidebar_position: 2
---
# Install

 :::note
This Native Module is currently under active development.  If you find problems, please open an issue on the [GitHub repo](https://github.com/Couchbase-Ecosystem/cbl-reactnative/issues).
 :::

:::note
The version of this Native Module is based on supporting Couchbase Lite Enterprise for iOS and Android.  This Native Module is not compatible with Couchbase Lite Community Edition.  A [license](https://www.couchbase.com/pricing/) is required to use Couchbase Lite Enterprise edition.
:::

## Get Started

The setup for using the Couchbase Lite React Native Native Module is a bit more involved than a typical React Native project.  This is because the Native Module is a wrapper around the Couchbase Lite SDKs for iOS and Android.  The Couchbase Lite SDKs are written in Swift and Kotlin, respectively, and are not directly compatible with JavaScript.  The Native Module provides a bridge between the two languages.

The installation for the Native Module is provided in two sections:  one section for standard React Native apps and one for Expo based apps.

### React Native Based Apps 

To use the Couchbase Lite React Native Native Module in a standard React Native app, you will need to install the npm package.  From the root of your applications project directory (the directory containing your `package.json` file), run the following command:

```bash
npm install cbl-reactnative
```

Once installed, you will want to build each native project (iOS and Android) to link the native module to your project.  

#### iOS

The Cocoapods for iOS need to be installed in order for the application to build

```bash
cd ios
pod install
cd ..
```

#### Android

In the current beta release, the Android Gradle file needs to be updated manually to include the native module.  This can be done by editing the build.gradle file in the android directory of your React native app and adding the following line below the apply plugin line for the com.facebook.react.rootproject:

```kotlin
apply from: "../node_modules/cbl-reactnative/android/build.gradle"
```

when completed the last two lines of the file should look something like this:

```kotlin
apply plugin: "com.facebook.react.rootproject"
apply from: "../node_modules/cbl-reactnative/android/build.gradle"
```

Now you can install the gradle dependencies and build the Android project:

```bash
cd android
./gradlew clean
```

From there you can do a clean build of the Android project:

```bash
./gradlew assembleDebug
cd ..
```

Note that Android builds can take a while to complete the first time due to downloading all the gradle pacakges required to build the application.  Subsequent builds will be faster.

#### Running the App

Finall you can run your app like you have before installing the package:

```bash
npm run start
```

### Expo Based Apps 

For developers using Expo, you must make sure you have the dev-client installed in your app. Expo Go is not compatible with custom React Native Native Module.  To install the dev-client, review the [Expo documentation](https://docs.expo.dev/develop/development-builds/introduction/#what-is-expo-dev-client) along with the [Local App develompent documentation](https://docs.expo.dev/guides/local-app-development/).   These directions assume dev-client is setup and you can build locally your app on iOS and Android.

The expo environment dynamically builds both the Cocoapod file for iOS and Gradle file for Android.  Because of this you will need to register the cbl-reactnative package with the expo environment via the Expo plugin api. 

This can be done by creating a new file in the root of your project called `plugin.config.js` and adding the following code:

```javascript
const {
  withProjectBuildGradle,
  withXcodeProject,
  withPodfileProperties,
} = require('@expo/config-plugins');

// Function to modify Android build.gradle
function modifyAndroidBuildGradle(config) {
  const lineToAdd = ` apply from: "../node_modules/cbl-reactnative/android/build.gradle"`;
  if (!config.modResults.contents.includes(lineToAdd)) {
    config.modResults.contents += `\n${lineToAdd}`;
    console.debug(config.modResults.contents);
  }
  return config;
}

// Function to modify iOS Xcode project
function modifyXcodeProject(config) {
  const xcodeProject = config.modResults;
  // Example modification: adding a build phase for a script
  // xcodeProject.addBuildPhase([], 'PBXShellScriptBuildPhase', 'Run Script', null, script);
  return config;
}

// Function to modify Podfile properties to include the native module podspec
function includeNativeModulePod(config) {
  return withPodfileProperties(config, async (podConfig) => {
    const podspecPath = `../node_modules/cbl-reactnative/cbl-reactnative.podspec`;
    if (podConfig.modResults.podfileProperties !== undefined && podConfig.modResults.podfileProperties.pod !== undefined) {
      podConfig.modResults.podfileProperties.pod(
          `'cbl-reactnative', :path => '${podspecPath}'`
      );
    }
    return podConfig;
  });
}

module.exports = (config) => {
  config = withProjectBuildGradle(config, (gradleConfig) => {
    return modifyAndroidBuildGradle(gradleConfig);
  });
  config = withXcodeProject(config, (xcodeConfig) => {
    return modifyXcodeProject(xcodeConfig);
  });
  config = includeNativeModulePod(config);
  return config;
};
```

Save this file.  Now you can register this file in your app.json file by adding the following line:

`./plugin.config.js`

When completed, the `expo` section of your app.json file should look something like this:

```json
{
  "expo": {
	"plugins": [
	  "expo-router",
	  "./plugin.config.js"
	]
  }
}
```

You can now build your expo app locally on iOS and Android.  The native module will be included in the build.

iOS:
```bash
npx expo run:ios 
```

Android:
```bash
npx expo run:android 
```
## Register the Module/CBLReactNativeEngine

The final step in setting up the Couchbase Lite React Native Native Module is to register the module with the React Native environment.  The [context and provider](https://react.dev/reference/react/createContext) pattern is the recommended approach for registering the module.  This is done by wrapping the root component of your application with a `DatabaseProvider` component that you create.  This component will provide the Couchbase Lite React Native Native Module to the rest of your application.  Your provider can then be used to create a `Database` object that can be used to interact with the Couchbase Lite database.  This must be done regarless of whether your app uses React Native or Expo.

An example of this pattern can be found in the Expo Example app in [this repository](https://github.com/couchbase-examples/expo-cbl-travel/tree/main/providers).

The example app provides a [DatabaseService](https://github.com/couchbase-examples/expo-cbl-travel/blob/main/services/database.service.ts) class that manages the database connection and provides methods for interacting with the database. 

Note that the `DatabaseService` class registers the CblReactNative engine in the constructor.  This must be done once in your application and is recommended to be done in a singleton like this class to ensure that the engine is only registered once.

```typescript
export class DatabaseService {
    private database: Database | undefined;
    private replicator: Replicator | undefined;
    private engine: CblReactNativeEngine | undefined;

    constructor() {
        //must create a new engine to use the SDK in a React Native environment
        //this must only be done once for the entire app.  This will be implemented as singleton, so it's Ok here.
        this.engine = new CblReactNativeEngine();
    }
	....
```

The [DatabaseProvider](https://github.com/couchbase-examples/expo-cbl-travel/blob/main/providers/DatabaseProvider.tsx) component is then used to wrap the root component of the application.  This component provides the `DatabaseService` to the rest of the application.  It's also a good place to initialize the database and do other tasks like this. 

```typescript
const DatabaseProvider: React.FC<DatabaseProviderProps> = ({children}) => {
    const dbService = new DatabaseService();
    const [databaseService, setDatabaseService] = useState<DatabaseService>(dbService);

    useEffect(() => {
        const initializeDatabase = async () => {
            await dbService.initializeDatabase();
        };
		//if error should write to custom log file 
        initializeDatabase().then().catch(e => console.error(e));
    }, [dbService]);

    const databaseServiceValue = useMemo(() => ({databaseService, setDatabaseService}), [databaseService, setDatabaseService]);
    return (
        <DatabaseContext.Provider value={databaseServiceValue}>
            {children}
        </DatabaseContext.Provider>
    );
	...
```

Finally, the provider should be used in the root component of the application.  In modern Expo apps this is usually done in the [app/_layout.tsx](https://github.com/couchbase-examples/expo-cbl-travel/blob/main/app/_layout.tsx#L29C4-L37C7) file. 

```typescript
 return (
        <DatabaseProvider>
            <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
                <Stack>
                    <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
                </Stack>
            </ThemeProvider>
        </DatabaseProvider>
    );
```

In React Native apps, this is done usually the App.tsx file.
