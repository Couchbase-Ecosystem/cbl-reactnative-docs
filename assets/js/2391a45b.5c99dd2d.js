"use strict";(self.webpackChunkcbl_reactnative=self.webpackChunkcbl_reactnative||[]).push([[4866],{9246:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"Queries/query-result-set","title":"Query Result Sets","description":"When querying a database, the results are returned as an array of objects (ResultSet). Each object (Result) has keys based on the collection names used in the FROM statement of your query. If an alias is used, the key will be the alias name. This allows you to access the properties of the results easily and ensures that the structure of your results matches the query structure.","source":"@site/docs/Queries/query-result-set.md","sourceDirName":"Queries","slug":"/Queries/query-result-set","permalink":"/Queries/query-result-set","draft":false,"unlisted":false,"editUrl":"https://github.com/Couchbase-Ecosystem/cbl-reactnative-docs/docs/Queries/query-result-set.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"id":"query-result-set","sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"SQL++ for Mobile and Server Differences","permalink":"/Queries/sqlplusplus-mobile-and-server-differences"},"next":{"title":"Live Queries","permalink":"/Queries/live-queries"}}');var n=s(4848),l=s(8453);const o={id:"query-result-set",sidebar_position:5},i="Query Result Sets",c={},a=[{value:"Example 1. Query Result Sets",id:"example-1-query-result-sets",level:4},{value:"Example 2. Query Result Sets",id:"example-2-query-result-sets",level:4},{value:"Example 3. Query Result Sets",id:"example-3-query-result-sets",level:4}];function u(e){const t={code:"code",h1:"h1",h4:"h4",header:"header",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"query-result-sets",children:"Query Result Sets"})}),"\n",(0,n.jsxs)(t.p,{children:["When querying a database, the results are returned as an array of objects (",(0,n.jsx)(t.code,{children:"ResultSet"}),"). Each object (",(0,n.jsx)(t.code,{children:"Result"}),") has keys based on the collection names used in the ",(0,n.jsx)(t.code,{children:"FROM"})," statement of your query. If an alias is used, the key will be the alias name. This allows you to access the properties of the results easily and ensures that the structure of your results matches the query structure."]}),"\n",(0,n.jsx)(t.h4,{id:"example-1-query-result-sets",children:"Example 1. Query Result Sets"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"const query = database.createQuery('SELECT * FROM inventory.hotel AS hotelItems WHERE city=\"Medway\"');\nconst resultSet: ResultSet = await query.execute();\n\nfor (const result of resultSet) {\n    console.log(result['hotelItems'].propertyName);\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["In this example, ",(0,n.jsx)(t.code,{children:"hotelItems"})," is the alias used for the collection in the query, and it serves as the key in the ",(0,n.jsx)(t.code,{children:"Result"})," objects within the ",(0,n.jsx)(t.code,{children:"ResultSet"}),"."]}),"\n",(0,n.jsx)(t.h4,{id:"example-2-query-result-sets",children:"Example 2. Query Result Sets"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"const query = database.createQuery('SELECT hotelItems.*, META().id as docId FROM inventory.hotel AS hotelItems WHERE city=\"Medway\"');\nconst resultSet: ResultSet = await query.execute();\n\nfor (const result of resultSet) {    \n    console.log(result['docId']);\n    console.log(result['hotelItems'].propertyName);\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["n this example, ",(0,n.jsx)(t.code,{children:"hotelItems"})," is the alias used for the collection in the query, and it serves as the key in the ",(0,n.jsx)(t.code,{children:"Result"})," objects within the ",(0,n.jsx)(t.code,{children:"ResultSet"}),". Each ",(0,n.jsx)(t.code,{children:"result"})," object also includes a ",(0,n.jsx)(t.code,{children:"docId"}),", representing the document ID, allowing you to access both the document ID and the hotel item details."]}),"\n",(0,n.jsx)(t.h4,{id:"example-3-query-result-sets",children:"Example 3. Query Result Sets"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"const query = database.createQuery(`\n    SELECT *\n    FROM route\n    JOIN airline\n    ON route.airlineid = META(airline).id\n    WHERE airline.country = \"France\"\n`);\nconst resultSet: ResultSet = await query.execute();\n\nfor (const result of resultSet) {\n    console.log(result['route'].propertyName); // Access properties from the route collection\n    console.log(result['airline'].propertyName); // Access properties from the airline collection\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["In this example, ",(0,n.jsx)(t.code,{children:"route"})," and ",(0,n.jsx)(t.code,{children:"airline"})," are the collections being queried and joined based on the ",(0,n.jsx)(t.code,{children:"airlineid"}),". The ",(0,n.jsx)(t.code,{children:"Result"})," objects within the ",(0,n.jsx)(t.code,{children:"ResultSet"})," contain keys corresponding to these collection names, allowing you to access properties from both the ",(0,n.jsx)(t.code,{children:"route"})," and ",(0,n.jsx)(t.code,{children:"airline"})," collections. The query filters the results to only include airlines from France."]})]})}function d(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>i});var r=s(6540);const n={},l=r.createContext(n);function o(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);