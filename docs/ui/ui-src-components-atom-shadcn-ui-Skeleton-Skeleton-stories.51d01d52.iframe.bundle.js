"use strict";(self.webpackChunkfront_monorepo=self.webpackChunkfront_monorepo||[]).push([[326],{"./packages/ui/src/components/atom/custom/Spacing/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>Spacing});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@15.3.0_@babel+core@7.26.10_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-runtime.js");function Spacing({className}){return(0,jsx_runtime.jsx)("div",{className:`flex-none ${className}`})}Spacing.__docgenInfo={description:"",methods:[],displayName:"Spacing",props:{className:{required:!0,tsType:{name:"string"},description:""}}}},"./packages/ui/src/components/atom/shadcn-ui/Skeleton/Skeleton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/next@15.3.0_@babel+core@7.26.10_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),_a_esports_ui_components_atom_custom_Spacing__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/ui/src/components/atom/custom/Spacing/index.ts"),_a_esports_ui_components_template_StorybookTemplate__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/ui/src/components/template/StorybookTemplate/index.ts"),_a_esports_util_storybook__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/util/src/storybook.ts"),___WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/ui/src/components/atom/shadcn-ui/Skeleton/index.ts");const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:'/**\n * 스켈레톤 atom 컴포넌트 Storybook\n *\n * @author RWB\n * @since 2025.03.18 Tue 17:41:56\n */ import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";\nimport { Spacing } from \'@a-esports/ui/components/atom/custom/Spacing\';\nimport { StorybookTemplate } from \'@a-esports/ui/components/template/StorybookTemplate\';\nimport { getArgType, getParameters } from \'@a-esports/util/storybook\';\nimport { Skeleton } from \'.\';\nconst componentName = \'Skeleton\';\nconst meta = {\n    argTypes: {\n        children: getArgType(\'children\', componentName),\n        className: getArgType(\'children\', componentName),\n        id: getArgType(\'id\', componentName)\n    },\n    component: Skeleton,\n    parameters: getParameters(\'스켈레톤 컴포넌트\', [\n        \'더미 혹은 로딩 UI를 표현하기 위한 스켈레톤 컴포넌트입니다.\',\n        \'`className`을 통해 다양한 형태를 지정할 수 있습니다.\'\n    ]),\n    tags: [\n        \'autodocs\'\n    ],\n    title: \'global-ui/atom/Skeleton\'\n};\nexport default meta;\nexport const Playground = {\n    args: {\n        className: \'h-20 w-40\'\n    }\n};\nexport const Example = {\n    render: ()=>/*#__PURE__*/ _jsx(StorybookTemplate, {\n            subtitle: "다양한 예시",\n            title: "Example",\n            children: /*#__PURE__*/ _jsxs("div", {\n                className: "flex gap-8",\n                children: [\n                    /*#__PURE__*/ _jsxs("div", {\n                        children: [\n                            /*#__PURE__*/ _jsx(Skeleton, {\n                                className: "h-10 w-60"\n                            }),\n                            /*#__PURE__*/ _jsx(Spacing, {\n                                className: "h-4"\n                            }),\n                            /*#__PURE__*/ _jsx(Skeleton, {\n                                className: "h-5 w-20"\n                            }),\n                            /*#__PURE__*/ _jsx(Spacing, {\n                                className: "h-4"\n                            }),\n                            /*#__PURE__*/ _jsx(Skeleton, {\n                                className: "h-96 w-60"\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ _jsx("div", {\n                        children: /*#__PURE__*/ _jsxs("div", {\n                            className: "flex gap-4",\n                            children: [\n                                /*#__PURE__*/ _jsx(Skeleton, {\n                                    className: "size-10 rounded-full"\n                                }),\n                                /*#__PURE__*/ _jsxs("div", {\n                                    children: [\n                                        /*#__PURE__*/ _jsx(Skeleton, {\n                                            className: "h-4 w-40"\n                                        }),\n                                        /*#__PURE__*/ _jsx(Spacing, {\n                                            className: "h-1"\n                                        }),\n                                        /*#__PURE__*/ _jsx(Skeleton, {\n                                            className: "h-4 w-40"\n                                        })\n                                    ]\n                                })\n                            ]\n                        })\n                    })\n                ]\n            })\n        })\n};\n',locationsMap:{playground:{startLoc:{col:26,line:29},endLoc:{col:1,line:33},startBody:{col:26,line:29},endBody:{col:1,line:33}},example:{startLoc:{col:23,line:34},endLoc:{col:1,line:86},startBody:{col:23,line:34},endBody:{col:1,line:86}}}}},argTypes:{children:(0,_a_esports_util_storybook__WEBPACK_IMPORTED_MODULE_3__.HX)("children","Skeleton"),className:(0,_a_esports_util_storybook__WEBPACK_IMPORTED_MODULE_3__.HX)("children","Skeleton"),id:(0,_a_esports_util_storybook__WEBPACK_IMPORTED_MODULE_3__.HX)("id","Skeleton")},component:___WEBPACK_IMPORTED_MODULE_4__.E,parameters:(0,_a_esports_util_storybook__WEBPACK_IMPORTED_MODULE_3__.bQ)("스켈레톤 컴포넌트",["더미 혹은 로딩 UI를 표현하기 위한 스켈레톤 컴포넌트입니다.","`className`을 통해 다양한 형태를 지정할 수 있습니다."]),tags:["autodocs"],title:"global-ui/atom/Skeleton"},Playground={args:{className:"h-20 w-40"}},Example={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_a_esports_ui_components_template_StorybookTemplate__WEBPACK_IMPORTED_MODULE_2__.x,{subtitle:"다양한 예시",title:"Example",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex gap-8",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.E,{className:"h-10 w-60"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_a_esports_ui_components_atom_custom_Spacing__WEBPACK_IMPORTED_MODULE_1__.K,{className:"h-4"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.E,{className:"h-5 w-20"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_a_esports_ui_components_atom_custom_Spacing__WEBPACK_IMPORTED_MODULE_1__.K,{className:"h-4"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.E,{className:"h-96 w-60"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"flex gap-4",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.E,{className:"size-10 rounded-full"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.E,{className:"h-4 w-40"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_a_esports_ui_components_atom_custom_Spacing__WEBPACK_IMPORTED_MODULE_1__.K,{className:"h-1"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.E,{className:"h-4 w-40"})]})]})})]})})},__namedExportsOrder=["Playground","Example"];Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  args: {\n    className: 'h-20 w-40'\n  }\n}",...Playground.parameters?.docs?.source}}},Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:'{\n  render: () => <StorybookTemplate subtitle="다양한 예시" title="Example">\n      <div className="flex gap-8">\n        <div>\n          <Skeleton className="h-10 w-60" />\n          <Spacing className="h-4" />\n          <Skeleton className="h-5 w-20" />\n          <Spacing className="h-4" />\n          <Skeleton className="h-96 w-60" />\n        </div>\n\n        <div>\n          <div className="flex gap-4">\n            <Skeleton className="size-10 rounded-full" />\n\n            <div>\n              <Skeleton className="h-4 w-40" />\n              <Spacing className="h-1" />\n              <Skeleton className="h-4 w-40" />\n            </div>\n          </div>\n        </div>\n      </div>\n    </StorybookTemplate>\n}',...Example.parameters?.docs?.source}}}},"./packages/ui/src/components/atom/shadcn-ui/Skeleton/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Skeleton});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@15.3.0_@babel+core@7.26.10_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),utils=__webpack_require__("./packages/ui/src/lib/utils.ts");function Skeleton({className,...props}){return(0,jsx_runtime.jsx)("div",{className:(0,utils.cn)("animate-pulse rounded-md bg-muted",className),...props})}Skeleton.__docgenInfo={description:"",methods:[],displayName:"Skeleton"}},"./packages/ui/src/components/template/StorybookTemplate/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>StorybookTemplate});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@15.3.0_@babel+core@7.26.10_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),utils=__webpack_require__("./packages/ui/src/lib/utils.ts");function StorybookTemplate({title,subtitle,children,className,...props}){return(0,jsx_runtime.jsxs)("section",{className:(0,utils.cn)("flex w-full flex-col gap-4",className),"data-component":"StorybookTemplate",...props,children:[(0,jsx_runtime.jsxs)("div",{className:"flex w-full flex-col gap-1",children:[(0,jsx_runtime.jsx)("h2",{className:"text-xl font-bold",children:title}),Array.isArray(subtitle)?subtitle.map((i=>(0,jsx_runtime.jsx)("p",{className:"text-sm text-slate-400",children:i},i))):(0,jsx_runtime.jsx)("p",{className:"text-sm text-slate-400",children:subtitle})]}),children]})}StorybookTemplate.__docgenInfo={description:"스토리북 template 컴포넌트 반환 메서드\n\n@param {StorybookTemplateProps} param0: StorybookTemplateProps\n\n@returns {React.JSX.Element} JSX",methods:[],displayName:"StorybookTemplate",props:{title:{required:!0,tsType:{name:"string"},description:"제목"},subtitle:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:"부제목\n\n@description 배열을 할당할 경우, 한 요소씩 줄바꿈으로 표현함"}},composes:["DetailedHTMLProps"]}},"./packages/ui/src/lib/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/tailwind-merge@3.2.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cn(...inputs){return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}},"./packages/util/src/storybook.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{HX:()=>getArgType,bQ:()=>getParameters,dG:()=>SubCategory});var SubCategory=function(SubCategory){return SubCategory.PROP="Property",SubCategory.EV="Event",SubCategory}({});function getArgType(arg,category){switch(arg){case"children":return{control:{disable:!0},description:"자식 노드",table:{category,subcategory:"Property",type:{summary:"React.ReactNode"}}};case"className":return{control:{disable:!0},description:"클래스",table:{category,subcategory:"Property"},type:"string"};default:return{control:{disable:!0},description:"태그 고유 ID",table:{category,subcategory:"Property"},type:"string"}}}function getParameters(subtitle,body,parameters){return{...parameters,componentSubtitle:subtitle,docs:{description:{component:Array.isArray(body)?body.join("<br />"):body}}}}}}]);