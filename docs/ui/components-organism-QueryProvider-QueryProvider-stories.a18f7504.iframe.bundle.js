"use strict";(self.webpackChunk_a_esports_ui=self.webpackChunk_a_esports_ui||[]).push([[640],{"../util/src/storybook.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{HX:()=>getArgType,bQ:()=>getParameters,dG:()=>SubCategory});var SubCategory=function(SubCategory){return SubCategory.PROP="Property",SubCategory.EV="Event",SubCategory}({});function getArgType(arg,category){switch(arg){case"children":return{control:{disable:!0},description:"자식 노드",table:{category,subcategory:"Property",type:{summary:"React.ReactNode"}}};case"className":return{control:{disable:!0},description:"클래스",table:{category,subcategory:"Property"},type:"string"};default:return{control:{disable:!0},description:"태그 고유 ID",table:{category,subcategory:"Property"},type:"string"}}}function getParameters(subtitle,body,parameters){return{...parameters,componentSubtitle:subtitle,docs:{description:{component:Array.isArray(body)?body.join("<br />"):body}}}}},"./src/components/organism/QueryProvider/QueryProvider.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>QueryProvider_stories});var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),storybook=__webpack_require__("../util/src/storybook.ts");function PreviewlessTemplate({...props}){return(0,jsx_runtime.jsx)("div",{className:"absolute top-0 left-0 flex size-full items-center justify-center","data-component":"PreviewlessTemplate",...props,children:(0,jsx_runtime.jsx)("p",{children:"This component does not have a preview."})})}PreviewlessTemplate.__docgenInfo={description:"프리뷰리스 template 컴포넌트 반환 메서드\n\n@param {PreviewlessTemplateProps} param0: PreviewlessTemplateProps\n\n@returns {React.JSX.Element} JSX",methods:[],displayName:"PreviewlessTemplate"};var modern_queryClient=__webpack_require__("../../node_modules/.pnpm/@tanstack+query-core@5.67.2/node_modules/@tanstack/query-core/build/modern/queryClient.js"),QueryClientProvider=__webpack_require__("../../node_modules/.pnpm/@tanstack+react-query@5.67.2_react@19.0.0/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js"),modern=__webpack_require__("../../node_modules/.pnpm/@tanstack+react-query-devtools@5.67.2_@tanstack+react-query@5.67.2_react@19.0.0__react@19.0.0/node_modules/@tanstack/react-query-devtools/build/modern/index.js"),react=__webpack_require__("../../node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js");function QueryProvider({defaultClient,children}){const queryClient=(0,react.useMemo)((()=>null!=defaultClient?defaultClient:new modern_queryClient.E),[defaultClient]);return(0,jsx_runtime.jsxs)(QueryClientProvider.Ht,{client:queryClient,children:[children,(0,jsx_runtime.jsx)(modern.E,{})]})}QueryProvider.__docgenInfo={description:"react-query 프로바이더 organism 컴포넌트 반환 메서드\n\n@param {QueryProviderProps} param0: QueryProviderProps\n\n@returns {React.JSX.Element}",methods:[],displayName:"QueryProvider",props:{defaultClient:{required:!1,tsType:{name:"QueryClient"},description:"기본 query-client"}},composes:["PropsWithChildren"]};const QueryProvider_stories={parameters:{storySource:{source:"/**\n * react-query 프로바이더 organism 컴포넌트 Storybook\n *\n * @author RWB\n * @since 2025.03.07 Fri 23:23:14\n */ import { jsx as _jsx } from \"react/jsx-runtime\";\nimport { getParameters, SubCategory } from '@a-esports/util/storybook';\nimport PreviewlessTemplate from '../../template/PreviewlessTemplate/PreviewlessTemplate.tsx';\nimport QueryProvider from './QueryProvider.tsx';\nconst componentName = 'QueryProvider';\nconst meta = {\n    argTypes: {\n        defaultClient: {\n            control: {\n                disable: true\n            },\n            description: '기본 react-query 객체',\n            table: {\n                category: componentName,\n                subcategory: SubCategory.PROP\n            }\n        }\n    },\n    component: QueryProvider,\n    parameters: getParameters('react-query 프로바이더 컴포넌트', [\n        '[@tanstack/react-query](https://tanstack.com/query/v5/docs/framework/react/overview)를 사용하기 위한 프로바이더 컴포넌트입니다.',\n        '단순 로직을 위한 컴포넌트로, 별도의 디자인이 존재하지 않습니다.'\n    ]),\n    tags: [\n        'autodocs'\n    ],\n    title: 'organism/QueryProvider'\n};\nexport default meta;\nexport const Playground = {\n    render: ()=>/*#__PURE__*/ _jsx(PreviewlessTemplate, {})\n};\n",locationsMap:{playground:{startLoc:{col:26,line:35},endLoc:{col:1,line:37},startBody:{col:26,line:35},endBody:{col:1,line:37}}}}},argTypes:{defaultClient:{control:{disable:!0},description:"기본 react-query 객체",table:{category:"QueryProvider",subcategory:storybook.dG.PROP}}},component:QueryProvider,parameters:(0,storybook.bQ)("react-query 프로바이더 컴포넌트",["[@tanstack/react-query](https://tanstack.com/query/v5/docs/framework/react/overview)를 사용하기 위한 프로바이더 컴포넌트입니다.","단순 로직을 위한 컴포넌트로, 별도의 디자인이 존재하지 않습니다."]),tags:["autodocs"],title:"organism/QueryProvider"},Playground={render:()=>(0,jsx_runtime.jsx)(PreviewlessTemplate,{})},__namedExportsOrder=["Playground"];Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  render: () => <PreviewlessTemplate />\n}",...Playground.parameters?.docs?.source}}}}}]);