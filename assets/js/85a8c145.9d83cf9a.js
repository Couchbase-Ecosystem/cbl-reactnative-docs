"use strict";(self.webpackChunkcbl_reactnative=self.webpackChunkcbl_reactnative||[]).push([[5468],{6683:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"Queries/query-troubleshooting","title":"Query Troubleshoooting","description":"Description - Couchbase Lite Queries - Troubleshooting","source":"@site/docs/Queries/query-troubleshooeting.md","sourceDirName":"Queries","slug":"/Queries/query-troubleshooting","permalink":"/Queries/query-troubleshooting","draft":false,"unlisted":false,"editUrl":"https://github.com/Couchbase-Ecosystem/cbl-reactnative-docs/docs/Queries/query-troubleshooeting.md","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"id":"query-troubleshooting","sidebar_position":7},"sidebar":"tutorialSidebar","previous":{"title":"Live Queries","permalink":"/Queries/live-queries"},"next":{"title":"Using Full Text Search","permalink":"/full-text-search"}}');var r=i(4848),s=i(8453);const a={id:"query-troubleshooting",sidebar_position:7},l="Query Troubleshoooting",o={},d=[{value:"Query Explain",id:"query-explain",level:2},{value:"Using",id:"using",level:3},{value:"Example 1. Using Query Explain in App",id:"example-1-using-query-explain-in-app",level:4},{value:"Example 2. Using Query Explain in cblite",id:"example-2-using-query-explain-in-cblite",level:4},{value:"Output",id:"output",level:3},{value:"Example 3. Query.explain() Output",id:"example-3-queryexplain-output",level:4},{value:"The Query Plan",id:"the-query-plan",level:2},{value:"Format",id:"format",level:3},{value:"Example 4. A Query Plan",id:"example-4-a-query-plan",level:4},{value:"Retrieval Method",id:"retrieval-method",level:3},{value:"Table 1. Retrieval Methods",id:"table-1-retrieval-methods",level:4},{value:"Order and Group",id:"order-and-group",level:3},{value:"Queries and Indexes",id:"queries-and-indexes",level:2},{value:"Working with the Query Optimizer",id:"working-with-the-query-optimizer",level:2},{value:"Wildcard and Like-based Queries",id:"wildcard-and-like-based-queries",level:2},{value:"Example 5. Like with Wildcard Prefix",id:"example-5-like-with-wildcard-prefix",level:4},{value:"Example 6. Resulting Query Plan",id:"example-6-resulting-query-plan",level:4},{value:"Example 7. Like with No Wildcard-prefix",id:"example-7-like-with-no-wildcard-prefix",level:4},{value:"Example 8. Resulting Query Plan",id:"example-8-resulting-query-plan",level:4},{value:"Use Functions Wisely",id:"use-functions-wisely",level:2},{value:"Example 9. WHERE with LOWER Function",id:"example-9-where-with-lower-function",level:4},{value:"Example 10. Resulting Query Plan",id:"example-10-resulting-query-plan",level:4},{value:"Example 11. WHERE with LOWER Function",id:"example-11-where-with-lower-function",level:4},{value:"Example 12. Query Plan",id:"example-12-query-plan",level:4},{value:"Optimization Considerations",id:"optimization-considerations",level:2}];function h(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"query-troubleshoooting",children:"Query Troubleshoooting"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Description - ",(0,r.jsx)(n.em,{children:"Couchbase Lite Queries - Troubleshooting"}),"\nAbstract - _This content describes how to use the Couchbase Lite for React Native Query API's exlplain method to examine a query."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"query-explain",children:"Query Explain"}),"\n",(0,r.jsx)(n.h3,{id:"using",children:"Using"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Query.explain()"})," method can provide useful insight when you are trying to diagnose query performance issues and-or optimize queries. To examine how your query is working, either embed the call inside your app (see: Example 1), or use it interactively within a cblite shell (see: Example 2)."]}),"\n",(0,r.jsx)(n.h4,{id:"example-1-using-query-explain-in-app",children:"Example 1. Using Query Explain in App"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"// Create the query\nconst query = database.createQuery('SELECT META().id AS thisId FROM inventory.hotel WHERE city=\"Medway\"');\n\n// Print the explanation of the query\nconst explanation = await query.explain();\nconsole.log(explanation);\n"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Construct your query as normal."}),"\n",(0,r.jsxs)(n.li,{children:["Call the query's ",(0,r.jsx)(n.code,{children:"explain"})," method and print it."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"example-2-using-query-explain-in-cblite",children:"Example 2. Using Query Explain in cblite"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'cblite <your-database-name>.cblite2\n(cblite) select --explain domains GROUP BY country ORDER BY country, name\n(cblite) query --explain {"GROUP_BY":[[".country"]],"ORDER_BY":[[".country"],[".name"]],"WHAT":[[".domains"]]}\n'})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Within a terminal session open your database with cblite and enter your query."}),"\n",(0,r.jsx)(n.li,{children:"Here the query is entered as an SQL++ query using select."}),"\n",(0,r.jsx)(n.li,{children:"Here the query is entered as a JSON-string using query."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"output",children:"Output"}),"\n",(0,r.jsxs)(n.p,{children:["The output from explain() remains the same whether invoked by an app, or cblite\u2009\u2014\u2009see ",(0,r.jsx)(n.a,{href:"#example-3-queryexplain-output",children:"Example 3"})," for an example of how it looks."]}),"\n",(0,r.jsx)(n.h4,{id:"example-3-queryexplain-output",children:"Example 3. Query.explain() Output"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'SELECT fl_result(fl_value(_doc.body, \'domains\')) FROM kv_default AS _doc WHERE (_doc.flags & 1 = 0) GROUP BY fl_value(_doc.body, \'country\') ORDER BY fl_value(_doc.body, \'country\'), fl_value(_doc.body, \'name\') \n\n7|0|0| SCAN TABLE kv_default AS _doc \n12|0|0| USE TEMP B-TREE FOR GROUP BY\n52|0|0| USE TEMP B-TREE FOR ORDER BY\n\n{"GROUP_BY":[[".country"]],"ORDER_BY":[[".country"],[".name"]],"WHAT":[[".domains"]]} \n'})}),"\n",(0,r.jsxs)(n.p,{children:["This output (",(0,r.jsx)(n.a,{href:"#example-3-queryexplain-output",children:"Example 3"}),") comprises three main elements:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"The translated SQL-query, which is not necessarily useful, being aimed more at Couchbase support and-or engineering teams."}),"\n",(0,r.jsxs)(n.li,{children:["The ",(0,r.jsx)(n.a,{href:"https://www.sqlite.org/eqp.html",children:"SQLite query plan"}),", which gives a high-level view of how the SQL query will be implemented. You can use this to identify potential issues and so optimize problematic queries."]}),"\n",(0,r.jsxs)(n.li,{children:["The query in JSON-string format, which you can copy-and-paste directly into the ",(0,r.jsx)(n.em,{children:"cblite"})," tool."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"the-query-plan",children:"The Query Plan"}),"\n",(0,r.jsx)(n.h3,{id:"format",children:"Format"}),"\n",(0,r.jsxs)(n.p,{children:["The query plan section of the output displays a tabular form of the translated query's execution plan. It primarily shows how the data will be retrieved and, where appropriate, how it will be sorted for navigation and-or presentation purposes. For more on SQLite's Explain Query Plan \u2014 see: ",(0,r.jsx)(n.a,{href:"https://www.sqlite.org/eqp.html",children:"https://www.sqlite.org/eqp.html"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"example-4-a-query-plan",children:"Example 4. A Query Plan"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"7|0|0| SCAN TABLE kv_default AS _doc\n12|0|0| USE TEMP B-TREE FOR GROUP BY\n52|0|0| USE TEMP B-TREE FOR ORDER BY\n"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Retrieval method"})," \u2014 This line shows the retrieval method being used for\nthe query; here a sequential read of the database. Something you may well be\nlooking to optimize \u2014 see ",(0,r.jsx)(n.a,{href:"#retrieval-method",children:"Retrieval Method"})," for more."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Grouping method"})," --- This line shows that the ",(0,r.jsx)(n.code,{children:"GROUP BY"})," clause used in\nthe query requires the data to be sorted and that a b-tree will be used for\ntemporary storage \u2014 see ",(0,r.jsx)(n.a,{href:"#order-and-group",children:"Order and Group"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Ordering method"})," \u2014 This line shows that the ",(0,r.jsx)(n.code,{children:"ORDER BY"})," clause used in the\nquery requires the data to be sorted and that a b-tree will be used for\ntemporary storage \u2014 see ",(0,r.jsx)(n.a,{href:"#order-and-group",children:"Order and Group"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"retrieval-method",children:"Retrieval Method"}),"\n",(0,r.jsxs)(n.p,{children:["The query optimizer will attempt to retrieve the requested data items as\nefficiently as possible, which generally will be by using one or more of the\navailable indexes. The retrieval method shows the approach decided upon by the\noptimizer \u2014 see ",(0,r.jsx)(n.a,{href:"#",children:"Table 1"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"table-1-retrieval-methods",children:"Table 1. Retrieval Methods"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Retrieval Method"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Search"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Here the query is able to access the required data directly using keys into the index. Queries using the Search mode are the fastest."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Scan Index"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Here the query is able to retrieve the data by scanning all or part-of the index (for example when seeking to match values within a range). This type of query is slower than search, but at least benefits from the compact and ordered form of the index."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Scan Table"}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"Here the query must scan the database table(s) to retrieve the required data. It is the slowest of these methods and will benefit most from some form of optimization."})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"When looking to optimize a query's retrieval method, consider whether:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Providing an additional index makes sense."}),"\n",(0,r.jsx)(n.li,{children:"You could use an existing index \u2014 perhaps by restructuring the query to\nminimize wildcard use, or the reliance on functions that modify the query's\ninterpretation of index keys (for example, 'lower')."}),"\n",(0,r.jsx)(n.li,{children:"You could reduce the data set being requested to minimize the query's\nfootprint on the database."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"order-and-group",children:"Order and Group"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"USE TEMP B-TREE FOR"})," lines in the example indicate that the query requires\nsorting to cater for grouping and then sorting again to present the output\nresults. Minimizing, if not eliminating, this ordering and re-ordering will\nobviously reduce the amount of time taken to process your query."]}),"\n",(0,r.jsx)(n.p,{children:'Ask "is the grouping and-or ordering absolutely necessary?": if it isn\'t, drop\nit or modify it to minimize its impact.'}),"\n",(0,r.jsx)(n.h2,{id:"queries-and-indexes",children:"Queries and Indexes"}),"\n",(0,r.jsx)(n.p,{children:"Before we begin querying documents, let's briefly mention the importance of\nhaving an appropriate and balanced approach to indexes."}),"\n",(0,r.jsx)(n.p,{children:"Creating indexes can speed up the performance of queries. A query will typically\nreturn results more quickly if it can take advantage of an existing database\nindex to search, narrowing down the set of documents to be examined."}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"Couchbase Lite for React Native does not currently support partial value indexes;\nindexes with non-property expressions. You should only index with properties\nthat you plan to use in the query."})}),"\n",(0,r.jsxs)(n.p,{children:["The Query optimizer converts your query into a parse tree that groups zero or\nmore ",(0,r.jsx)(n.em,{children:"and-connected"})," clauses together (as dictated by your where conditionals)\nfor effective query engine processing."]}),"\n",(0,r.jsx)(n.p,{children:"Ideally a query will be be able to satisfy its requirements entirely by either\ndirectly accessing the index or searching sequential index rows. Less good is if\nthe query must scan the whole index; although the compact nature of most indexes\nmeans this is still much faster than the alternative of scanning the entire\ndatabase with no help from the indexes at all."}),"\n",(0,r.jsx)(n.p,{children:"Searches that begin with or rely upon an inequality with the primary key are\ninherently less effective than those using a primary key equality."}),"\n",(0,r.jsx)(n.h2,{id:"working-with-the-query-optimizer",children:"Working with the Query Optimizer"}),"\n",(0,r.jsx)(n.p,{children:"You may have noticed that sometimes a query runs faster on a second run, or\nafter re-opening the database, or after deleting and recreating an index. This\ntypically happens when SQL Query Optimizer has gathered sufficient stats to\nrecognize a means of optimizing a sub-optimal query."}),"\n",(0,r.jsx)(n.p,{children:"If only those stats were available from the start. In fact they are gathered\nafter certain events, such as:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Following index creation"}),"\n",(0,r.jsx)(n.li,{children:"On a database close"}),"\n",(0,r.jsx)(n.li,{children:"When running a database compact."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["So, if your analysis of the ",(0,r.jsx)(n.a,{href:"#example-3",children:"Query Explain output"})," indicates a\nsub-optimal query and your rewrites fail to sufficiently optimize it, consider\ncompacting the database. Then re-generate the Query Explain and note any\nimprovements in optimization. They may not, in themselves, resolve the issue\nentirely; but they can provide a uesful guide toward further optimizing changes\nyou could make."]}),"\n",(0,r.jsx)(n.h2,{id:"wildcard-and-like-based-queries",children:"Wildcard and Like-based Queries"}),"\n",(0,r.jsx)(n.p,{children:"Like-based searches can use the index(es) only if:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The search-string doesn't start with a wildcard."}),"\n",(0,r.jsx)(n.li,{children:"The primary search expression uses a property that is an indexed key."}),"\n",(0,r.jsx)(n.li,{children:"The search-string is a constant known at run time (that is, not a value\nderived during processing of the query)."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["To illustrate this we can use a modified query; replacing a simple equality test\nwith a ",(0,r.jsx)(n.code,{children:"LIKE"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.a,{href:"#",children:"Example 5"})," we use a wildcard prefix and suffix. You can see that the\nquery plan decides on a retrieval method of ",(0,r.jsx)(n.code,{children:"SCAN TABLE"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["For more on indexes \u2014\u2009see: ",(0,r.jsx)(n.a,{href:"/indexes",children:"Indexing"}),"."]})}),"\n",(0,r.jsx)(n.h4,{id:"example-5-like-with-wildcard-prefix",children:"Example 5. Like with Wildcard Prefix"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"const queryString = `\n  SELECT *\n  FROM hotels AS item\n  WHERE type LIKE '%hotel%'\n`;\n\nconst query = database.createQuery(queryString);\nconsole.log(await query.explain());\n"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["The indexed property, ",(0,r.jsx)(n.code,{children:"type"}),", cannot use its index because of the wildcard\nprefix."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"example-6-resulting-query-plan",children:"Example 6. Resulting Query Plan"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"2|0|0| SCAN TABLE kv_default AS _doc\n"})}),"\n",(0,r.jsxs)(n.p,{children:["By contrast, by removing the wildcard prefix ",(0,r.jsx)(n.code,{children:"%"})," (in ",(0,r.jsx)(n.a,{href:"#example-7-like-with-no-wildcard-prefix",children:"Example 7"}),"), we see\nthat the query plan's retrieval method changes to become an index search. Where\npractical, simple changes like this can make significant differences in query\nperformance."]}),"\n",(0,r.jsx)(n.h4,{id:"example-7-like-with-no-wildcard-prefix",children:"Example 7. Like with No Wildcard-prefix"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"const queryString = `\n  SELECT *\n  FROM hotels AS item\n  WHERE type LIKE 'hotel%' AND name LIKE '%royal%'\n`;\n\nconst query = database.createQuery(queryString);\nconsole.log(await query.explain());\n"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Simply removing the wildcard prefix enables the query optimizer to access the\n",(0,r.jsx)(n.code,{children:"typeIndex"}),", which results in a more efficient search."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"example-8-resulting-query-plan",children:"Example 8. Resulting Query Plan"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"3|0|0| SEARCH TABLE kv_default AS _doc USING INDEX typeIndex (<expr>>? AND <expr><?)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"use-functions-wisely",children:"Use Functions Wisely"}),"\n",(0,r.jsx)(n.p,{children:"Functions are a very useful tool in building queries, but be aware that they can\nimpact whether the query-optimizer is able to use your index(es)."}),"\n",(0,r.jsxs)(n.p,{children:["For example, you can observe a similar situation to that shown in\n",(0,r.jsx)(n.a,{href:"#wildcard-queries",children:"Wildcard and Like-based Queries"})," when using\n",(0,r.jsx)(n.code,{children:"LOWER"})," on an indexed property."]}),"\n",(0,r.jsx)(n.h4,{id:"example-9-where-with-lower-function",children:"Example 9. WHERE with LOWER Function"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"const queryString = `\n  SELECT *\n  FROM hotels\n  WHERE LOWER(type) = 'hotel'\n`;\n\nconst query = database.createQuery(queryString);\nconsole.log(await query.explain());\n"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Here we use ",(0,r.jsx)(n.code,{children:"LOWER"})," in the ",(0,r.jsx)(n.code,{children:"WHERE"})," expression."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"example-10-resulting-query-plan",children:"Example 10. Resulting Query Plan"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"2|0|0| SCAN TABLE kv_default AS _doc\n"})}),"\n",(0,r.jsxs)(n.p,{children:["But removing ",(0,r.jsx)(n.code,{children:"LOWER"}),", changes things:"]}),"\n",(0,r.jsx)(n.h4,{id:"example-11-where-with-lower-function",children:"Example 11. WHERE with LOWER Function"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"const queryString = `\n  SELECT *\n  FROM hotels\n  WHERE type = 'hotel'\n`;\n\nconst query = database.createQuery(queryString);\nconsole.log(await query.explain());\n"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Here we have removed ",(0,r.jsx)(n.code,{children:"LOWER"})," from the ",(0,r.jsx)(n.code,{children:"WHERE"})," expression."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"example-12-query-plan",children:"Example 12. Query Plan"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-console",children:"3|0|0| SEARCH TABLE kv_default AS _doc USING INDEX typeIndex (<expr>=?)\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Knowing this, you can consider how you create the index; for example, using\n",(0,r.jsx)(n.code,{children:"LOWER"})," when you create the index and then always using\nlowercase comparisons."]}),"\n",(0,r.jsx)(n.h2,{id:"optimization-considerations",children:"Optimization Considerations"}),"\n",(0,r.jsx)(n.p,{children:"Try to minimize the amount of data retrieved. Reduce it down to the few\nproperties you really do need to achieve the required result."}),"\n",(0,r.jsx)(n.p,{children:"Consider fetching details lazily. You could break complex queries into\ncomponents. Returning just the document IDs, then process the array of document\nIDs using either the Document API or a query thats uses the array of document\nIDs to return information."}),"\n",(0,r.jsxs)(n.p,{children:["Consider using paging to minimize the data returned when the number of results\nreturned is expected to be high. Getting the whole lot at once will be slow and\nresource intensive: Plus does anyone want to access them all in one go? Instead\nretrieve batches of information at a time, perhaps using ",(0,r.jsx)(n.code,{children:"LIMIT"})," and ",(0,r.jsx)(n.code,{children:"OFFSET"}),"\nclauese to set a starting point for each subsequent batch."]}),"\n",(0,r.jsx)(n.p,{children:"Although, note that using query offsets becomes increasingly less effective as\nthe overhead of skipping a growing number of rows each time increases. You can\nwork around this, by instead using ranges of search-key values. If the last\nsearch-key value of batch one was 'x' then that could become the starting point\nfor your next batch and-so-on."}),"\n",(0,r.jsx)(n.p,{children:"Optimize document size in design. Smaller documents load more quickly. Break\nyour data into logical linked units."}),"\n",(0,r.jsxs)(n.p,{children:["Consider Using Full Text Search instead of complex ",(0,r.jsx)(n.code,{children:"LIKE"})," or ",(0,r.jsx)(n.code,{children:"REGEX"})," patterns \u2014\nsee ",(0,r.jsx)(n.a,{href:"/full-text-search",children:"Full Text Search"}),"."]})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>l});var t=i(6540);const r={},s=t.createContext(r);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);