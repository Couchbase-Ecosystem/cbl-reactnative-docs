"use strict";(self.webpackChunkcbl_reactnative=self.webpackChunkcbl_reactnative||[]).push([[3823],{7404:(e,r,d)=>{d.r(r),d.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>x,frontMatter:()=>c,metadata:()=>s,toc:()=>t});const s=JSON.parse('{"id":"Queries/sqlplusplus-mobile-and-server-differences","title":"SQL++ for Mobile and Server Differences","description":"N1QL is Couchbase\'s implementation of the developing SQL++ standard. As such the","source":"@site/docs/Queries/sqlplusplus-mobile-and-server-differences.md","sourceDirName":"Queries","slug":"/Queries/sqlplusplus-mobile-and-server-differences","permalink":"/Queries/sqlplusplus-mobile-and-server-differences","draft":false,"unlisted":false,"editUrl":"https://github.com/Couchbase-Ecosystem/cbl-reactnative-docs/docs/Queries/sqlplusplus-mobile-and-server-differences.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"id":"sqlplusplus-mobile-and-server-differences","sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"SQL++ for Mobile","permalink":"/Queries/sqlplusplus"},"next":{"title":"Query Result Sets","permalink":"/Queries/query-result-set"}}');var i=d(4848),n=d(8453);const c={id:"sqlplusplus-mobile-and-server-differences",sidebar_position:2},l="SQL++ for Mobile and Server Differences",o={},t=[{value:"Table 1. SQL++ Query Comparison",id:"table-1-sql-query-comparison",level:4},{value:"Boolean Logic Rules",id:"boolean-logic-rules",level:2},{value:"SQL++ for Server",id:"sql-for-server",level:3},{value:"SQL++ for Mobile",id:"sql-for-mobile",level:3},{value:"Logical Operations",id:"logical-operations",level:3},{value:"Table 2. Logical Operations Comparison",id:"table-2-logical-operations-comparison",level:4},{value:"CRUD Operations",id:"crud-operations",level:2},{value:"Functions",id:"functions",level:2},{value:"Division Operator",id:"division-operator",level:3},{value:"Round Function",id:"round-function",level:3}];function h(e){const r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.header,{children:(0,i.jsx)(r.h1,{id:"sql-for-mobile-and-server-differences",children:"SQL++ for Mobile and Server Differences"})}),"\n",(0,i.jsx)(r.admonition,{type:"important",children:(0,i.jsx)(r.p,{children:"N1QL is Couchbase's implementation of the developing SQL++ standard. As such the\nterms N1QL and SQL++ are used interchangeably in all Couchbase documentation\nunless explicitly stated otherwise."})}),"\n",(0,i.jsxs)(r.p,{children:["There are several minor but notable behavior differences between SQL++ for\nMobile queries and SQL++ for Server, as shown in ",(0,i.jsx)(r.a,{href:"#table-1-sql-query-comparison",children:"Table 1"}),"."]}),"\n",(0,i.jsx)(r.p,{children:"In some instances, if required, you can force SQL++ for Mobile to work in the\nsame way as SQL++ for Server. These instances are noted in the content below."}),"\n",(0,i.jsx)(r.h4,{id:"table-1-sql-query-comparison",children:"Table 1. SQL++ Query Comparison"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Feature"}),(0,i.jsx)(r.th,{children:"SQL++ for Server"}),(0,i.jsx)(r.th,{children:"SQL++ for Mobile"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"USE KEYS"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"SELECT fname, email FROM tutorial USE KEYS ('dave', 'ian');"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"SELECT fname, email FROM tutorial WHERE META().id IN ('dave', 'ian');"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"ON KEYS"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"SELECT * FROM user u JOIN orders o ON KEYS ARRAY s.order_id FOR s IN u.order_history END;"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"SELECT * FROM user u, u.order_history s JOIN orders o ON s.order_id = Meta(o).id;"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"USE KEY"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"SELECT * FROM user u JOIN orders o ON KEY o.user_id FOR u;"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"SELECT * FROM user u JOIN orders o ON META(u).id = o.user_id;"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"NEST"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"SELECT * FROM user u NEST orders orders ON KEYS ARRAY s.order_id FOR s IN u.order_history END;"})}),(0,i.jsxs)(r.td,{children:[(0,i.jsx)(r.code,{children:"NEST"}),"/",(0,i.jsx)(r.code,{children:"UNNEST"})," not supported"]})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"LEFT OUTER NEST"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"SELECT * FROM user u LEFT OUTER NEST orders orders ON KEYS ARRAY s.order_id FOR s IN u.order_history END;"})}),(0,i.jsxs)(r.td,{children:[(0,i.jsx)(r.code,{children:"NEST"}),"/",(0,i.jsx)(r.code,{children:"UNNEST"})," not supported"]})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"ARRAY"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"ARRAY i FOR i IN [1, 2] END"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"(SELECT VALUE i FROM [1, 2] AS i)"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"ARRAY FIRST"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"ARRAY FIRST arr"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"arr[0]"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"LIMIT l OFFSET o"})}),(0,i.jsxs)(r.td,{children:["Allows ",(0,i.jsx)(r.code,{children:"OFFSET"})," without ",(0,i.jsx)(r.code,{children:"LIMIT"})]}),(0,i.jsxs)(r.td,{children:["Allows ",(0,i.jsx)(r.code,{children:"OFFSET"})," without ",(0,i.jsx)(r.code,{children:"LIMIT"})]})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsxs)(r.td,{children:[(0,i.jsx)(r.code,{children:"UNION"}),", ",(0,i.jsx)(r.code,{children:"INTERSECT"}),", ",(0,i.jsx)(r.code,{children:"EXCEPT"})]}),(0,i.jsxs)(r.td,{children:["All three are supported (with ",(0,i.jsx)(r.code,{children:"ALL"})," and ",(0,i.jsx)(r.code,{children:"DISTINCT"})," variants)."]}),(0,i.jsx)(r.td,{children:"Not supported"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"OUTER JOIN"})}),(0,i.jsxs)(r.td,{children:["Both ",(0,i.jsx)(r.code,{children:"LEFT"})," and ",(0,i.jsx)(r.code,{children:"RIGHT OUTER JOIN"})," are supported."]}),(0,i.jsxs)(r.td,{children:["Only ",(0,i.jsx)(r.code,{children:"LEFT OUTER JOIN"})," supported (and necessary for query expressability)."]})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsxs)(r.td,{children:[(0,i.jsx)(r.code,{children:"<"}),", ",(0,i.jsx)(r.code,{children:"<="}),", ",(0,i.jsx)(r.code,{children:"="}),", etc. operators"]}),(0,i.jsx)(r.td,{children:"Can compare either complex values or scalar values."}),(0,i.jsx)(r.td,{children:"Only scalar values may be compared."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"ORDER BY"})}),(0,i.jsxs)(r.td,{children:["Result sequencing is based on specific rules described in ",(0,i.jsxs)(r.a,{href:"https://docs.couchbase.com/server/current/n1ql/n1ql-language-reference/orderby.html",children:["SQL++ for Server ",(0,i.jsx)(r.code,{children:"ORDER BY"})," clause"]}),"."]}),(0,i.jsxs)(r.td,{children:["Result sequencing is based on the SQLite ordering described in ",(0,i.jsx)(r.a,{href:"https://sqlite.org/lang_select.html",children:"SQLite select overview"}),".",(0,i.jsx)("br",{}),(0,i.jsx)("br",{})," The ordering of Dictionary and Array objects is based on binary ordering."]})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"SELECT DISTINGCT"})}),(0,i.jsx)(r.td,{children:"Supported"}),(0,i.jsxs)(r.td,{children:[(0,i.jsx)(r.code,{children:"SELECT DISTINCT VALUE"})," is supported when the returned values are scalars."]})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"CREATE INDEX"})}),(0,i.jsx)(r.td,{children:"Supported"}),(0,i.jsx)(r.td,{children:"Not Supported"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsxs)(r.td,{children:[(0,i.jsx)(r.code,{children:"INSERT"}),", ",(0,i.jsx)(r.code,{children:"UPSERT"}),", ",(0,i.jsx)(r.code,{children:"DELETE"})]}),(0,i.jsx)(r.td,{children:"Supported"}),(0,i.jsx)(r.td,{children:"Not Supported"})]})]})]}),"\n",(0,i.jsx)(r.h2,{id:"boolean-logic-rules",children:"Boolean Logic Rules"}),"\n",(0,i.jsx)(r.h3,{id:"sql-for-server",children:"SQL++ for Server"}),"\n",(0,i.jsx)(r.p,{children:"Couchbase Server operates in the same way as Couchbase Lite, except:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"MISSING"}),", ",(0,i.jsx)(r.code,{children:"NULL"})," and ",(0,i.jsx)(r.code,{children:"FALSE"})," are ",(0,i.jsx)(r.code,{children:"FALSE"})]}),"\n",(0,i.jsxs)(r.li,{children:["Numbers ",(0,i.jsx)(r.code,{children:"0"})," is ",(0,i.jsx)(r.code,{children:"FALSE"})]}),"\n",(0,i.jsxs)(r.li,{children:["Empty strings, arrays, and objects are ",(0,i.jsx)(r.code,{children:"FALSE"})]}),"\n",(0,i.jsxs)(r.li,{children:["All other values are ",(0,i.jsx)(r.code,{children:"TRUE"})]}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["You can choose to use Couchbase Server's SQL++ rules by using the\n",(0,i.jsx)(r.code,{children:"TOBOOLEAN(expr)"})," function to convert a value to its boolean value."]}),"\n",(0,i.jsx)(r.h3,{id:"sql-for-mobile",children:"SQL++ for Mobile"}),"\n",(0,i.jsx)(r.p,{children:"SQL++ for Mobile's boolean logic rules are based on SQLite's, so:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"TRUE"})," is ",(0,i.jsx)(r.code,{children:"TRUE"}),", and ",(0,i.jsx)(r.code,{children:"FALSE"})," is ",(0,i.jsx)(r.code,{children:"FALSE"})]}),"\n",(0,i.jsxs)(r.li,{children:["Numbers ",(0,i.jsx)(r.code,{children:"0"})," or ",(0,i.jsx)(r.code,{children:"0.0"})," are ",(0,i.jsx)(r.code,{children:"FALSE"})]}),"\n",(0,i.jsxs)(r.li,{children:["Arrays and dictionaries are ",(0,i.jsx)(r.code,{children:"FALSE"})]}),"\n",(0,i.jsxs)(r.li,{children:["String and Blob are ",(0,i.jsx)(r.code,{children:"TRUE"})," if the values are casted as a non-zero or ",(0,i.jsx)(r.code,{children:"FALSE"}),"\nif the values are casted as ",(0,i.jsx)(r.code,{children:"0"})," or ",(0,i.jsx)(r.code,{children:"0.0"})," \u2014\u2009see:\n",(0,i.jsx)(r.a,{href:"https://sqlite.org/lang_expr.html",children:"SQLITE's CAST and Boolean expressions"})," for\nmore details."]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"NULL"})," is ",(0,i.jsx)(r.code,{children:"FALSE"})]}),"\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.code,{children:"MISSING"})," is ",(0,i.jsx)(r.code,{children:"MISSING"})]}),"\n"]}),"\n",(0,i.jsx)(r.h3,{id:"logical-operations",children:"Logical Operations"}),"\n",(0,i.jsxs)(r.p,{children:["In SQL++ for Mobile logical operations will return one of three possible values;\n",(0,i.jsx)(r.code,{children:"TRUE"}),", ",(0,i.jsx)(r.code,{children:"FALSE"}),", or ",(0,i.jsx)(r.code,{children:"MISSING"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:["Logical operations with the ",(0,i.jsx)(r.code,{children:"MISSING"})," value could result in ",(0,i.jsx)(r.code,{children:"TRUE"})," or ",(0,i.jsx)(r.code,{children:"FALSE"})," if\nthe result can be determined regardless of the missing value, otherwise the\nresult will be ",(0,i.jsx)(r.code,{children:"MISSING"}),"."]}),"\n",(0,i.jsxs)(r.p,{children:["In SQL++ for Mobile \u2014\u2009unlike SQL++ for Server \u2014 ",(0,i.jsx)(r.code,{children:"NULL"})," is implicitly converted\nto ",(0,i.jsx)(r.code,{children:"FALSE"})," before evaluating logical operations. ",(0,i.jsx)(r.a,{href:"#table-2-logical-operations-comparison",children:"Table 2"})," summarizes the\nresult of logical operations with different operand values and also shows where\nthe Couchbase Server behavior differs."]}),"\n",(0,i.jsx)(r.h4,{id:"table-2-logical-operations-comparison",children:"Table 2. Logical Operations Comparison"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsxs)(r.th,{children:["Operand",(0,i.jsx)("br",{}),"a"]}),(0,i.jsxs)(r.th,{children:["Operand",(0,i.jsx)("br",{}),"b"]}),(0,i.jsxs)(r.th,{children:["SQL ++ for Mobile ",(0,i.jsx)("br",{}),"a AND b"]}),(0,i.jsxs)(r.th,{children:["SQL ++ for Mobile ",(0,i.jsx)("br",{}),"a OR b"]}),(0,i.jsxs)(r.th,{children:["SQL ++ for Server",(0,i.jsx)("br",{}),"a AND b"]}),(0,i.jsxs)(r.th,{children:["SQL ++ for Server",(0,i.jsx)("br",{}),"a OR b"]})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"TRUE"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"TRUE"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"TRUE"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"TRUE"})}),(0,i.jsx)(r.td,{children:"-"}),(0,i.jsx)(r.td,{children:"-"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"FALSE"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"FALSE"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"TRUE"})}),(0,i.jsx)(r.td,{children:"-"}),(0,i.jsx)(r.td,{children:"-"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"NULL"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"FALSE"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"TRUE"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"NULL"})}),(0,i.jsx)(r.td,{children:"-"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"MISSING"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"MISSING"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"TRUE"})}),(0,i.jsx)(r.td,{children:"-"}),(0,i.jsx)(r.td,{children:"-"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"FALSE"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"TRUE"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"FALSE"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"TRUE"})}),(0,i.jsx)(r.td,{children:"-"}),(0,i.jsx)(r.td,{children:"-"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"FALSE"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"FALSE"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"FALSE"})}),(0,i.jsx)(r.td,{children:"-"}),(0,i.jsx)(r.td,{children:"-"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"NULL"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"FALSE"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"FALSE"})}),(0,i.jsx)(r.td,{children:"-"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"NULL"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"MISSING"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"FALSE"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"MISSING"})}),(0,i.jsx)(r.td,{children:"-"}),(0,i.jsx)(r.td,{children:"-"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"NULL"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"TRUE"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"FALSE"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"TRUE"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"NULL"})}),(0,i.jsx)(r.td,{children:"-"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"FALSE"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"FALSE"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"FALSE"})}),(0,i.jsx)(r.td,{children:"-"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"NULL"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"NULL"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"FALSE"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"FALSE"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"NULL"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"NULL"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"MISSING"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"FALSE"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"MISSING"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"MISSING"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"NULL"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"MISSING"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"TRUE"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"MISSING"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"TRUE"})}),(0,i.jsx)(r.td,{children:"-"}),(0,i.jsx)(r.td,{children:"-"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"FALSE"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"FALSE"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"MISSING"})}),(0,i.jsx)(r.td,{children:"-"}),(0,i.jsx)(r.td,{children:"-"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"NULL"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"FALSE"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"MISSING"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"MISSING"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"NULL"})})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"MISSING"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"MISSING"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"MISSING"})}),(0,i.jsx)(r.td,{children:"-"}),(0,i.jsx)(r.td,{children:"-"})]})]})]}),"\n",(0,i.jsx)(r.h2,{id:"crud-operations",children:"CRUD Operations"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"SQL++ for Mobile only supports Read or Query operations."}),"\n",(0,i.jsx)(r.li,{children:"SQL++ for Server fully supports CRUD operation."}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"functions",children:"Functions"}),"\n",(0,i.jsx)(r.h3,{id:"division-operator",children:"Division Operator"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"SQL ++ for Server"}),(0,i.jsx)(r.th,{children:"SQL++ for Mobile"})]})}),(0,i.jsx)(r.tbody,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsxs)(r.td,{children:["SQL++ for Server always performs float division regardless of the types of the operands.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"You can force this behavior in SQL++ for Mobile by using the ",(0,i.jsx)(r.code,{children:"DIV(x, y)"})," function."]}),(0,i.jsxs)(r.td,{children:["The operand types determine the division operation performed.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"If both are integers, integer division is used.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{})," If one is a floating number, then float division is used."]})]})})]}),"\n",(0,i.jsx)(r.h3,{id:"round-function",children:"Round Function"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"SQL ++ for Server"}),(0,i.jsx)(r.th,{children:"SQL++ for Mobile"})]})}),(0,i.jsx)(r.tbody,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsxs)(r.td,{children:["SQL++ for Server ",(0,i.jsx)(r.code,{children:"ROUND()"})," uses the Rounding to Nearest Even convention (for example, ",(0,i.jsx)(r.code,{children:"ROUND(1.85)"})," returns ",(0,i.jsx)(r.code,{children:"1.8"}),").",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"You can force this behavior in Couchbase Lite by using the ",(0,i.jsx)(r.code,{children:"ROUND_EVEN()"})," function."]}),(0,i.jsxs)(r.td,{children:["The ",(0,i.jsx)(r.code,{children:"ROUND()"})," function returns a value to the given number of integer digits to the right of the decimal point (left if digits is negative).",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Digits are ",(0,i.jsx)(r.code,{children:"0"})," if not given.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),"Midpoint values are handled using the Rounding Away From Zero convention, which rounds them to the next number away from zero (for example, ",(0,i.jsx)(r.code,{children:"ROUND(1.85)"})," returns ",(0,i.jsx)(r.code,{children:"1.9"}),")."]})]})})]})]})}function x(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,r,d)=>{d.d(r,{R:()=>c,x:()=>l});var s=d(6540);const i={},n=s.createContext(i);function c(e){const r=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);