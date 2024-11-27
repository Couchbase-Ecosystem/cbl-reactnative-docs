"use strict";(self.webpackChunkcbl_reactnative=self.webpackChunkcbl_reactnative||[]).push([[8841],{5693:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"StartHere/install","title":"Install","description":"This Native Module is currently under active development.  If you find problems, please open an issue on the GitHub repo.","source":"@site/docs/StartHere/install.md","sourceDirName":"StartHere","slug":"/StartHere/install","permalink":"/StartHere/install","draft":false,"unlisted":false,"editUrl":"https://github.com/Couchbase-Ecosystem/cbl-reactnative-docs/docs/StartHere/install.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"install","sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Prerequisites","permalink":"/StartHere/prerequisites"},"next":{"title":"Build and Run","permalink":"/StartHere/build-run"}}');var a=t(4848),o=t(8453);const s={id:"install",sidebar_position:2},r="Install",d={},l=[{value:"Get Started",id:"get-started",level:2},{value:"React Native Based Apps",id:"react-native-based-apps",level:3},{value:"iOS",id:"ios",level:4},{value:"Android",id:"android",level:4},{value:"Running the App",id:"running-the-app",level:4},{value:"Expo Based Apps",id:"expo-based-apps",level:3},{value:"Register the Module/CBLReactNativeEngine",id:"register-the-modulecblreactnativeengine",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"install",children:"Install"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["This Native Module is currently under active development.  If you find problems, please open an issue on the ",(0,a.jsx)(n.a,{href:"https://github.com/Couchbase-Ecosystem/cbl-reactnative/issues",children:"GitHub repo"}),"."]})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["The version of this Native Module is based on supporting Couchbase Lite Enterprise for iOS and Android.  This Native Module is not compatible with Couchbase Lite Community Edition.  A ",(0,a.jsx)(n.a,{href:"https://www.couchbase.com/pricing/",children:"license"})," is required to use Couchbase Lite Enterprise edition."]})}),"\n",(0,a.jsx)(n.h2,{id:"get-started",children:"Get Started"}),"\n",(0,a.jsx)(n.p,{children:"The setup for using the Couchbase Lite React Native Native Module is a bit more involved than a typical React Native project.  This is because the Native Module is a wrapper around the Couchbase Lite SDKs for iOS and Android.  The Couchbase Lite SDKs are written in Swift and Kotlin, respectively, and are not directly compatible with JavaScript.  The Native Module provides a bridge between the two languages."}),"\n",(0,a.jsx)(n.p,{children:"The installation for the Native Module is provided in two sections:  one section for standard React Native apps and one for Expo based apps."}),"\n",(0,a.jsx)(n.h3,{id:"react-native-based-apps",children:"React Native Based Apps"}),"\n",(0,a.jsxs)(n.p,{children:["To use the Couchbase Lite React Native Native Module in a standard React Native app, you will need to install the npm package.  From the root of your applications project directory (the directory containing your ",(0,a.jsx)(n.code,{children:"package.json"})," file), run the following command:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install cbl-reactnative\n"})}),"\n",(0,a.jsx)(n.p,{children:"Once installed, you will want to build each native project (iOS and Android) to link the native module to your project."}),"\n",(0,a.jsx)(n.h4,{id:"ios",children:"iOS"}),"\n",(0,a.jsx)(n.p,{children:"The Cocoapods for iOS need to be installed in order for the application to build"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cd ios\npod install\ncd ..\n"})}),"\n",(0,a.jsx)(n.h4,{id:"android",children:"Android"}),"\n",(0,a.jsx)(n.p,{children:"In the current beta release, the Android Gradle file needs to be updated manually to include the native module.  This can be done by editing the build.gradle file in the android directory of your React native app and adding the following line below the apply plugin line for the com.facebook.react.rootproject:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'apply from: "../node_modules/cbl-reactnative/android/build.gradle"\n'})}),"\n",(0,a.jsx)(n.p,{children:"when completed the last two lines of the file should look something like this:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'apply plugin: "com.facebook.react.rootproject"\napply from: "../node_modules/cbl-reactnative/android/build.gradle"\n'})}),"\n",(0,a.jsx)(n.p,{children:"Now you can install the gradle dependencies and build the Android project:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cd android\n./gradlew clean\n"})}),"\n",(0,a.jsx)(n.p,{children:"From there you can do a clean build of the Android project:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"./gradlew assembleDebug\ncd ..\n"})}),"\n",(0,a.jsx)(n.p,{children:"Note that Android builds can take a while to complete the first time due to downloading all the gradle pacakges required to build the application.  Subsequent builds will be faster."}),"\n",(0,a.jsx)(n.h4,{id:"running-the-app",children:"Running the App"}),"\n",(0,a.jsx)(n.p,{children:"Finall you can run your app like you have before installing the package:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm run start\n"})}),"\n",(0,a.jsx)(n.h3,{id:"expo-based-apps",children:"Expo Based Apps"}),"\n",(0,a.jsxs)(n.p,{children:["For developers using Expo, you must make sure you have the dev-client installed in your app. Expo Go is not compatible with custom React Native Native Module.  To install the dev-client, review the ",(0,a.jsx)(n.a,{href:"https://docs.expo.dev/develop/development-builds/introduction/#what-is-expo-dev-client",children:"Expo documentation"})," along with the ",(0,a.jsx)(n.a,{href:"https://docs.expo.dev/guides/local-app-development/",children:"Local App develompent documentation"}),".   These directions assume dev-client is setup and you can build locally your app on iOS and Android."]}),"\n",(0,a.jsx)(n.p,{children:"The expo environment dynamically builds both the Cocoapod file for iOS and Gradle file for Android.  Because of this you will need to register the cbl-reactnative package with the expo environment via the Expo plugin api."}),"\n",(0,a.jsxs)(n.p,{children:["This can be done by creating a new file in the root of your project called ",(0,a.jsx)(n.code,{children:"plugin.config.js"})," and adding the following code:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const {\n  withProjectBuildGradle,\n  withXcodeProject,\n  withPodfileProperties,\n} = require('@expo/config-plugins');\n\n// Function to modify Android build.gradle\nfunction modifyAndroidBuildGradle(config) {\n  const lineToAdd = ` apply from: \"../node_modules/cbl-reactnative/android/build.gradle\"`;\n  if (!config.modResults.contents.includes(lineToAdd)) {\n    config.modResults.contents += `\\n${lineToAdd}`;\n    console.debug(config.modResults.contents);\n  }\n  return config;\n}\n\n// Function to modify iOS Xcode project\nfunction modifyXcodeProject(config) {\n  const xcodeProject = config.modResults;\n  // Example modification: adding a build phase for a script\n  // xcodeProject.addBuildPhase([], 'PBXShellScriptBuildPhase', 'Run Script', null, script);\n  return config;\n}\n\n// Function to modify Podfile properties to include the native module podspec\nfunction includeNativeModulePod(config) {\n  return withPodfileProperties(config, async (podConfig) => {\n    const podspecPath = `../node_modules/cbl-reactnative/cbl-reactnative.podspec`;\n    if (podConfig.modResults.podfileProperties !== undefined && podConfig.modResults.podfileProperties.pod !== undefined) {\n      podConfig.modResults.podfileProperties.pod(\n          `'cbl-reactnative', :path => '${podspecPath}'`\n      );\n    }\n    return podConfig;\n  });\n}\n\nmodule.exports = (config) => {\n  config = withProjectBuildGradle(config, (gradleConfig) => {\n    return modifyAndroidBuildGradle(gradleConfig);\n  });\n  config = withXcodeProject(config, (xcodeConfig) => {\n    return modifyXcodeProject(xcodeConfig);\n  });\n  config = includeNativeModulePod(config);\n  return config;\n};\n"})}),"\n",(0,a.jsx)(n.p,{children:"Save this file.  Now you can register this file in your app.json file by adding the following line:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"./plugin.config.js"})}),"\n",(0,a.jsxs)(n.p,{children:["When completed, the ",(0,a.jsx)(n.code,{children:"expo"})," section of your app.json file should look something like this:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "expo": {\n\t"plugins": [\n\t  "expo-router",\n\t  "./plugin.config.js"\n\t]\n  }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"You can now build your expo app locally on iOS and Android.  The native module will be included in the build."}),"\n",(0,a.jsx)(n.p,{children:"iOS:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npx expo run:ios \n"})}),"\n",(0,a.jsx)(n.p,{children:"Android:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npx expo run:android \n"})}),"\n",(0,a.jsx)(n.h2,{id:"register-the-modulecblreactnativeengine",children:"Register the Module/CBLReactNativeEngine"}),"\n",(0,a.jsxs)(n.p,{children:["The final step in setting up the Couchbase Lite React Native Native Module is to register the module with the React Native environment.  The ",(0,a.jsx)(n.a,{href:"https://react.dev/reference/react/createContext",children:"context and provider"})," pattern is the recommended approach for registering the module.  This is done by wrapping the root component of your application with a ",(0,a.jsx)(n.code,{children:"DatabaseProvider"})," component that you create.  This component will provide the Couchbase Lite React Native Native Module to the rest of your application.  Your provider can then be used to create a ",(0,a.jsx)(n.code,{children:"Database"})," object that can be used to interact with the Couchbase Lite database.  This must be done regarless of whether your app uses React Native or Expo."]}),"\n",(0,a.jsxs)(n.p,{children:["An example of this pattern can be found in the Expo Example app in ",(0,a.jsx)(n.a,{href:"https://github.com/couchbase-examples/expo-cbl-travel/tree/main/providers",children:"this repository"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["The example app provides a ",(0,a.jsx)(n.a,{href:"https://github.com/couchbase-examples/expo-cbl-travel/blob/main/services/database.service.ts",children:"DatabaseService"})," class that manages the database connection and provides methods for interacting with the database."]}),"\n",(0,a.jsxs)(n.p,{children:["Note that the ",(0,a.jsx)(n.code,{children:"DatabaseService"})," class registers the CblReactNative engine in the constructor.  This must be done once in your application and is recommended to be done in a singleton like this class to ensure that the engine is only registered once."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"export class DatabaseService {\n    private database: Database | undefined;\n    private replicator: Replicator | undefined;\n    private engine: CblReactNativeEngine | undefined;\n\n    constructor() {\n        //must create a new engine to use the SDK in a React Native environment\n        //this must only be done once for the entire app.  This will be implemented as singleton, so it's Ok here.\n        this.engine = new CblReactNativeEngine();\n    }\n\t....\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.a,{href:"https://github.com/couchbase-examples/expo-cbl-travel/blob/main/providers/DatabaseProvider.tsx",children:"DatabaseProvider"})," component is then used to wrap the root component of the application.  This component provides the ",(0,a.jsx)(n.code,{children:"DatabaseService"})," to the rest of the application.  It's also a good place to initialize the database and do other tasks like this."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"const DatabaseProvider: React.FC<DatabaseProviderProps> = ({children}) => {\n    const dbService = new DatabaseService();\n    const [databaseService, setDatabaseService] = useState<DatabaseService>(dbService);\n\n    useEffect(() => {\n        const initializeDatabase = async () => {\n            await dbService.initializeDatabase();\n        };\n\t\t//if error should write to custom log file \n        initializeDatabase().then().catch(e => console.error(e));\n    }, [dbService]);\n\n    const databaseServiceValue = useMemo(() => ({databaseService, setDatabaseService}), [databaseService, setDatabaseService]);\n    return (\n        <DatabaseContext.Provider value={databaseServiceValue}>\n            {children}\n        </DatabaseContext.Provider>\n    );\n\t...\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Finally, the provider should be used in the root component of the application.  In modern Expo apps this is usually done in the ",(0,a.jsx)(n.a,{href:"https://github.com/couchbase-examples/expo-cbl-travel/blob/main/app/_layout.tsx#L29C4-L37C7",children:"app/_layout.tsx"})," file."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:" return (\n        <DatabaseProvider>\n            <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>\n                <Stack>\n                    <Stack.Screen name=\"(tabs)\" options={{headerShown: false}}/>\n                </Stack>\n            </ThemeProvider>\n        </DatabaseProvider>\n    );\n"})}),"\n",(0,a.jsx)(n.p,{children:"In React Native apps, this is done usually the App.tsx file."})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var i=t(6540);const a={},o=i.createContext(a);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);