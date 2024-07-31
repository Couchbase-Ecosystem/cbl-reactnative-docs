"use strict";(self.webpackChunkcbl_reactnative=self.webpackChunkcbl_reactnative||[]).push([[7987],{9502:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>x,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var i=t(4848),a=t(8453);const r={id:"indexes",sidebar_position:11},s="Indexing",d={id:"indexes",title:"Indexing",description:"Description \u2014 Couchbase mobile database indexes and indexing concepts",source:"@site/docs/indexes.md",sourceDirName:".",slug:"/indexes",permalink:"/indexes",draft:!1,unlisted:!1,editUrl:"https://github.com/Couchbase-Ecosystem/cbl-reactnative-docs/docs/indexes.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{id:"indexes",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Using Full Text Search",permalink:"/full-text-search"},next:{title:"Data Sync",permalink:"/category/data-sync"}},o={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Creating a new index",id:"creating-a-new-index",level:2},{value:"Example 2. Create Index",id:"example-2-create-index",level:4},{value:"Summary",id:"summary",level:2}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"indexing",children:"Indexing"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["Description \u2014 ",(0,i.jsx)(n.em,{children:"Couchbase mobile database indexes and indexing concepts"}),"\nRelated Content \u2014 ",(0,i.jsx)(n.a,{href:"/databases",children:"Databases"})," | ",(0,i.jsx)(n.a,{href:"/documents",children:"Documents"})," | ",(0,i.jsx)(n.a,{href:"/indexes",children:"Indexing"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"Before we begin querying documents, let's briefly mention the importance of having an appropriate and balanced approach to indexes."}),"\n",(0,i.jsx)(n.p,{children:"Creating indexes can speed up the performance of queries. A query will typically return results more quickly if it can take advantage of an existing database index to search, narrowing down the set of documents to be examined."}),"\n",(0,i.jsx)(n.admonition,{title:"CONSTRAINTS",type:"note",children:(0,i.jsx)(n.p,{children:"Couchbase Lite does not currently support partial value indexes; indexes with non-property expressions. You should only index with properties that you plan to use in the query."})}),"\n",(0,i.jsx)(n.h2,{id:"creating-a-new-index",children:"Creating a new index"}),"\n",(0,i.jsx)(n.p,{children:"You can use SQL++ to create an index"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"#example-2-create-index",children:"Example 2"})," creates a new index for the type and name properties, shown in this data model:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Example 1. Data Model"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "_id": "hotel123",\n    "type": "hotel",\n    "name": "The Michigander",\n    "overview": "Ideally situated for exploration of the Motor City and the wider state of Michigan. Tripadvisor rated the hotel ...",\n    "state": "Michigan"\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"The code to create the index will look something like this:"}),"\n",(0,i.jsx)(n.h4,{id:"example-2-create-index",children:"Example 2. Create Index"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:" // Define a value index on 'name' and 'documentType'\nconst valueIndex = IndexBuilder.valueIndex(\n    ValueIndexItem.property('name'),\n    ValueIndexItem.property('documentType')\n);\n\n// Create the value index\nconst valueIndexName = 'nameTypeIndex';\nawait collection.createIndex(valueIndexName, valueIndex); \n"})}),"\n",(0,i.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(n.p,{children:"When planning the indexes you need for your database, remember that while indexes make queries faster, they may also:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Make writes slightly slower, because each index must be updated whenever a document is updated."}),"\n",(0,i.jsx)(n.li,{children:"Make your Couchbase Lite database slightly larger."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"So too many indexes may hurt performance. Optimal performance depends on designing and creating the right indexes to go along with your queries."})]})}function x(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>d});var i=t(6540);const a={},r=i.createContext(a);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);