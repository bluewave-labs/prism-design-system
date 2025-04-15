/*! For license information please see stories-Input-stories.0aca55f0.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_bluewavelabs_prism_ui=self.webpackChunk_bluewavelabs_prism_ui||[]).push([[669],{"./node_modules/class-variance-authority/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>cva});var clsx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs");const falsyToString=value=>"boolean"==typeof value?`${value}`:0===value?"0":value,cx=clsx__WEBPACK_IMPORTED_MODULE_0__.$,cva=(base,config)=>props=>{var _config_compoundVariants;if(null==(null==config?void 0:config.variants))return cx(base,null==props?void 0:props.class,null==props?void 0:props.className);const{variants,defaultVariants}=config,getVariantClassNames=Object.keys(variants).map((variant=>{const variantProp=null==props?void 0:props[variant],defaultVariantProp=null==defaultVariants?void 0:defaultVariants[variant];if(null===variantProp)return null;const variantKey=falsyToString(variantProp)||falsyToString(defaultVariantProp);return variants[variant][variantKey]})),propsWithoutUndefined=props&&Object.entries(props).reduce(((acc,param)=>{let[key,value]=param;return void 0===value||(acc[key]=value),acc}),{}),getCompoundVariantClassNames=null==config||null===(_config_compoundVariants=config.compoundVariants)||void 0===_config_compoundVariants?void 0:_config_compoundVariants.reduce(((acc,param)=>{let{class:cvClass,className:cvClassName,...compoundVariantOptions}=param;return Object.entries(compoundVariantOptions).every((param=>{let[key,value]=param;return Array.isArray(value)?value.includes({...defaultVariants,...propsWithoutUndefined}[key]):{...defaultVariants,...propsWithoutUndefined}[key]===value}))?[...acc,cvClass,cvClassName]:acc}),[]);return cx(base,getVariantClassNames,getCompoundVariantClassNames,null==props?void 0:props.class,null==props?void 0:props.className)}},"./node_modules/lucide-react/dist/esm/createLucideIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>createLucideIcon});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");const toPascalCase=string=>{const camelCase=(string=>string.replace(/^([A-Z])|[\s-_]+(\w)/g,((match,p1,p2)=>p2?p2.toUpperCase():p1.toLowerCase())))(string);return camelCase.charAt(0).toUpperCase()+camelCase.slice(1)},mergeClasses=(...classes)=>classes.filter(((className,index,array)=>Boolean(className)&&""!==className.trim()&&array.indexOf(className)===index)).join(" ").trim();var defaultAttributes={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Icon=(0,react.forwardRef)((({color="currentColor",size=24,strokeWidth=2,absoluteStrokeWidth,className="",children,iconNode,...rest},ref)=>(0,react.createElement)("svg",{ref,...defaultAttributes,width:size,height:size,stroke:color,strokeWidth:absoluteStrokeWidth?24*Number(strokeWidth)/Number(size):strokeWidth,className:mergeClasses("lucide",className),...rest},[...iconNode.map((([tag,attrs])=>(0,react.createElement)(tag,attrs))),...Array.isArray(children)?children:[children]]))),createLucideIcon=(iconName,iconNode)=>{const Component=(0,react.forwardRef)((({className,...props},ref)=>{return(0,react.createElement)(Icon,{ref,iconNode,className:mergeClasses(`lucide-${string=toPascalCase(iconName),string.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${iconName}`,className),...props});var string}));return Component.displayName=toPascalCase(iconName),Component}},"./src/components/ui/input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>Input});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),class_variance_authority__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_lib_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/lib/utils.ts");const inputVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__.F)("",{variants:{variant:{default:"text-gray-10 placeholder:text-gray-20 bg-transparent grow text-sm shadow-xs outline-none focus-visible:ring-none pt-4",icon:"flex items-center justify-center bg-gray-40/12 border-gray-0/20 w-full min-w-0 rounded-md border-[0.5px] px-2 py-2 text-sm shadow-xs transition-[color,box-shadow] aria-invalid:border-red-800 h-14 text-gray-10 placeholder:text-gray-20 outline-none focus-visible:ring-[0.5px] focus-visible:ring-gray-0/10 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-0/8","label-out":"bg-gray-40/12 border-gray-0/20 w-full min-w-0 rounded-md border-[0.5px] px-2 py-2 text-sm shadow-xs transition-[color,box-shadow] aria-invalid:border-red-800 h-14 text-gray-10 placeholder:text-gray-20 grow outline-none focus-visible:ring-[1px] focus-visible:ring-gray-0/10 focus-visible:ring-offset-1 focus-visible:ring-offset-gray-0/8 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed","no-label":"bg-gray-40/12 border-gray-0/20 w-full min-w-0 rounded-md border-[0.5px] px-2 py-2 text-sm shadow-xs transition-[color,box-shadow] aria-invalid:border-red-800 h-14 text-gray-10 placeholder:text-gray-20 outline-none focus-visible:ring-[0.5px] focus-visible:ring-gray-0/10 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-0/8 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed"},error:{true:"border-red-800",false:""}},defaultVariants:{variant:"default"}}),labelVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_2__.F)("",{variants:{variant:{default:"relative flex items-center bg-gray-40/12 border-gray-0/20 w-full min-w-0 rounded-md border-[0.5px] px-4 py-2 text-sm shadow-xs transition-[color,box-shadow] aria-invalid:border-red-800 h-14","label-out":"flex flex-col-reverse items-start justify-center w-full min-w-0"},disabled:{true:"opacity-50",false:""},error:{true:"border-red-800",false:""}},defaultVariants:{variant:"default",disabled:!1,error:!1}});function Input(props){const{className,type,variant,id,label,disabled,error,placeholder,...rest}=props,[isFocused,setIsFocused]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1);return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>{props.value&&setIsFocused(!0)}),[props.value]),"icon"===variant?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(InputIcon,{...props}):"no-label"===variant?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(NoLabelInput,{...props}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label",{htmlFor:id,"aria-invalid":error,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(labelVariants({variant,disabled:null!=disabled&&disabled,error:null!=error&&error})),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type,"data-slot":"input",id,"aria-invalid":error,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(inputVariants({variant,error:!("label-out"!==variant||!error)&&error}),className),placeholder:"label-out"===variant?placeholder:" ",onFocus:()=>setIsFocused(!0),onBlur:e=>{e.target.value||setIsFocused(!1)},...rest}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("label-out"!==variant?"absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-40 transition-all ease-in-out":"text-gray-10 font-medium mb-4 ml-1",isFocused&&"label-out"!==variant?"scale-[80%] top-3 left-2.5":""),children:label})]})}function InputIcon({variant,className,type,id,iconLeft,iconRight,disabled,error,...props}){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(labelVariants({error:null!=error&&error,disabled:null!=disabled&&disabled}),className),children:[iconLeft&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"mr-2 text-2xl",children:iconLeft}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type,"data-slot":"input",id,disabled,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("grow outline-none focus-visible:ring-none",className),...props}),iconRight&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"ml-2 text-2xl",children:iconRight})]})}function NoLabelInput({variant,className,type,id,disabled,error,...props}){const{iconLeft,iconRight,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type,"data-slot":"input",id,"aria-invalid":error,disabled,className:(0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)(inputVariants({variant,error}),className),placeholder:" ",...rest})}Input.__docgenInfo={description:"",methods:[],displayName:"Input"}},"./src/stories/Input.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,IconLeft:()=>IconLeft,IconLeftAndRight:()=>IconLeftAndRight,IconRight:()=>IconRight,LabelOut:()=>LabelOut,NoLabel:()=>NoLabel,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Input_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),createLucideIcon=__webpack_require__("./node_modules/lucide-react/dist/esm/createLucideIcon.js");const Link=(0,createLucideIcon.A)("link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]),Copy=(0,createLucideIcon.A)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);var input=__webpack_require__("./src/components/ui/input.tsx");__webpack_require__("./src/style/globals.css");const Input_stories={title:"Input",component:input.p,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{variant:{control:"select",options:["default","icon","label-out","no-label"],description:"The variant of the input.",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},label:{control:"text",description:"The label of the input.",table:{type:{summary:"string"}}},iconLeft:{control:"object",description:"The left icon of the input.",table:{type:{summary:"ReactNode"}}},iconRight:{control:"object",description:"The right icon of the input.",table:{type:{summary:"ReactNode"}}},error:{control:"boolean",description:"Whether the input has an error.",table:{type:{summary:"boolean"}}},disabled:{control:"boolean",description:"Whether the input is disabled.",table:{type:{summary:"boolean"}}},placeholder:{control:"text",description:"The placeholder of the input.",table:{type:{summary:"string"}}}},args:{variant:"default",label:"Input Label",iconLeft:(0,jsx_runtime.jsx)(Link,{}),iconRight:(0,jsx_runtime.jsx)(Copy,{}),placeholder:"Placeholder"}},Default={args:{variant:"default",label:"Input Label"}},IconLeft={args:{...Default.args,variant:"icon",iconRight:void 0}},IconRight={args:{...Default.args,variant:"icon",iconRight:(0,jsx_runtime.jsx)(Copy,{}),iconLeft:void 0}},IconLeftAndRight={args:{...Default.args,variant:"icon",iconLeft:(0,jsx_runtime.jsx)(Link,{}),iconRight:(0,jsx_runtime.jsx)(Copy,{})}},LabelOut={args:{...Default.args,variant:"label-out"}},NoLabel={args:{...Default.args,variant:"no-label"}},__namedExportsOrder=["Default","IconLeft","IconRight","IconLeftAndRight","LabelOut","NoLabel"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'default',\n    label: 'Input Label'\n  }\n}",...Default.parameters?.docs?.source}}},IconLeft.parameters={...IconLeft.parameters,docs:{...IconLeft.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    variant: 'icon',\n    iconRight: undefined\n  }\n}",...IconLeft.parameters?.docs?.source}}},IconRight.parameters={...IconRight.parameters,docs:{...IconRight.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    variant: 'icon',\n    iconRight: <Copy />,\n    iconLeft: undefined\n  }\n}",...IconRight.parameters?.docs?.source}}},IconLeftAndRight.parameters={...IconLeftAndRight.parameters,docs:{...IconLeftAndRight.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    variant: 'icon',\n    iconLeft: <Link />,\n    iconRight: <Copy />\n  }\n}",...IconLeftAndRight.parameters?.docs?.source}}},LabelOut.parameters={...LabelOut.parameters,docs:{...LabelOut.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    variant: 'label-out'\n  }\n}",...LabelOut.parameters?.docs?.source}}},NoLabel.parameters={...NoLabel.parameters,docs:{...NoLabel.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...Default.args,\n    variant: 'no-label'\n  }\n}",...NoLabel.parameters?.docs?.source}}}}}]);