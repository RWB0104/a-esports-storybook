"use strict";(self.webpackChunk_a_esports_ui=self.webpackChunk_a_esports_ui||[]).push([[564],{"../util/src/storybook.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{HX:()=>getArgType,bQ:()=>getParameters,dG:()=>SubCategory});var SubCategory=function(SubCategory){return SubCategory.PROP="Property",SubCategory.EV="Event",SubCategory}({});function getArgType(arg,category){switch(arg){case"children":return{control:{disable:!0},description:"자식 노드",table:{category,subcategory:"Property",type:{summary:"React.ReactNode"}}};case"className":return{control:{disable:!0},description:"클래스",table:{category,subcategory:"Property"},type:"string"};default:return{control:{disable:!0},description:"태그 고유 ID",table:{category,subcategory:"Property"},type:"string"}}}function getParameters(subtitle,body,parameters){return{...parameters,componentSubtitle:subtitle,docs:{description:{component:Array.isArray(body)?body.join("<br />"):body}}}}},"./src/components/atom/shadcn-ui/TextField/TextField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Disabled:()=>Disabled,Placeholder:()=>Placeholder,Playground:()=>Playground,ReadOnly:()=>ReadOnly,Type:()=>Type,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TextField_stories});var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),StorybookTemplate=__webpack_require__("./src/components/template/StorybookTemplate/index.ts"),storybook=__webpack_require__("../util/src/storybook.ts"),TextField=__webpack_require__("./src/components/atom/shadcn-ui/TextField/TextField.tsx");const types=["date","datetime-local","email","file","month","number","password","tel","text","time","url","week"];function Component({type,...props}){return(0,jsx_runtime.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,jsx_runtime.jsx)("p",{className:"text-sm",children:type}),(0,jsx_runtime.jsx)(TextField.A,{placeholder:"this is placeholder",type,...props})]},type)}const TextField_stories={parameters:{storySource:{source:"/**\n * 텍스트 필드 atom 컴포넌트 Storybook\n *\n * @author RWB\n * @since 2025.03.11 Tue 09:03:10\n */ import { jsx as _jsx, jsxs as _jsxs } from \"react/jsx-runtime\";\nimport { StorybookTemplate } from '@a-esports/ui/template/StorybookTemplate';\nimport { getArgType, getParameters, SubCategory } from '@a-esports/util/storybook';\nimport { TextField } from './index.ts';\nconst componentName = 'TextField';\nconst types = [\n    'date',\n    'datetime-local',\n    'email',\n    'file',\n    'month',\n    'number',\n    'password',\n    'tel',\n    'text',\n    'time',\n    'url',\n    'week'\n];\nconst meta = {\n    argTypes: {\n        className: getArgType('className', componentName),\n        defaultValue: {\n            control: 'text',\n            description: '초기 렌더링 시 지정되는 초기값',\n            table: {\n                category: componentName,\n                subcategory: SubCategory.PROP\n            }\n        },\n        disabled: {\n            control: 'boolean',\n            description: '비활성화 여부',\n            table: {\n                category: componentName,\n                subcategory: SubCategory.PROP\n            }\n        },\n        id: getArgType('id', componentName),\n        onChange: {\n            description: '값 변경 이벤트',\n            table: {\n                category: componentName,\n                subcategory: SubCategory.EV,\n                type: {\n                    detail: '(e: ChangeEvent<HTMLInputElement>) => void',\n                    summary: 'ChangeEventHandler<HTMLInputElement>'\n                }\n            }\n        },\n        readOnly: {\n            control: 'boolean',\n            description: '읽기 전용 여부',\n            table: {\n                category: componentName,\n                subcategory: SubCategory.PROP\n            }\n        },\n        type: {\n            control: 'select',\n            description: '텍스트필드 타입 (checkbox, image와 같은 일부 타입은 디자인이 정의되지 않음)',\n            options: types,\n            table: {\n                category: componentName,\n                subcategory: SubCategory.PROP,\n                type: {\n                    summary: types.join(' | ')\n                }\n            }\n        },\n        value: {\n            control: 'text',\n            description: '컴포넌트의 값 (상태 핸들링 필요)',\n            table: {\n                category: componentName,\n                subcategory: SubCategory.PROP\n            }\n        }\n    },\n    component: TextField,\n    parameters: getParameters('텍스트필드 컴포넌트', [\n        '기본적인 Input 컴포넌트를 확장한 텍스트필드 컴포넌트입니다.'\n    ]),\n    tags: [\n        'autodocs'\n    ],\n    title: 'atom/TextField'\n};\n/**\n * 컴포넌트 반환 메서드\n *\n * @param {TextFieldProps} param0: TextFieldProps\n *\n * @returns {React.JSX.Element} JSX\n */ function Component({ type, ...props }) {\n    return /*#__PURE__*/ _jsxs(\"div\", {\n        className: \"flex flex-col gap-2\",\n        children: [\n            /*#__PURE__*/ _jsx(\"p\", {\n                className: \"text-sm\",\n                children: type\n            }),\n            /*#__PURE__*/ _jsx(TextField, {\n                placeholder: \"this is placeholder\",\n                type: type,\n                ...props\n            })\n        ]\n    }, type);\n}\nexport default meta;\nexport const Playground = {};\nexport const Type = {\n    argTypes: {\n        type: {\n            control: {\n                disable: true\n            }\n        }\n    },\n    render: (props)=>/*#__PURE__*/ _jsx(StorybookTemplate, {\n            subtitle: \"다양한 input type이 적용된 예시\",\n            title: \"Type\",\n            children: types.map((type)=>/*#__PURE__*/ _jsx(Component, {\n                    ...props,\n                    type: type\n                }, type))\n        })\n};\nexport const Placeholder = {\n    argTypes: {\n        placeholder: {\n            control: {\n                disable: true\n            }\n        }\n    },\n    render: (props)=>/*#__PURE__*/ _jsx(StorybookTemplate, {\n            subtitle: \"placeholder가 적용된 예시. 일부 타입은 placeholder를 무시함\",\n            title: \"Placeholder\",\n            children: types.map((type)=>/*#__PURE__*/ _jsx(Component, {\n                    ...props,\n                    placeholder: \"this is placehold\",\n                    type: type\n                }, type))\n        })\n};\nexport const Disabled = {\n    argTypes: {\n        disabled: {\n            control: {\n                disable: true\n            }\n        }\n    },\n    render: (props)=>/*#__PURE__*/ _jsx(StorybookTemplate, {\n            subtitle: \"비활성화된 컴포넌트 예시\",\n            title: \"Disabled\",\n            children: types.map((type)=>/*#__PURE__*/ _jsx(Component, {\n                    ...props,\n                    type: type,\n                    disabled: true\n                }, type))\n        })\n};\nexport const ReadOnly = {\n    argTypes: {\n        readOnly: {\n            control: {\n                disable: true\n            }\n        }\n    },\n    render: (props)=>/*#__PURE__*/ _jsx(StorybookTemplate, {\n            subtitle: \"읽기 전용 모드가 적용된 예시\",\n            title: \"ReadOnly\",\n            children: types.map((type)=>/*#__PURE__*/ _jsx(Component, {\n                    ...props,\n                    type: type,\n                    readOnly: true\n                }, type))\n        })\n};\n",locationsMap:{playground:{startLoc:{col:26,line:117},endLoc:{col:28,line:117},startBody:{col:26,line:117},endBody:{col:28,line:117}},type:{startLoc:{col:20,line:118},endLoc:{col:1,line:134},startBody:{col:20,line:118},endBody:{col:1,line:134}},placeholder:{startLoc:{col:27,line:135},endLoc:{col:1,line:152},startBody:{col:27,line:135},endBody:{col:1,line:152}},disabled:{startLoc:{col:24,line:153},endLoc:{col:1,line:170},startBody:{col:24,line:153},endBody:{col:1,line:170}},"read-only":{startLoc:{col:24,line:171},endLoc:{col:1,line:188},startBody:{col:24,line:171},endBody:{col:1,line:188}}}}},argTypes:{className:(0,storybook.HX)("className","TextField"),defaultValue:{control:"text",description:"초기 렌더링 시 지정되는 초기값",table:{category:"TextField",subcategory:storybook.dG.PROP}},disabled:{control:"boolean",description:"비활성화 여부",table:{category:"TextField",subcategory:storybook.dG.PROP}},id:(0,storybook.HX)("id","TextField"),onChange:{description:"값 변경 이벤트",table:{category:"TextField",subcategory:storybook.dG.EV,type:{detail:"(e: ChangeEvent<HTMLInputElement>) => void",summary:"ChangeEventHandler<HTMLInputElement>"}}},readOnly:{control:"boolean",description:"읽기 전용 여부",table:{category:"TextField",subcategory:storybook.dG.PROP}},type:{control:"select",description:"텍스트필드 타입 (checkbox, image와 같은 일부 타입은 디자인이 정의되지 않음)",options:types,table:{category:"TextField",subcategory:storybook.dG.PROP,type:{summary:types.join(" | ")}}},value:{control:"text",description:"컴포넌트의 값 (상태 핸들링 필요)",table:{category:"TextField",subcategory:storybook.dG.PROP}}},component:TextField.A,parameters:(0,storybook.bQ)("텍스트필드 컴포넌트",["기본적인 Input 컴포넌트를 확장한 텍스트필드 컴포넌트입니다."]),tags:["autodocs"],title:"atom/TextField"},Playground={},Type={argTypes:{type:{control:{disable:!0}}},render:props=>(0,jsx_runtime.jsx)(StorybookTemplate.x,{subtitle:"다양한 input type이 적용된 예시",title:"Type",children:types.map((type=>(0,jsx_runtime.jsx)(Component,{...props,type},type)))})},Placeholder={argTypes:{placeholder:{control:{disable:!0}}},render:props=>(0,jsx_runtime.jsx)(StorybookTemplate.x,{subtitle:"placeholder가 적용된 예시. 일부 타입은 placeholder를 무시함",title:"Placeholder",children:types.map((type=>(0,jsx_runtime.jsx)(Component,{...props,placeholder:"this is placehold",type},type)))})},Disabled={argTypes:{disabled:{control:{disable:!0}}},render:props=>(0,jsx_runtime.jsx)(StorybookTemplate.x,{subtitle:"비활성화된 컴포넌트 예시",title:"Disabled",children:types.map((type=>(0,jsx_runtime.jsx)(Component,{...props,type,disabled:!0},type)))})},ReadOnly={argTypes:{readOnly:{control:{disable:!0}}},render:props=>(0,jsx_runtime.jsx)(StorybookTemplate.x,{subtitle:"읽기 전용 모드가 적용된 예시",title:"ReadOnly",children:types.map((type=>(0,jsx_runtime.jsx)(Component,{...props,type,readOnly:!0},type)))})},__namedExportsOrder=["Playground","Type","Placeholder","Disabled","ReadOnly"];Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{}",...Playground.parameters?.docs?.source}}},Type.parameters={...Type.parameters,docs:{...Type.parameters?.docs,source:{originalSource:'{\n  argTypes: {\n    type: {\n      control: {\n        disable: true\n      }\n    }\n  },\n  render: props => <StorybookTemplate subtitle="다양한 input type이 적용된 예시" title="Type">\n      {types.map(type => <Component key={type} {...props} type={type} />)}\n    </StorybookTemplate>\n}',...Type.parameters?.docs?.source}}},Placeholder.parameters={...Placeholder.parameters,docs:{...Placeholder.parameters?.docs,source:{originalSource:'{\n  argTypes: {\n    placeholder: {\n      control: {\n        disable: true\n      }\n    }\n  },\n  render: props => <StorybookTemplate subtitle="placeholder가 적용된 예시. 일부 타입은 placeholder를 무시함" title="Placeholder">\n      {types.map(type => <Component key={type} {...props} placeholder="this is placehold" type={type} />)}\n    </StorybookTemplate>\n}',...Placeholder.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  argTypes: {\n    disabled: {\n      control: {\n        disable: true\n      }\n    }\n  },\n  render: props => <StorybookTemplate subtitle="비활성화된 컴포넌트 예시" title="Disabled">\n      {types.map(type => <Component key={type} {...props} type={type} disabled />)}\n    </StorybookTemplate>\n}',...Disabled.parameters?.docs?.source}}},ReadOnly.parameters={...ReadOnly.parameters,docs:{...ReadOnly.parameters?.docs,source:{originalSource:'{\n  argTypes: {\n    readOnly: {\n      control: {\n        disable: true\n      }\n    }\n  },\n  render: props => <StorybookTemplate subtitle="읽기 전용 모드가 적용된 예시" title="ReadOnly">\n      {types.map(type => <Component key={type} {...props} type={type} readOnly />)}\n    </StorybookTemplate>\n}',...ReadOnly.parameters?.docs?.source}}}},"./src/components/atom/shadcn-ui/TextField/TextField.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TextField});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),_a_esports_ui_lib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/lib/utils.ts");function TextField({className,type,...props}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{className:(0,_a_esports_ui_lib__WEBPACK_IMPORTED_MODULE_1__.cn)("border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border-input-border placeholder:text-third-foreground disabled:bg-[#F5F5F5]",className),"data-component":"TextField","data-slot":"input",type,...props})}TextField.__docgenInfo={description:"텍스트 필드 atom 컴포넌트 반환 메서드\n\n@param {TextFieldProps} param0: TextFieldProps\n\n@returns {React.JSX.Element} JSX",methods:[],displayName:"TextField"}},"./src/components/template/StorybookTemplate/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>StorybookTemplate});var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),utils=__webpack_require__("./src/lib/utils.ts");function StorybookTemplate({title,subtitle,children,className,...props}){return(0,jsx_runtime.jsxs)("section",{className:(0,utils.cn)("flex w-full flex-col gap-4",className),"data-component":"StorybookTemplate",...props,children:[(0,jsx_runtime.jsxs)("div",{className:"flex w-full flex-col gap-1",children:[(0,jsx_runtime.jsx)("h2",{className:"text-xl font-bold",children:title}),Array.isArray(subtitle)?subtitle.map((i=>(0,jsx_runtime.jsx)("p",{className:"text-sm text-slate-400",children:i},i))):(0,jsx_runtime.jsx)("p",{className:"text-sm text-slate-400",children:subtitle})]}),children]})}StorybookTemplate.__docgenInfo={description:"스토리북 template 컴포넌트 반환 메서드\n\n@param {StorybookTemplateProps} param0: StorybookTemplateProps\n\n@returns {React.JSX.Element} JSX",methods:[],displayName:"StorybookTemplate",props:{title:{required:!0,tsType:{name:"string"},description:"제목"},subtitle:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:"부제목\n\n@description 배열을 할당할 경우, 한 요소씩 줄바꿈으로 표현함"}},composes:["DetailedHTMLProps"]}},"./src/lib/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/tailwind-merge@3.0.2/node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cn(...inputs){return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}}}]);