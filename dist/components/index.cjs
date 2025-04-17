"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/index.ts
var components_exports = {};
__export(components_exports, {
  AlertDescription: () => AlertDescription,
  AlertTitle: () => AlertTitle,
  AppSidebar: () => AppSidebar,
  Avatar: () => Avatar,
  AvatarFallback: () => AvatarFallback,
  AvatarImage: () => AvatarImage,
  Banner: () => Alert,
  Button: () => Button,
  Card: () => Card2,
  CardAction: () => CardAction,
  CardContent: () => CardContent,
  CardDescription: () => CardDescription,
  CardFooter: () => CardFooter,
  CardHeader: () => CardHeader,
  CardTitle: () => CardTitle,
  Collapsible: () => Collapsible,
  CollapsibleContent: () => CollapsibleContent2,
  CollapsibleTrigger: () => CollapsibleTrigger2,
  ConsoleButton: () => ConsoleButton,
  DialogFooter: () => DialogFooter,
  DialogHeader: () => DialogHeader,
  DropdownMenu: () => DropdownMenu,
  DropdownMenuCheckboxItem: () => DropdownMenuCheckboxItem,
  DropdownMenuContent: () => DropdownMenuContent,
  DropdownMenuGroup: () => DropdownMenuGroup,
  DropdownMenuItem: () => DropdownMenuItem,
  DropdownMenuLabel: () => DropdownMenuLabel,
  DropdownMenuPortal: () => DropdownMenuPortal,
  DropdownMenuRadioGroup: () => DropdownMenuRadioGroup,
  DropdownMenuRadioItem: () => DropdownMenuRadioItem,
  DropdownMenuSeparator: () => DropdownMenuSeparator,
  DropdownMenuShortcut: () => DropdownMenuShortcut,
  DropdownMenuSub: () => DropdownMenuSub,
  DropdownMenuSubContent: () => DropdownMenuSubContent,
  DropdownMenuSubTrigger: () => DropdownMenuSubTrigger,
  DropdownMenuTrigger: () => DropdownMenuTrigger,
  Input: () => Input,
  Modal: () => Modal,
  Pagination: () => Pagination2,
  Radio: () => Radio,
  RadioBtn: () => RadioBtn,
  Select: () => Select,
  Separator: () => Separator,
  Sheet: () => Sheet,
  SheetClose: () => SheetClose,
  SheetContent: () => SheetContent,
  SheetDescription: () => SheetDescription,
  SheetFooter: () => SheetFooter,
  SheetHeader: () => SheetHeader,
  SheetTitle: () => SheetTitle,
  SheetTrigger: () => SheetTrigger,
  SidebarFooter: () => SidebarFooter,
  SidebarGroup: () => SidebarGroup,
  SidebarGroupAction: () => SidebarGroupAction,
  SidebarGroupContent: () => SidebarGroupContent,
  SidebarGroupLabel: () => SidebarGroupLabel,
  SidebarInput: () => SidebarInput,
  SidebarInset: () => SidebarInset,
  SidebarMenu: () => SidebarMenu,
  SidebarMenuAction: () => SidebarMenuAction,
  SidebarMenuBadge: () => SidebarMenuBadge,
  SidebarMenuButton: () => SidebarMenuButton,
  SidebarMenuItem: () => SidebarMenuItem,
  SidebarMenuSkeleton: () => SidebarMenuSkeleton,
  SidebarMenuSub: () => SidebarMenuSub,
  SidebarMenuSubButton: () => SidebarMenuSubButton,
  SidebarMenuSubItem: () => SidebarMenuSubItem,
  SidebarProvider: () => SidebarProvider,
  SidebarSeparator: () => SidebarSeparator,
  Skeleton: () => Skeleton,
  Switch: () => Switch2,
  Table: () => Table2,
  Tabs: () => Tabs2,
  Tooltip: () => Tooltip,
  TooltipContent: () => TooltipContent,
  TooltipProvider: () => TooltipProvider,
  TooltipTrigger: () => TooltipTrigger,
  useSidebar: () => useSidebar
});
module.exports = __toCommonJS(components_exports);

// src/components/ui/alert.tsx
var import_class_variance_authority = require("class-variance-authority");
var React = __toESM(require("react"), 1);
var import_lucide_react = require("lucide-react");

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/ui/alert.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var alertVariants = (0, import_class_variance_authority.cva)(
  "text-gray-30 flex flex-col gap-6 rounded-xl p-6 shadow-sm w-full border-[0.5px] border-gray-0/20 bg-blur transition-colors duration-200 ease-in-out bg-gray-0/8 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-gray-950 [&>svg~*]:pl-7 dark:border-gray-800 dark:[&>svg]:text-gray-50 relative",
  {
    variants: {
      variant: {
        default: "",
        destructive: "border-red-500/50 text-red-500 dark:border-red-500 [&>svg]:text-red-500 dark:border-red-900/50 dark:text-red-900 dark:dark:border-red-900 dark:[&>svg]:text-red-900",
        closeable: "data-[closed=true]:hidden"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Alert = React.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, variant, children, isOpen = true, onClose } = _b, props = __objRest(_b, ["className", "variant", "children", "isOpen", "onClose"]);
    const [internalIsOpen, setInternalIsOpen] = React.useState(isOpen);
    const handleClose = () => {
      setInternalIsOpen(false);
      onClose == null ? void 0 : onClose();
    };
    return variant === "closeable" ? internalIsOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", __spreadProps(__spreadValues({ ref, role: "alert", className: cn(alertVariants({ variant }), className) }, props), { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { onClick: handleClose, className: "absolute top-2 right-2 cursor-pointer hover:text-gray-10", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.X, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "sr-only", children: "Close" })
      ] }),
      children
    ] })) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", __spreadProps(__spreadValues({ ref, role: "alert", className: cn(alertVariants({ variant }), className) }, props), { children }));
  }
);
Alert.displayName = "Alert";
var AlertTitle = React.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", __spreadValues({ ref, className: cn("mb-1 font-medium leading-none tracking-tight", className) }, props));
  }
);
AlertTitle.displayName = "AlertTitle";
var AlertDescription = React.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", __spreadValues({ ref, className: cn("text-sm [&_p]:leading-relaxed", className) }, props));
  }
);
AlertDescription.displayName = "AlertDescription";

// src/components/ui/button.tsx
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority2 = require("class-variance-authority");
var import_jsx_runtime2 = require("react/jsx-runtime");
var buttonVariants = (0, import_class_variance_authority2.cva)(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[100px] font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-gray-60 focus-visible:ring-gray-60/50 focus-visible:ring-[3px] aria-invalid:ring-red-800/20 dark:aria-invalid:ring-red-800/40 aria-invalid:border-red-800",
  {
    variants: {
      variant: {
        default: "bg-blue-30 text-blue-90 shadow-xs cursor-pointer hover:bg-blue-40",
        action: "border border-gray-60 text-red-300 shadow-xs cursor-pointer hover:bg-gray-60/20",
        destructive: "bg-red-800 text-rose-100 shadow-xs cursor-pointer hover:bg-red-900 focus-visible:ring-red-800/20",
        outline: "border border-gray-60 text-gray-10 shadow-xs cursor-pointer hover:bg-gray-60/20",
        outline_active: "border border-gray-20 bg-gray-20 text-gray-80 shadow-xs",
        secondary: "bg-gray-60 text-gray-10 shadow-xs cursor-pointer hover:bg-gray-70",
        ghost: "bg-transparent text-gray-10 shadow-xs cursor-pointer hover:bg-gray-10/8",
        link: "text-blue-30 underline-offset-4 hover:underline"
      },
      size: {
        default: "px-6 py-2.5 has-[>svg]:px-3 text-sm",
        xs: "gap-1 py-1 px-4 has-[>svg]:px-2",
        sm: "gap-1.5 py-1.5 px-4 has-[>svg]:px-2.5",
        md: "px-6 py-2.5 has-[>svg]:px-3",
        lg: "px-8 py-3.5 has-[>svg]:px-4",
        icon: "size-9"
      },
      rounded: {
        default: "rounded-[100px]",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default"
    }
  }
);
function Button(_a) {
  var _b = _a, { className, variant, size, rounded, asChild = false } = _b, props = __objRest(_b, ["className", "variant", "size", "rounded", "asChild"]);
  const Comp = asChild ? import_react_slot.Slot : "button";
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Comp, __spreadValues({ "data-slot": "button", className: cn(buttonVariants({ variant, size, rounded, className })) }, props));
}

