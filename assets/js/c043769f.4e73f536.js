"use strict";(self.webpackChunkcbl_reactnative=self.webpackChunkcbl_reactnative||[]).push([[5031],{9994:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"database-prebuilt","title":"Pre-built Database","description":"Description \u2014 How to Handle Pre-Built Couchbase Lite Databases in Your App","source":"@site/docs/database-prebuilt.md","sourceDirName":".","slug":"/database-prebuilt","permalink":"/database-prebuilt","draft":false,"unlisted":false,"editUrl":"https://github.com/Couchbase-Ecosystem/cbl-reactnative-docs/docs/database-prebuilt.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"database-prebuilt","sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"Databases","permalink":"/databases"},"next":{"title":"Scopes and Collections","permalink":"/scopes-collections"}}');var i=t(4848),s=t(8453);const r={id:"database-prebuilt",sidebar_position:5},o="Pre-built Database",l={},c=[{value:"Overview",id:"overview",level:2},{value:"To use a Pre-built Database",id:"to-use-a-pre-built-database",level:2},{value:"Creating Pre-built database",id:"creating-pre-built-database",level:2},{value:"Bundle a database with an application",id:"bundle-a-database-with-an-application",level:2},{value:"Database Encryption",id:"database-encryption",level:2},{value:"Using Pre-built Database on App Launch",id:"using-pre-built-database-on-app-launch",level:2},{value:"Example 1. Decompress and Copy Database using API",id:"example-1-decompress-and-copy-database-using-api",level:4}];function d(e){const a={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.header,{children:(0,i.jsx)(a.h1,{id:"pre-built-database",children:"Pre-built Database"})}),"\n",(0,i.jsxs)(a.blockquote,{children:["\n",(0,i.jsxs)(a.p,{children:["Description \u2014 ",(0,i.jsx)(a.em,{children:"How to Handle Pre-Built Couchbase Lite Databases in Your App"}),(0,i.jsx)(a.br,{}),"\n","Abstract \u2014 ",(0,i.jsx)(a.em,{children:"This content explains how to include a snapshot of a pre-built database in your package to shorten initial sync time and reduce bandwidth use."})]}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.em,{children:"Couchbase Lite"})," supports pre-built databases. You can pre-load your app with data instead of syncing it from Sync Gateway during startup to minimize consumer wait time (arising from data setup) on initial install and launch of the application."]}),"\n",(0,i.jsx)(a.p,{children:"Avoiding an initial bulk sync reduces startup time and network transfer costs."}),"\n",(0,i.jsx)(a.p,{children:"It is typically more efficient to download bulk data using the http/ftp stream employed during the application installation than to install a smaller application bundle and then use a replicator to pull in the bulk data."}),"\n",(0,i.jsx)(a.p,{children:"Pre-loaded data is typically public/shared, non-user-specific data that is static. Even if the data is not static, you can still benefit from preloading it and only syncing the changed documents on startup."}),"\n",(0,i.jsx)(a.p,{children:"The initial sync of any pre-built database pulls in any content changes on the server that occurred after its incorporation into the app, updating the database."}),"\n",(0,i.jsx)(a.h2,{id:"to-use-a-pre-built-database",children:"To use a Pre-built Database"}),"\n",(0,i.jsxs)(a.ol,{children:["\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsxs)(a.p,{children:["Create a new Couchbase Lite database with the required data set - see ",(0,i.jsx)(a.a,{href:"#creating-pre-built-database",children:"Creating Pre-built database"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsxs)(a.p,{children:["Incorporate the pre-built database with your app bundle as an asset/resource\u2009- see ",(0,i.jsx)(a.a,{href:"#bundle-a-database-with-an-application",children:"Bundle a Database with an Application"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsxs)(a.p,{children:["Adjust the start-up logic of your app to check for the presence of the required database. If the database doesn\u2019t already exist, create one using the bundled pre-built database. Initiate a sync to update the data - see ",(0,i.jsx)(a.a,{href:"#using-pre-built-database-on-app-launch",children:"Using Pre-built Database on App Launch"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"creating-pre-built-database",children:"Creating Pre-built database"}),"\n",(0,i.jsx)(a.p,{children:"These steps should form part of your build and release process:"}),"\n",(0,i.jsxs)(a.ol,{children:["\n",(0,i.jsx)(a.li,{children:"Create a fresh Couchbase Lite database (every time)"}),"\n"]}),"\n",(0,i.jsxs)(a.admonition,{type:"important",children:[(0,i.jsx)(a.p,{children:"Always start with a fresh database for each app version; this ensures there are no checkpoint issues."}),(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.strong,{children:"Otherwise:"})," You will invalidate the cached checkpoint in the packaged database, and instead reuse the same database in your build process (for subsequent app versions)."]})]}),"\n",(0,i.jsxs)(a.ol,{start:"2",children:["\n",(0,i.jsx)(a.li,{children:"Pull the data from Sync Gateway into the new Couchbase Lite database"}),"\n"]}),"\n",(0,i.jsxs)(a.admonition,{type:"important",children:[(0,i.jsx)(a.p,{children:"Ensure the replication used to populate Couchbase Lite database uses the exact same remote URL and replication config parameters (channels and filters) as those your app will use when it is running."}),(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.strong,{children:"Otherwise:"})," \u2026\u200b there will be a checkpoint mismatch and the app will attempt to pull the data down again"]}),(0,i.jsx)(a.p,{children:"Don\u2019t, for instance, create a pre-built database against a staging Sync Gateway server and use it within a production app that syncs against a production Sync Gateway."})]}),"\n",(0,i.jsxs)(a.p,{children:["You can use the cblite tool (cblite cp) for this \u2014\u2009see: ",(0,i.jsx)(a.a,{href:"https://github.com/couchbaselabs/couchbase-mobile-tools/blob/master/Documentation.md#cp-aka-export-import-push-pull",children:"cblite cp (export, import, push, pull)"})," on GitHub."]}),"\n",(0,i.jsxs)(a.ol,{start:"3",children:["\n",(0,i.jsx)(a.li,{children:"Create the same indexes the app will use (wait for the replication to finish before doing this)."}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"bundle-a-database-with-an-application",children:"Bundle a database with an application"}),"\n",(0,i.jsx)(a.p,{children:"Copy the database into your app package."}),"\n",(0,i.jsx)(a.p,{children:"Put it in an appropriate place (for example, an assets or resource folder)."}),"\n",(0,i.jsx)(a.p,{children:"Where the platform permits you can zip the database."}),"\n",(0,i.jsx)(a.p,{children:"**Alternatively:**\u200b rather than bundling the database within the app, the app could pull the database down from a CDN server on launch."}),"\n",(0,i.jsx)(a.h2,{id:"database-encryption",children:"Database Encryption"}),"\n",(0,i.jsx)(a.p,{children:"If you are using en encrypted database, note that Database.copy does not change the encryption key. The encryption key specified in the config when opening the database is the encryption key used for both the original database and copied database."}),"\n",(0,i.jsx)(a.p,{children:"If you copied an un-encrypted database and want to apply encryption to the copy, or if you want to change (or remove) the encryption key applied to the copy:"}),"\n",(0,i.jsxs)(a.ol,{children:["\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsx)(a.p,{children:"Provide the original encryption-key (if any) in the database copy's configuration using DatabaseConfiguration.getEncryptionKey()."}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsx)(a.p,{children:"Open the database copy"}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsx)(a.p,{children:"Use Database.setEncryptionKey() on the database copy to set the required encryption key."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(a.admonition,{type:"tip",children:(0,i.jsx)(a.p,{children:"To remove encryption on the copy, provide a null encryption-key."})}),"\n",(0,i.jsx)(a.h2,{id:"using-pre-built-database-on-app-launch",children:"Using Pre-built Database on App Launch"}),"\n",(0,i.jsxs)(a.ol,{children:["\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsx)(a.p,{children:"Locate the pre-packaged database (for example, in the assets or other resource folder)"}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsx)(a.p,{children:"Copy the pre-packaged database to the required location"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(a.p,{children:["Use the API's Database.copy method \u2014\u2009see: ",(0,i.jsx)(a.a,{href:"#example-1-decompress-and-copy-database-using-api",children:"Example 1"}),". This ensures that a unique UUID is generated for each copy."]}),"\n",(0,i.jsxs)(a.admonition,{type:"important",children:[(0,i.jsx)(a.p,{children:"Do not copy the database using any other method."}),(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.strong,{children:"Otherwise:"})," Each copy of the app will invalidate the other apps' checkpoints because a new UUID was not generated."]})]}),"\n",(0,i.jsxs)(a.ol,{start:"3",children:["\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsx)(a.p,{children:"Open the database; you can now start querying the data and using it."}),"\n"]}),"\n",(0,i.jsxs)(a.li,{children:["\n",(0,i.jsx)(a.p,{children:"Start a pull replication, to sync any changes."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(a.p,{children:"The replicator uses the pre-built database's checkpoint as the timestamp to sync from; only documents changed since then are synced."}),"\n",(0,i.jsx)(a.admonition,{type:"note",children:(0,i.jsx)(a.p,{children:"Start your normal application logic immediately, unless it is essential to have the absolute up-to-date data set to begin. That way the user is not kept hanging around watching a progress indicator. They can begin interacting with your app whilst any out-of-data data is being updated."})}),"\n",(0,i.jsx)(a.h4,{id:"example-1-decompress-and-copy-database-using-api",children:"Example 1. Decompress and Copy Database using API"}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-typescript",children:"// Get the default path \nconst path = await pd.getDefaultPath();\n\n// Set database name, source path, and configuration\nconst dbName = 'my_prebuilt_db';\nconst sourcePath = await database.getPath();\nconst config = new DatabaseConfiguration();\nconfig.setDirectory(path);\n\nconst databaseExists = await database.exists(dbName, sourcePath);\nif (!databaseExists) {\n    // Copy the database from the sourcePath to the app's directory if it doesn't already exist\n    await database.copy(sourcePath, dbName, config);\n}\n"})})]})}function p(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,a,t)=>{t.d(a,{R:()=>r,x:()=>o});var n=t(6540);const i={},s=n.createContext(i);function r(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);