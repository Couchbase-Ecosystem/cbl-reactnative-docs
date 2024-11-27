"use strict";(self.webpackChunkcbl_reactnative=self.webpackChunkcbl_reactnative||[]).push([[9314],{5188:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>g,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"Troubleshooting/using-logs","title":"Using Logs for Troubleshooting","description":"Description \u2014 Couchbase Lite on React Native\u2009\u2014\u2009Using Logs for Troubleshooting","source":"@site/docs/Troubleshooting/using-logs.md","sourceDirName":"Troubleshooting","slug":"/Troubleshooting/using-logs","permalink":"/Troubleshooting/using-logs","draft":false,"unlisted":false,"editUrl":"https://github.com/Couchbase-Ecosystem/cbl-reactnative-docs/docs/Troubleshooting/using-logs.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"using-logs","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Troubleshooting","permalink":"/category/troubleshooting"},"next":{"title":"Troubleshooting Queries","permalink":"/Troubleshooting/troubleshoot-queries"}}');var s=n(4848),t=n(8453);const r={id:"using-logs",sidebar_position:1},l="Using Logs for Troubleshooting",g={},a=[{value:"Introduction",id:"introduction",level:2},{value:"Console based logging",id:"console-based-logging",level:2},{value:"Example 1. Change Console Logging Settings",id:"example-1-change-console-logging-settings",level:4}];function c(e){const o={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.header,{children:(0,s.jsx)(o.h1,{id:"using-logs-for-troubleshooting",children:"Using Logs for Troubleshooting"})}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsxs)(o.p,{children:["Description \u2014 ",(0,s.jsx)(o.em,{children:"Couchbase Lite on React Native\u2009\u2014\u2009Using Logs for Troubleshooting"}),(0,s.jsx)(o.br,{}),"\n","Related Content\u2009\u2014 ",(0,s.jsx)(o.a,{href:"troubeshoot-queries.md",children:"Troubleshooting Queries"})," | ",(0,s.jsx)(o.a,{href:"/Troubleshooting/troubleshoot-crashes",children:"Troubleshooting Crashes"})]}),"\n"]}),"\n",(0,s.jsx)(o.admonition,{type:"note",children:(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsx)(o.li,{children:"The retrieval of logs from the device is out of scope of this feature."}),"\n"]})}),"\n",(0,s.jsx)(o.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(o.p,{children:"Couchbase Lite provides a robust Logging API\u2009\u2014\u2009see: API References for Logging classes\u2009\u2014\u2009which make debugging and troubleshooting easier during development and in production. It delivers flexibility in terms of how logs are generated and retained, whilst also maintaining the level of logging required by Couchbase Support for investigation of issues."}),"\n",(0,s.jsx)(o.p,{children:"Log output is split into the following streams:"}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsx)(o.p,{children:"File based logging"}),"\n",(0,s.jsx)(o.p,{children:"Here logs are written to separate log files filtered by log level, with each log level supporting individual retention policies."}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsx)(o.p,{children:"Console based logging"}),"\n",(0,s.jsx)(o.p,{children:"You can independently configure and control console logs, which provides a convenient method of accessing diagnostic information during debugging scenarios. With console logging, you can fine-tune diagnostic output to suit specific debug scenarios, without interfering with any logging required by Couchbase Support for the investigation of issues."}),"\n"]}),"\n",(0,s.jsxs)(o.li,{children:["\n",(0,s.jsx)(o.p,{children:"Custom logging"}),"\n",(0,s.jsx)(o.p,{children:"For greater flexibility you can implement a custom logging class using the ILogger interface."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"console-based-logging",children:"Console based logging"}),"\n",(0,s.jsx)(o.p,{children:"Console based logging is often used to facilitate troubleshooting during development."}),"\n",(0,s.jsx)(o.p,{children:"Console logs are your go-to resource for diagnostic information. You can easily fine-tune their diagnostic content to meet the needs of a particular debugging scenario, perhaps by increasing the verbosity and-or choosing to focus on messages from a specific domain; to better focus on the problem area."}),"\n",(0,s.jsx)(o.p,{children:"Changes to console logging are independent of file logging, so you can make change without compromising any files logging streams. It is enabled by default. To change default settings use database\u2019s setLogLevel method to set the required values\u2009\u2014\u2009see Example 1."}),"\n",(0,s.jsx)(o.h4,{id:"example-1-change-console-logging-settings",children:"Example 1. Change Console Logging Settings"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-typescript",children:"Database.setLogLevel(LogDomain.ALL, Loglevel.VERBOSE);\n"})})]})}function u(e={}){const{wrapper:o}={...(0,t.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,o,n)=>{n.d(o,{R:()=>r,x:()=>l});var i=n(6540);const s={},t=i.createContext(s);function r(e){const o=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(t.Provider,{value:o},e.children)}}}]);