// src/components/ui/card.tsx
var React2 = __toESM(require("react"), 1);
var import_react_slot2 = require("@radix-ui/react-slot");
var import_class_variance_authority3 = require("class-variance-authority");
var import_jsx_runtime3 = require("react/jsx-runtime");
var CardContext = React2.createContext(void 0);
function useCardContext() {
  const context = React2.useContext(CardContext);
  if (!context) {
    throw new Error("Card components must be used within a Card component");
  }
  return context;
}
function CardProvider({ children }) {
  const [isHovered, setIsHovered] = React2.useState(false);
  const value = React2.useMemo(() => ({ isHovered, setIsHovered }), [isHovered]);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(CardContext.Provider, { value, children });
}
var cardVariants = (0, import_class_variance_authority3.cva)(
  "text-gray-30 flex flex-col gap-6 rounded-xl p-6 shadow-sm w-full border-[0.5px] border-gray-0/20 bg-blur transition-colors duration-200 ease-in-out",
  {
    variants: {
      variant: {
        default: "card",
        clickable: "card cursor-pointer hover:bg-linear-[180deg] hover:from-gray-0/8 hover:to-gray-0/2 hover:bg-transparent hover:border-gray-0/30",
        console: "bg-transparent bg-linear-180 from-gray-0/8 to-gray-0/2 bg-blur border-[0.5px] border-gray-0/20 cursor-pointer hover:from-gray-0/16 hover:to-gray-0/4 hover:bg-transparent hover:border-gray-0/40"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Card(_a) {
  var _b = _a, {
    className,
    variant = "default",
    asChild = false
  } = _b, props = __objRest(_b, [
    "className",
    "variant",
    "asChild"
  ]);
  const { setIsHovered } = useCardContext();
  const Comp = asChild ? import_react_slot2.Slot : "div";
  const handleMouseEnter = () => {
    if (variant === "console") {
      setIsHovered(true);
    }
  };
  const handleMouseLeave = () => {
    if (variant === "console") {
      setIsHovered(false);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    Comp,
    __spreadValues({
      "data-slot": "card",
      className: cn(cardVariants({ variant }), className),
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave
    }, props)
  );
}
function CardHeader(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "div",
    __spreadValues({
      "data-slot": "card-header",
      className: cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )
    }, props)
  );
}
function CardTitle(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", __spreadValues({ "data-slot": "card-title", className: cn("leading-none font-semibold", className) }, props));
}
function CardDescription(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", __spreadValues({ "data-slot": "card-description", className: cn(" text-sm", className) }, props));
}
function CardAction(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "div",
    __spreadValues({
      "data-slot": "card-action",
      className: cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className)
    }, props)
  );
}
function CardContent(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", __spreadValues({ "data-slot": "card-content", className: cn("min-h-24", className) }, props));
}
function CardFooter(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", __spreadValues({ "data-slot": "card-footer", className: cn("flex items-center [.border-t]:pt-6", className) }, props));
}
function ConsoleButton(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  const { isHovered } = useCardContext();
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    Button,
    __spreadValues({
      className: cn(
        "bg-transparent border border-gray-60 text-gray-10 hover:bg-gray-0 hover:border-gray-0 hover:text-gray-100",
        isHovered ? "bg-gray-0 border-gray-0 text-gray-100" : "",
        className
      )
    }, props)
  );
}

// src/components/Card/card.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var Card2 = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(CardProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Card, __spreadValues({}, props)) });
};

// src/components/ui/input.tsx
var import_class_variance_authority4 = require("class-variance-authority");
var import_react = require("react");
var import_jsx_runtime5 = require("react/jsx-runtime");
var inputVariants = (0, import_class_variance_authority4.cva)("", {
  variants: {
    variant: {
      default: "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none text-gray-10 placeholder:text-gray-20 bg-transparent grow text-sm shadow-xs outline-none focus-visible:ring-none pt-4",
      icon: "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none flex items-center justify-center bg-gray-40/12 border-gray-0/20 w-full min-w-0 rounded-md border-[0.5px] px-2 py-2 text-sm shadow-xs transition-[color,box-shadow] aria-invalid:border-red-800 h-14 text-gray-10 placeholder:text-gray-20 outline-none focus-visible:ring-[0.5px] focus-visible:ring-gray-0/10 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-0/8",
      "label-out": "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none bg-gray-40/12 border-gray-0/20 w-full min-w-0 rounded-md border-[0.5px] px-2 py-2 text-sm shadow-xs transition-[color,box-shadow] aria-invalid:border-red-800 h-14 text-gray-10 placeholder:text-gray-20 grow outline-none focus-visible:ring-[1px] focus-visible:ring-gray-0/10 focus-visible:ring-offset-1 focus-visible:ring-offset-gray-0/8 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed",
      "no-label": "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none bg-gray-40/12 border-gray-0/20 w-full min-w-0 rounded-md border-[0.5px] px-2 py-2 text-sm shadow-xs transition-[color,box-shadow] aria-invalid:border-red-800 h-14 text-gray-10 placeholder:text-gray-20 outline-none focus-visible:ring-[0.5px] focus-visible:ring-gray-0/10 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-0/8 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed"
    },
    error: {
      true: "border-red-800",
      false: ""
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
var labelVariants = (0, import_class_variance_authority4.cva)("", {
  variants: {
    variant: {
      default: "relative flex items-center bg-gray-40/12 border-gray-0/20 w-full min-w-0 rounded-md border-[0.5px] px-4 py-2 text-sm shadow-xs transition-[color,box-shadow] aria-invalid:border-red-800 h-14",
      "label-out": "flex flex-col-reverse items-start justify-center w-full min-w-0"
    },
    disabled: {
      true: "opacity-50",
      false: ""
    },
    error: {
      true: "border-red-800",
      false: ""
    }
  },
  defaultVariants: {
    variant: "default",
    disabled: false,
    error: false
  }
});
function Input(props) {
  const _a = props, { className, type, variant, id, label, disabled, error, placeholder } = _a, rest = __objRest(_a, ["className", "type", "variant", "id", "label", "disabled", "error", "placeholder"]);
  const [isFocused, setIsFocused] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    if (props.value) {
      setIsFocused(true);
    }
  }, [props.value]);
  if (variant === "icon") {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(InputIcon, __spreadValues({}, props));
  }
  if (variant === "no-label") {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(NoLabelInput, __spreadValues({}, props));
  }
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
    "label",
    {
      htmlFor: id,
      "aria-invalid": error,
      className: cn(
        labelVariants({
          variant,
          disabled: disabled != null ? disabled : false,
          error: error != null ? error : false
        })
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "input",
          __spreadValues({
            type,
            "data-slot": "input",
            id,
            "aria-invalid": error,
            className: cn(inputVariants({ variant, error: variant === "label-out" && error ? error : false }), className),
            placeholder: variant === "label-out" ? placeholder : " ",
            onFocus: () => setIsFocused(true),
            onBlur: (e) => {
              if (!e.target.value) {
                setIsFocused(false);
              }
            }
          }, rest)
        ),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "span",
          {
            className: cn(
              variant !== "label-out" ? "absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-40 transition-all ease-in-out" : "text-gray-10 font-medium mb-4 ml-1",
              isFocused && variant !== "label-out" ? "scale-[80%] top-3 left-2.5" : ""
            ),
            children: label
          }
        )
      ]
    }
  );
}
function InputIcon(_a) {
  var _b = _a, { variant, className, type, id, iconLeft, iconRight, disabled, error } = _b, props = __objRest(_b, ["variant", "className", "type", "id", "iconLeft", "iconRight", "disabled", "error"]);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: cn(labelVariants({ error: error != null ? error : false, disabled: disabled != null ? disabled : false }), className), children: [
    iconLeft && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "mr-2 text-2xl", children: iconLeft }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      "input",
      __spreadValues({
        type,
        "data-slot": "input",
        id,
        disabled,
        className: cn("grow outline-none focus-visible:ring-none", className)
      }, props)
    ),
    iconRight && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "ml-2 text-2xl", children: iconRight })
  ] });
}
function NoLabelInput(_a) {
  var _b = _a, { variant, className, type, id, disabled, error } = _b, props = __objRest(_b, ["variant", "className", "type", "id", "disabled", "error"]);
  const _a2 = props, { iconLeft, iconRight } = _a2, rest = __objRest(_a2, ["iconLeft", "iconRight"]);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "input",
    __spreadValues({
      type,
      "data-slot": "input",
      id,
      "aria-invalid": error,
      disabled,
      className: cn(inputVariants({ variant, error }), className),
      placeholder: "\xA0"
    }, rest)
  );
}

