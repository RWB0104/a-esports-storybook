"use strict";(self.webpackChunk_a_esports_ui=self.webpackChunk_a_esports_ui||[]).push([[774],{"../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.1_@types+react@19.0.8_react@19.0.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>useComposedRefs,t:()=>composeRefs});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js");function setRef(ref,value){if("function"==typeof ref)return ref(value);null!=ref&&(ref.current=value)}function composeRefs(...refs){return node=>{let hasCleanup=!1;const cleanups=refs.map((ref=>{const cleanup=setRef(ref,node);return hasCleanup||"function"!=typeof cleanup||(hasCleanup=!0),cleanup}));if(hasCleanup)return()=>{for(let i=0;i<cleanups.length;i++){const cleanup=cleanups[i];"function"==typeof cleanup?cleanup():setRef(refs[i],null)}}}}function useComposedRefs(...refs){return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(composeRefs(...refs),refs)}},"../../node_modules/.pnpm/@radix-ui+react-label@2.1.2_@types+react-dom@19.0.3_@types+react@19.0.8__@types+react@1_ebed14e59a6cd7c67a9a85b709b64883/node_modules/@radix-ui/react-label/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>Root});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-primitive@2.0.2_@types+react-dom@19.0.3_@types+react@19.0.8__@types+rea_7c19c1c0b5965ca8249ea81d8a40a48e/node_modules/@radix-ui/react-primitive/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),Label=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_2__.sG.label,{...props,ref:forwardedRef,onMouseDown:event=>{event.target.closest("button, input, select, textarea")||(props.onMouseDown?.(event),!event.defaultPrevented&&event.detail>1&&event.preventDefault())}})));Label.displayName="Label";var Root=Label},"../../node_modules/.pnpm/@radix-ui+react-primitive@2.0.2_@types+react-dom@19.0.3_@types+react@19.0.8__@types+rea_7c19c1c0b5965ca8249ea81d8a40a48e/node_modules/@radix-ui/react-primitive/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{hO:()=>dispatchDiscreteCustomEvent,sG:()=>Primitive});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react-dom/index.js"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-slot@1.1.2_@types+react@19.0.8_react@19.0.0/node_modules/@radix-ui/react-slot/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),Primitive=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce(((primitive,node)=>{const Node=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{asChild,...primitiveProps}=props,Comp=asChild?_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.DX:node;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Comp,{...primitiveProps,ref:forwardedRef})}));return Node.displayName=`Primitive.${node}`,{...primitive,[node]:Node}}),{});function dispatchDiscreteCustomEvent(target,event){target&&react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync((()=>target.dispatchEvent(event)))}},"../../node_modules/.pnpm/@radix-ui+react-slot@1.1.2_@types+react@19.0.8_react@19.0.0/node_modules/@radix-ui/react-slot/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{DX:()=>Slot});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-compose-refs@1.1.1_@types+react@19.0.8_react@19.0.0/node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),Slot=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{children,...slotProps}=props,childrenArray=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children),slottable=childrenArray.find(isSlottable);if(slottable){const newElement=slottable.props.children,newChildren=childrenArray.map((child=>child===slottable?react__WEBPACK_IMPORTED_MODULE_0__.Children.count(newElement)>1?react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null):react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(newElement)?newElement.props.children:null:child));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SlotClone,{...slotProps,ref:forwardedRef,children:react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(newElement)?react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(newElement,void 0,newChildren):null})}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SlotClone,{...slotProps,ref:forwardedRef,children})}));Slot.displayName="Slot";var SlotClone=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{children,...slotProps}=props;if(react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children)){const childrenRef=function getElementRef(element){let getter=Object.getOwnPropertyDescriptor(element.props,"ref")?.get,mayWarn=getter&&"isReactWarning"in getter&&getter.isReactWarning;if(mayWarn)return element.ref;if(getter=Object.getOwnPropertyDescriptor(element,"ref")?.get,mayWarn=getter&&"isReactWarning"in getter&&getter.isReactWarning,mayWarn)return element.props.ref;return element.props.ref||element.ref}(children),props2=function mergeProps(slotProps,childProps){const overrideProps={...childProps};for(const propName in childProps){const slotPropValue=slotProps[propName],childPropValue=childProps[propName];/^on[A-Z]/.test(propName)?slotPropValue&&childPropValue?overrideProps[propName]=(...args)=>{childPropValue(...args),slotPropValue(...args)}:slotPropValue&&(overrideProps[propName]=slotPropValue):"style"===propName?overrideProps[propName]={...slotPropValue,...childPropValue}:"className"===propName&&(overrideProps[propName]=[slotPropValue,childPropValue].filter(Boolean).join(" "))}return{...slotProps,...overrideProps}}(slotProps,children.props);return children.type!==react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&(props2.ref=forwardedRef?(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.t)(forwardedRef,childrenRef):childrenRef),react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children,props2)}return react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children)>1?react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null):null}));SlotClone.displayName="SlotClone";var Slottable=({children})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children});function isSlottable(child){return react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child)&&child.type===Slottable}},"../util/src/storybook.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{HX:()=>getArgType,bQ:()=>getParameters,dG:()=>SubCategory});var SubCategory=function(SubCategory){return SubCategory.PROP="Property",SubCategory.EV="Event",SubCategory}({});function getArgType(arg,category){switch(arg){case"children":return{control:{disable:!0},description:"자식 노드",table:{category,subcategory:"Property",type:{summary:"React.ReactNode"}}};case"className":return{control:{disable:!0},description:"클래스",table:{category,subcategory:"Property"},type:"string"};default:return{control:{disable:!0},description:"태그 고유 ID",table:{category,subcategory:"Property"},type:"string"}}}function getParameters(subtitle,body,parameters){return{...parameters,componentSubtitle:subtitle,docs:{description:{component:Array.isArray(body)?body.join("<br />"):body}}}}},"./src/components/atom/shadcn-ui/Label/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Label});var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),utils=__webpack_require__("./src/lib/utils.ts"),dist=__webpack_require__("../../node_modules/.pnpm/@radix-ui+react-label@2.1.2_@types+react-dom@19.0.3_@types+react@19.0.8__@types+react@1_ebed14e59a6cd7c67a9a85b709b64883/node_modules/@radix-ui/react-label/dist/index.mjs");__webpack_require__("../../node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js");function Label({className,...props}){return(0,jsx_runtime.jsx)(dist.b,{className:(0,utils.cn)("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",className),"data-slot":"label",...props})}Label.__docgenInfo={description:"",methods:[],displayName:"Label"}},"./src/components/atom/shadcn-ui/Textarea/Textarea.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Disabled:()=>Disabled,Playground:()=>Playground,WithLabel:()=>WithLabel,WithPlaceholder:()=>WithPlaceholder,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Textarea_stories});var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),Label=__webpack_require__("./src/components/atom/shadcn-ui/Label/index.ts"),StorybookTemplate=__webpack_require__("./src/components/template/StorybookTemplate/index.ts"),storybook=__webpack_require__("../util/src/storybook.ts"),utils=__webpack_require__("./src/lib/utils.ts");__webpack_require__("../../node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js");function Textarea({className,...props}){return(0,jsx_runtime.jsx)("textarea",{className:(0,utils.cn)("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",className),"data-slot":"textarea",...props})}Textarea.__docgenInfo={description:"",methods:[],displayName:"Textarea"};const Textarea_stories={parameters:{storySource:{source:"/**\n * 텍스트영역 atom 컴포넌트 Storybook\n *\n * @author KMS\n * @since 2025.03.15 Sat 03:34:59\n */ import { jsx as _jsx, jsxs as _jsxs } from \"react/jsx-runtime\";\nimport { Label } from '@a-esports/ui/components/atom/shadcn-ui/Label';\nimport { StorybookTemplate } from '@a-esports/ui/template/StorybookTemplate';\nimport { getArgType, getParameters, SubCategory } from '@a-esports/util/storybook';\nimport { Textarea } from './index.ts';\nconst componentName = 'Textarea';\nconst meta = {\n    argTypes: {\n        className: getArgType('className', componentName),\n        defaultValue: {\n            control: 'text',\n            description: '초기 렌더링 시 지정되는 초기값',\n            table: {\n                category: componentName,\n                subcategory: SubCategory.PROP\n            }\n        },\n        disabled: {\n            control: 'boolean',\n            description: '비활성화 여부',\n            table: {\n                category: componentName,\n                subcategory: SubCategory.PROP\n            }\n        },\n        onChange: {\n            description: '값 변경 이벤트',\n            table: {\n                category: componentName,\n                subcategory: SubCategory.EV,\n                type: {\n                    detail: '(e: ChangeEvent<HTMLTextAreaElement>) => void',\n                    summary: 'ChangeEventHandler<HTMLTextAreaElement>'\n                }\n            }\n        },\n        placeholder: {\n            control: 'text',\n            description: '텍스트 영역이 비어있을 때 표시되는 텍스트',\n            table: {\n                category: componentName,\n                subcategory: SubCategory.PROP\n            }\n        },\n        readOnly: {\n            control: 'boolean',\n            description: '읽기 전용 여부',\n            table: {\n                category: componentName,\n                subcategory: SubCategory.PROP\n            }\n        },\n        value: {\n            control: 'text',\n            description: '컴포넌트의 값 (상태 핸들링 필요)',\n            table: {\n                category: componentName,\n                subcategory: SubCategory.PROP\n            }\n        }\n    },\n    component: Textarea,\n    parameters: getParameters('텍스트영역 컴포넌트', [\n        '기본적인 다중 라인 텍스트 입력 컴포넌트입니다.'\n    ]),\n    tags: [\n        'autodocs'\n    ],\n    title: 'atom/Textarea'\n};\nexport default meta;\nexport const Playground = {};\nexport const WithPlaceholder = {\n    argTypes: {\n        placeholder: {\n            control: {\n                disable: true\n            }\n        }\n    },\n    render: (props)=>/*#__PURE__*/ _jsx(StorybookTemplate, {\n            subtitle: \"플레이스홀더가 있는 텍스트영역 예시\",\n            title: \"With Placeholder\",\n            children: /*#__PURE__*/ _jsx(Textarea, {\n                placeholder: \"여기에 내용을 입력하세요...\",\n                ...props\n            })\n        })\n};\nexport const WithLabel = {\n    render: (props)=>/*#__PURE__*/ _jsx(StorybookTemplate, {\n            subtitle: \"라벨이 있는 텍스트영역 예시\",\n            title: \"With Label\",\n            children: /*#__PURE__*/ _jsxs(\"div\", {\n                className: \"grid w-full gap-1.5\",\n                children: [\n                    /*#__PURE__*/ _jsx(Label, {\n                        className: \"text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70\",\n                        htmlFor: \"message\",\n                        children: \"메시지\"\n                    }),\n                    /*#__PURE__*/ _jsx(Textarea, {\n                        id: \"message\",\n                        placeholder: \"메시지를 입력하세요...\",\n                        ...props\n                    })\n                ]\n            })\n        })\n};\nexport const Disabled = {\n    argTypes: {\n        disabled: {\n            control: {\n                disable: true\n            }\n        }\n    },\n    render: (props)=>/*#__PURE__*/ _jsx(StorybookTemplate, {\n            subtitle: \"비활성화된 텍스트영역 예시\",\n            title: \"Disabled\",\n            children: /*#__PURE__*/ _jsx(Textarea, {\n                placeholder: \"이 텍스트영역은 비활성화되어 있습니다\",\n                disabled: true,\n                ...props\n            })\n        })\n};\n",locationsMap:{playground:{startLoc:{col:26,line:77},endLoc:{col:28,line:77},startBody:{col:26,line:77},endBody:{col:28,line:77}},"with-placeholder":{startLoc:{col:31,line:78},endLoc:{col:1,line:94},startBody:{col:31,line:78},endBody:{col:1,line:94}},"with-label":{startLoc:{col:25,line:95},endLoc:{col:1,line:115},startBody:{col:25,line:95},endBody:{col:1,line:115}},disabled:{startLoc:{col:24,line:116},endLoc:{col:1,line:133},startBody:{col:24,line:116},endBody:{col:1,line:133}}}}},argTypes:{className:(0,storybook.HX)("className","Textarea"),defaultValue:{control:"text",description:"초기 렌더링 시 지정되는 초기값",table:{category:"Textarea",subcategory:storybook.dG.PROP}},disabled:{control:"boolean",description:"비활성화 여부",table:{category:"Textarea",subcategory:storybook.dG.PROP}},onChange:{description:"값 변경 이벤트",table:{category:"Textarea",subcategory:storybook.dG.EV,type:{detail:"(e: ChangeEvent<HTMLTextAreaElement>) => void",summary:"ChangeEventHandler<HTMLTextAreaElement>"}}},placeholder:{control:"text",description:"텍스트 영역이 비어있을 때 표시되는 텍스트",table:{category:"Textarea",subcategory:storybook.dG.PROP}},readOnly:{control:"boolean",description:"읽기 전용 여부",table:{category:"Textarea",subcategory:storybook.dG.PROP}},value:{control:"text",description:"컴포넌트의 값 (상태 핸들링 필요)",table:{category:"Textarea",subcategory:storybook.dG.PROP}}},component:Textarea,parameters:(0,storybook.bQ)("텍스트영역 컴포넌트",["기본적인 다중 라인 텍스트 입력 컴포넌트입니다."]),tags:["autodocs"],title:"atom/Textarea"},Playground={},WithPlaceholder={argTypes:{placeholder:{control:{disable:!0}}},render:props=>(0,jsx_runtime.jsx)(StorybookTemplate.x,{subtitle:"플레이스홀더가 있는 텍스트영역 예시",title:"With Placeholder",children:(0,jsx_runtime.jsx)(Textarea,{placeholder:"여기에 내용을 입력하세요...",...props})})},WithLabel={render:props=>(0,jsx_runtime.jsx)(StorybookTemplate.x,{subtitle:"라벨이 있는 텍스트영역 예시",title:"With Label",children:(0,jsx_runtime.jsxs)("div",{className:"grid w-full gap-1.5",children:[(0,jsx_runtime.jsx)(Label.J,{className:"text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70",htmlFor:"message",children:"메시지"}),(0,jsx_runtime.jsx)(Textarea,{id:"message",placeholder:"메시지를 입력하세요...",...props})]})})},Disabled={argTypes:{disabled:{control:{disable:!0}}},render:props=>(0,jsx_runtime.jsx)(StorybookTemplate.x,{subtitle:"비활성화된 텍스트영역 예시",title:"Disabled",children:(0,jsx_runtime.jsx)(Textarea,{placeholder:"이 텍스트영역은 비활성화되어 있습니다",disabled:!0,...props})})},__namedExportsOrder=["Playground","WithPlaceholder","WithLabel","Disabled"];Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{}",...Playground.parameters?.docs?.source}}},WithPlaceholder.parameters={...WithPlaceholder.parameters,docs:{...WithPlaceholder.parameters?.docs,source:{originalSource:'{\n  argTypes: {\n    placeholder: {\n      control: {\n        disable: true\n      }\n    }\n  },\n  render: props => <StorybookTemplate subtitle="플레이스홀더가 있는 텍스트영역 예시" title="With Placeholder">\n      <Textarea placeholder="여기에 내용을 입력하세요..." {...props} />\n    </StorybookTemplate>\n}',...WithPlaceholder.parameters?.docs?.source}}},WithLabel.parameters={...WithLabel.parameters,docs:{...WithLabel.parameters?.docs,source:{originalSource:'{\n  render: props => <StorybookTemplate subtitle="라벨이 있는 텍스트영역 예시" title="With Label">\n      <div className="grid w-full gap-1.5">\n        <Label className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="message">\n          메시지\n        </Label>\n        <Textarea id="message" placeholder="메시지를 입력하세요..." {...props} />\n      </div>\n    </StorybookTemplate>\n}',...WithLabel.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'{\n  argTypes: {\n    disabled: {\n      control: {\n        disable: true\n      }\n    }\n  },\n  render: props => <StorybookTemplate subtitle="비활성화된 텍스트영역 예시" title="Disabled">\n      <Textarea placeholder="이 텍스트영역은 비활성화되어 있습니다" disabled {...props} />\n    </StorybookTemplate>\n}',...Disabled.parameters?.docs?.source}}}},"./src/components/template/StorybookTemplate/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>StorybookTemplate});var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/next@15.2.1_@babel+core@7.26.9_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),utils=__webpack_require__("./src/lib/utils.ts");function StorybookTemplate({title,subtitle,children,className,...props}){return(0,jsx_runtime.jsxs)("section",{className:(0,utils.cn)("flex w-full flex-col gap-4",className),"data-component":"StorybookTemplate",...props,children:[(0,jsx_runtime.jsxs)("div",{className:"flex w-full flex-col gap-1",children:[(0,jsx_runtime.jsx)("h2",{className:"text-xl font-bold",children:title}),Array.isArray(subtitle)?subtitle.map((i=>(0,jsx_runtime.jsx)("p",{className:"text-sm text-slate-400",children:i},i))):(0,jsx_runtime.jsx)("p",{className:"text-sm text-slate-400",children:subtitle})]}),children]})}StorybookTemplate.__docgenInfo={description:"스토리북 template 컴포넌트 반환 메서드\n\n@param {StorybookTemplateProps} param0: StorybookTemplateProps\n\n@returns {React.JSX.Element} JSX",methods:[],displayName:"StorybookTemplate",props:{title:{required:!0,tsType:{name:"string"},description:"제목"},subtitle:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:"부제목\n\n@description 배열을 할당할 경우, 한 요소씩 줄바꿈으로 표현함"}},composes:["DetailedHTMLProps"]}},"./src/lib/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/tailwind-merge@3.0.2/node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cn(...inputs){return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}}}]);