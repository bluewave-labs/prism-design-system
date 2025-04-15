"use strict";(self.webpackChunk_bluewavelabs_prism_ui=self.webpackChunk_bluewavelabs_prism_ui||[]).push([[483],{"./src/components/Card/card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Card});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_ui_card__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/ui/card.tsx");const Card=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui_card__WEBPACK_IMPORTED_MODULE_1__.uz,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui_card__WEBPACK_IMPORTED_MODULE_1__.Zp,{...props})});Card.__docgenInfo={description:"",methods:[],displayName:"Card"}},"./src/components/ui/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs"),class_variance_authority__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),_lib_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/lib/utils.ts");const buttonVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_1__.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[100px] font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-gray-60 focus-visible:ring-gray-60/50 focus-visible:ring-[3px] aria-invalid:ring-red-800/20 dark:aria-invalid:ring-red-800/40 aria-invalid:border-red-800",{variants:{variant:{default:"bg-blue-30 text-blue-90 shadow-xs cursor-pointer hover:bg-blue-40",action:"border border-gray-60 text-red-300 shadow-xs cursor-pointer hover:bg-gray-60/20",destructive:"bg-red-800 text-rose-100 shadow-xs cursor-pointer hover:bg-red-900 focus-visible:ring-red-800/20",outline:"border border-gray-60 text-gray-10 shadow-xs cursor-pointer hover:bg-gray-60/20",outline_active:"border border-gray-20 bg-gray-20 text-gray-80 shadow-xs",secondary:"bg-gray-60 text-gray-10 shadow-xs cursor-pointer hover:bg-gray-70",ghost:"bg-transparent text-gray-10 shadow-xs cursor-pointer hover:bg-gray-10/8",link:"text-blue-30 underline-offset-4 hover:underline"},size:{default:"px-6 py-2.5 has-[>svg]:px-3 text-sm",xs:"gap-1 py-1 px-4 has-[>svg]:px-2",sm:"gap-1.5 py-1.5 px-4 has-[>svg]:px-2.5",md:"px-6 py-2.5 has-[>svg]:px-3",lg:"px-8 py-3.5 has-[>svg]:px-4",icon:"size-9"},rounded:{default:"rounded-[100px]",sm:"rounded-sm",md:"rounded-md",lg:"rounded-lg",full:"rounded-full"}},defaultVariants:{variant:"default",size:"default",rounded:"default"}});function Button({className,variant,size,rounded,asChild=!1,...props}){const Comp=asChild?_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_2__.DX:"button";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Comp,{"data-slot":"button",className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(buttonVariants({variant,size,rounded,className})),...props})}Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{asChild:{defaultValue:{value:"false",computed:!1},required:!1}}}},"./src/components/ui/card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Wu:()=>CardContent,ZB:()=>CardTitle,Zp:()=>Card,aR:()=>CardHeader,uz:()=>CardProvider,wL:()=>CardFooter});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs"),class_variance_authority__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),_lib_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/lib/utils.ts");__webpack_require__("./src/components/ui/button.tsx");const CardContext=react__WEBPACK_IMPORTED_MODULE_1__.createContext(void 0);function useCardContext(){const context=react__WEBPACK_IMPORTED_MODULE_1__.useContext(CardContext);if(!context)throw new Error("Card components must be used within a Card component");return context}function CardProvider({children}){const[isHovered,setIsHovered]=react__WEBPACK_IMPORTED_MODULE_1__.useState(!1),value=react__WEBPACK_IMPORTED_MODULE_1__.useMemo((()=>({isHovered,setIsHovered})),[isHovered]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CardContext.Provider,{value,children})}const cardVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__.F)("text-gray-30 flex flex-col gap-6 rounded-xl p-6 shadow-sm w-full border-[0.5px] border-gray-0/20 bg-blur transition-colors duration-200 ease-in-out",{variants:{variant:{default:"card",clickable:"card cursor-pointer hover:bg-linear-[180deg] hover:from-gray-0/8 hover:to-gray-0/2 hover:bg-transparent hover:border-gray-0/30",console:"bg-transparent bg-linear-180 from-gray-0/8 to-gray-0/2 bg-blur border-[0.5px] border-gray-0/20 cursor-pointer hover:from-gray-0/16 hover:to-gray-0/4 hover:bg-transparent hover:border-gray-0/40"}},defaultVariants:{variant:"default"}});function Card({className,variant="default",asChild=!1,...props}){const{setIsHovered}=useCardContext(),Comp=asChild?_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.DX:"div";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Comp,{"data-slot":"card",className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)(cardVariants({variant}),className),onMouseEnter:()=>{"console"===variant&&setIsHovered(!0)},onMouseLeave:()=>{"console"===variant&&setIsHovered(!1)},...props})}function CardHeader({className,...props}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{"data-slot":"card-header",className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",className),...props})}function CardTitle({className,...props}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{"data-slot":"card-title",className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("leading-none font-semibold",className),...props})}function CardContent({className,...props}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{"data-slot":"card-content",className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("min-h-24",className),...props})}function CardFooter({className,...props}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{"data-slot":"card-footer",className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_4__.cn)("flex items-center [.border-t]:pt-6",className),...props})}Card.__docgenInfo={description:"",methods:[],displayName:"Card",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{defaultValue:{value:"'default'",computed:!1},required:!1}}},CardContent.__docgenInfo={description:"",methods:[],displayName:"CardContent"},CardFooter.__docgenInfo={description:"",methods:[],displayName:"CardFooter"},CardHeader.__docgenInfo={description:"",methods:[],displayName:"CardHeader"},CardProvider.__docgenInfo={description:"",methods:[],displayName:"CardProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}},CardTitle.__docgenInfo={description:"",methods:[],displayName:"CardTitle"}},"./src/stories/Tabs.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,NestedTabs:()=>NestedTabs,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Tabs_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),card=__webpack_require__("./src/components/Card/card.tsx"),ui_card=__webpack_require__("./src/components/ui/card.tsx"),ui_button=__webpack_require__("./src/components/ui/button.tsx"),utils=__webpack_require__("./src/lib/utils.ts"),dist=__webpack_require__("./node_modules/@radix-ui/react-tabs/dist/index.mjs"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),class_variance_authority_dist=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs");const Tabs=dist.bL,tabsListVariants=(0,class_variance_authority_dist.F)("inline-flex h-9 items-center justify-center bg-linear-180 from-gray-0/10 to-gray-0/0 rounded-full text-sm mb-6",{variants:{variant:{default:"p-0 text-gray-40 border-gray-0/30 border-[0.5px]",pill:"p-1 border-gray-0/20 text-gray-10 mb-10 border-[0.5px]",tab:"flex justify-start items-end border-b border-gray-0/20 bg-gray-0/10 text-gray-10 rounded-none bg-transparent from-gray-0/0 to-gray-0/0"}},defaultVariants:{variant:"default"}}),TabsList=react.forwardRef((({className,variant,...props},ref)=>(0,jsx_runtime.jsx)(dist.B8,{ref,className:(0,utils.cn)(tabsListVariants({variant}),className),...props})));TabsList.displayName=dist.B8.displayName;const tabsTriggerVariants=(0,class_variance_authority_dist.F)("inline-flex items-center justify-center whitespace-nowrap px-3 py-1 text-sm font-medium ring-offset-white transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-blue-30 data-[state=active]:text-blue-90 data-[state=active]:shadow",{variants:{variant:{default:"text-gray-40 border-gray-0/30 self-stretch border-x-[0.25px] border-gray-0/30",pill:"rounded-full",tab:"bg-transparent text-gray-40 py-3.5 data-[state=active]:bg-transparent data-[state=active]:text-blue-30 data-[state=active]:border-b-2 data-[state=active]:border-blue-30"},position:{left:"rounded-l-full",right:"rounded-r-full",center:"rounded-none",default:"rounded-full"}},defaultVariants:{variant:"default",position:"default"}}),TabsTrigger=react.forwardRef((({className,variant,position,...props},ref)=>(0,jsx_runtime.jsx)(dist.l9,{ref,className:(0,utils.cn)(tabsTriggerVariants({variant,position}),className),...props})));TabsTrigger.displayName=dist.l9.displayName;const TabsContent=react.forwardRef((({className,...props},ref)=>(0,jsx_runtime.jsx)(dist.UC,{ref,className:(0,utils.cn)("mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300",className),...props})));TabsContent.displayName=dist.UC.displayName,TabsContent.__docgenInfo={description:"",methods:[]},TabsList.__docgenInfo={description:"",methods:[]},TabsTrigger.__docgenInfo={description:"",methods:[]};const tabs_Tabs=({tabsList,defaultValue,className,contentClassName,tabsListClassName,...props})=>{const getPosition=index=>"tab"===props.variant?"center":"pill"===props.variant?"default":0===index?"left":index===tabsList.length-1?"right":"center";return(0,jsx_runtime.jsxs)(Tabs,{defaultValue:null!=defaultValue?defaultValue:tabsList[0].value,className:(0,utils.cn)(className),...props,children:[(0,jsx_runtime.jsx)(TabsList,{variant:props.variant,className:tabsListClassName,children:tabsList.map(((tab,index)=>(0,jsx_runtime.jsx)(TabsTrigger,{value:tab.value,variant:props.variant,position:getPosition(index),...props,children:tab.label},tab.value)))}),tabsList.map((tab=>(0,jsx_runtime.jsx)(TabsContent,{value:tab.value,className:contentClassName,children:tab.content},tab.value)))]})};tabs_Tabs.__docgenInfo={description:"",methods:[],displayName:"Tabs"};__webpack_require__("./src/style/globals.css");const tabsList=[{label:"Account",value:"account",content:(0,jsx_runtime.jsxs)(card.Z,{children:[(0,jsx_runtime.jsx)(ui_card.aR,{children:"Account"}),(0,jsx_runtime.jsx)(ui_card.Wu,{children:"Account content"}),(0,jsx_runtime.jsx)(ui_card.wL,{children:(0,jsx_runtime.jsx)(ui_button.$,{children:"Account action"})})]})},{label:"Password",value:"password",content:(0,jsx_runtime.jsxs)(card.Z,{children:[(0,jsx_runtime.jsx)(ui_card.aR,{children:"Password"}),(0,jsx_runtime.jsx)(ui_card.Wu,{children:"Password content"}),(0,jsx_runtime.jsx)(ui_card.wL,{children:(0,jsx_runtime.jsx)(ui_button.$,{children:"Password action"})})]})},{label:"Username",value:"username",content:(0,jsx_runtime.jsxs)(card.Z,{children:[(0,jsx_runtime.jsx)(ui_card.aR,{children:"Username"}),(0,jsx_runtime.jsx)(ui_card.Wu,{children:"Username content"}),(0,jsx_runtime.jsx)(ui_card.wL,{children:(0,jsx_runtime.jsx)(ui_button.$,{children:"Username action"})})]})}],Tabs_stories={title:"Tabs",component:tabs_Tabs,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","pill","tab"],description:"Variant of the tabs",table:{type:{summary:"default | pill | tab"},defaultValue:{summary:"default"}}},tabsList:{control:{type:"object"},description:"List of tabs",table:{type:{summary:"Array<{ label: string; value: string; content: ReactNode }>"}}},defaultValue:{control:{type:"text"},description:"Tab selected by default, selects the first tab if not provided",table:{type:{summary:"string"},defaultValue:{summary:"tabsList[0].value"}}},className:{control:{type:"text"},description:"Class name for the main tabs component",table:{type:{summary:"string"}}},contentClassName:{control:{type:"text"},description:"Class name for the content of the tabs",table:{type:{summary:"string"}}},tabsListClassName:{control:{type:"text"},description:"Class name for the tabs list",table:{type:{summary:"string"}}}},args:{variant:"default",tabsList,defaultValue:"account",className:"w-[400px] mx-auto",contentClassName:void 0,tabsListClassName:void 0}},Default={args:{}},NestedTabs={args:{...Default.args,variant:"tab",tabsList:[{label:"Account",value:"account",content:(0,jsx_runtime.jsx)(tabs_Tabs,{tabsList,defaultValue:"account"})},{label:"Password",value:"password",content:(0,jsx_runtime.jsx)(tabs_Tabs,{tabsList,defaultValue:"account"})},{label:"Username",value:"username",content:(0,jsx_runtime.jsx)(tabs_Tabs,{tabsList,defaultValue:"account"})}]}},__namedExportsOrder=["Default","NestedTabs"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Default.parameters?.docs?.source}}},NestedTabs.parameters={...NestedTabs.parameters,docs:{...NestedTabs.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    variant: 'tab',\n    tabsList: [{\n      label: 'Account',\n      value: 'account',\n      content: <Tabs tabsList={tabsList} defaultValue=\"account\" />\n    }, {\n      label: 'Password',\n      value: 'password',\n      content: <Tabs tabsList={tabsList} defaultValue=\"account\" />\n    }, {\n      label: 'Username',\n      value: 'username',\n      content: <Tabs tabsList={tabsList} defaultValue=\"account\" />\n    }]\n  }\n}",...NestedTabs.parameters?.docs?.source}}}}}]);