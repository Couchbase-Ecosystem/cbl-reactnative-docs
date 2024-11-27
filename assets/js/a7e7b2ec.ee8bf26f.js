"use strict";(self.webpackChunkcbl_reactnative=self.webpackChunkcbl_reactnative||[]).push([[5815],{4696:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>b,frontMatter:()=>i,metadata:()=>o,toc:()=>r});const o=JSON.parse('{"id":"blobs","title":"Blobs","description":"Description \u2014 Couchbase Lite database data model concepts - blobs","source":"@site/docs/blobs.md","sourceDirName":".","slug":"/blobs","permalink":"/blobs","draft":false,"unlisted":false,"editUrl":"https://github.com/Couchbase-Ecosystem/cbl-reactnative-docs/docs/blobs.md","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"id":"blobs","sidebar_position":8},"sidebar":"tutorialSidebar","previous":{"title":"Documents","permalink":"/documents"},"next":{"title":"Queries","permalink":"/category/queries"}}');var s=t(4848),a=t(8453);const i={id:"blobs",sidebar_position:8},c="Blobs",l={},r=[{value:"Introduction",id:"introduction",level:2},{value:"Blob Objects",id:"blob-objects",level:2},{value:"Constraints",id:"constraints",level:3},{value:"Using Blobs",id:"using-blobs",level:2},{value:"Example 1. Working with Blobs",id:"example-1-working-with-blobs",level:4},{value:"Example 2. Get Blob&#39;s content",id:"example-2-get-blobs-content",level:4},{value:"Syncing",id:"syncing",level:2},{value:"Figure 1. Sample Blob Document",id:"figure-1-sample-blob-document",level:4}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"blobs",children:"Blobs"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Description \u2014 ",(0,s.jsx)(n.em,{children:"Couchbase Lite database data model concepts - blobs"}),(0,s.jsx)(n.br,{}),"\n","Related Content\u2009\u2014 ",(0,s.jsx)(n.a,{href:"/databases",children:"Databases"})," | ",(0,s.jsx)(n.a,{href:"/documents",children:"Documents"})," | ",(0,s.jsx)(n.a,{href:"indexing.md",children:"Indexing"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(n.p,{children:"Couchbase Lite for React Native uses blobs to store the contents of images, other media files and similar format files as binary objects."}),"\n",(0,s.jsx)(n.p,{children:"The blob itself is not stored in the document. It is held in a separate content-addressable store indexed from the document and retrieved only on-demand."}),"\n",(0,s.jsxs)(n.p,{children:["When a document is synchronized, the Couchbase Lite replicator adds an ",(0,s.jsx)(n.code,{children:"_attachments"})," dictionary to the document's properties if it contains a blob \u2014\u2009see ",(0,s.jsx)(n.a,{href:"#figure-1-sample-blob-document",children:"Figure 1"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"blob-objects",children:"Blob Objects"}),"\n",(0,s.jsxs)(n.p,{children:["The blob as an object appears in a document as dictionary property \u2014\u2009see, for example avatar in ",(0,s.jsx)(n.a,{href:"#figure-1-sample-blob-document",children:"Figure 1"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Other properties include ",(0,s.jsx)(n.code,{children:"length"})," (the length in bytes), and optionally ",(0,s.jsx)(n.code,{children:"content_type"})," (typically, its MIME type)."]}),"\n",(0,s.jsxs)(n.p,{children:["The blob's data (an image, audio or video content) is not stored in the document, but in a separate content-addressable store, indexed by the ",(0,s.jsx)(n.code,{children:"digest"})," property \u2014\u2009see ",(0,s.jsx)(n.a,{href:"#using-blobs",children:"Using Blobs"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"constraints",children:"Constraints"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Couchbase Lite"}),"\n",(0,s.jsx)(n.p,{children:"Blobs can be arbitrarily large. They are only read on demand, not when you load a the document."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Capella App Services/Sync Gateway"}),"\n",(0,s.jsx)(n.p,{children:"The maximum content size is 20 MB per blob. If a document's blob is over 20 MB, the document will be replicated but not the blob."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"using-blobs",children:"Using Blobs"}),"\n",(0,s.jsx)(n.p,{children:"The Blob API lets you access the blob's data content as in-memory data or as a Stream of Uint8Array."}),"\n",(0,s.jsxs)(n.p,{children:["The code in ",(0,s.jsx)(n.a,{href:"#example-1-working-with-blobs",children:"Example 1"})," shows how you might add a blob to a document and save it to the database. Here we use avatar as the property key and a jpeg file as the blob data."]}),"\n",(0,s.jsx)(n.h4,{id:"example-1-working-with-blobs",children:"Example 1. Working with Blobs"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"// Example function to simulate fetching binary data for an avatar image\nconst imageData = await fetchAvatarImageData();\n\n// Create a Blob instance with the image data and content type\nconst avatarBlob = new Blob('image/jpeg', imageData);\n\n// Retrieve an existing document\nconst document = await collection.document(documentId);\n\n// Assign the Blob to the document under the 'avatar' key\ndocument.setBlob('avatar', avatarBlob);\n\n// Save the updated document back to the database\nawait collection.save(document);\n"})}),"\n",(0,s.jsx)(n.h4,{id:"example-2-get-blobs-content",children:"Example 2. Get Blob's content"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"// code for setting blob\nconst mutDoc = new MutableDocument('doc1');\nconst encoder = new TextEncoder();\nconst blobEncoded = new Blob(\"text/plain\", encoder.encode(\"Hello World\"));\nmutDoc.setBlob('textBlob', blobEncoded);\nawait collection.save(mutDoc);\n\n// code for getting blob's content\nconst doc = await collection.document('doc1');\nconst textDecoder = new TextDecoder();\nconst blob = doc.getBlob('textBlob');\nconst blobArrayBuffer =  blob.getBytes();\nconst textBlobResults = textDecoder.decode(blobArrayBuffer);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"syncing",children:"Syncing"}),"\n",(0,s.jsxs)(n.p,{children:["When a document containing a blob object is synchronized, the Couchbase Lite replicator generates an ",(0,s.jsx)(n.code,{children:"_attachments"})," dictionary with an auto-generated name for each blob attachment. This is different to the ",(0,s.jsx)(n.code,{children:"avatar"})," key and is used internally to access the blob content."]}),"\n",(0,s.jsxs)(n.p,{children:["If you view a sync'd blob document in either Capella's Admin Interface or Couchbase Server's Admin Console, you will see something similar to ",(0,s.jsx)(n.a,{href:"#figure-1-sample-blob-document",children:"Figure 1"}),", which shows the document with its generated ",(0,s.jsx)(n.code,{children:"_attachments"})," dictionary, including the digest."]}),"\n",(0,s.jsx)(n.h4,{id:"figure-1-sample-blob-document",children:"Figure 1. Sample Blob Document"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'{\n  "_attachments": {\n    "blob_1": {\n      "content_type": "image/jpeg",\n      "digest": "sha1-F1Tfe61RZP4zC9UYT6JFmLTh2s8=",\n      "length": 8112955,\n      "revpos": 2,\n      "stub": true\n    }\n  },\n  "avatar": {\n    "@type": "blob",\n    "content_type": "image/jpeg",\n    "digest": "sha1-F1Tfe61RZP4zC9UYT6JFmLTh2s8=",\n    "length": 8112955\n  }\n}\n'})})]})}function b(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var o=t(6540);const s={},a=o.createContext(s);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);