// src/components/ui/dialog.tsx
var DialogPrimitive = __toESM(require("@radix-ui/react-dialog"), 1);
var import_lucide_react2 = require("lucide-react");
var React3 = __toESM(require("react"), 1);
var import_jsx_runtime6 = require("react/jsx-runtime");
var Dialog = DialogPrimitive.Root;
var DialogTrigger = DialogPrimitive.Trigger;
var DialogPortal = DialogPrimitive.Portal;
var DialogOverlay = React3.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    DialogPrimitive.Overlay,
    __spreadValues({
      ref,
      className: cn(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )
    }, props)
  );
});
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogContent = React3.forwardRef(
  (_a, ref) => {
    var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(DialogPortal, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(DialogOverlay, {}),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
        DialogPrimitive.Content,
        __spreadProps(__spreadValues({
          ref,
          className: cn(
            "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-gray-0/20 bg-linear-180 from-blue-105 to-blue-115 p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
            className
          )
        }, props), {
          children: [
            children,
            /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-0 transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:text-gray-10 cursor-pointer", children: [
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react2.X, { className: "h-4 w-4" }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "sr-only", children: "Close" })
            ] })
          ]
        })
      )
    ] });
  }
);
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = (_a) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", __spreadValues({ className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className) }, props));
};
DialogHeader.displayName = "DialogHeader";
var DialogFooter = (_a) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", __spreadValues({ className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className) }, props));
};
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React3.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    DialogPrimitive.Title,
    __spreadValues({
      ref,
      className: cn("text-lg font-semibold leading-none tracking-tight", className)
    }, props)
  );
});
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = React3.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    DialogPrimitive.Description,
    __spreadValues({
      ref,
      className: cn("text-sm text-gray-500 dark:text-gray-400", className)
    }, props)
  );
});
DialogDescription.displayName = DialogPrimitive.Description.displayName;

// src/components/Modal/modal.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
var Modal = (_a) => {
  var _b = _a, { modalTrigger, children } = _b, props = __objRest(_b, ["modalTrigger", "children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(Dialog, __spreadProps(__spreadValues({}, props), { children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DialogTrigger, { asChild: typeof modalTrigger !== "string", children: modalTrigger }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DialogContent, { children })
  ] }));
};

// src/components/ui/radio.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
var Radio = (_a) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    "input",
    __spreadValues({
      type: "radio",
      className: cn(
        "w-5 h-5 relative appearance-none rounded-full",
        "after:rounded-full after:w-5 after:h-5 after:absolute after:top-0 after:left-0 after:border-2 after:border-gray-60 after:cursor-pointer",
        "checked:after:border-blue-30",
        "before:w-2.5 before:h-2.5 before:absolute before:top-1/2 before:left-1/2 before:transform before:-translate-x-1/2 before:-translate-y-1/2 before:z-10 before:rounded-full",
        "checked:before:bg-blue-200",
        className
      ),
      checked: props.checked
    }, props)
  );
};
var radio_default = Radio;

// src/components/Radio/radio.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
var RadioBtn = (_a) => {
  var _b = _a, { id, label, disabled, className } = _b, props = __objRest(_b, ["id", "label", "disabled", "className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
    "label",
    {
      htmlFor: id,
      className: cn(
        "flex items-start gap-2 grow text-sm text-gray-30",
        disabled ? "opacity-50 pointer-events-none" : "",
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(radio_default, __spreadValues({ id }, props)),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "w-[calc(100%-28px)]", children: label })
      ]
    }
  );
};

// src/components/ui/select.tsx
var import_lucide_react3 = require("lucide-react");
var import_react2 = require("react");
var import_jsx_runtime10 = require("react/jsx-runtime");
var Select = ({ selected, options, onSelect, disabled = false }) => {
  const [isOpen, setIsOpen] = (0, import_react2.useState)(false);
  const ref = (0, import_react2.useRef)(null);
  const [showAbove, setShowAbove] = (0, import_react2.useState)(false);
  const [highlightedIndex, setHighlightedIndex] = (0, import_react2.useState)(-1);
  const handleKeyDown = (e) => {
    if (disabled) return;
    switch (e.key) {
      case "Enter":
      case " ":
        e.preventDefault();
        setIsOpen(!isOpen);
        if (isOpen && highlightedIndex >= 0) {
          onSelect(options[highlightedIndex]);
          setHighlightedIndex(-1);
        }
        break;
      case "ArrowDown":
        e.preventDefault();
        if (isOpen) {
          setHighlightedIndex((prev) => prev < options.length - 1 ? prev + 1 : prev);
        } else {
          setIsOpen(true);
        }
        break;
      case "ArrowUp":
        e.preventDefault();
        if (isOpen) {
          setHighlightedIndex((prev) => prev > 0 ? prev - 1 : 0);
        }
        break;
      case "Escape":
        e.preventDefault();
        setIsOpen(false);
        break;
      case "Tab":
        setIsOpen(false);
        break;
    }
  };
  (0, import_react2.useEffect)(() => {
    const handlePosition = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const spaceBelow = window.innerHeight - rect.bottom;
        const spaceAbove = rect.top;
        setShowAbove(spaceBelow < 200 && spaceAbove > spaceBelow);
      }
    };
    if (isOpen) {
      handlePosition();
    }
  }, [isOpen]);
  (0, import_react2.useEffect)(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
    "div",
    {
      ref,
      onClick: () => {
        if (disabled) {
          return;
        }
        setIsOpen(!isOpen);
      },
      className: cn("relative w-[204px]", disabled ? "opacity-50 pointer-events-none" : "cursor-pointer"),
      onKeyDown: handleKeyDown,
      tabIndex: disabled ? -1 : 0,
      role: "combobox",
      "aria-expanded": isOpen,
      "aria-haspopup": "listbox",
      "aria-controls": "select-options",
      "aria-disabled": disabled,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("p", { className: "flex items-center justify-between border-[0.5px] bg-gray-40/12 border-gray-0/20 py-2.5 px-3.5 rounded-md cursor-pointer", children: [
          selected,
          isOpen ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_lucide_react3.ChevronUp, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_lucide_react3.ChevronDown, { size: 16 })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          "div",
          {
            className: cn(
              "absolute border bg-gray-80 border-gray-0/20 flex-col z-20 text-gray-10 gap-0 w-full max-h-[200px] overflow-y-auto",
              isOpen ? "flex" : "hidden",
              showAbove ? "bottom-full rounded-t-sm" : "top-full rounded-b-sm"
            ),
            children: options.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
              "button",
              {
                onMouseEnter: () => setHighlightedIndex(index),
                onClick: () => {
                  onSelect(item);
                  setIsOpen(false);
                },
                className: cn(
                  "py-2 px-3 text-sm w-full text-left hover:bg-gray-0/12 cursor-pointer",
                  selected === item ? "bg-gray-0/12" : "",
                  highlightedIndex === index ? "bg-gray-0/12" : ""
                ),
                "aria-selected": selected === item,
                tabIndex: isOpen ? 0 : -1,
                role: "option",
                children: item
              },
              item
            ))
          }
        )
      ]
    }
  );
};

// src/components/ui/sidebar.tsx
var import_react_slot3 = require("@radix-ui/react-slot");
var import_class_variance_authority5 = require("class-variance-authority");
var import_lucide_react5 = require("lucide-react");
var React5 = __toESM(require("react"), 1);

// src/hooks/use-mobile.ts
var React4 = __toESM(require("react"), 1);
var MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  const [isMobile, setIsMobile] = React4.useState(void 0);
  React4.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return !!isMobile;
}

// src/components/ui/separator.tsx
var SeparatorPrimitive = __toESM(require("@radix-ui/react-separator"), 1);
var import_jsx_runtime11 = require("react/jsx-runtime");
function Separator(_a) {
  var _b = _a, {
    className,
    orientation = "horizontal",
    decorative = true
  } = _b, props = __objRest(_b, [
    "className",
    "orientation",
    "decorative"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    SeparatorPrimitive.Root,
    __spreadValues({
      "data-slot": "separator-root",
      decorative,
      orientation,
      className: cn(
        "bg-gray-20 shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px dark:bg-gray-80",
        className
      )
    }, props)
  );
}

// src/components/ui/sheet.tsx
var SheetPrimitive = __toESM(require("@radix-ui/react-dialog"), 1);
var import_lucide_react4 = require("lucide-react");
var import_jsx_runtime12 = require("react/jsx-runtime");
function Sheet(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SheetPrimitive.Root, __spreadValues({ "data-slot": "sheet" }, props));
}
function SheetTrigger(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SheetPrimitive.Trigger, __spreadValues({ "data-slot": "sheet-trigger" }, props));
}
function SheetClose(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SheetPrimitive.Close, __spreadValues({ "data-slot": "sheet-close" }, props));
}
function SheetPortal(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SheetPrimitive.Portal, __spreadValues({ "data-slot": "sheet-portal" }, props));
}
function SheetOverlay(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    SheetPrimitive.Overlay,
    __spreadValues({
      "data-slot": "sheet-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )
    }, props)
  );
}
function SheetContent(_a) {
  var _b = _a, {
    className,
    children,
    side = "right"
  } = _b, props = __objRest(_b, [
    "className",
    "children",
    "side"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(SheetPortal, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(SheetOverlay, {}),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
      SheetPrimitive.Content,
      __spreadProps(__spreadValues({
        "data-slot": "sheet-content",
        className: cn(
          "data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 dark:bg-gray-95",
          side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          className
        )
      }, props), {
        children: [
          children,
          /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(SheetPrimitive.Close, { className: "ring-offset-white focus:ring-gray-95 data-[state=open]:bg-gray-100 absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none dark:ring-offset-gray-95 dark:focus:ring-gray-30 dark:data-[state=open]:bg-gray-80", children: [
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_lucide_react4.XIcon, { className: "size-4" }),
            /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      })
    )
  ] });
}
function SheetHeader(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    "div",
    __spreadValues({
      "data-slot": "sheet-header",
      className: cn("flex flex-col gap-1.5 p-4", className)
    }, props)
  );
}
function SheetFooter(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    "div",
    __spreadValues({
      "data-slot": "sheet-footer",
      className: cn("mt-auto flex flex-col gap-2 p-4", className)
    }, props)
  );
}
function SheetTitle(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    SheetPrimitive.Title,
    __spreadValues({
      "data-slot": "sheet-title",
      className: cn("text-gray-95 font-semibold dark:text-gray-50", className)
    }, props)
  );
}
function SheetDescription(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    SheetPrimitive.Description,
    __spreadValues({
      "data-slot": "sheet-description",
      className: cn("text-gray-50 text-sm dark:text-gray-40", className)
    }, props)
  );
}

