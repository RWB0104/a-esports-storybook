"use strict";(self.webpackChunk_a_esports_ui=self.webpackChunk_a_esports_ui||[]).push([[752],{"../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.1_@types+react@19.0.8_react@19.0.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>useComposedRefs,t:()=>composeRefs});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js");function setRef(ref,value){if("function"==typeof ref)return ref(value);null!=ref&&(ref.current=value)}function composeRefs(...refs){return node=>{let hasCleanup=!1;const cleanups=refs.map((ref=>{const cleanup=setRef(ref,node);return hasCleanup||"function"!=typeof cleanup||(hasCleanup=!0),cleanup}));if(hasCleanup)return()=>{for(let i=0;i<cleanups.length;i++){const cleanup=cleanups[i];"function"==typeof cleanup?cleanup():setRef(refs[i],null)}}}}function useComposedRefs(...refs){return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(composeRefs(...refs),refs)}},"../../node_modules/.pnpm/@radix-ui+react-label@2.1.2_@types+react-dom@19.0.3_@types+react@19.0.8__@types+react@1_ebed14e59a6cd7c67a9a85b709b64883/node_modules/@radix-ui/react-label/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>Root});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-primitive@2.0.2_@types+react-dom@19.0.3_@types+react@19.0.8__@types+rea_7c19c1c0b5965ca8249ea81d8a40a48e/node_modules/@radix-ui/react-primitive/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),Label=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__.sG.label,{...props,ref:forwardedRef,onMouseDown:event=>{event.target.closest("button, input, select, textarea")||(props.onMouseDown?.(event),!event.defaultPrevented&&event.detail>1&&event.preventDefault())}})));Label.displayName="Label";var Root=Label},"../../node_modules/.pnpm/@radix-ui+react-primitive@2.0.2_@types+react-dom@19.0.3_@types+react@19.0.8__@types+rea_7c19c1c0b5965ca8249ea81d8a40a48e/node_modules/@radix-ui/react-primitive/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{hO:()=>dispatchDiscreteCustomEvent,sG:()=>Primitive});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react-dom/index.js"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-slot@1.1.2_@types+react@19.0.8_react@19.0.0/node_modules/@radix-ui/react-slot/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),Primitive=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce(((primitive,node)=>{const Node=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{asChild,...primitiveProps}=props,Comp=asChild?_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.DX:node;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Comp,{...primitiveProps,ref:forwardedRef})}));return Node.displayName=`Primitive.${node}`,{...primitive,[node]:Node}}),{});function dispatchDiscreteCustomEvent(target,event){target&&react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync((()=>target.dispatchEvent(event)))}},"../../node_modules/.pnpm/@radix-ui+react-slot@1.1.2_@types+react@19.0.8_react@19.0.0/node_modules/@radix-ui/react-slot/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{DX:()=>Slot});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.1_@types+react@19.0.8_react@19.0.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),Slot=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{children,...slotProps}=props,childrenArray=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children),slottable=childrenArray.find(isSlottable);if(slottable){const newElement=slottable.props.children,newChildren=childrenArray.map((child=>child===slottable?react__WEBPACK_IMPORTED_MODULE_0__.Children.count(newElement)>1?react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null):react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(newElement)?newElement.props.children:null:child));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SlotClone,{...slotProps,ref:forwardedRef,children:react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(newElement)?react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(newElement,void 0,newChildren):null})}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SlotClone,{...slotProps,ref:forwardedRef,children})}));Slot.displayName="Slot";var SlotClone=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{children,...slotProps}=props;if(react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children)){const childrenRef=function getElementRef(element){let getter=Object.getOwnPropertyDescriptor(element.props,"ref")?.get,mayWarn=getter&&"isReactWarning"in getter&&getter.isReactWarning;if(mayWarn)return element.ref;if(getter=Object.getOwnPropertyDescriptor(element,"ref")?.get,mayWarn=getter&&"isReactWarning"in getter&&getter.isReactWarning,mayWarn)return element.props.ref;return element.props.ref||element.ref}(children),props2=function mergeProps(slotProps,childProps){const overrideProps={...childProps};for(const propName in childProps){const slotPropValue=slotProps[propName],childPropValue=childProps[propName];/^on[A-Z]/.test(propName)?slotPropValue&&childPropValue?overrideProps[propName]=(...args)=>{childPropValue(...args),slotPropValue(...args)}:slotPropValue&&(overrideProps[propName]=slotPropValue):"style"===propName?overrideProps[propName]={...slotPropValue,...childPropValue}:"className"===propName&&(overrideProps[propName]=[slotPropValue,childPropValue].filter(Boolean).join(" "))}return{...slotProps,...overrideProps}}(slotProps,children.props);return children.type!==react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&(props2.ref=forwardedRef?(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.t)(forwardedRef,childrenRef):childrenRef),react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children,props2)}return react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children)>1?react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null):null}));SlotClone.displayName="SlotClone";var Slottable=({children})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children});function isSlottable(child){return react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child)&&child.type===Slottable}},"../util/src/storybook.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{HX:()=>getArgType,bQ:()=>getParameters,dG:()=>SubCategory});var SubCategory=function(SubCategory){return SubCategory.PROP="Property",SubCategory.EV="Event",SubCategory}({});function getArgType(arg,category){switch(arg){case"children":return{control:{disable:!0},description:"자식 노드",table:{category,subcategory:"Property",type:{summary:"React.ReactNode"}}};case"className":return{control:{disable:!0},description:"클래스",table:{category,subcategory:"Property"},type:"string"};default:return{control:{disable:!0},description:"태그 고유 ID",table:{category,subcategory:"Property"},type:"string"}}}function getParameters(subtitle,body,parameters){return{...parameters,componentSubtitle:subtitle,docs:{description:{component:Array.isArray(body)?body.join("<br />"):body}}}}},"./src/components/atom/shadcn-ui/Label/Label.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,Required:()=>Required,WithInput:()=>WithInput,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),_a_esports_ui_template_StorybookTemplate__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/template/StorybookTemplate/index.ts"),_a_esports_util_storybook__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../util/src/storybook.ts"),_TextField_TextField_tsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/atom/shadcn-ui/TextField/TextField.tsx"),_index_ts__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/atom/shadcn-ui/Label/index.ts");const __WEBPACK_DEFAULT_EXPORT__={parameters:{storySource:{source:'/**\n * 라벨 atom 컴포넌트 Storybook\n *\n * @author KMS\n * @since 2025.03.15 Sat 03:34:59\n */ import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";\nimport { StorybookTemplate } from \'@a-esports/ui/template/StorybookTemplate\';\nimport { getArgType, getParameters, SubCategory } from \'@a-esports/util/storybook\';\nimport { TextField } from \'../TextField/TextField.tsx\';\nimport { Label } from \'./index.ts\';\nconst componentName = \'Label\';\nconst meta = {\n    argTypes: {\n        className: getArgType(\'className\', componentName),\n        htmlFor: {\n            control: \'text\',\n            description: \'연결된 폼 요소의 ID\',\n            table: {\n                category: componentName,\n                subcategory: SubCategory.PROP\n            }\n        }\n    },\n    component: Label,\n    parameters: getParameters(\'라벨 컴포넌트\', [\n        \'기본적인 라벨 컴포넌트입니다.\'\n    ]),\n    tags: [\n        \'autodocs\'\n    ],\n    title: \'atom/Label\'\n};\nexport default meta;\nexport const Playground = {\n    args: {\n        children: \'라벨\'\n    }\n};\nexport const WithInput = {\n    render: ()=>/*#__PURE__*/ _jsx(StorybookTemplate, {\n            subtitle: "입력 요소와 함께 사용된 라벨 예시",\n            title: "With Input",\n            children: /*#__PURE__*/ _jsxs("div", {\n                className: "grid w-full max-w-sm items-center gap-1.5",\n                children: [\n                    /*#__PURE__*/ _jsx(Label, {\n                        htmlFor: "email",\n                        children: "이메일"\n                    }),\n                    /*#__PURE__*/ _jsx(TextField, {\n                        id: "email",\n                        placeholder: "이메일을 입력하세요",\n                        type: "email"\n                    })\n                ]\n            })\n        })\n};\nexport const Required = {\n    render: ()=>/*#__PURE__*/ _jsx(StorybookTemplate, {\n            subtitle: "필수 입력 표시가 있는 라벨 예시",\n            title: "Required",\n            children: /*#__PURE__*/ _jsxs("div", {\n                className: "grid w-full max-w-sm items-center gap-1.5",\n                children: [\n                    /*#__PURE__*/ _jsxs(Label, {\n                        htmlFor: "username",\n                        children: [\n                            "사용자 이름",\n                            /*#__PURE__*/ _jsx("span", {\n                                className: "ml-1 text-red-500",\n                                children: "*"\n                            })\n                        ]\n                    }),\n                    /*#__PURE__*/ _jsx(TextField, {\n                        id: "username",\n                        placeholder: "사용자 이름을 입력하세요",\n                        type: "text",\n                        required: true\n                    })\n                ]\n            })\n        })\n};\n',locationsMap:{playground:{startLoc:{col:26,line:34},endLoc:{col:1,line:38},startBody:{col:26,line:34},endBody:{col:1,line:38}},"with-input":{startLoc:{col:25,line:39},endLoc:{col:1,line:58},startBody:{col:25,line:39},endBody:{col:1,line:58}},required:{startLoc:{col:24,line:59},endLoc:{col:1,line:85},startBody:{col:24,line:59},endBody:{col:1,line:85}}}}},argTypes:{className:(0,_a_esports_util_storybook__WEBPACK_IMPORTED_MODULE_2__.HX)("className","Label"),htmlFor:{control:"text",description:"연결된 폼 요소의 ID",table:{category:"Label",subcategory:_a_esports_util_storybook__WEBPACK_IMPORTED_MODULE_2__.dG.PROP}}},component:_index_ts__WEBPACK_IMPORTED_MODULE_4__.J,parameters:(0,_a_esports_util_storybook__WEBPACK_IMPORTED_MODULE_2__.bQ)("라벨 컴포넌트",["기본적인 라벨 컴포넌트입니다."]),tags:["autodocs"],title:"atom/Label"},Playground={args:{children:"라벨"}},WithInput={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_a_esports_ui_template_StorybookTemplate__WEBPACK_IMPORTED_MODULE_1__.x,{subtitle:"입력 요소와 함께 사용된 라벨 예시",title:"With Input",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_index_ts__WEBPACK_IMPORTED_MODULE_4__.J,{htmlFor:"email",children:"이메일"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TextField_TextField_tsx__WEBPACK_IMPORTED_MODULE_3__.A,{id:"email",placeholder:"이메일을 입력하세요",type:"email"})]})})},Required={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_a_esports_ui_template_StorybookTemplate__WEBPACK_IMPORTED_MODULE_1__.x,{subtitle:"필수 입력 표시가 있는 라벨 예시",title:"Required",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_index_ts__WEBPACK_IMPORTED_MODULE_4__.J,{htmlFor:"username",children:["사용자 이름",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"ml-1 text-red-500",children:"*"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_TextField_TextField_tsx__WEBPACK_IMPORTED_MODULE_3__.A,{id:"username",placeholder:"사용자 이름을 입력하세요",type:"text",required:!0})]})})},__namedExportsOrder=["Playground","WithInput","Required"];Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: '라벨'\n  }\n}",...Playground.parameters?.docs?.source}}},WithInput.parameters={...WithInput.parameters,docs:{...WithInput.parameters?.docs,source:{originalSource:'{\n  render: () => <StorybookTemplate subtitle="입력 요소와 함께 사용된 라벨 예시" title="With Input">\n      <div className="grid w-full max-w-sm items-center gap-1.5">\n        <Label htmlFor="email">이메일</Label>\n        <TextField id="email" placeholder="이메일을 입력하세요" type="email" />\n      </div>\n    </StorybookTemplate>\n}',...WithInput.parameters?.docs?.source}}},Required.parameters={...Required.parameters,docs:{...Required.parameters?.docs,source:{originalSource:'{\n  render: () => <StorybookTemplate subtitle="필수 입력 표시가 있는 라벨 예시" title="Required">\n      <div className="grid w-full max-w-sm items-center gap-1.5">\n        <Label htmlFor="username">\n          사용자 이름\n          <span className="ml-1 text-red-500">*</span>\n        </Label>\n        <TextField id="username" placeholder="사용자 이름을 입력하세요" type="text" required />\n      </div>\n    </StorybookTemplate>\n}',...Required.parameters?.docs?.source}}}},"./src/components/atom/shadcn-ui/Label/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Label});var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),utils=__webpack_require__("./src/lib/utils.ts"),dist=__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-label@2.1.2_@types+react-dom@19.0.3_@types+react@19.0.8__@types+react@1_ebed14e59a6cd7c67a9a85b709b64883/node_modules/@radix-ui/react-label/dist/index.mjs");__webpack_require__("../../node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js");function Label({className,...props}){return(0,jsx_runtime.jsx)(dist.b,{className:(0,utils.cn)("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",className),"data-slot":"label",...props})}Label.__docgenInfo={description:"",methods:[],displayName:"Label"}},"./src/components/atom/shadcn-ui/TextField/TextField.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TextField});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),_a_esports_ui_lib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/lib/utils.ts");function TextField({className,type,...props}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{className:(0,_a_esports_ui_lib__WEBPACK_IMPORTED_MODULE_1__.cn)("border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border-input-border placeholder:text-third-foreground disabled:bg-[#F5F5F5]",className),"data-component":"TextField","data-slot":"input",type,...props})}TextField.__docgenInfo={description:"텍스트 필드 atom 컴포넌트 반환 메서드\n\n@param {TextFieldProps} param0: TextFieldProps\n\n@returns {React.JSX.Element} JSX",methods:[],displayName:"TextField"}},"./src/components/template/StorybookTemplate/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>StorybookTemplate});var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),utils=__webpack_require__("./src/lib/utils.ts");function StorybookTemplate({title,subtitle,children,className,...props}){return(0,jsx_runtime.jsxs)("section",{className:(0,utils.cn)("flex w-full flex-col gap-4",className),"data-component":"StorybookTemplate",...props,children:[(0,jsx_runtime.jsxs)("div",{className:"flex w-full flex-col gap-1",children:[(0,jsx_runtime.jsx)("h2",{className:"text-xl font-bold",children:title}),Array.isArray(subtitle)?subtitle.map((i=>(0,jsx_runtime.jsx)("p",{className:"text-sm text-slate-400",children:i},i))):(0,jsx_runtime.jsx)("p",{className:"text-sm text-slate-400",children:subtitle})]}),children]})}StorybookTemplate.__docgenInfo={description:"스토리북 template 컴포넌트 반환 메서드\n\n@param {StorybookTemplateProps} param0: StorybookTemplateProps\n\n@returns {React.JSX.Element} JSX",methods:[],displayName:"StorybookTemplate",props:{title:{required:!0,tsType:{name:"string"},description:"제목"},subtitle:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:"부제목\n\n@description 배열을 할당할 경우, 한 요소씩 줄바꿈으로 표현함"}},composes:["DetailedHTMLProps"]}},"./src/lib/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/tailwind-merge@3.0.2/node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cn(...inputs){return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}}}]);