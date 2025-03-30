/*! For license information please see molecule-CountingCard-CountingCard-stories.9f742e75.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_a_esports_office=self.webpackChunk_a_esports_office||[]).push([[239],{"../ui/src/components/atom/custom/Box/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>Box});var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),utils=__webpack_require__("../ui/src/lib/utils.ts");function Box({padless,borderless,className,...props}){return(0,jsx_runtime.jsx)("div",{className:(0,utils.cn)("bg-background overflow-hidden rounded-xl",{border:!0!==borderless,"p-4":!0!==padless},className),"data-component":"Box",...props})}Box.__docgenInfo={description:"박스 atom 컴포넌트 반환 메서드\n\n@param {BoxProps} param0: BoxProps\n\n@returns {React.JSX.Element} JSX",methods:[],displayName:"Box",props:{padless:{required:!1,tsType:{name:"boolean"},description:"패딩 여부\n\n@description 기본 패딩을 무시하고 전체 영역을 사용하고 싶을 경우 활성화"},borderless:{required:!1,tsType:{name:"boolean"},description:"테두리 여부\n\n@description 테두리를 없애고 싶을 경우 활성화"}},composes:["DetailedHTMLProps"]}},"../ui/src/components/atom/custom/Spacing/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>Spacing});var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-runtime.js");function Spacing({className}){return(0,jsx_runtime.jsx)("div",{className:`flex-none ${className}`})}Spacing.__docgenInfo={description:"",methods:[],displayName:"Spacing",props:{className:{required:!0,tsType:{name:"string"},description:""}}}},"../ui/src/components/template/StorybookTemplate/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>StorybookTemplate});var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),utils=__webpack_require__("../ui/src/lib/utils.ts");function StorybookTemplate({title,subtitle,children,className,...props}){return(0,jsx_runtime.jsxs)("section",{className:(0,utils.cn)("flex w-full flex-col gap-4",className),"data-component":"StorybookTemplate",...props,children:[(0,jsx_runtime.jsxs)("div",{className:"flex w-full flex-col gap-1",children:[(0,jsx_runtime.jsx)("h2",{className:"text-xl font-bold",children:title}),Array.isArray(subtitle)?subtitle.map((i=>(0,jsx_runtime.jsx)("p",{className:"text-sm text-slate-400",children:i},i))):(0,jsx_runtime.jsx)("p",{className:"text-sm text-slate-400",children:subtitle})]}),children]})}StorybookTemplate.__docgenInfo={description:"스토리북 template 컴포넌트 반환 메서드\n\n@param {StorybookTemplateProps} param0: StorybookTemplateProps\n\n@returns {React.JSX.Element} JSX",methods:[],displayName:"StorybookTemplate",props:{title:{required:!0,tsType:{name:"string"},description:"제목"},subtitle:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:"부제목\n\n@description 배열을 할당할 경우, 한 요소씩 줄바꿈으로 표현함"}},composes:["DetailedHTMLProps"]}},"../ui/src/lib/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/tailwind-merge@3.0.2/node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cn(...inputs){return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}},"../util/src/storybook.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{HX:()=>getArgType,bQ:()=>getParameters,dG:()=>SubCategory});var SubCategory=function(SubCategory){return SubCategory.PROP="Property",SubCategory.EV="Event",SubCategory}({});function getArgType(arg,category){switch(arg){case"children":return{control:{disable:!0},description:"자식 노드",table:{category,subcategory:"Property",type:{summary:"React.ReactNode"}}};case"className":return{control:{disable:!0},description:"클래스",table:{category,subcategory:"Property"},type:"string"};default:return{control:{disable:!0},description:"태그 고유 ID",table:{category,subcategory:"Property"},type:"string"}}}function getParameters(subtitle,body,parameters){return{...parameters,componentSubtitle:subtitle,docs:{description:{component:Array.isArray(body)?body.join("<br />"):body}}}}},"./src/component/molecule/CountingCard/CountingCard.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Diff:()=>Diff,DiffUnit:()=>DiffUnit,Label:()=>Label,Loading:()=>Loading,Playground:()=>Playground,Value:()=>Value,ValueUnit:()=>ValueUnit,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CountingCard_stories});var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),StorybookTemplate=__webpack_require__("../ui/src/components/template/StorybookTemplate/index.ts"),storybook=__webpack_require__("../util/src/storybook.ts"),Box=__webpack_require__("../ui/src/components/atom/custom/Box/index.ts"),Spacing=__webpack_require__("../ui/src/components/atom/custom/Spacing/index.ts"),utils=__webpack_require__("../ui/src/lib/utils.ts");function Skeleton({className,...props}){return(0,jsx_runtime.jsx)("div",{className:(0,utils.cn)("animate-pulse rounded-md bg-muted",className),...props})}Skeleton.__docgenInfo={description:"",methods:[],displayName:"Skeleton"};var react=__webpack_require__("../../node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js");const mergeClasses=(...classes)=>classes.filter(((className,index,array)=>Boolean(className)&&""!==className.trim()&&array.indexOf(className)===index)).join(" ").trim();var defaultAttributes={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Icon=(0,react.forwardRef)((({color="currentColor",size=24,strokeWidth=2,absoluteStrokeWidth,className="",children,iconNode,...rest},ref)=>(0,react.createElement)("svg",{ref,...defaultAttributes,width:size,height:size,stroke:color,strokeWidth:absoluteStrokeWidth?24*Number(strokeWidth)/Number(size):strokeWidth,className:mergeClasses("lucide",className),...rest},[...iconNode.map((([tag,attrs])=>(0,react.createElement)(tag,attrs))),...Array.isArray(children)?children:[children]]))),createLucideIcon=(iconName,iconNode)=>{const Component=(0,react.forwardRef)((({className,...props},ref)=>{return(0,react.createElement)(Icon,{ref,iconNode,className:mergeClasses(`lucide-${string=iconName,string.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,className),...props});var string}));return Component.displayName=`${iconName}`,Component},Triangle=createLucideIcon("Triangle",[["path",{d:"M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"14u9p9"}]]),Circle=createLucideIcon("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);function CountingLoadingCard({...props}){return(0,jsx_runtime.jsxs)(Box.a,{"data-component":"CountingCard",borderless:!0,...props,children:[(0,jsx_runtime.jsx)("p",{className:"text-sm",children:(0,jsx_runtime.jsx)(Skeleton,{className:"h-3 w-1/2"})}),(0,jsx_runtime.jsx)(Spacing.K,{className:"h-2"}),(0,jsx_runtime.jsx)("p",{className:"text-[28px] font-bold",children:(0,jsx_runtime.jsx)(Skeleton,{className:"h-8 w-full"})}),(0,jsx_runtime.jsx)(Spacing.K,{className:"h-2"}),(0,jsx_runtime.jsx)("div",{className:"flex items-center gap-1 text-sm",children:(0,jsx_runtime.jsx)(Skeleton,{className:"h-3 w-2/3"})})]})}function CountingLoadedCard({label,value,valueUnit,diff,diffUnit,...props}){const[countState,setCountState]=(0,react.useState)(0),frameRate=1e3/60,totalFrame=Math.round(1e3/frameRate),tagByMode=(gt,eq,lt)=>diff>0?gt:0===diff?eq:lt;return(0,react.useEffect)((()=>{let currentNumber=0;const counter=setInterval((()=>{const progress=1===(number=++currentNumber/totalFrame)?1:1-2**(-10*number);var number;setCountState(Math.round(value*progress)),1===progress&&clearInterval(counter)}),frameRate)}),[value,frameRate,totalFrame]),(0,jsx_runtime.jsxs)(Box.a,{"data-component":"CountingCard",borderless:!0,...props,children:[(0,jsx_runtime.jsx)("p",{className:"text-sm",children:label}),(0,jsx_runtime.jsxs)("p",{className:"text-[28px] font-bold",children:[valueUnit,countState.toLocaleString("ko-KR")]}),(0,jsx_runtime.jsxs)("div",{className:"flex items-center gap-1 text-sm",children:[tagByMode((0,jsx_runtime.jsx)(Triangle,{fill:"#10B981",size:14,strokeWidth:0}),(0,jsx_runtime.jsx)(Circle,{fill:"current",size:14,strokeWidth:0}),(0,jsx_runtime.jsx)(Triangle,{className:"rotate-180",fill:"#EF4444",size:14,strokeWidth:0})),(0,jsx_runtime.jsxs)("span",{className:(0,utils.cn)({"text-[#10B981]":diff>0,"text-[#EF4444]":diff<0}),children:[diff,diffUnit," ",tagByMode("증가","유지","감소")]})]})]})}function CountingCard({...props}){return!0===props.loading?(0,jsx_runtime.jsx)(CountingLoadingCard,{...props,loading:!0}):(0,jsx_runtime.jsx)(CountingLoadedCard,{...props})}CountingCard.__docgenInfo={description:"카운팅 박스 molecule 컴포넌트 반환 메서드\n\n@param {CountingCardProps} param0: CountingCardProps\n\n@returns {React.JSX.Element} JSX",methods:[],displayName:"CountingCard"};const CountingCard_stories={parameters:{storySource:{source:'/**\n * 카운팅 박스 molecule 컴포넌트 Storybook\n *\n * @author RWB\n * @since 2025.03.17 Mon 23:48:13\n */ import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";\nimport { StorybookTemplate } from \'@a-esports/ui/template/StorybookTemplate\';\nimport { getArgType, getParameters, SubCategory } from \'@a-esports/util/storybook\';\nimport { CountingCard } from \'.\';\nconst componentName = \'CountingCard\';\nconst meta = {\n    argTypes: {\n        children: getArgType(\'children\', componentName),\n        className: getArgType(\'className\', componentName),\n        diff: {\n            description: \'변화량\',\n            table: {\n                category: componentName,\n                subcategory: SubCategory.PROP\n            },\n            type: {\n                name: \'number\',\n                required: true\n            }\n        },\n        diffUnit: {\n            description: \'변화량 단위\',\n            table: {\n                category: componentName,\n                subcategory: SubCategory.PROP\n            },\n            type: \'string\'\n        },\n        id: getArgType(\'id\', componentName),\n        label: {\n            description: \'라벨\',\n            table: {\n                category: componentName,\n                subcategory: SubCategory.PROP\n            },\n            type: {\n                name: \'string\',\n                required: true\n            }\n        },\n        loading: {\n            description: \'로딩 여부\',\n            table: {\n                category: componentName,\n                subcategory: SubCategory.PROP\n            },\n            type: \'boolean\'\n        },\n        value: {\n            description: \'값\',\n            table: {\n                category: componentName,\n                subcategory: SubCategory.PROP\n            },\n            type: {\n                name: \'number\',\n                required: true\n            }\n        },\n        valueUnit: {\n            descriptions: \'값 단위\',\n            table: {\n                category: componentName,\n                subcategory: SubCategory.PROP\n            },\n            type: \'string\'\n        }\n    },\n    component: CountingCard,\n    parameters: getParameters(\'카운팅 박스 컴포넌트\', [\n        \'수치의 증감 여부를 표현하는 컴포넌트입니다. 주로 대시보드에 사용됩니다.\',\n        \'제공되는 다양한 프로퍼티를 통해 수치 현황을 보여줄 수 있습니다.\',\n        \'카운팅 애니메이션이 포함되어있습니다.\'\n    ]),\n    tags: [\n        \'autodocs\'\n    ],\n    title: \'molecule/CountingCard\'\n};\nexport default meta;\nexport const Playground = {\n    args: {\n        diff: 5.8,\n        label: \'최종 수치\',\n        value: 12486\n    }\n};\nexport const Label = {\n    argTypes: {\n        label: {\n            control: {\n                disable: true\n            }\n        }\n    },\n    args: {\n        diff: 5.8,\n        value: 23156\n    },\n    render: (props)=>/*#__PURE__*/ _jsx(StorybookTemplate, {\n            subtitle: "다양한 라벨이 적용된 예시",\n            title: "Label",\n            children: /*#__PURE__*/ _jsxs("div", {\n                className: "grid grid-cols-4",\n                children: [\n                    /*#__PURE__*/ _jsx(CountingCard, {\n                        ...props,\n                        label: "Commits"\n                    }),\n                    /*#__PURE__*/ _jsx(CountingCard, {\n                        ...props,\n                        label: "Stars"\n                    }),\n                    /*#__PURE__*/ _jsx(CountingCard, {\n                        ...props,\n                        label: "Repo"\n                    }),\n                    /*#__PURE__*/ _jsx(CountingCard, {\n                        ...props,\n                        label: "Issues"\n                    })\n                ]\n            })\n        })\n};\nexport const Value = {\n    argTypes: {\n        value: {\n            control: {\n                disable: true\n            }\n        }\n    },\n    args: {\n        diff: 5.8,\n        label: \'최종 수치\'\n    },\n    render: (props)=>/*#__PURE__*/ _jsx(StorybookTemplate, {\n            subtitle: "다양한 값이 적용된 예시",\n            title: "Value",\n            children: /*#__PURE__*/ _jsxs("div", {\n                className: "grid grid-cols-4",\n                children: [\n                    /*#__PURE__*/ _jsx(CountingCard, {\n                        ...props,\n                        value: 448\n                    }),\n                    /*#__PURE__*/ _jsx(CountingCard, {\n                        ...props,\n                        value: 16578\n                    }),\n                    /*#__PURE__*/ _jsx(CountingCard, {\n                        ...props,\n                        value: 3179\n                    }),\n                    /*#__PURE__*/ _jsx(CountingCard, {\n                        ...props,\n                        value: 211546800\n                    })\n                ]\n            })\n        })\n};\nexport const ValueUnit = {\n    argTypes: {\n        valueUnit: {\n            control: {\n                disable: true\n            }\n        }\n    },\n    args: {\n        diff: 5.8,\n        label: \'최종 수치\',\n        value: 23156\n    },\n    render: (props)=>/*#__PURE__*/ _jsx(StorybookTemplate, {\n            subtitle: "다양한 값 단위가 적용된 예시",\n            title: "ValueUnit",\n            children: /*#__PURE__*/ _jsxs("div", {\n                className: "grid grid-cols-4",\n                children: [\n                    /*#__PURE__*/ _jsx(CountingCard, {\n                        ...props,\n                        valueUnit: "K"\n                    }),\n                    /*#__PURE__*/ _jsx(CountingCard, {\n                        ...props,\n                        valueUnit: "$"\n                    }),\n                    /*#__PURE__*/ _jsx(CountingCard, {\n                        ...props,\n                        valueUnit: "₩"\n                    }),\n                    /*#__PURE__*/ _jsx(CountingCard, {\n                        ...props,\n                        valueUnit: "\\xa5"\n                    })\n                ]\n            })\n        })\n};\nexport const Diff = {\n    argTypes: {\n        diff: {\n            control: {\n                disable: true\n            }\n        }\n    },\n    args: {\n        label: \'최종 수치\',\n        value: 23156\n    },\n    render: (props)=>/*#__PURE__*/ _jsx(StorybookTemplate, {\n            subtitle: "다양한 변화량이 적용된 예시",\n            title: "Diff",\n            children: /*#__PURE__*/ _jsxs("div", {\n                className: "grid grid-cols-4",\n                children: [\n                    /*#__PURE__*/ _jsx(CountingCard, {\n                        ...props,\n                        diff: 5.8\n                    }),\n                    /*#__PURE__*/ _jsx(CountingCard, {\n                        ...props,\n                        diff: 12\n                    }),\n                    /*#__PURE__*/ _jsx(CountingCard, {\n                        ...props,\n                        diff: 0\n                    }),\n                    /*#__PURE__*/ _jsx(CountingCard, {\n                        ...props,\n                        diff: -2.8\n                    })\n                ]\n            })\n        })\n};\nexport const DiffUnit = {\n    argTypes: {\n        diff: {\n            control: {\n                disable: true\n            }\n        },\n        diffUnit: {\n            control: {\n                disable: true\n            }\n        }\n    },\n    args: {\n        label: \'최종 수치\',\n        value: 23156\n    },\n    render: (props)=>/*#__PURE__*/ _jsx(StorybookTemplate, {\n            subtitle: "다양한 변화량 단위가 적용된 예시",\n            title: "DiffUnit",\n            children: /*#__PURE__*/ _jsxs("div", {\n                className: "grid grid-cols-4",\n                children: [\n                    /*#__PURE__*/ _jsx(CountingCard, {\n                        ...props,\n                        diff: 5.8,\n                        diffUnit: "%"\n                    }),\n                    /*#__PURE__*/ _jsx(CountingCard, {\n                        ...props,\n                        diff: 12,\n                        diffUnit: "건"\n                    }),\n                    /*#__PURE__*/ _jsx(CountingCard, {\n                        ...props,\n                        diff: 0,\n                        diffUnit: "명"\n                    }),\n                    /*#__PURE__*/ _jsx(CountingCard, {\n                        ...props,\n                        diff: -2.8,\n                        diffUnit: "대"\n                    })\n                ]\n            })\n        })\n};\nexport const Loading = {\n    argTypes: {\n        loading: {\n            control: {\n                disable: true\n            }\n        }\n    },\n    render: (props)=>/*#__PURE__*/ _jsx(StorybookTemplate, {\n            subtitle: "로딩이 적용된 예시",\n            title: "Loading",\n            children: /*#__PURE__*/ _jsxs("div", {\n                className: "grid grid-cols-4",\n                children: [\n                    /*#__PURE__*/ _jsx(CountingCard, {\n                        ...props,\n                        loading: true\n                    }),\n                    /*#__PURE__*/ _jsx(CountingCard, {\n                        ...props,\n                        loading: true\n                    }),\n                    /*#__PURE__*/ _jsx(CountingCard, {\n                        ...props,\n                        loading: true\n                    }),\n                    /*#__PURE__*/ _jsx(CountingCard, {\n                        ...props,\n                        loading: true\n                    })\n                ]\n            })\n        })\n};\n',locationsMap:{playground:{startLoc:{col:26,line:86},endLoc:{col:1,line:92},startBody:{col:26,line:86},endBody:{col:1,line:92}},label:{startLoc:{col:21,line:93},endLoc:{col:1,line:130},startBody:{col:21,line:93},endBody:{col:1,line:130}},value:{startLoc:{col:21,line:131},endLoc:{col:1,line:168},startBody:{col:21,line:131},endBody:{col:1,line:168}},"value-unit":{startLoc:{col:25,line:169},endLoc:{col:1,line:207},startBody:{col:25,line:169},endBody:{col:1,line:207}},diff:{startLoc:{col:20,line:208},endLoc:{col:1,line:245},startBody:{col:20,line:208},endBody:{col:1,line:245}},"diff-unit":{startLoc:{col:24,line:246},endLoc:{col:1,line:292},startBody:{col:24,line:246},endBody:{col:1,line:292}},loading:{startLoc:{col:23,line:293},endLoc:{col:1,line:326},startBody:{col:23,line:293},endBody:{col:1,line:326}}}}},argTypes:{children:(0,storybook.HX)("children","CountingCard"),className:(0,storybook.HX)("className","CountingCard"),diff:{description:"변화량",table:{category:"CountingCard",subcategory:storybook.dG.PROP},type:{name:"number",required:!0}},diffUnit:{description:"변화량 단위",table:{category:"CountingCard",subcategory:storybook.dG.PROP},type:"string"},id:(0,storybook.HX)("id","CountingCard"),label:{description:"라벨",table:{category:"CountingCard",subcategory:storybook.dG.PROP},type:{name:"string",required:!0}},loading:{description:"로딩 여부",table:{category:"CountingCard",subcategory:storybook.dG.PROP},type:"boolean"},value:{description:"값",table:{category:"CountingCard",subcategory:storybook.dG.PROP},type:{name:"number",required:!0}},valueUnit:{descriptions:"값 단위",table:{category:"CountingCard",subcategory:storybook.dG.PROP},type:"string"}},component:CountingCard,parameters:(0,storybook.bQ)("카운팅 박스 컴포넌트",["수치의 증감 여부를 표현하는 컴포넌트입니다. 주로 대시보드에 사용됩니다.","제공되는 다양한 프로퍼티를 통해 수치 현황을 보여줄 수 있습니다.","카운팅 애니메이션이 포함되어있습니다."]),tags:["autodocs"],title:"molecule/CountingCard"},Playground={args:{diff:5.8,label:"최종 수치",value:12486}},Label={argTypes:{label:{control:{disable:!0}}},args:{diff:5.8,value:23156},render:props=>(0,jsx_runtime.jsx)(StorybookTemplate.x,{subtitle:"다양한 라벨이 적용된 예시",title:"Label",children:(0,jsx_runtime.jsxs)("div",{className:"grid grid-cols-4",children:[(0,jsx_runtime.jsx)(CountingCard,{...props,label:"Commits"}),(0,jsx_runtime.jsx)(CountingCard,{...props,label:"Stars"}),(0,jsx_runtime.jsx)(CountingCard,{...props,label:"Repo"}),(0,jsx_runtime.jsx)(CountingCard,{...props,label:"Issues"})]})})},Value={argTypes:{value:{control:{disable:!0}}},args:{diff:5.8,label:"최종 수치"},render:props=>(0,jsx_runtime.jsx)(StorybookTemplate.x,{subtitle:"다양한 값이 적용된 예시",title:"Value",children:(0,jsx_runtime.jsxs)("div",{className:"grid grid-cols-4",children:[(0,jsx_runtime.jsx)(CountingCard,{...props,value:448}),(0,jsx_runtime.jsx)(CountingCard,{...props,value:16578}),(0,jsx_runtime.jsx)(CountingCard,{...props,value:3179}),(0,jsx_runtime.jsx)(CountingCard,{...props,value:211546800})]})})},ValueUnit={argTypes:{valueUnit:{control:{disable:!0}}},args:{diff:5.8,label:"최종 수치",value:23156},render:props=>(0,jsx_runtime.jsx)(StorybookTemplate.x,{subtitle:"다양한 값 단위가 적용된 예시",title:"ValueUnit",children:(0,jsx_runtime.jsxs)("div",{className:"grid grid-cols-4",children:[(0,jsx_runtime.jsx)(CountingCard,{...props,valueUnit:"K"}),(0,jsx_runtime.jsx)(CountingCard,{...props,valueUnit:"$"}),(0,jsx_runtime.jsx)(CountingCard,{...props,valueUnit:"₩"}),(0,jsx_runtime.jsx)(CountingCard,{...props,valueUnit:"¥"})]})})},Diff={argTypes:{diff:{control:{disable:!0}}},args:{label:"최종 수치",value:23156},render:props=>(0,jsx_runtime.jsx)(StorybookTemplate.x,{subtitle:"다양한 변화량이 적용된 예시",title:"Diff",children:(0,jsx_runtime.jsxs)("div",{className:"grid grid-cols-4",children:[(0,jsx_runtime.jsx)(CountingCard,{...props,diff:5.8}),(0,jsx_runtime.jsx)(CountingCard,{...props,diff:12}),(0,jsx_runtime.jsx)(CountingCard,{...props,diff:0}),(0,jsx_runtime.jsx)(CountingCard,{...props,diff:-2.8})]})})},DiffUnit={argTypes:{diff:{control:{disable:!0}},diffUnit:{control:{disable:!0}}},args:{label:"최종 수치",value:23156},render:props=>(0,jsx_runtime.jsx)(StorybookTemplate.x,{subtitle:"다양한 변화량 단위가 적용된 예시",title:"DiffUnit",children:(0,jsx_runtime.jsxs)("div",{className:"grid grid-cols-4",children:[(0,jsx_runtime.jsx)(CountingCard,{...props,diff:5.8,diffUnit:"%"}),(0,jsx_runtime.jsx)(CountingCard,{...props,diff:12,diffUnit:"건"}),(0,jsx_runtime.jsx)(CountingCard,{...props,diff:0,diffUnit:"명"}),(0,jsx_runtime.jsx)(CountingCard,{...props,diff:-2.8,diffUnit:"대"})]})})},Loading={argTypes:{loading:{control:{disable:!0}}},render:props=>(0,jsx_runtime.jsx)(StorybookTemplate.x,{subtitle:"로딩이 적용된 예시",title:"Loading",children:(0,jsx_runtime.jsxs)("div",{className:"grid grid-cols-4",children:[(0,jsx_runtime.jsx)(CountingCard,{...props,loading:!0}),(0,jsx_runtime.jsx)(CountingCard,{...props,loading:!0}),(0,jsx_runtime.jsx)(CountingCard,{...props,loading:!0}),(0,jsx_runtime.jsx)(CountingCard,{...props,loading:!0})]})})},__namedExportsOrder=["Playground","Label","Value","ValueUnit","Diff","DiffUnit","Loading"];Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  args: {\n    diff: 5.8,\n    label: '최종 수치',\n    value: 12486\n  }\n}",...Playground.parameters?.docs?.source}}},Label.parameters={...Label.parameters,docs:{...Label.parameters?.docs,source:{originalSource:'{\n  argTypes: {\n    label: {\n      control: {\n        disable: true\n      }\n    }\n  },\n  args: {\n    diff: 5.8,\n    value: 23156\n  },\n  render: (props: CountingCardProps) => <StorybookTemplate subtitle="다양한 라벨이 적용된 예시" title="Label">\n      <div className="grid grid-cols-4">\n        <CountingCard {...props} label="Commits" />\n        <CountingCard {...props} label="Stars" />\n        <CountingCard {...props} label="Repo" />\n        <CountingCard {...props} label="Issues" />\n      </div>\n    </StorybookTemplate>\n}',...Label.parameters?.docs?.source}}},Value.parameters={...Value.parameters,docs:{...Value.parameters?.docs,source:{originalSource:'{\n  argTypes: {\n    value: {\n      control: {\n        disable: true\n      }\n    }\n  },\n  args: {\n    diff: 5.8,\n    label: \'최종 수치\'\n  },\n  render: (props: CountingCardProps) => <StorybookTemplate subtitle="다양한 값이 적용된 예시" title="Value">\n      <div className="grid grid-cols-4">\n        <CountingCard {...props} value={448} />\n        <CountingCard {...props} value={16578} />\n        <CountingCard {...props} value={3179} />\n        <CountingCard {...props} value={211546800} />\n      </div>\n    </StorybookTemplate>\n}',...Value.parameters?.docs?.source}}},ValueUnit.parameters={...ValueUnit.parameters,docs:{...ValueUnit.parameters?.docs,source:{originalSource:'{\n  argTypes: {\n    valueUnit: {\n      control: {\n        disable: true\n      }\n    }\n  },\n  args: {\n    diff: 5.8,\n    label: \'최종 수치\',\n    value: 23156\n  },\n  render: (props: CountingCardProps) => <StorybookTemplate subtitle="다양한 값 단위가 적용된 예시" title="ValueUnit">\n      <div className="grid grid-cols-4">\n        <CountingCard {...props} valueUnit="K" />\n        <CountingCard {...props} valueUnit="$" />\n        <CountingCard {...props} valueUnit="₩" />\n        <CountingCard {...props} valueUnit="¥" />\n      </div>\n    </StorybookTemplate>\n}',...ValueUnit.parameters?.docs?.source}}},Diff.parameters={...Diff.parameters,docs:{...Diff.parameters?.docs,source:{originalSource:'{\n  argTypes: {\n    diff: {\n      control: {\n        disable: true\n      }\n    }\n  },\n  args: {\n    label: \'최종 수치\',\n    value: 23156\n  },\n  render: (props: CountingCardProps) => <StorybookTemplate subtitle="다양한 변화량이 적용된 예시" title="Diff">\n      <div className="grid grid-cols-4">\n        <CountingCard {...props} diff={5.8} />\n        <CountingCard {...props} diff={12} />\n        <CountingCard {...props} diff={0} />\n        <CountingCard {...props} diff={-2.8} />\n      </div>\n    </StorybookTemplate>\n}',...Diff.parameters?.docs?.source}}},DiffUnit.parameters={...DiffUnit.parameters,docs:{...DiffUnit.parameters?.docs,source:{originalSource:'{\n  argTypes: {\n    diff: {\n      control: {\n        disable: true\n      }\n    },\n    diffUnit: {\n      control: {\n        disable: true\n      }\n    }\n  },\n  args: {\n    label: \'최종 수치\',\n    value: 23156\n  },\n  render: (props: CountingCardProps) => <StorybookTemplate subtitle="다양한 변화량 단위가 적용된 예시" title="DiffUnit">\n      <div className="grid grid-cols-4">\n        <CountingCard {...props} diff={5.8} diffUnit="%" />\n        <CountingCard {...props} diff={12} diffUnit="건" />\n        <CountingCard {...props} diff={0} diffUnit="명" />\n        <CountingCard {...props} diff={-2.8} diffUnit="대" />\n      </div>\n    </StorybookTemplate>\n}',...DiffUnit.parameters?.docs?.source}}},Loading.parameters={...Loading.parameters,docs:{...Loading.parameters?.docs,source:{originalSource:'{\n  argTypes: {\n    loading: {\n      control: {\n        disable: true\n      }\n    }\n  },\n  render: (props: CountingCardProps) => <StorybookTemplate subtitle="로딩이 적용된 예시" title="Loading">\n      <div className="grid grid-cols-4">\n        <CountingCard {...props} loading />\n        <CountingCard {...props} loading />\n        <CountingCard {...props} loading />\n        <CountingCard {...props} loading />\n      </div>\n    </StorybookTemplate>\n}',...Loading.parameters?.docs?.source}}}}}]);