// src/components/ui/skeleton.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
function Skeleton(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    "div",
    __spreadValues({
      "data-slot": "skeleton",
      className: cn("bg-gray-100 animate-pulse rounded-md dark:bg-gray-80", className)
    }, props)
  );
}

// src/components/ui/tooltip.tsx
var TooltipPrimitive = __toESM(require("@radix-ui/react-tooltip"), 1);
var import_jsx_runtime14 = require("react/jsx-runtime");
function TooltipProvider(_a) {
  var _b = _a, {
    delayDuration = 0
  } = _b, props = __objRest(_b, [
    "delayDuration"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    TooltipPrimitive.Provider,
    __spreadValues({
      "data-slot": "tooltip-provider",
      delayDuration
    }, props)
  );
}
function Tooltip(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(TooltipProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(TooltipPrimitive.Root, __spreadValues({ "data-slot": "tooltip" }, props)) });
}
function TooltipTrigger(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(TooltipPrimitive.Trigger, __spreadValues({ "data-slot": "tooltip-trigger" }, props));
}
function TooltipContent(_a) {
  var _b = _a, {
    className,
    sideOffset = 0,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "sideOffset",
    "children"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(TooltipPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
    TooltipPrimitive.Content,
    __spreadProps(__spreadValues({
      "data-slot": "tooltip-content",
      sideOffset,
      className: cn(
        "bg-gray-90 text-gray-50 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance dark:bg-gray-50 dark:text-gray-90",
        className
      )
    }, props), {
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(TooltipPrimitive.Arrow, { className: "bg-gray-90 fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] dark:bg-gray-50" })
      ]
    })
  ) });
}

// src/components/ui/sidebar.tsx
var import_jsx_runtime15 = require("react/jsx-runtime");
var SIDEBAR_COOKIE_NAME = "sidebar_state";
var SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
var SIDEBAR_WIDTH = "16rem";
var SIDEBAR_WIDTH_MOBILE = "18rem";
var SIDEBAR_WIDTH_ICON = "3rem";
var SIDEBAR_KEYBOARD_SHORTCUT = "b";
var SidebarContext = React5.createContext(null);
function useSidebar() {
  const context = React5.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}
