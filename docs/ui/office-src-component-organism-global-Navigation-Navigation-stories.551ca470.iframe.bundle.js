"use strict";(self.webpackChunkfront_monorepo=self.webpackChunkfront_monorepo||[]).push([[897],{"./packages/office/src/component/molecule/Header/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>Header});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@15.3.0_@babel+core@7.26.10_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),utils=__webpack_require__("./packages/ui/src/lib/utils.ts");function Header({className,...props}){return(0,jsx_runtime.jsx)("header",{className:(0,utils.cn)("bg-background h-16 w-full border border-b",className),"data-component":"Header",...props})}Header.__docgenInfo={description:"헤더 molecule 컴포넌트 반환 메서드\n\n@param {HeaderProps} param0: HeaderProps\n\n@returns {React.JSX.Element} JSX",methods:[],displayName:"Header"}},"./packages/office/src/component/molecule/Sidebar/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{B:()=>Sidebar});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@15.3.0_@babel+core@7.26.10_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),utils=__webpack_require__("./packages/ui/src/lib/utils.ts"),next_image=__webpack_require__("./node_modules/.pnpm/@storybook+nextjs@8.6.4_esbuild@0.25.1_next@15.2.1_@babel+core@7.26.9_react-dom@19.0.0__f54b62c48bb31ea636cd5a5981862526/node_modules/@storybook/nextjs/dist/images/next-image.mjs"),next_link=__webpack_require__("./node_modules/.pnpm/next@15.3.0_@babel+core@7.26.10_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/link.js"),link_default=__webpack_require__.n(next_link);function Sidebar({logo,list,pathname,className,children,...props}){return(0,jsx_runtime.jsxs)("aside",{className:(0,utils.cn)("flex h-full w-60 flex-col bg-[#1E40AF] text-white",className),"data-component":"Sidebar",...props,children:[void 0!==logo&&(0,jsx_runtime.jsx)("div",{className:"p-4",children:(0,jsx_runtime.jsx)("div",{className:"relative h-20 w-full",children:(0,jsx_runtime.jsx)(next_image.A,{alt:"logo",className:"object-cover",src:logo,fill:!0})})}),(0,jsx_runtime.jsx)("div",{className:"w-full flex-1",children:(0,jsx_runtime.jsx)("div",{className:"flex flex-col gap-1 p-4",children:null==list?void 0:list.map((({label,href})=>(0,jsx_runtime.jsx)(link_default(),{className:(0,utils.cn)("rounded px-6 py-2 text-[#94A3B8]",{"text-white backdrop-brightness-150":pathname===href}),href,children:label},href)))})}),children]})}Sidebar.__docgenInfo={description:"사이드바 molecule 컴포넌트 반환 메서드\n\n@param {SidebarProps} param0: SidebarProps\n\n@returns {React.JSX.Element} JSX",methods:[],displayName:"Sidebar",props:{logo:{required:!1,tsType:{name:"string"},description:"로고"},list:{required:!1,tsType:{name:"Array",elements:[{name:"SidebarMenu"}],raw:"SidebarMenu[]"},description:"목록"},pathname:{required:!1,tsType:{name:"string"},description:"경로"}},composes:["DetailedHTMLProps"]}},"./packages/office/src/component/organism/global/Navigation/Navigation.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Playground:()=>Playground,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Navigation_stories});var storybook=__webpack_require__("./packages/util/src/storybook.ts"),jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@15.3.0_@babel+core@7.26.10_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),Header=__webpack_require__("./packages/office/src/component/molecule/Header/index.ts"),Sidebar=__webpack_require__("./packages/office/src/component/molecule/Sidebar/index.ts"),Input=__webpack_require__("./packages/ui/src/components/atom/shadcn-ui/Input/index.ts"),utils=__webpack_require__("./packages/ui/src/lib/utils.ts"),navigation=__webpack_require__("./node_modules/.pnpm/@storybook+nextjs@8.6.4_esbuild@0.25.1_next@15.2.1_@babel+core@7.26.9_react-dom@19.0.0__f54b62c48bb31ea636cd5a5981862526/node_modules/@storybook/nextjs/dist/export-mocks/navigation/index.mjs");const list=[{href:"/",label:"대시보드"},{href:"/member",label:"회원 관리"},{href:"/club",label:"클럽 관리"},{href:"/league",label:"리그 관리"},{href:"/mercenary",label:"용병 관리"},{href:"/community",label:"커뮤니티 관리"},{href:"/sales",label:"매출 관리"},{href:"/file",label:"파일 관리"},{href:"/statistics",label:"통계"},{href:"/setting",label:"설정"}];function Navigation({className,children,...props}){const pathname=(0,navigation.usePathname)();return(0,jsx_runtime.jsxs)("div",{className:(0,utils.cn)("flex size-full",className),"data-component":"Navigation",...props,children:[(0,jsx_runtime.jsx)("div",{className:"h-full",children:(0,jsx_runtime.jsx)(Sidebar.B,{list,logo:"/favicon.ico",pathname})}),(0,jsx_runtime.jsxs)("div",{className:"flex size-full flex-col",children:[(0,jsx_runtime.jsx)(Header.Y,{className:"flex items-center px-4 py-2",children:(0,jsx_runtime.jsx)("div",{className:"w-60",children:(0,jsx_runtime.jsx)(Input.p,{placeholder:"검색어"})})}),(0,jsx_runtime.jsx)("div",{className:"flex flex-1 overflow-auto",children})]})]})}Navigation.__docgenInfo={description:"네비게이션 organism 컴포넌트 반환 메서드\n\n@param {NavigationProps} param0: NavigationProps\n\n@returns {React.JSX.Element} JSX",methods:[],displayName:"Navigation"};const Navigation_stories={parameters:{storySource:{source:"/**\n * 네비게이션 organism 컴포넌트 Storybook\n *\n * @author RWB\n * @since 2025.03.19 Wed 17:55:42\n */ import { getArgType, getParameters } from '@a-esports/util/storybook';\nimport { Navigation } from '.';\nconst componentName = 'Navigation';\nconst meta = {\n    argTypes: {\n        className: getArgType('className', componentName),\n        id: getArgType('id', componentName)\n    },\n    component: Navigation,\n    parameters: getParameters('네비게이션 컴포넌트', [\n        '`Header`와 `Sidebar`를 결합한 네비게이션 컴포넌트입니다.'\n    ]),\n    tags: [\n        'autodocs'\n    ],\n    title: 'office-ui/organism/global/Navigation'\n};\nexport default meta;\nexport const Playground = {\n    args: {\n        className: 'h-[1024px]'\n    }\n};\n",locationsMap:{playground:{startLoc:{col:26,line:24},endLoc:{col:1,line:28},startBody:{col:26,line:24},endBody:{col:1,line:28}}}}},argTypes:{className:(0,storybook.HX)("className","Navigation"),id:(0,storybook.HX)("id","Navigation")},component:Navigation,parameters:(0,storybook.bQ)("네비게이션 컴포넌트",["`Header`와 `Sidebar`를 결합한 네비게이션 컴포넌트입니다."]),tags:["autodocs"],title:"office-ui/organism/global/Navigation"},Playground={args:{className:"h-[1024px]"}},__namedExportsOrder=["Playground"];Playground.parameters={...Playground.parameters,docs:{...Playground.parameters?.docs,source:{originalSource:"{\n  args: {\n    className: 'h-[1024px]'\n  }\n}",...Playground.parameters?.docs?.source}}}},"./packages/ui/src/components/atom/shadcn-ui/Input/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>Input});var jsx_runtime=__webpack_require__("./node_modules/.pnpm/next@15.3.0_@babel+core@7.26.10_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/react/jsx-runtime.js"),utils=__webpack_require__("./packages/ui/src/lib/utils.ts");function Input({className,type,...props}){return(0,jsx_runtime.jsx)("input",{className:(0,utils.cn)("border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border-input-border placeholder:text-third-foreground disabled:bg-[#F5F5F5]",className),"data-component":"Input","data-slot":"input",type,...props})}Input.__docgenInfo={description:"인풋 atom 컴포넌트 반환 메서드\n\n@param {InputProps} param0: InputProps\n\n@returns {React.JSX.Element} JSX",methods:[],displayName:"Input"}},"./packages/ui/src/lib/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/.pnpm/tailwind-merge@3.2.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs");function cn(...inputs){return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}},"./packages/util/src/storybook.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{HX:()=>getArgType,bQ:()=>getParameters,dG:()=>SubCategory});var SubCategory=function(SubCategory){return SubCategory.PROP="Property",SubCategory.EV="Event",SubCategory}({});function getArgType(arg,category){switch(arg){case"children":return{control:{disable:!0},description:"자식 노드",table:{category,subcategory:"Property",type:{summary:"React.ReactNode"}}};case"className":return{control:{disable:!0},description:"클래스",table:{category,subcategory:"Property"},type:"string"};default:return{control:{disable:!0},description:"태그 고유 ID",table:{category,subcategory:"Property"},type:"string"}}}function getParameters(subtitle,body,parameters){return{...parameters,componentSubtitle:subtitle,docs:{description:{component:Array.isArray(body)?body.join("<br />"):body}}}}}}]);