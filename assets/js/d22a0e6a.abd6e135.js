"use strict";(self.webpackChunkcbl_reactnative=self.webpackChunkcbl_reactnative||[]).push([[2184],{1048:(i,e,I)=>{I.r(e),I.d(e,{assets:()=>l,contentTitle:()=>n,default:()=>b,frontMatter:()=>t,metadata:()=>c,toc:()=>M});var a=I(4848),s=I(8453);const t={id:"databases",sidebar_position:4},n="Databases",c={id:"databases",title:"Databases",description:"Description \u2014 Working with Couchbase Lite Databases",source:"@site/docs/databases.md",sourceDirName:".",slug:"/databases",permalink:"/databases",draft:!1,unlisted:!1,editUrl:"https://github.com/Couchbase-Ecosystem/cbl-reactnative-docs/docs/databases.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"databases",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Build and Run",permalink:"/StartHere/build-run"},next:{title:"Pre-built Database",permalink:"/database-prebuilt"}},l={},M=[{value:"Database Concepts",id:"database-concepts",level:2},{value:"Storing local configuration",id:"storing-local-configuration",level:3},{value:"Managing Couchbase Lite Databases in React Native",id:"managing-couchbase-lite-databases-in-react-native",level:2},{value:"Initializing the Environment",id:"initializing-the-environment",level:3},{value:"Create or Open a Database",id:"create-or-open-a-database",level:3},{value:"Closing a Database",id:"closing-a-database",level:3},{value:"Database Encryption",id:"database-encryption",level:2},{value:"Enabling",id:"enabling",level:3},{value:"Persisting",id:"persisting",level:3},{value:"Opening",id:"opening",level:3},{value:"Database Maintenance",id:"database-maintenance",level:2},{value:"Command Line Tool",id:"command-line-tool",level:2},{value:"Couchbase Lite for VSCode",id:"couchbase-lite-for-vscode",level:2},{value:"Couchbase Lite for JetBrains",id:"couchbase-lite-for-jetbrains",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}];function d(i){const e={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...i.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"databases",children:"Databases"}),"\n",(0,a.jsxs)(e.blockquote,{children:["\n",(0,a.jsxs)(e.p,{children:["Description \u2014 ",(0,a.jsx)(e.em,{children:"Working with Couchbase Lite Databases"}),(0,a.jsx)(e.br,{}),"\n","Related Content \u2014 ",(0,a.jsx)(e.a,{href:"/blobs",children:"Blobs"})," | ",(0,a.jsx)(e.a,{href:"/documents",children:"Documents"})," | ",(0,a.jsx)(e.a,{href:"indexing.md",children:"Indexing"})]}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"database-concepts",children:"Database Concepts"}),"\n",(0,a.jsx)(e.p,{children:"Databases created on Couchbase Lite can share the same hierarchical structure as Capella databases. This makes it easier to sync data between mobile applications and applications built using Capella."}),"\n",(0,a.jsxs)("div",{align:"center",children:[(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Couchbase Lite Database Hierarchy",src:I(4236).A+"",width:"444",height:"380"})}),(0,a.jsx)(e.p,{children:(0,a.jsx)(e.em,{children:"Figure 1. Couchbase Lite Database Hierarchy"})})]}),"\n",(0,a.jsx)(e.p,{children:"Although the terminology is different, the structure can be mapped to relational database terms:"}),"\n",(0,a.jsx)(e.p,{children:"Table 1. Relational Database \u2192 Couchbase"}),"\n",(0,a.jsxs)(e.table,{children:[(0,a.jsx)(e.thead,{children:(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.th,{children:"Relational database"}),(0,a.jsx)(e.th,{children:"Couchbase"})]})}),(0,a.jsxs)(e.tbody,{children:[(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Database"}),(0,a.jsx)(e.td,{children:"Database"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Schema"}),(0,a.jsx)(e.td,{children:"Scope"})]}),(0,a.jsxs)(e.tr,{children:[(0,a.jsx)(e.td,{children:"Table"}),(0,a.jsx)(e.td,{children:"Collection"})]})]})]}),"\n",(0,a.jsx)(e.p,{children:"This structure gives you plenty of choices when it comes to partitioning your data. The most basic structure is to use the single default scope with a single default collection; or you could opt for a structure that allow you to split your collections into logical scopes."}),"\n",(0,a.jsxs)("div",{align:"center",children:[(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"Couchbase Lite Examples",src:I(7790).A+"",width:"647",height:"321"})}),(0,a.jsx)(e.p,{children:(0,a.jsx)(e.em,{children:"Figure 2. Couchbase Lite Examples"})})]}),"\n",(0,a.jsx)(e.h3,{id:"storing-local-configuration",children:"Storing local configuration"}),"\n",(0,a.jsx)(e.p,{children:"You may not need to sync all the data related to a particular application. You can set up a scope that syncs data, and a second scope that doesn\u2019t. One reason for doing this is to store local configuration data (such as the preferred screen orientation or keyboard layout). Since this information only relates to a particular device, there is no need to sync it:"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"local data scope"})," \u2014 Contains information pertaining to the device."]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.strong,{children:"syncing data scope"})," \u2014 Contains information pertaining to the user, which can be synced back to the cloud for use on the web or another device."]}),"\n"]}),"\n",(0,a.jsx)(e.h2,{id:"managing-couchbase-lite-databases-in-react-native",children:"Managing Couchbase Lite Databases in React Native"}),"\n",(0,a.jsx)(e.h3,{id:"initializing-the-environment",children:"Initializing the Environment"}),"\n",(0,a.jsx)(e.p,{children:"In a React Native application using Couchbase Lite, begin by initializing the React Native Engine. Subsequently, employ a design pattern such as Context/Provider or Service Locator to maintain and access your database instances throughout the application lifecycle."}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Example: Initializing React Native Engine and Database Context"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-typescript",children:"import { CblReactNativeEngine } from 'cbl-reactnative';\n\nconst engine = new CblReactNativeEngine(); // Initialize once, early in your app\n"})}),"\n",(0,a.jsx)(e.p,{children:"This configuration ensures seamless interaction between your React Native app and the underlying native database functionalities, facilitating effective database management."}),"\n",(0,a.jsx)(e.h3,{id:"create-or-open-a-database",children:"Create or Open a Database"}),"\n",(0,a.jsx)(e.p,{children:"To create or open a database, use the Database class from the cbl-reactnative package, specifying the database name and optionally, a DatabaseConfiguration for custom settings like the database directory or encryption."}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Example 1. Creating/Opening a Database"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:"import { Database, DatabaseConfiguration } from 'cbl-reactnative'; //import the package\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:"const config = new DatabaseConfiguration();\nconfig.setDirectory('path/to/database'); // Optional\nconst myDatabase = new Database('myDatabaseName', config);\nawait myDatabase.open();\n"})}),"\n",(0,a.jsx)(e.h3,{id:"closing-a-database",children:"Closing a Database"}),"\n",(0,a.jsx)(e.p,{children:"You are advised to incorporate the closing of all open databases into your application workflow."}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Example 2. Closing a Database"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:"await myDatabase.close();\n"})}),"\n",(0,a.jsx)(e.h2,{id:"database-encryption",children:"Database Encryption"}),"\n",(0,a.jsx)(e.p,{children:"Couchbase Lite includes the ability to encrypt Couchbase Lite databases. This allows mobile applications to secure data at rest, when it is being stored on the device. The algorithm used to encrypt the database is 256-bit AES."}),"\n",(0,a.jsx)(e.h3,{id:"enabling",children:"Enabling"}),"\n",(0,a.jsxs)(e.p,{children:["To enable database encryption in React Native, use the ",(0,a.jsx)(e.code,{children:"DatabaseConfiguration"})," class to set an encryption key before opening or creating a database. This encryption key must be provided every time the database is accessed."]}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Example3. Configure Database Encryption"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-typescript",children:"const dbName = 'my_secure_db';\nconst encryptionKey = 'my_secret_key';\n\nconst config = new DatabaseConfiguration();\nconfig.setEncryptionKey(encryptionKey);\n\nconst db = new Database(dbName, config);\n\nawait db.open();\n"})}),"\n",(0,a.jsx)(e.h3,{id:"persisting",children:"Persisting"}),"\n",(0,a.jsxs)(e.p,{children:["Couchbase Lite does not persist the key. It is the application\u2019s responsibility to manage the key and store it in a platform-specific secure store such as Apples's ",(0,a.jsx)(e.a,{href:"https://developer.apple.com/documentation/security/keychain_services",children:"Keystore"})," or Android\u2019s ",(0,a.jsx)(e.a,{href:"https://developer.android.com/privacy-and-security/keystore",children:"Keystore"}),"."]}),"\n",(0,a.jsx)(e.h3,{id:"opening",children:"Opening"}),"\n",(0,a.jsx)(e.p,{children:"An encrypted database can only be opened with the same language package that was used to encrypt it in the first place. So a database encrypted using the React Native package, and then exported, is readable only by the React Native package."}),"\n",(0,a.jsx)(e.h2,{id:"database-maintenance",children:"Database Maintenance"}),"\n",(0,a.jsx)(e.p,{children:"From time to time it may be necessary to perform certain maintenance activities on your database, for example to compact the database file, removing unused documents and blobs no longer referenced by any documents."}),"\n",(0,a.jsx)(e.p,{children:"Couchbase Lite's API provides the Database.performMaintenance method. The available maintenance operations, including compact are as shown in the enum MaintenanceType to accomplish this."}),"\n",(0,a.jsxs)(e.p,{children:["This is a resource intensive operation and is not performed automatically. It should be run on-demand using the API. For questions or issues, please visit the ",(0,a.jsx)(e.a,{href:"https://www.couchbase.com/forums/",children:"Couchbase Forums"})," where you can ask for help and discuss with the community."]}),"\n",(0,a.jsx)(e.h2,{id:"command-line-tool",children:"Command Line Tool"}),"\n",(0,a.jsx)(e.p,{children:"cblite is a command-line tool for inspecting and querying Couchbase Lite databases."}),"\n",(0,a.jsxs)(e.p,{children:["You can download and build it from the couchbaselabs ",(0,a.jsx)(e.a,{href:"https://github.com/couchbaselabs/couchbase-mobile-tools/blob/master/README.cblite.md",children:"GitHub repository"}),". Note that the cblite tool is not supported by the ",(0,a.jsx)(e.a,{href:"https://www.couchbase.com/support-policy/",children:"Couchbase Support Policy"}),"."]}),"\n",(0,a.jsx)(e.h2,{id:"couchbase-lite-for-vscode",children:"Couchbase Lite for VSCode"}),"\n",(0,a.jsxs)(e.p,{children:["Couchbase Lite for VSCode is a Visual Studio Code extension that provides a user interface for inspecting and querying Couchbase Lite databases. You can find more information about this extension from it's ",(0,a.jsx)(e.a,{href:"https://github.com/couchbaselabs/vscode-cblite",children:"GitHub repository"}),"."]}),"\n",(0,a.jsx)(e.h2,{id:"couchbase-lite-for-jetbrains",children:"Couchbase Lite for JetBrains"}),"\n",(0,a.jsxs)(e.p,{children:["Couchbase Lite for JetBrains is a JetBrains IDE plugin that provides a user interface for inspecting and querying Couchbase Lite databases. You can find more information about this plugin from its ",(0,a.jsx)(e.a,{href:"https://github.com/couchbaselabs/couchbase_jetbrains_plugin",children:"GitHub repository"}),"."]}),"\n",(0,a.jsx)(e.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,a.jsx)(e.p,{children:"You should use console logs as your first source of diagnostic information. If the information in the default logging level is insufficient you can focus it on database errors and generate more verbose messages."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-typescript",children:"try {\n  await db.setLogLevel(LogDomain.DATABASE, LogLevel.VERBOSE);\n  console.log('Database log level set to VERBOSE.');\n} catch (error) {\n  console.error('Setting log level failed:', error);\n}\n"})})]})}function b(i={}){const{wrapper:e}={...(0,s.R)(),...i.components};return e?(0,a.jsx)(e,{...i,children:(0,a.jsx)(d,{...i})}):d(i)}},4236:(i,e,I)=>{I.d(e,{A:()=>a});const a="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBjb250ZW50U2NyaXB0VHlwZT0iYXBwbGljYXRpb24vZWNtYXNjcmlwdCIgY29udGVudFN0eWxlVHlwZT0idGV4dC9jc3MiIGhlaWdodD0iMzgwcHgiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHN0eWxlPSJ3aWR0aDo0NDRweDtoZWlnaHQ6MzgwcHg7YmFja2dyb3VuZDojRkZGRkZGOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNDQ0IDM4MCIgd2lkdGg9IjQ0NHB4IiB6b29tQW5kUGFuPSJtYWduaWZ5Ij48ZGVmcz48ZmlsdGVyIGhlaWdodD0iMzAwJSIgaWQ9ImYxYWg1eXpyN2JiY2w5IiB3aWR0aD0iMzAwJSIgeD0iLTEiIHk9Ii0xIj48ZmVHYXVzc2lhbkJsdXIgcmVzdWx0PSJibHVyT3V0IiBzdGREZXZpYXRpb249IjIuMCIvPjxmZUNvbG9yTWF0cml4IGluPSJibHVyT3V0IiByZXN1bHQ9ImJsdXJPdXQyIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgLjQgMCIvPjxmZU9mZnNldCBkeD0iNC4wIiBkeT0iNC4wIiBpbj0iYmx1ck91dDIiIHJlc3VsdD0iYmx1ck91dDMiLz48ZmVCbGVuZCBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJibHVyT3V0MyIgbW9kZT0ibm9ybWFsIi8+PC9maWx0ZXI+PC9kZWZzPjxnPjwhLS1NRDU9Wzc0Njg0NjdmM2I2YjM5MmYxZDE3NmQ4MjhjNzUzYjc3XQplbnRpdHkgZGItLT48cGF0aCBkPSJNMTM0LDIxLjUgQzEzNCwxMS41IDE3NCwxMS41IDE3NCwxMS41IEMxNzQsMTEuNSAyMTQsMTEuNSAyMTQsMjEuNSBMMjE0LDQ3LjI5OTkgQzIxNCw1Ny4yOTk5IDE3NCw1Ny4yOTk5IDE3NCw1Ny4yOTk5IEMxNzQsNTcuMjk5OSAxMzQsNTcuMjk5OSAxMzQsNDcuMjk5OSBMMTM0LDIxLjUgIiBmaWxsPSIjRkVGRUNFIiBmaWx0ZXI9InVybCgjZjFhaDV5enI3YmJjbDkpIiBzdHlsZT0ic3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNTsiLz48cGF0aCBkPSJNMTM0LDIxLjUgQzEzNCwzMS41IDE3NCwzMS41IDE3NCwzMS41IEMxNzQsMzEuNSAyMTQsMzEuNSAyMTQsMjEuNSAiIGZpbGw9Im5vbmUiIHN0eWxlPSJzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41OyIvPjx0ZXh0IGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBsZW5ndGhBZGp1c3Q9InNwYWNpbmciIHRleHRMZW5ndGg9IjYwIiB4PSIxNDQiIHk9IjQ5LjQ5OTkiPkRhdGFiYXNlPC90ZXh0PjwhLS1NRDU9W2M4YTFmMDU0ZDQwNGRmMGE2NWZjMjVjZjdmYmVkMzZiXQplbnRpdHkgc2NvcGUtLT48cmVjdCBmaWxsPSIjRkVGRUNFIiBmaWx0ZXI9InVybCgjZjFhaDV5enI3YmJjbDkpIiBoZWlnaHQ9IjM2Ljc5OTkiIHN0eWxlPSJzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41OyIgd2lkdGg9IjU4IiB4PSIxNDUiIHk9IjEyMyIvPjx0ZXh0IGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBsZW5ndGhBZGp1c3Q9InNwYWNpbmciIHRleHRMZW5ndGg9IjM4IiB4PSIxNTUiIHk9IjE0Ni45OTk5Ij5TY29wZTwvdGV4dD48IS0tTUQ1PVtlODE0NDAwOTI1MGZlZmE4ZGU3YWIxN2U4ZmUyMDM4MF0KZW50aXR5IGNvbGxlY3Rpb24tLT48cG9seWdvbiBmaWxsPSIjRkVGRUNFIiBmaWx0ZXI9InVybCgjZjFhaDV5enI3YmJjbDkpIiBwb2ludHM9IjEyOS41LDIyMSwxNzUuNSwyMjEsMTgyLjUsMjQyLDIxOC41LDI0MiwyMTguNSwyNzUuNzk5OSwxMjkuNSwyNzUuNzk5OSwxMjkuNSwyMjEiIHN0eWxlPSJzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41OyIvPjxsaW5lIHN0eWxlPSJzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41OyIgeDE9IjEyOS41IiB4Mj0iMTgyLjUiIHkxPSIyNDIiIHkyPSIyNDIiLz48dGV4dCBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgbGVuZ3RoQWRqdXN0PSJzcGFjaW5nIiB0ZXh0TGVuZ3RoPSI1OSIgeD0iMTM5LjUiIHk9IjI2Mi45OTk5Ij5Db2xsZWN0aW9uPC90ZXh0PjwhLS1NRDU9W2FiMWU1YmFmODVlZDE0M2I3NmQzZTc2YTQ4MDc4YmVkXQplbnRpdHkgZG9jdW1lbnQxLS0+PHBvbHlnb24gZmlsbD0iI0ZFRkVDRSIgZmlsdGVyPSJ1cmwoI2YxYWg1eXpyN2JiY2w5KSIgcG9pbnRzPSIxNiwzMzcsMTYsMzczLjc5OTksOTgsMzczLjc5OTksOTgsMzQ3LDg4LDMzNywxNiwzMzciIHN0eWxlPSJzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41OyIvPjxwYXRoIGQ9Ik04OCwzMzcgTDg4LDM0NyBMOTgsMzQ3ICIgZmlsbD0iI0ZFRkVDRSIgc3R5bGU9InN0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjU7Ii8+PHRleHQgZmlsbD0iIzAwMDAwMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGxlbmd0aEFkanVzdD0ic3BhY2luZyIgdGV4dExlbmd0aD0iNjIiIHg9IjI2IiB5PSIzNjAuOTk5OSI+RG9jdW1lbnQ8L3RleHQ+PCEtLU1ENT1bZGQxYmViZmE4NGUyNDg4YjMxMjc4ODVjNWI0MWUzMjhdCmVudGl0eSBkb2N1bWVudDItLT48cG9seWdvbiBmaWxsPSIjRkVGRUNFIiBmaWx0ZXI9InVybCgjZjFhaDV5enI3YmJjbDkpIiBwb2ludHM9IjEzMywzMzcsMTMzLDM3My43OTk5LDIxNSwzNzMuNzk5OSwyMTUsMzQ3LDIwNSwzMzcsMTMzLDMzNyIgc3R5bGU9InN0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjU7Ii8+PHBhdGggZD0iTTIwNSwzMzcgTDIwNSwzNDcgTDIxNSwzNDcgIiBmaWxsPSIjRkVGRUNFIiBzdHlsZT0ic3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNTsiLz48dGV4dCBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgbGVuZ3RoQWRqdXN0PSJzcGFjaW5nIiB0ZXh0TGVuZ3RoPSI2MiIgeD0iMTQzIiB5PSIzNjAuOTk5OSI+RG9jdW1lbnQ8L3RleHQ+PCEtLU1ENT1bYTA1Yjc2ODE2YjZmYzNhYmQzOWU0MzYyNjFlNzViNGNdCmVudGl0eSBkb2N1bWVudDMtLT48cG9seWdvbiBmaWxsPSIjRkVGRUNFIiBmaWx0ZXI9InVybCgjZjFhaDV5enI3YmJjbDkpIiBwb2ludHM9IjI1MCwzMzcsMjUwLDM3My43OTk5LDMzMiwzNzMuNzk5OSwzMzIsMzQ3LDMyMiwzMzcsMjUwLDMzNyIgc3R5bGU9InN0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjU7Ii8+PHBhdGggZD0iTTMyMiwzMzcgTDMyMiwzNDcgTDMzMiwzNDcgIiBmaWxsPSIjRkVGRUNFIiBzdHlsZT0ic3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNTsiLz48dGV4dCBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgbGVuZ3RoQWRqdXN0PSJzcGFjaW5nIiB0ZXh0TGVuZ3RoPSI2MiIgeD0iMjYwIiB5PSIzNjAuOTk5OSI+RG9jdW1lbnQ8L3RleHQ+PHBhdGggZD0iTTI1NCwyMjAgTDI1NCwyNDQuNSBMMjE4LjgyLDI0OC41IEwyNTQsMjUyLjUgTDI1NCwyNzYuOCBBMCwwIDAgMCAwIDI1NCwyNzYuOCBMNDM0LDI3Ni44IEEwLDAgMCAwIDAgNDM0LDI3Ni44IEw0MzQsMjMwIEw0MjQsMjIwIEwyNTQsMjIwIEEwLDAgMCAwIDAgMjU0LDIyMCAiIGZpbGw9IiNGQkZCNzciIGZpbHRlcj0idXJsKCNmMWFoNXl6cjdiYmNsOSkiIHN0eWxlPSJzdHJva2U6I0E4MDAzNjtzdHJva2Utd2lkdGg6MS4wOyIvPjxwYXRoIGQ9Ik00MjQsMjIwIEw0MjQsMjMwIEw0MzQsMjMwIEw0MjQsMjIwICIgZmlsbD0iI0ZCRkI3NyIgc3R5bGU9InN0cm9rZTojQTgwMDM2O3N0cm9rZS13aWR0aDoxLjA7Ii8+PHRleHQgZmlsbD0iIzAwMDAwMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGxlbmd0aEFkanVzdD0ic3BhY2luZyIgdGV4dExlbmd0aD0iMCIgeD0iMjYzIiB5PSIyMzgiLz48dGV4dCBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgbGVuZ3RoQWRqdXN0PSJzcGFjaW5nIiB0ZXh0TGVuZ3RoPSIxNTkiIHg9IjI2MCIgeT0iMjUzLjYiPk1heGltdW0gb2YgMTAwMCBwZXIgc2NvcGU8L3RleHQ+PHRleHQgZmlsbD0iIzAwMDAwMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGxlbmd0aEFkanVzdD0ic3BhY2luZyIgdGV4dExlbmd0aD0iMCIgeD0iMjYzIiB5PSIyNjkuMiIvPjxwYXRoIGQ9Ik0yNDksNiBMMjQ5LDMwLjUgTDIxNC4wMywzNC41IEwyNDksMzguNSBMMjQ5LDYyLjggQTAsMCAwIDAgMCAyNDksNjIuOCBMNDM1LDYyLjggQTAsMCAwIDAgMCA0MzUsNjIuOCBMNDM1LDE2IEw0MjUsNiBMMjQ5LDYgQTAsMCAwIDAgMCAyNDksNiAiIGZpbGw9IiNGQkZCNzciIGZpbHRlcj0idXJsKCNmMWFoNXl6cjdiYmNsOSkiIHN0eWxlPSJzdHJva2U6I0E4MDAzNjtzdHJva2Utd2lkdGg6MS4wOyIvPjxwYXRoIGQ9Ik00MjUsNiBMNDI1LDE2IEw0MzUsMTYgTDQyNSw2ICIgZmlsbD0iI0ZCRkI3NyIgc3R5bGU9InN0cm9rZTojQTgwMDM2O3N0cm9rZS13aWR0aDoxLjA7Ii8+PHRleHQgZmlsbD0iIzAwMDAwMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTMiIGxlbmd0aEFkanVzdD0ic3BhY2luZyIgdGV4dExlbmd0aD0iMCIgeD0iMjU4IiB5PSIyNCIvPjx0ZXh0IGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBsZW5ndGhBZGp1c3Q9InNwYWNpbmciIHRleHRMZW5ndGg9IjE2NSIgeD0iMjU1IiB5PSIzOS42Ij5PbmUgZGF0YWJhc2UgcGVyIGFwcGxpY2F0aW9uPC90ZXh0Pjx0ZXh0IGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBsZW5ndGhBZGp1c3Q9InNwYWNpbmciIHRleHRMZW5ndGg9IjAiIHg9IjI1OCIgeT0iNTUuMiIvPjwhLS1NRDU9W2UyOTM4MDhjMDc4NGZjY2NlMDFkZDIzOGI2NjcxZjYyXQpsaW5rIGRiIHRvIHNjb3BlLS0+PHBhdGggZD0iTTE3NCw1Ny41MSBDMTc0LDc1LjA2IDE3NCw5OS41NiAxNzQsMTE3LjM5ICIgZmlsbD0ibm9uZSIgaWQ9ImRiLXRvLXNjb3BlIiBzdHlsZT0ic3Ryb2tlOiNBODAwMzY7c3Ryb2tlLXdpZHRoOjEuMDsiLz48cG9seWdvbiBmaWxsPSIjQTgwMDM2IiBwb2ludHM9IjE3NCwxMjIuNywxNzgsMTEzLjcsMTc0LDExNy43LDE3MCwxMTMuNywxNzQsMTIyLjciIHN0eWxlPSJzdHJva2U6I0E4MDAzNjtzdHJva2Utd2lkdGg6MS4wOyIvPjwhLS1NRDU9W2JkOTViMmQ2MGI4M2IzOGQ3NjE4ZjJhYjBhYTkzOTNjXQpsaW5rIHNjb3BlIHRvIGNvbGxlY3Rpb24tLT48cGF0aCBkPSJNMTc0LDE2MC4zMSBDMTc0LDE3NS41IDE3NCwxOTcuNyAxNzQsMjE1LjkgIiBmaWxsPSJub25lIiBpZD0ic2NvcGUtdG8tY29sbGVjdGlvbiIgc3R5bGU9InN0cm9rZTojQTgwMDM2O3N0cm9rZS13aWR0aDoxLjA7Ii8+PHBvbHlnb24gZmlsbD0iI0E4MDAzNiIgcG9pbnRzPSIxNzQsMjIwLjkyLDE3OC4wMjU3LDIxMS45MzE1LDE3NC4wMTQzLDIxNS45MiwxNzAuMDI1NywyMTEuOTA4NiwxNzQsMjIwLjkyIiBzdHlsZT0ic3Ryb2tlOiNBODAwMzY7c3Ryb2tlLXdpZHRoOjEuMDsiLz48IS0tTUQ1PVthYjQzYTFmNjAwYmZiODliOWM1MTIxYjM2MDJkYTUxNF0KbGluayBjb2xsZWN0aW9uIHRvIGRvY3VtZW50MS0tPjxwYXRoIGQ9Ik0xNDQuMTcsMjc2LjI3IEMxMjQuNTMsMjkzLjg5IDk5LjE3LDMxNi42NiA4MC44NywzMzMuMDggIiBmaWxsPSJub25lIiBpZD0iY29sbGVjdGlvbi10by1kb2N1bWVudDEiIHN0eWxlPSJzdHJva2U6I0E4MDAzNjtzdHJva2Utd2lkdGg6MS4wOyIvPjxwb2x5Z29uIGZpbGw9IiNBODAwMzYiIHBvaW50cz0iNzYuODQsMzM2LjY5LDg2LjIxMiwzMzMuNjYyNCw4MC41NjM2LDMzMy4zNTMxLDgwLjg3MjksMzI3LjcwNDcsNzYuODQsMzM2LjY5IiBzdHlsZT0ic3Ryb2tlOiNBODAwMzY7c3Ryb2tlLXdpZHRoOjEuMDsiLz48IS0tTUQ1PVs5M2Y4YzljYjUwNDZlYmQ4N2QzMDU5NDk4YWY2MTU1OF0KbGluayBjb2xsZWN0aW9uIHRvIGRvY3VtZW50Mi0tPjxwYXRoIGQ9Ik0xNzQsMjc2LjI3IEMxNzQsMjkzLjMgMTc0LDMxNS4xMyAxNzQsMzMxLjQgIiBmaWxsPSJub25lIiBpZD0iY29sbGVjdGlvbi10by1kb2N1bWVudDIiIHN0eWxlPSJzdHJva2U6I0E4MDAzNjtzdHJva2Utd2lkdGg6MS4wOyIvPjxwb2x5Z29uIGZpbGw9IiNBODAwMzYiIHBvaW50cz0iMTc0LDMzNi42OSwxNzgsMzI3LjY5LDE3NCwzMzEuNjksMTcwLDMyNy42OSwxNzQsMzM2LjY5IiBzdHlsZT0ic3Ryb2tlOiNBODAwMzY7c3Ryb2tlLXdpZHRoOjEuMDsiLz48IS0tTUQ1PVtmYjE4MDU2OWJkM2VmZGNkNDM1MTNkNTQwNjYwZTEzMF0KbGluayBjb2xsZWN0aW9uIHRvIGRvY3VtZW50My0tPjxwYXRoIGQ9Ik0yMDMuODMsMjc2LjI3IEMyMjMuNDcsMjkzLjg5IDI0OC44MywzMTYuNjYgMjY3LjEzLDMzMy4wOCAiIGZpbGw9Im5vbmUiIGlkPSJjb2xsZWN0aW9uLXRvLWRvY3VtZW50MyIgc3R5bGU9InN0cm9rZTojQTgwMDM2O3N0cm9rZS13aWR0aDoxLjA7Ii8+PHBvbHlnb24gZmlsbD0iI0E4MDAzNiIgcG9pbnRzPSIyNzEuMTYsMzM2LjY5LDI2Ny4xMjcxLDMyNy43MDQ3LDI2Ny40MzY0LDMzMy4zNTMxLDI2MS43ODgsMzMzLjY2MjQsMjcxLjE2LDMzNi42OSIgc3R5bGU9InN0cm9rZTojQTgwMDM2O3N0cm9rZS13aWR0aDoxLjA7Ii8+PCEtLU1ENT1bMjBmMzA3N2I2Yzc3MjczODBjZWRmNDgyMDQ3YTY2ZjFdCkBzdGFydHVtbA0KZGF0YWJhc2UgIkRhdGFiYXNlIiBhcyBkYg0KDQpyZWN0YW5nbGUgIlNjb3BlIiBhcyBzY29wZQ0KDQpmb2xkZXIgIkNvbGxlY3Rpb24iIGFzIGNvbGxlY3Rpb24NCg0KDQoNCmZpbGUgIkRvY3VtZW50IiBhcyBkb2N1bWVudDENCmZpbGUgIkRvY3VtZW50IiBhcyBkb2N1bWVudDINCmZpbGUgIkRvY3VtZW50IiBhcyBkb2N1bWVudDMNCg0KZGIgLSAtPiBzY29wZQ0Kc2NvcGUgLSAtPiBjb2xsZWN0aW9uDQpjb2xsZWN0aW9uIC0gLT4gZG9jdW1lbnQxDQpjb2xsZWN0aW9uIC0gLT4gZG9jdW1lbnQyDQpjb2xsZWN0aW9uIC0gLT4gZG9jdW1lbnQzDQoNCg0KDQoNCm5vdGUgcmlnaHQgb2YgY29sbGVjdGlvbg0KDQogIE1heGltdW0gb2YgMTAwMCBwZXIgc2NvcGUNCg0KZW5kIG5vdGUNCg0Kbm90ZSByaWdodCBvZiBkYg0KDQogIE9uZSBkYXRhYmFzZSBwZXIgYXBwbGljYXRpb24NCg0KZW5kIG5vdGUNCkBlbmR1bWwNCgpQbGFudFVNTCB2ZXJzaW9uIDEuMjAyMS4xNihXZWQgRGVjIDA4IDE3OjI1OjIyIEdNVCAyMDIxKQooR1BMIHNvdXJjZSBkaXN0cmlidXRpb24pCkphdmEgUnVudGltZTogT3BlbkpESyBSdW50aW1lIEVudmlyb25tZW50CkpWTTogT3BlbkpESyA2NC1CaXQgU2VydmVyIFZNCkRlZmF1bHQgRW5jb2Rpbmc6IFVURi04Ckxhbmd1YWdlOiBlbgpDb3VudHJ5OiBVUwotLT48L2c+PC9zdmc+"},7790:(i,e,I)=>{I.d(e,{A:()=>a});const a="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBjb250ZW50U2NyaXB0VHlwZT0iYXBwbGljYXRpb24vZWNtYXNjcmlwdCIgY29udGVudFN0eWxlVHlwZT0idGV4dC9jc3MiIGhlaWdodD0iMzIxcHgiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHN0eWxlPSJ3aWR0aDo2NDdweDtoZWlnaHQ6MzIxcHg7YmFja2dyb3VuZDojRkZGRkZGOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNjQ3IDMyMSIgd2lkdGg9IjY0N3B4IiB6b29tQW5kUGFuPSJtYWduaWZ5Ij48ZGVmcz48ZmlsdGVyIGhlaWdodD0iMzAwJSIgaWQ9ImYxcnlvd2xqdmdzdTlzIiB3aWR0aD0iMzAwJSIgeD0iLTEiIHk9Ii0xIj48ZmVHYXVzc2lhbkJsdXIgcmVzdWx0PSJibHVyT3V0IiBzdGREZXZpYXRpb249IjIuMCIvPjxmZUNvbG9yTWF0cml4IGluPSJibHVyT3V0IiByZXN1bHQ9ImJsdXJPdXQyIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgLjQgMCIvPjxmZU9mZnNldCBkeD0iNC4wIiBkeT0iNC4wIiBpbj0iYmx1ck91dDIiIHJlc3VsdD0iYmx1ck91dDMiLz48ZmVCbGVuZCBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJibHVyT3V0MyIgbW9kZT0ibm9ybWFsIi8+PC9maWx0ZXI+PC9kZWZzPjxnPjwhLS1NRDU9WzUyMjFiYTI1YTNkYzU5YTc1MDdkZGU5OThiZDZiZmMyXQpjbHVzdGVyIGRiMS0tPjxwYXRoIGQ9Ik02LDE2IEM2LDYgMTE5LDYgMTE5LDYgQzExOSw2IDIzMiw2IDIzMiwxNiBMMjMyLDE4OSBDMjMyLDE5OSAxMTksMTk5IDExOSwxOTkgQzExOSwxOTkgNiwxOTkgNiwxODkgTDYsMTYgIiBmaWxsPSIjRkZGRkZGIiBmaWx0ZXI9InVybCgjZjFyeW93bGp2Z3N1OXMpIiBzdHlsZT0ic3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNTsiLz48cGF0aCBkPSJNNiwxNiBDNiwyNiAxMTksMjYgMTE5LDI2IEMxMTksMjYgMjMyLDI2IDIzMiwxNiAiIGZpbGw9Im5vbmUiIHN0eWxlPSJzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41OyIvPjx0ZXh0IGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgbGVuZ3RoQWRqdXN0PSJzcGFjaW5nIiB0ZXh0TGVuZ3RoPSIxNzQiIHg9IjMyIiB5PSI0MS45OTk5Ij5Db3VjaGJhc2UgTGl0ZSBkYXRhYmFzZTwvdGV4dD48IS0tTUQ1PVtmNDNmY2EwMGFhNDM3ODlhOThiN2MyMTQ1MmEwOWFhOV0KY2x1c3RlciBkZnMxLS0+PHBvbHlnb24gZmlsbD0iI0ZGRkZGRiIgZmlsdGVyPSJ1cmwoI2Yxcnlvd2xqdmdzdTlzKSIgcG9pbnRzPSIzMCw3NCw0MCw2NCwyMDgsNjQsMjA4LDE2NSwxOTgsMTc1LDMwLDE3NSwzMCw3NCIgc3R5bGU9InN0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjU7Ii8+PGxpbmUgc3R5bGU9InN0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjU7IiB4MT0iMTk4IiB4Mj0iMjA4IiB5MT0iNzQiIHkyPSI2NCIvPjxsaW5lIHN0eWxlPSJzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41OyIgeDE9IjMwIiB4Mj0iMTk4IiB5MT0iNzQiIHkyPSI3NCIvPjxsaW5lIHN0eWxlPSJzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41OyIgeDE9IjE5OCIgeDI9IjE5OCIgeTE9Ijc0IiB5Mj0iMTc1Ii8+PHRleHQgZmlsbD0iIzAwMDAwMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBsZW5ndGhBZGp1c3Q9InNwYWNpbmciIHRleHRMZW5ndGg9IjEwMiIgeD0iNjQiIHk9IjkwLjk5OTkiPl9kZWZhdWx0IHNjb3BlPC90ZXh0PjwhLS1NRDU9WzI4MmEzODc4Y2MyOTZmMTllNmM2NDE3YjAyNmU4OWY2XQpjbHVzdGVyIGRiMi0tPjxwYXRoIGQ9Ik0yNTYsMTYgQzI1Niw2IDQ0OCw2IDQ0OCw2IEM0NDgsNiA2NDAsNiA2NDAsMTYgTDY0MCwzMDQgQzY0MCwzMTQgNDQ4LDMxNCA0NDgsMzE0IEM0NDgsMzE0IDI1NiwzMTQgMjU2LDMwNCBMMjU2LDE2ICIgZmlsbD0iI0ZGRkZGRiIgZmlsdGVyPSJ1cmwoI2Yxcnlvd2xqdmdzdTlzKSIgc3R5bGU9InN0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjU7Ii8+PHBhdGggZD0iTTI1NiwxNiBDMjU2LDI2IDQ0OCwyNiA0NDgsMjYgQzQ0OCwyNiA2NDAsMjYgNjQwLDE2ICIgZmlsbD0ibm9uZSIgc3R5bGU9InN0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjU7Ii8+PHRleHQgZmlsbD0iIzAwMDAwMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBsZW5ndGhBZGp1c3Q9InNwYWNpbmciIHRleHRMZW5ndGg9IjE3NCIgeD0iMzYxIiB5PSI0MS45OTk5Ij5Db3VjaGJhc2UgTGl0ZSBkYXRhYmFzZTwvdGV4dD48IS0tTUQ1PVs4ODcwYTZiZmQ1YTJjOTQxNDI2ZTdkMDQxMDIxYTk2Yl0KY2x1c3RlciBkZnMyLS0+PHBvbHlnb24gZmlsbD0iI0ZGRkZGRiIgZmlsdGVyPSJ1cmwoI2Yxcnlvd2xqdmdzdTlzKSIgcG9pbnRzPSI0MzgsNzQsNDQ4LDY0LDYxNiw2NCw2MTYsMjgwLDYwNiwyOTAsNDM4LDI5MCw0MzgsNzQiIHN0eWxlPSJzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41OyIvPjxsaW5lIHN0eWxlPSJzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41OyIgeDE9IjYwNiIgeDI9IjYxNiIgeTE9Ijc0IiB5Mj0iNjQiLz48bGluZSBzdHlsZT0ic3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNTsiIHgxPSI0MzgiIHgyPSI2MDYiIHkxPSI3NCIgeTI9Ijc0Ii8+PGxpbmUgc3R5bGU9InN0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjU7IiB4MT0iNjA2IiB4Mj0iNjA2IiB5MT0iNzQiIHkyPSIyOTAiLz48dGV4dCBmaWxsPSIjMDAwMDAwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGxlbmd0aEFkanVzdD0ic3BhY2luZyIgdGV4dExlbmd0aD0iMTAyIiB4PSI0NzIiIHk9IjkwLjk5OTkiPl9kZWZhdWx0IHNjb3BlPC90ZXh0PjwhLS1NRDU9WzljM2I1NWJmZGIzMWVkNzkwM2Y1Yzg4NzEzMDU5NzYxXQpjbHVzdGVyIHNjb3BlQS0tPjxwb2x5Z29uIGZpbGw9IiNGRkZGRkYiIGZpbHRlcj0idXJsKCNmMXJ5b3dsanZnc3U5cykiIHBvaW50cz0iMjgwLDc0LDI5MCw2NCw0MTQsNjQsNDE0LDI4MCw0MDQsMjkwLDI4MCwyOTAsMjgwLDc0IiBzdHlsZT0ic3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNTsiLz48bGluZSBzdHlsZT0ic3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNTsiIHgxPSI0MDQiIHgyPSI0MTQiIHkxPSI3NCIgeTI9IjY0Ii8+PGxpbmUgc3R5bGU9InN0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjU7IiB4MT0iMjgwIiB4Mj0iNDA0IiB5MT0iNzQiIHkyPSI3NCIvPjxsaW5lIHN0eWxlPSJzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41OyIgeDE9IjQwNCIgeDI9IjQwNCIgeTE9Ijc0IiB5Mj0iMjkwIi8+PHRleHQgZmlsbD0iIzAwMDAwMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBsZW5ndGhBZGp1c3Q9InNwYWNpbmciIHRleHRMZW5ndGg9IjU4IiB4PSIzMTQiIHk9IjkwLjk5OTkiPlNjb3BlIEE8L3RleHQ+PCEtLU1ENT1bYWUxZDk5ODJjZTU0OWI0MWVmZjRkZDQ5MmQwOTMwMzJdCmVudGl0eSBkZmMxLS0+PHBvbHlnb24gZmlsbD0iI0ZGRkZGRiIgZmlsdGVyPSJ1cmwoI2Yxcnlvd2xqdmdzdTlzKSIgcG9pbnRzPSI0OSwxMDQsOTUsMTA0LDEwMiwxMjUsMTg5LDEyNSwxODksMTU4Ljc5OTksNDksMTU4Ljc5OTksNDksMTA0IiBzdHlsZT0ic3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNTsiLz48bGluZSBzdHlsZT0ic3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNTsiIHgxPSI0OSIgeDI9IjEwMiIgeTE9IjEyNSIgeTI9IjEyNSIvPjx0ZXh0IGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBsZW5ndGhBZGp1c3Q9InNwYWNpbmciIHRleHRMZW5ndGg9IjExMCIgeD0iNTkiIHk9IjE0NS45OTk5Ij5fZGVmYXVsdCBjb2xsZWN0aW9uPC90ZXh0PjwhLS1NRDU9WzljMmJiZGY3MDY0MzBjODliZTNjZmRiNDUwMzlmZDlmXQplbnRpdHkgZGZjMi0tPjxwb2x5Z29uIGZpbGw9IiNGRkZGRkYiIGZpbHRlcj0idXJsKCNmMXJ5b3dsanZnc3U5cykiIHBvaW50cz0iNDU3LDIxOSw1MDMsMjE5LDUxMCwyNDAsNTk3LDI0MCw1OTcsMjczLjc5OTksNDU3LDI3My43OTk5LDQ1NywyMTkiIHN0eWxlPSJzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41OyIvPjxsaW5lIHN0eWxlPSJzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41OyIgeDE9IjQ1NyIgeDI9IjUxMCIgeTE9IjI0MCIgeTI9IjI0MCIvPjx0ZXh0IGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBsZW5ndGhBZGp1c3Q9InNwYWNpbmciIHRleHRMZW5ndGg9IjExMCIgeD0iNDY3IiB5PSIyNjAuOTk5OSI+X2RlZmF1bHQgY29sbGVjdGlvbjwvdGV4dD48IS0tTUQ1PVtjN2Q4YWU4ZTIzMjBiOTc1NmEyNzZiZDFhNzc3ZDM5YV0KZW50aXR5IGNvbGxlY3Rpb25BLS0+PHBvbHlnb24gZmlsbD0iI0ZGRkZGRiIgZmlsdGVyPSJ1cmwoI2Yxcnlvd2xqdmdzdTlzKSIgcG9pbnRzPSI0NzYsMTA0LDUyMiwxMDQsNTI5LDEyNSw1NzgsMTI1LDU3OCwxNTguNzk5OSw0NzYsMTU4Ljc5OTksNDc2LDEwNCIgc3R5bGU9InN0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjU7Ii8+PGxpbmUgc3R5bGU9InN0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjU7IiB4MT0iNDc2IiB4Mj0iNTI5IiB5MT0iMTI1IiB5Mj0iMTI1Ii8+PHRleHQgZmlsbD0iIzAwMDAwMCIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGxlbmd0aEFkanVzdD0ic3BhY2luZyIgdGV4dExlbmd0aD0iNzIiIHg9IjQ4NiIgeT0iMTQ1Ljk5OTkiPkNvbGxlY3Rpb24gQTwvdGV4dD48IS0tTUQ1PVs3OWEwNTU4ZTZmYzYwMzFjNzExNjYxZTA5OGFjY2Y5Zl0KZW50aXR5IGNvbGxlY3Rpb25BMi0tPjxwb2x5Z29uIGZpbGw9IiNGRkZGRkYiIGZpbHRlcj0idXJsKCNmMXJ5b3dsanZnc3U5cykiIHBvaW50cz0iMjk2LDEwNCwzNDIsMTA0LDM0OSwxMjUsMzk4LDEyNSwzOTgsMTU4Ljc5OTksMjk2LDE1OC43OTk5LDI5NiwxMDQiIHN0eWxlPSJzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41OyIvPjxsaW5lIHN0eWxlPSJzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41OyIgeDE9IjI5NiIgeDI9IjM0OSIgeTE9IjEyNSIgeTI9IjEyNSIvPjx0ZXh0IGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBsZW5ndGhBZGp1c3Q9InNwYWNpbmciIHRleHRMZW5ndGg9IjcyIiB4PSIzMDYiIHk9IjE0NS45OTk5Ij5Db2xsZWN0aW9uIEE8L3RleHQ+PCEtLU1ENT1bZTAwNzJlNTMzYWIyZTkzODNkOTRmNDgzOTUwZTMyNDhdCmVudGl0eSBjb2xsZWN0aW9uQi0tPjxwb2x5Z29uIGZpbGw9IiNGRkZGRkYiIGZpbHRlcj0idXJsKCNmMXJ5b3dsanZnc3U5cykiIHBvaW50cz0iMjk2LDIxOSwzNDIsMjE5LDM0OSwyNDAsMzk4LDI0MCwzOTgsMjczLjc5OTksMjk2LDI3My43OTk5LDI5NiwyMTkiIHN0eWxlPSJzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41OyIvPjxsaW5lIHN0eWxlPSJzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41OyIgeDE9IjI5NiIgeDI9IjM0OSIgeTE9IjI0MCIgeTI9IjI0MCIvPjx0ZXh0IGZpbGw9IiMwMDAwMDAiIGZvbnQtZmFtaWx5PSJzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBsZW5ndGhBZGp1c3Q9InNwYWNpbmciIHRleHRMZW5ndGg9IjcyIiB4PSIzMDYiIHk9IjI2MC45OTk5Ij5Db2xsZWN0aW9uIEI8L3RleHQ+PCEtLU1ENT1bMDRlOTc5Y2EwNmYzZjZmYWI5ZDBjZjA5MDE1MTBlNjhdCmxpbmsgY29sbGVjdGlvbkEyIHRvIGNvbGxlY3Rpb25CLS0+PCEtLU1ENT1bN2YwMzZhMmRlNmE0YzEyZjY3ZDA5ZTYyNzdkZjllMzddCmxpbmsgY29sbGVjdGlvbkEgdG8gZGZjMi0tPjwhLS1NRDU9W2I2MWI4YjRlZjhhOTJjNzMzOWU2YTJkYTU5ZjI2YjMwXQpAc3RhcnR1bWwNCmRhdGFiYXNlICJDb3VjaGJhc2UgTGl0ZSBkYXRhYmFzZSIgYXMgZGIxIHsNCg0KICAgICAgbm9kZSAiX2RlZmF1bHQgc2NvcGUiIGFzIGRmczEgew0KDQogICAgICAgIGZvbGRlciAiX2RlZmF1bHQgY29sbGVjdGlvbiIgYXMgZGZjMSB7DQoNCiAgICAgICAgfQ0KICAgICAgfQ0KDQp9DQoNCmRhdGFiYXNlICJDb3VjaGJhc2UgTGl0ZSBkYXRhYmFzZSIgYXMgZGIyIHsNCg0KDQogICAgbm9kZSAiX2RlZmF1bHQgc2NvcGUiIGFzIGRmczIgew0KDQogICAgICBmb2xkZXIgIl9kZWZhdWx0IGNvbGxlY3Rpb24iIGFzIGRmYzIgew0KDQogICAgICB9DQoNCiAgICAgICAgZm9sZGVyICJDb2xsZWN0aW9uIEEiIGFzIGNvbGxlY3Rpb25BIHsNCg0KICAgICAgICB9DQogICAgfQ0KDQogICAgbm9kZSAiU2NvcGUgQSIgYXMgc2NvcGVBIHsNCg0KICAgICAgZm9sZGVyICJDb2xsZWN0aW9uIEEiIGFzIGNvbGxlY3Rpb25BMiB7DQoNCiAgICAgIH0NCg0KICAgICAgICBmb2xkZXIgIkNvbGxlY3Rpb24gQiIgYXMgY29sbGVjdGlvbkIgew0KDQogICAgICAgIH0NCiAgICB9DQoNCn0NCg0KY29sbGVjdGlvbkEyIC1EW2hpZGRlbl0tPiBjb2xsZWN0aW9uQg0KY29sbGVjdGlvbkEgLURbaGlkZGVuXS0+IGRmYzINCkBlbmR1bWwNCgpQbGFudFVNTCB2ZXJzaW9uIDEuMjAyMS4xNihXZWQgRGVjIDA4IDE3OjI1OjIyIEdNVCAyMDIxKQooR1BMIHNvdXJjZSBkaXN0cmlidXRpb24pCkphdmEgUnVudGltZTogT3BlbkpESyBSdW50aW1lIEVudmlyb25tZW50CkpWTTogT3BlbkpESyA2NC1CaXQgU2VydmVyIFZNCkRlZmF1bHQgRW5jb2Rpbmc6IFVURi04Ckxhbmd1YWdlOiBlbgpDb3VudHJ5OiBVUwotLT48L2c+PC9zdmc+"},8453:(i,e,I)=>{I.d(e,{R:()=>n,x:()=>c});var a=I(6540);const s={},t=a.createContext(s);function n(i){const e=a.useContext(t);return a.useMemo((function(){return"function"==typeof i?i(e):{...e,...i}}),[e,i])}function c(i){let e;return e=i.disableParentContext?"function"==typeof i.components?i.components(s):i.components||s:n(i.components),a.createElement(t.Provider,{value:e},i.children)}}}]);