function SidebarProvider(_a) {
  var _b = _a, {
    defaultOpen = true,
    open: openProp,
    onOpenChange: setOpenProp,
    className,
    style,
    children
  } = _b, props = __objRest(_b, [
    "defaultOpen",
    "open",
    "onOpenChange",
    "className",
    "style",
    "children"
  ]);
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = React5.useState(false);
  const [_open, _setOpen] = React5.useState(defaultOpen);
  const open = openProp != null ? openProp : _open;
  const setOpen = React5.useCallback(
    (value) => {
      const openState = typeof value === "function" ? value(open) : value;
      if (setOpenProp) {
        setOpenProp(openState);
      } else {
        _setOpen(openState);
      }
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}; SameSite=Lax`;
    },
    [setOpenProp, open]
  );
  const toggleSidebar = React5.useCallback(() => {
    return isMobile ? setOpenMobile((open2) => !open2) : setOpen((open2) => !open2);
  }, [isMobile, setOpen, setOpenMobile]);
  React5.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);
  const state = open ? "expanded" : "collapsed";
  const contextValue = React5.useMemo(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(SidebarContext.Provider, { value: contextValue, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(TooltipProvider, { delayDuration: 0, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    "div",
    __spreadProps(__spreadValues({
      "data-slot": "sidebar-wrapper",
      style: __spreadValues({
        "--sidebar-width": isMobile ? SIDEBAR_WIDTH_MOBILE : SIDEBAR_WIDTH,
        "--sidebar-width-icon": SIDEBAR_WIDTH_ICON
      }, style),
      className: cn(
        "group/sidebar-wrapper flex h-fit md:min-h-svh w-screen z-20",
        !open ? "md:max-w-[calc(48px+80px)]" : "md:max-w-[calc(256px+80px)]",
        className
      )
    }, props), {
      children
    })
  ) }) });
}
function Sidebar(_a) {
  var _b = _a, {
    side = "left",
    variant = "sidebar",
    collapsible = "offcanvas",
    className,
    children,
    header
  } = _b, props = __objRest(_b, [
    "side",
    "variant",
    "collapsible",
    "className",
    "children",
    "header"
  ]);
  const { isMobile, state, openMobile, setOpenMobile, setOpen } = useSidebar();
  React5.useEffect(() => {
    if (isMobile) {
      setOpen(false);
    }
  }, [isMobile]);
  if (collapsible === "none") {
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      "div",
      __spreadProps(__spreadValues({
        "data-slot": "sidebar",
        className: cn(
          `bg-gradient-[180deg] from-gray-0/12 to-gray-0/6 text-gray-10 flex h-full w-(--sidebar-width) flex-col`,
          className
        )
      }, props), {
        children
      })
    );
  }
  if (isMobile) {
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
      "div",
      {
        className: "group peer block",
        "data-state": state,
        "data-collapsible": state === "collapsed" ? collapsible : "",
        "data-variant": variant,
        "data-side": side,
        "data-slot": "sidebar",
        children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
          "div",
          __spreadProps(__spreadValues({
            "data-slot": "sidebar-container",
            className: cn(
              "menu-shadow inset-y-0 flex w-screen transition-[left,right,width] duration-200 ease-linear",
              className
            )
          }, props), {
            children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
              "div",
              {
                "data-sidebar": "sidebar",
                "data-slot": "sidebar-inner",
                className: "flex h-full w-full flex-col",
                children: [
                  header,
                  /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Sheet, __spreadProps(__spreadValues({ open: openMobile, onOpenChange: setOpenMobile }, props), { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
                    SheetContent,
                    {
                      "data-sidebar": "sidebar",
                      "data-slot": "sidebar",
                      "data-mobile": "true",
                      className: "w-(--sidebar-width) max-w-[90%] p-0 [&>button]:hidden border-gray-0/20",
                      style: {
                        "--sidebar-width": SIDEBAR_WIDTH_MOBILE
                      },
                      side,
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(SheetHeader, { className: "sr-only", children: [
                          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(SheetTitle, { children: "Sidebar" }),
                          /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(SheetDescription, { children: "Displays the mobile sidebar." })
                        ] }),
                        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "flex h-full w-full flex-col menu-shadow", children })
                      ]
                    }
                  ) }))
                ]
              }
            )
          })
        )
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
    "div",
    {
      className: "group peer block",
      "data-state": state,
      "data-collapsible": state === "collapsed" ? collapsible : "",
      "data-variant": variant,
      "data-side": side,
      "data-slot": "sidebar",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
          "div",
          {
            "data-slot": "sidebar-gap",
            className: cn(
              "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
              "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
            )
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
          "div",
          __spreadProps(__spreadValues({
            "data-slot": "sidebar-container",
            className: cn(
              "menu-shadow backdrop-blur-xl inset-y-0 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
              "group-data-[collapsible=icon]:w-(--sidebar-width-icon)",
              "group-data-[collapsible=icon]:w-(--sidebar-width-icon)",
              className
            )
          }, props), {
            children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
              "div",
              {
                "data-sidebar": "sidebar",
                "data-slot": "sidebar-inner",
                className: "bg-linear-[180deg] from-blue-105 to-blue-115 flex h-full w-full flex-col border-r-[0.5px] border-gray-0/20",
                children
              }
            )
          })
        )
      ]
    }
  );
}
function SidebarTrigger(_a) {
  var _b = _a, { className, onClick } = _b, props = __objRest(_b, ["className", "onClick"]);
  const { toggleSidebar, isMobile } = useSidebar();
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
    Button,
    __spreadProps(__spreadValues({
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      className: cn("size-7 z-10 cursor-pointer", className),
      onClick: (event) => {
        onClick == null ? void 0 : onClick(event);
        toggleSidebar();
      }
    }, props), {
      children: [
        isMobile ? /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_lucide_react5.Menu, {}) : /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_lucide_react5.PanelLeftIcon, {}),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    })
  );
}
function SidebarRail(_a) {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    "div",
    __spreadProps(__spreadValues({
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      className: cn(
        "bg-linear-180 from-blue-100/80 to-blue-110/80 h-svh w-[45px] md:w-[80px] bg-blur md:backdrop-blur-none px-1.5 md:px-5 py-3 border-r-[0.5px] border-gray-0/20 flex flex-col gap-2",
        className
      )
    }, props), {
      children
    })
  );
}
function SidebarInset(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    "main",
    __spreadValues({
      "data-slot": "sidebar-inset",
      className: cn(
        "bg-gray-0 relative flex w-full flex-1 flex-col",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        className
      )
    }, props)
  );
}
function SidebarInput(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    Input,
    __spreadValues({
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      className: cn("bg-gray-0 h-8 w-full shadow-none", className)
    }, props)
  );
}
function SidebarHeader(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    "div",
    __spreadValues({
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      className: cn(`flex items-center justify-start bg-blur md:justify-between gap-2 p-2 text-gray-10 font-medium`, className)
    }, props)
  );
}
function SidebarFooter(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    "div",
    __spreadValues({
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      className: cn("flex flex-col gap-2 p-2", className)
    }, props)
  );
}
function SidebarSeparator(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    Separator,
    __spreadValues({
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      className: cn("bg-gray-0/10 mx-2 w-auto", className)
    }, props)
  );
}
function SidebarContent(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    "div",
    __spreadValues({
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      className: cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      )
    }, props)
  );
}
function SidebarGroup(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    "div",
    __spreadValues({
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      className: cn("relative flex w-full min-w-0 flex-col p-2", className)
    }, props)
  );
}
function SidebarGroupLabel(_a) {
  var _b = _a, {
    className,
    asChild = false
  } = _b, props = __objRest(_b, [
    "className",
    "asChild"
  ]);
  const Comp = asChild ? import_react_slot3.Slot : "div";
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    Comp,
    __spreadValues({
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      className: cn(
        `text-gray-10 ring-gray-60 flex h-8 shrink-0 items-center rounded-md px-2 text-sm font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0`,
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className
      )
    }, props)
  );
}
function SidebarGroupAction(_a) {
  var _b = _a, {
    className,
    asChild = false
  } = _b, props = __objRest(_b, [
    "className",
    "asChild"
  ]);
  const Comp = asChild ? import_react_slot3.Slot : "button";
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    Comp,
    __spreadValues({
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      className: cn(
        "text-gray-10 ring-gray-60 hover:bg-gray-90 hover:text-gray-10 absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "group-data-[collapsible=icon]:hidden",
        className
      )
    }, props)
  );
}
function SidebarGroupContent(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    "div",
    __spreadValues({
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      className: cn("w-full text-sm", className)
    }, props)
  );
}
function SidebarMenu(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    "ul",
    __spreadValues({
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      className: cn("flex w-full min-w-0 flex-col gap-1", className)
    }, props)
  );
}
function SidebarMenuItem(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    "li",
    __spreadValues({
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      className: cn("group/menu-item relative", className)
    }, props)
  );
}
var sidebarMenuButtonVariants = (0, import_class_variance_authority5.cva)(
  `text-gray-0 peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-sm p-2 text-left text-sm outline-hidden ring-gray-60 transition-[width,height,padding] hover:bg-gray-0/8 focus-visible:ring-2 active:bg-gray-0/8 disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-gray-0/8 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0`,
  {
    variants: {
      variant: {
        default: ``,
        outline: `hover:text-gray-50`
      },
      size: {
        default: "text-sm px-2 py-3.5",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function SidebarMenuButton(_a) {
  var _b = _a, {
    asChild = false,
    isActive = false,
    variant = "default",
    size = "default",
    tooltip,
    className
  } = _b, props = __objRest(_b, [
    "asChild",
    "isActive",
    "variant",
    "size",
    "tooltip",
    "className"
  ]);
  const Comp = asChild ? import_react_slot3.Slot : "button";
  const { isMobile, state } = useSidebar();
  const button = /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    Comp,
    __spreadValues({
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": size,
      "data-active": isActive,
      className: cn(sidebarMenuButtonVariants({ variant, size }), className)
    }, props)
  );
  if (!tooltip) {
    return button;
  }
  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip
    };
  }
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(Tooltip, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(TooltipTrigger, { asChild: true, children: button }),
    /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(TooltipContent, __spreadValues({ side: "right", align: "center", hidden: state !== "collapsed" || isMobile }, tooltip))
  ] });
}
function SidebarMenuAction(_a) {
  var _b = _a, {
    className,
    asChild = false,
    showOnHover = false
  } = _b, props = __objRest(_b, [
    "className",
    "asChild",
    "showOnHover"
  ]);
  const Comp = asChild ? import_react_slot3.Slot : "button";
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    Comp,
    __spreadValues({
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      className: cn(
        "text-gray-10 ring-gray-60 hover:bg-gray-90 hover:text-gray-10 peer-hover/menu-button:text-gray-10 absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover && "peer-data-[active=true]/menu-button:text-gray-10 group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
        className
      )
    }, props)
  );
}
function SidebarMenuBadge(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    "div",
    __spreadValues({
      "data-slot": "sidebar-menu-badge",
      "data-sidebar": "menu-badge",
      className: cn(
        "text-gray-10 pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none",
        "peer-hover/menu-button:text-gray-10 peer-data-[active=true]/menu-button:text-gray-10",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        className
      )
    }, props)
  );
}
function SidebarMenuSkeleton(_a) {
  var _b = _a, {
    className,
    showIcon = false
  } = _b, props = __objRest(_b, [
    "className",
    "showIcon"
  ]);
  const width = React5.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
    "div",
    __spreadProps(__spreadValues({
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      className: cn("flex h-8 items-center gap-2 rounded-md px-2", className)
    }, props), {
      children: [
        showIcon && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(Skeleton, { className: "size-4 rounded-md", "data-sidebar": "menu-skeleton-icon" }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
          Skeleton,
          {
            className: "h-4 max-w-(--skeleton-width) flex-1",
            "data-sidebar": "menu-skeleton-text",
            style: {
              "--skeleton-width": width
            }
          }
        )
      ]
    })
  );
}
function SidebarMenuSub(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    "ul",
    __spreadValues({
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-sub",
      className: cn(
        "border-gray-0/10 mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className
      )
    }, props)
  );
}
function SidebarMenuSubItem(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    "li",
    __spreadValues({
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      className: cn("group/menu-sub-item relative", className)
    }, props)
  );
}
function SidebarMenuSubButton(_a) {
  var _b = _a, {
    asChild = false,
    size = "md",
    isActive = false,
    className
  } = _b, props = __objRest(_b, [
    "asChild",
    "size",
    "isActive",
    "className"
  ]);
  const Comp = asChild ? import_react_slot3.Slot : "a";
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    Comp,
    __spreadValues({
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      "data-size": size,
      "data-active": isActive,
      className: cn(
        "text-gray-10 ring-gray-60 hover:bg-gray-90 hover:text-gray-10 active:bg-gray-90 active:text-gray-10 [&>svg]:text-gray-10 flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
        "data-[active=true]:bg-gray-90 data-[active=true]:text-gray-10",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      )
    }, props)
  );
}

// src/components/Sidebar/Sidebar.tsx
var import_navigation2 = require("next/navigation");
var import_react4 = require("react");

// src/components/Sidebar/content.tsx
var import_lucide_react6 = require("lucide-react");
var import_link = __toESM(require("next/link"), 1);
var import_navigation = require("next/navigation");

// src/components/ui/collapsible.tsx
var CollapsiblePrimitive = __toESM(require("@radix-ui/react-collapsible"), 1);
var import_jsx_runtime16 = require("react/jsx-runtime");
function Collapsible(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(CollapsiblePrimitive.Root, __spreadValues({ "data-slot": "collapsible" }, props));
}
function CollapsibleTrigger2(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    CollapsiblePrimitive.CollapsibleTrigger,
    __spreadValues({
      "data-slot": "collapsible-trigger"
    }, props)
  );
}
function CollapsibleContent2(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    CollapsiblePrimitive.CollapsibleContent,
    __spreadValues({
      "data-slot": "collapsible-content"
    }, props)
  );
}

// src/components/Sidebar/content.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
var Content4 = ({ nav }) => {
  const pathname = (0, import_navigation.usePathname)();
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(SidebarContent, { children: nav == null ? void 0 : nav.map((group, index) => {
    var _a;
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(SidebarGroup, { children: [
      group.label && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(SidebarGroupLabel, { className: "uppercase", children: group.label }),
      /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(SidebarGroupContent, { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(SidebarMenu, { children: group.items.map(
        ({ title, url, icon, children }) => children ? /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(Collapsible, { className: "group/collapsible", children: [
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(SidebarMenuButton, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(CollapsibleTrigger2, { className: "cursor-pointer", children: [
            icon,
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { children: title }),
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_lucide_react6.ChevronDown, { className: "ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(CollapsibleContent2, { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(SidebarGroupContent, { children: children.map(({ title: title2, url: url2, icon: icon2 }) => /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(SidebarMenuButton, { asChild: true, isActive: pathname === url2, children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_link.default, { href: url2 != null ? url2 : "#", children: [
            icon2,
            /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { children: title2 })
          ] }) }) }, title2)) }) })
        ] }, title) : /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(SidebarMenuButton, { asChild: true, isActive: pathname === url, children: /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(import_link.default, { href: url != null ? url : "#", children: [
          icon,
          /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("span", { children: title })
        ] }) }) }, title)
      ) }) })
    ] }, (_a = group.label) != null ? _a : index);
  }) });
};
var content_default = Content4;

// src/components/Sidebar/header.tsx
var import_jsx_runtime18 = require("react/jsx-runtime");
var Header = ({ product = "Example" }) => {
  const { open, isMobile, openMobile } = useSidebar();
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(SidebarHeader, { children: [
    open || isMobile && openMobile ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("h1", { className: "flex items-center", children: product }) : null,
    !isMobile && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(SidebarTrigger, {})
  ] });
};
var header_default = Header;

// src/components/Sidebar/navRail.tsx
var import_lucide_react8 = require("lucide-react");
var import_link2 = __toESM(require("next/link"), 1);
var import_react3 = require("react");

// src/components/ui/avatar.tsx
var AvatarPrimitive = __toESM(require("@radix-ui/react-avatar"), 1);
var import_jsx_runtime19 = require("react/jsx-runtime");
function Avatar(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    AvatarPrimitive.Root,
    __spreadValues({
      "data-slot": "avatar",
      className: cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      )
    }, props)
  );
}
function AvatarImage(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    AvatarPrimitive.Image,
    __spreadValues({
      "data-slot": "avatar-image",
      className: cn("aspect-square size-full", className)
    }, props)
  );
}
function AvatarFallback(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    AvatarPrimitive.Fallback,
    __spreadValues({
      "data-slot": "avatar-fallback",
      className: cn(
        "bg-gray-100 flex size-full items-center justify-center rounded-full dark:bg-gray-80",
        className
      )
    }, props)
  );
}

// src/components/ui/dropdown-menu.tsx
var DropdownMenuPrimitive = __toESM(require("@radix-ui/react-dropdown-menu"), 1);
var import_lucide_react7 = require("lucide-react");
var import_jsx_runtime20 = require("react/jsx-runtime");
function DropdownMenu(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(DropdownMenuPrimitive.Root, __spreadValues({ "data-slot": "dropdown-menu" }, props));
}
function DropdownMenuPortal(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(DropdownMenuPrimitive.Portal, __spreadValues({ "data-slot": "dropdown-menu-portal" }, props));
}
function DropdownMenuTrigger(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(DropdownMenuPrimitive.Trigger, __spreadValues({ "data-slot": "dropdown-menu-trigger" }, props));
}
function DropdownMenuContent(_a) {
  var _b = _a, {
    className,
    sideOffset = 4
  } = _b, props = __objRest(_b, [
    "className",
    "sideOffset"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    DropdownMenuPrimitive.Content,
    __spreadValues({
      "data-slot": "dropdown-menu-content",
      sideOffset,
      className: cn(
        "bg-gray-70 text-gray-10 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md p-1 shadow-md",
        className
      )
    }, props)
  ) });
}
function DropdownMenuGroup(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(DropdownMenuPrimitive.Group, __spreadValues({ "data-slot": "dropdown-menu-group" }, props));
}
function DropdownMenuItem(_a) {
  var _b = _a, {
    className,
    inset,
    variant = "default"
  } = _b, props = __objRest(_b, [
    "className",
    "inset",
    "variant"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    DropdownMenuPrimitive.Item,
    __spreadValues({
      "data-slot": "dropdown-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "focus:bg-gray-20/20 focus:text-gray-10 data-[variant=destructive]:text-red-800 data-[variant=destructive]:focus:bg-red-800/10 data-[variant=destructive]:focus:text-red-800 data-[variant=destructive]:*:[svg]:!text-red-800 [&_svg:not([class*='text-'])]:text-gray-60 relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )
    }, props)
  );
}
function DropdownMenuCheckboxItem(_a) {
  var _b = _a, {
    className,
    children,
    checked
  } = _b, props = __objRest(_b, [
    "className",
    "children",
    "checked"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
    DropdownMenuPrimitive.CheckboxItem,
    __spreadProps(__spreadValues({
      "data-slot": "dropdown-menu-checkbox-item",
      className: cn(
        "focus:bg-gray-90 focus:text-gray-10 relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      checked
    }, props), {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_lucide_react7.CheckIcon, { className: "size-4" }) }) }),
        children
      ]
    })
  );
}
function DropdownMenuRadioGroup(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(DropdownMenuPrimitive.RadioGroup, __spreadValues({ "data-slot": "dropdown-menu-radio-group" }, props));
}
function DropdownMenuRadioItem(_a) {
  var _b = _a, {
    className,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "children"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
    DropdownMenuPrimitive.RadioItem,
    __spreadProps(__spreadValues({
      "data-slot": "dropdown-menu-radio-item",
      className: cn(
        "focus:bg-gray-90 focus:text-gray-10 relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )
    }, props), {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_lucide_react7.CircleIcon, { className: "size-2 fill-current" }) }) }),
        children
      ]
    })
  );
}
function DropdownMenuLabel(_a) {
  var _b = _a, {
    className,
    inset
  } = _b, props = __objRest(_b, [
    "className",
    "inset"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    DropdownMenuPrimitive.Label,
    __spreadValues({
      "data-slot": "dropdown-menu-label",
      "data-inset": inset,
      className: cn("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className)
    }, props)
  );
}
function DropdownMenuSeparator(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    DropdownMenuPrimitive.Separator,
    __spreadValues({
      "data-slot": "dropdown-menu-separator",
      className: cn("bg-gray-0/10 -mx-1 my-1 h-px", className)
    }, props)
  );
}
function DropdownMenuShortcut(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    "span",
    __spreadValues({
      "data-slot": "dropdown-menu-shortcut",
      className: cn("text-gray-60 ml-auto text-xs tracking-widest", className)
    }, props)
  );
}
function DropdownMenuSub(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(DropdownMenuPrimitive.Sub, __spreadValues({ "data-slot": "dropdown-menu-sub" }, props));
}
function DropdownMenuSubTrigger(_a) {
  var _b = _a, {
    className,
    inset,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "inset",
    "children"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
    DropdownMenuPrimitive.SubTrigger,
    __spreadProps(__spreadValues({
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": inset,
      className: cn(
        "focus:bg-gray-90 focus:text-gray-10 data-[state=open]:bg-gray-90 data-[state=open]:text-gray-10 flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",
        className
      )
    }, props), {
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_lucide_react7.ChevronRightIcon, { className: "ml-auto size-4" })
      ]
    })
  );
}
function DropdownMenuSubContent(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    DropdownMenuPrimitive.SubContent,
    __spreadValues({
      "data-slot": "dropdown-menu-sub-content",
      className: cn(
        "bg-gray-0 text-gray-10 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      )
    }, props)
  );
}

// src/components/Sidebar/navRail.tsx
var import_jsx_runtime21 = require("react/jsx-runtime");
var DASHBOARD_URL = "https://prism.uprockstaging.com/console";
var products = [
  {
    icon: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_lucide_react8.MonitorUp, { className: " [&>svg]:size-6" }),
    name: "UpTime",
    url: "https://uptime.uprockstaging.com/uptime"
  },
  {
    icon: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_lucide_react8.Globe, { className: " [&>svg]:size-6" }),
    name: "RockScapper",
    url: "https://rockscraper.uprockstaging.com/dashboard"
  }
];
var NavRail = ({ notifications, user, logOut }) => {
  var _a;
  const [url, setUrl] = (0, import_react3.useState)(null);
  const { isMobile } = useSidebar();
  (0, import_react3.useEffect)(() => {
    setUrl(window.location.href);
  }, []);
  const hasNotifications = (notifications == null ? void 0 : notifications.length) && notifications.length > 0;
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(SidebarRail, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(SidebarHeader, { className: "p-0 w-8 h-8 md:w-10 md:h-10 justify-center", children: isMobile ? /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(SidebarTrigger, {}) : /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
      SidebarMenuButton,
      {
        asChild: true,
        isActive: url == null ? void 0 : url.includes(DASHBOARD_URL),
        className: "flex items-center justify-center h-10",
        children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_link2.default, { href: DASHBOARD_URL, title: "Dashboard", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_lucide_react8.Home, { className: " [&>svg]:size-6" }) })
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(SidebarContent, { className: "grow", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(SidebarMenu, { className: "", children: products.map((product) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
      SidebarMenuButton,
      {
        asChild: true,
        isActive: url == null ? void 0 : url.includes(product.url),
        className: "flex items-center justify-center h-10",
        children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_link2.default, { href: product.url, title: product.name, children: product.icon })
      }
    ) }, product.name)) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(SidebarFooter, { className: "p-0 self-end", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(SidebarMenu, { className: "flex flex-col items-center justify-center gap-1", children: [
      hasNotifications ? /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(DropdownMenu, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(DropdownMenuTrigger, { className: "flex items-center justify-center w-8 h-8 md:w-10 md:h-10", children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
          "span",
          {
            className: cn(
              "relative",
              hasNotifications ? "before:w-1.5 before:h-1.5 before:bg-[#FFB4AB] before:rounded-full before:-top-0.5 before:-right-0.5 before:absolute" : ""
            ),
            children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(import_lucide_react8.Bell, { className: "text-gray-10" })
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
          DropdownMenuContent,
          {
            className: `w-[--radix-popper-anchor-width] bg-gray-80 text-gray-20 border-transparent`,
            children: notifications.map((notification, index) => /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(DropdownMenuItem, { asChild: true, className: "max-w-64 flex flex-col gap-1 items-start", children: notification }, index))
          }
        )
      ] }) }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(DropdownMenu, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("div", { className: "flex items-center justify-center", children: user ? /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(Avatar, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(AvatarImage, { src: (_a = user.image) != null ? _a : void 0, className: "w-8 h-8 rounded-full" }),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(AvatarFallback, { children: user.username[0].toUpperCase() })
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(Avatar, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(AvatarImage, { src: "https://placecats.com/32/32", className: "w-8 h-8 rounded-full" }),
          /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(AvatarFallback, { children: "JD" })
        ] }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
          DropdownMenuContent,
          {
            side: "top",
            className: `w-[--radix-popper-anchor-width] bg-gray-80 text-gray-20 border-transparent`,
            children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(DropdownMenuItem, { onClick: logOut, children: /* @__PURE__ */ (0, import_jsx_runtime21.jsx)("span", { children: "Sign out" }) })
          }
        )
      ] }) })
    ] }) })
  ] });
};
var navRail_default = NavRail;

// src/components/Sidebar/Sidebar.tsx
var import_jsx_runtime22 = require("react/jsx-runtime");
var AppSidebar = ({ product = "Example", nav, footer, notifications, logOut, user }) => {
  var _a, _b;
  const { isMobile, setOpenMobile } = useSidebar();
  const pathname = (0, import_navigation2.usePathname)();
  (0, import_react4.useEffect)(() => {
    if (isMobile) {
      setOpenMobile(false);
    }
  }, [pathname]);
  return !isMobile ? /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "flex", suppressHydrationWarning: true, children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(navRail_default, { notifications, logOut, user }),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(Sidebar, { collapsible: "icon", children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(header_default, { product }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(content_default, { nav }),
      /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(SidebarFooter, { children: footer != null ? footer : null })
    ] })
  ] }) : /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
    Sidebar,
    {
      suppressHydrationWarning: true,
      header: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
        "div",
        {
          className: cn(
            `sticky z-10 w-full flex items-center justify-start bg-blur border-b-[0.5px] border-gray-0/20 gap-2 p-2 text-gray-10 font-medium`
          ),
          id: "mobile-header",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(SidebarTrigger, {}),
            nav.some((item) => item.items.some((i) => i.url === pathname)) ? /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("h1", { className: "flex items-center", children: (_b = (_a = nav.find((item) => item.items.some((i) => i.url === pathname))) == null ? void 0 : _a.items.find((i) => i.url === pathname)) == null ? void 0 : _b.title }) : null
          ]
        }
      ),
      children: /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(navRail_default, { notifications, logOut, user }),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "flex flex-col w-full bg-linear-180 from-blue-105/80 to-blue-115/80 backdrop-blur-xl", children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(header_default, { product }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(content_default, { nav }),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(SidebarFooter, { children: footer != null ? footer : null })
        ] })
      ] })
    }
  );
};

// src/components/ui/switch.tsx
var SwitchPrimitives = __toESM(require("@radix-ui/react-switch"), 1);
var React6 = __toESM(require("react"), 1);
var import_class_variance_authority6 = require("class-variance-authority");
var import_jsx_runtime23 = require("react/jsx-runtime");
var rootVariant = (0, import_class_variance_authority6.cva)(
  "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-gray-50 shadow-sm transition-colors disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-blue-30 data-[state=checked]:border-blue-30 data-[state=unchecked]:bg-gray-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-10/20 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
  {
    variants: {
      size: {
        default: "h-8 w-13 border-2",
        sm: "h-5 w-8 border"
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
);
var thumbVariant = (0, import_class_variance_authority6.cva)(
  "pointer-events-none block rounded-full bg-gray-50 data-[state=checked]:bg-blue-90 shadow-lg ring-0 transition-transform",
  {
    variants: {
      size: {
        default: "w-6 h-6 data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0.5",
        sm: "w-3.5 h-3.5 data-[state=checked]:translate-x-3.5 data-[state=unchecked]:translate-x-0.5"
      }
    },
    defaultVariants: {
      size: "default"
    }
  }
);
var Switch = React6.forwardRef((_a, ref) => {
  var _b = _a, { className, size } = _b, props = __objRest(_b, ["className", "size"]);
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(SwitchPrimitives.Root, __spreadProps(__spreadValues({ className: cn(rootVariant({ size }), className) }, props), { ref, children: /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(SwitchPrimitives.Thumb, { className: cn(thumbVariant({ size })) }) }));
});
Switch.displayName = SwitchPrimitives.Root.displayName;

// src/components/Switch/switch.tsx
var import_jsx_runtime24 = require("react/jsx-runtime");
var Switch2 = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Switch, __spreadValues({}, props));
};

// src/components/Table/table.tsx
var import_react_table = require("@tanstack/react-table");

// src/components/ui/table.tsx
var import_jsx_runtime25 = require("react/jsx-runtime");
function Table(_a) {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    "div",
    {
      "data-slot": "table-container",
      className: cn("relative w-full overflow-x-auto  border-[0.5px] border-gray-0/20 rounded-xl", className),
      children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("table", __spreadProps(__spreadValues({ "data-slot": "table", className: cn("w-full caption-bottom text-sm") }, props), { children }))
    }
  );
}
function TableHeader(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    "thead",
    __spreadValues({
      "data-slot": "table-header",
      className: cn("[&_tr]:border-b border-gray-0/20 text-gray-30 bg-gray-0/5", className)
    }, props)
  );
}
function TableBody(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("tbody", __spreadValues({ "data-slot": "table-body", className: cn("[&_tr:last-child]:border-0", className) }, props));
}
function TableHeaderRow(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    "tr",
    __spreadValues({
      "data-slot": "table-header-row",
      className: cn("h-[2.75rem] border-b-[0.5px] border-gray-0/20 ", className)
    }, props)
  );
}
function TableRow(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    "tr",
    __spreadValues({
      "data-slot": "table-row",
      className: cn(
        "hover:bg-gray-0/2 data-[state=selected]:bg-gray-60/20 border-b-[0.5px] border-gray-0/16 transition-colors h-[3.5rem]",
        className
      )
    }, props)
  );
}
function TableHead(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    "th",
    __spreadValues({
      "data-slot": "table-head",
      className: cn(
        "text-gray-30 h-10 px-2 align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )
    }, props)
  );
}
function TableCell(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    "td",
    __spreadValues({
      "data-slot": "table-cell",
      className: cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )
    }, props)
  );
}

// src/components/Table/table.tsx
var import_jsx_runtime26 = require("react/jsx-runtime");
function Table2({ columns, data, className, onRowClick }) {
  var _a;
  const table = (0, import_react_table.useReactTable)({
    data,
    columns,
    getCoreRowModel: (0, import_react_table.getCoreRowModel)()
  });
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(Table, { className, children: [
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(TableHeader, { children: table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(TableHeaderRow, { children: headerGroup.headers.map((header) => {
      return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(TableHead, { children: header.isPlaceholder ? null : (0, import_react_table.flexRender)(header.column.columnDef.header, header.getContext()) }, header.id);
    }) }, headerGroup.id)) }),
    /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(TableBody, { children: ((_a = table.getRowModel().rows) == null ? void 0 : _a.length) ? table.getRowModel().rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
      TableRow,
      {
        "data-state": row.getIsSelected() && "selected",
        onClick: () => onRowClick == null ? void 0 : onRowClick(row.original),
        children: row.getVisibleCells().map((cell) => /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(TableCell, { children: (0, import_react_table.flexRender)(cell.column.columnDef.cell, cell.getContext()) }, cell.id))
      },
      row.id
    )) : /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(TableCell, { colSpan: columns.length, className: "h-24 text-center", children: "No results." }) }) })
  ] });
}

// src/components/ui/tabs.tsx
var TabsPrimitive = __toESM(require("@radix-ui/react-tabs"), 1);
var React7 = __toESM(require("react"), 1);
var import_class_variance_authority7 = require("class-variance-authority");
var import_jsx_runtime27 = require("react/jsx-runtime");
var Tabs = TabsPrimitive.Root;
var tabsListVariants = (0, import_class_variance_authority7.cva)(
  "inline-flex h-9 items-center justify-center bg-linear-180 from-gray-0/10 to-gray-0/0 rounded-full text-sm mb-6",
  {
    variants: {
      variant: {
        default: "p-0 text-gray-40 border-gray-0/30 border-[0.5px]",
        pill: "p-1 border-gray-0/20 text-gray-10 mb-10 border-[0.5px]",
        tab: "flex justify-start items-end border-b border-gray-0/20 bg-gray-0/10 text-gray-10 rounded-none bg-transparent from-gray-0/0 to-gray-0/0"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var TabsList = React7.forwardRef((_a, ref) => {
  var _b = _a, { className, variant } = _b, props = __objRest(_b, ["className", "variant"]);
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(TabsPrimitive.List, __spreadValues({ ref, className: cn(tabsListVariants({ variant }), className) }, props));
});
TabsList.displayName = TabsPrimitive.List.displayName;
var tabsTriggerVariants = (0, import_class_variance_authority7.cva)(
  "inline-flex items-center justify-center whitespace-nowrap px-3 py-1 text-sm font-medium ring-offset-white transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-blue-30 data-[state=active]:text-blue-90 data-[state=active]:shadow",
  {
    variants: {
      variant: {
        default: "text-gray-40 border-gray-0/30 self-stretch border-x-[0.25px] border-gray-0/30",
        pill: "rounded-full",
        tab: "bg-transparent text-gray-40 py-3.5 data-[state=active]:bg-transparent data-[state=active]:text-blue-30 data-[state=active]:border-b-2 data-[state=active]:border-blue-30"
      },
      position: {
        left: "rounded-l-full",
        right: "rounded-r-full",
        center: "rounded-none",
        default: "rounded-full"
      }
    },
    defaultVariants: {
      variant: "default",
      position: "default"
    }
  }
);
var TabsTrigger = React7.forwardRef((_a, ref) => {
  var _b = _a, { className, variant, position } = _b, props = __objRest(_b, ["className", "variant", "position"]);
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(TabsPrimitive.Trigger, __spreadValues({ ref, className: cn(tabsTriggerVariants({ variant, position }), className) }, props));
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
var TabsContent = React7.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
    TabsPrimitive.Content,
    __spreadValues({
      ref,
      className: cn(
        "mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300",
        className
      )
    }, props)
  );
});
TabsContent.displayName = TabsPrimitive.Content.displayName;

// src/components/Tabs/tabs.tsx
var import_jsx_runtime28 = require("react/jsx-runtime");
var Tabs2 = (_a) => {
  var _b = _a, {
    tabsList,
    defaultValue,
    className,
    contentClassName,
    tabsListClassName
  } = _b, props = __objRest(_b, [
    "tabsList",
    "defaultValue",
    "className",
    "contentClassName",
    "tabsListClassName"
  ]);
  const getPosition = (index) => {
    if (props.variant === "tab") {
      return "center";
    }
    if (props.variant === "pill") {
      return "default";
    }
    if (index === 0) {
      return "left";
    }
    if (index === tabsList.length - 1) {
      return "right";
    }
    return "center";
  };
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(Tabs, __spreadProps(__spreadValues({ defaultValue: defaultValue != null ? defaultValue : tabsList[0].value, className: cn(className) }, props), { children: [
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(TabsList, { variant: props.variant, className: tabsListClassName, children: tabsList.map((tab, index) => /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
      TabsTrigger,
      __spreadProps(__spreadValues({
        value: tab.value,
        variant: props.variant,
        position: getPosition(index)
      }, props), {
        children: tab.label
      }),
      tab.value
    )) }),
    tabsList.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(TabsContent, { value: tab.value, className: contentClassName, children: tab.content }, tab.value))
  ] }));
};

// src/components/ui/pagination.tsx
var import_lucide_react9 = require("lucide-react");
var React8 = __toESM(require("react"), 1);
var import_link3 = __toESM(require("next/link"), 1);
var import_jsx_runtime29 = require("react/jsx-runtime");
var Pagination = (_a) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
    "nav",
    __spreadValues({
      role: "navigation",
      "aria-label": "pagination",
      className: cn("mx-auto flex w-full justify-center", className)
    }, props)
  );
};
Pagination.displayName = "Pagination";
var PaginationContent = React8.forwardRef(
  (_a, ref) => {
    var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
    return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("ul", __spreadValues({ ref, className: cn("flex flex-row items-center gap-1", className) }, props));
  }
);
PaginationContent.displayName = "PaginationContent";
var PaginationItem = React8.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("li", __spreadValues({ ref, className: cn("", className) }, props));
});
PaginationItem.displayName = "PaginationItem";
var PaginationLink = (_a) => {
  var _b = _a, { className, isActive, size = "icon" } = _b, props = __objRest(_b, ["className", "isActive", "size"]);
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
    import_link3.default,
    __spreadValues({
      "aria-current": isActive ? "page" : void 0,
      className: cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size,
          rounded: "md"
        }),
        className
      )
    }, props)
  );
};
PaginationLink.displayName = "PaginationLink";
var PaginationPrevious = (_a) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(PaginationLink, __spreadProps(__spreadValues({ "aria-label": "Go to previous page", size: "default", className: cn("gap-1 pl-2.5", className) }, props), { children: [
    /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_lucide_react9.ChevronLeft, { className: "h-4 w-4" }),
    /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "sr-only", children: "Previous" })
  ] }));
};
PaginationPrevious.displayName = "PaginationPrevious";
var PaginationNext = (_a) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)(PaginationLink, __spreadProps(__spreadValues({ "aria-label": "Go to next page", size: "default", className: cn("gap-1 pr-2.5", className) }, props), { children: [
    /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "sr-only", children: "Next" }),
    /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_lucide_react9.ChevronRight, { className: "h-4 w-4" })
  ] }));
};
PaginationNext.displayName = "PaginationNext";
var PaginationEllipsis = (_a) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsxs)("span", __spreadProps(__spreadValues({ "aria-hidden": true, className: cn("flex h-9 w-9 items-center justify-center", className) }, props), { children: [
    /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_lucide_react9.MoreHorizontal, { className: "h-4 w-4" }),
    /* @__PURE__ */ (0, import_jsx_runtime29.jsx)("span", { className: "sr-only", children: "More pages" })
  ] }));
};
PaginationEllipsis.displayName = "PaginationEllipsis";

// src/components/Pagination/pagination.tsx
var import_jsx_runtime30 = require("react/jsx-runtime");
var Pagination2 = ({ currentPage, totalPages, onPageChange }) => {
  const showPrevious = currentPage > 1;
  const showNext = currentPage < totalPages;
  const renderPageNumbers = () => {
    const pages = [];
    pages.push(
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(PaginationItem, { children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(PaginationLink, { href: "#", isActive: 1 === currentPage, onClick: () => onPageChange(1), children: "1" }) }, 1)
    );
    const range = 1;
    const start = Math.max(2, currentPage - range);
    const end = Math.min(totalPages - 1, currentPage + range);
    if (start > 2) {
      pages.push(
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(PaginationItem, { children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(PaginationEllipsis, {}) }, "ellipsis-start")
      );
    }
    for (let i = start; i <= end; i++) {
      pages.push(
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(PaginationItem, { children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(PaginationLink, { href: "#", isActive: i === currentPage, onClick: () => onPageChange(i), children: i }) }, i)
      );
    }
    if (end < totalPages - 1) {
      pages.push(
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(PaginationItem, { children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(PaginationEllipsis, {}) }, "ellipsis-end")
      );
    }
    if (totalPages > 1) {
      pages.push(
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(PaginationItem, { children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(PaginationLink, { href: "#", isActive: totalPages === currentPage, onClick: () => onPageChange(totalPages), children: totalPages }) }, totalPages)
      );
    }
    return pages;
  };
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Pagination, { children: /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(PaginationContent, { children: [
    showPrevious ? /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(PaginationItem, { children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(PaginationPrevious, { href: "#", onClick: () => onPageChange(currentPage - 1) }) }) : null,
    renderPageNumbers(),
    showNext ? /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(PaginationItem, { children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(PaginationNext, { href: "#", onClick: () => onPageChange(currentPage + 1) }) }) : null
  ] }) });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AlertDescription,
  AlertTitle,
  AppSidebar,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Banner,
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  ConsoleButton,
  DialogFooter,
  DialogHeader,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  Input,
  Modal,
  Pagination,
  Radio,
  RadioBtn,
  Select,
  Separator,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarSeparator,
  Skeleton,
  Switch,
  Table,
  Tabs,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  useSidebar
});
//# sourceMappingURL=index.cjs.map