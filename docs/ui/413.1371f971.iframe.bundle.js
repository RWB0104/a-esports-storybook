"use strict";(self.webpackChunkfront_monorepo=self.webpackChunkfront_monorepo||[]).push([[413],{"./node_modules/.pnpm/@storybook+react-dom-shim@8.6.4_react-dom@19.0.0_react@19.0.0__react@19.0.0_storybook@8.6.4_prettier@3.5.3_/node_modules/@storybook/react-dom-shim/dist/react-18.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{renderElement:()=>renderElement,unmountElement:()=>unmountElement});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@15.3.0_@babel+core@7.26.10_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js"),react_dom_client__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/next@15.3.0_@babel+core@7.26.10_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react-dom/client.js"),nodes=new Map;var WithCallback=({callback,children})=>{let once=react__WEBPACK_IMPORTED_MODULE_0__.useRef();return react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect((()=>{once.current!==callback&&(once.current=callback,callback())}),[callback]),children};typeof Promise.withResolvers>"u"&&(Promise.withResolvers=()=>{let resolve=null,reject=null;return{promise:new Promise(((res,rej)=>{resolve=res,reject=rej})),resolve,reject}});var renderElement=async(node,el,rootOptions)=>{let root=await getReactRoot(el,rootOptions);if(function getIsReactActEnvironment(){return globalThis.IS_REACT_ACT_ENVIRONMENT}())return void root.render(node);let{promise,resolve}=Promise.withResolvers();return root.render(react__WEBPACK_IMPORTED_MODULE_0__.createElement(WithCallback,{callback:resolve},node)),promise},unmountElement=(el,shouldUseNewRootApi)=>{let root=nodes.get(el);root&&(root.unmount(),nodes.delete(el))},getReactRoot=async(el,rootOptions)=>{let root=nodes.get(el);return root||(root=react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(el,rootOptions),nodes.set(el,root)),root}}}]);