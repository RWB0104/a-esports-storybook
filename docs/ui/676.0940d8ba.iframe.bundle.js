(self.webpackChunkfront_monorepo=self.webpackChunkfront_monorepo||[]).push([[676],{"./node_modules/.pnpm/@storybook+addon-docs@8.6.12_@types+react@19.0.8_storybook@8.6.12_prettier@3.5.3_/node_modules/@storybook/addon-docs/dist/DocsRenderer-CFRXHY34.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{DocsRenderer:()=>DocsRenderer});var react=__webpack_require__("./node_modules/.pnpm/next@15.3.0_@babel+core@7.26.10_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/index.js"),dist=__webpack_require__("./node_modules/.pnpm/@storybook+blocks@8.6.12_react-dom@19.1.0_react@19.1.0__react@19.1.0_storybook@8.6.12_prettier@3.5.3_/node_modules/@storybook/blocks/dist/index.mjs"),client=__webpack_require__("./node_modules/.pnpm/next@15.3.0_@babel+core@7.26.10_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react-dom/client.js"),nodes=new Map;var WithCallback=({callback,children})=>{let once=react.useRef();return react.useLayoutEffect((()=>{once.current!==callback&&(once.current=callback,callback())}),[callback]),children};typeof Promise.withResolvers>"u"&&(Promise.withResolvers=()=>{let resolve=null,reject=null;return{promise:new Promise(((res,rej)=>{resolve=res,reject=rej})),resolve,reject}});var renderElement=async(node,el,rootOptions)=>{let root=await getReactRoot(el,rootOptions);if(function getIsReactActEnvironment(){return globalThis.IS_REACT_ACT_ENVIRONMENT}())return void root.render(node);let{promise,resolve}=Promise.withResolvers();return root.render(react.createElement(WithCallback,{callback:resolve},node)),promise},getReactRoot=async(el,rootOptions)=>{let root=nodes.get(el);return root||(root=client.createRoot(el,rootOptions),nodes.set(el,root)),root},defaultComponents={code:dist.XA,a:dist.zE,...dist.Sw},ErrorBoundary=class extends react.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react.createElement(react.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=dist.kQ;return new Promise(((resolve,reject)=>{__webpack_require__.e(392).then(__webpack_require__.bind(__webpack_require__,"./node_modules/.pnpm/@mdx-js+react@3.1.0_@types+react@19.0.8_react@19.1.0/node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>renderElement(react.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react.createElement(MDXProvider,{components},react.createElement(TDocs,{context,docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{(el=>{let root=nodes.get(el);root&&(root.unmount(),nodes.delete(el))})(element)}}};__webpack_require__("./node_modules/.pnpm/@storybook+addon-docs@8.6.12_@types+react@19.0.8_storybook@8.6.12_prettier@3.5.3_/node_modules/@storybook/addon-docs/dist/chunk-H6MOWX77.mjs")},"./node_modules/.pnpm/@storybook+blocks@8.6.12_react-dom@19.1.0_react@19.1.0__react@19.1.0_storybook@8.6.12_prettier@3.5.3_/node_modules/@storybook/blocks/dist sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/.pnpm/@storybook+blocks@8.6.12_react-dom@19.1.0_react@19.1.0__react@19.1.0_storybook@8.6.12_prettier@3.5.3_/node_modules/@storybook/blocks/dist sync recursive",module.exports=webpackEmptyContext},"./node_modules/.pnpm/@storybook+core@8.6.12_prettier@3.5.3_storybook@8.6.12_prettier@3.5.3_/node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/.pnpm/@storybook+core@8.6.12_prettier@3.5.3_storybook@8.6.12_prettier@3.5.3_/node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext}}]);