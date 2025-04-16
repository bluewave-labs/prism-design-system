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

// src/components/Sidebar/index.ts
var Sidebar_exports = {};
__export(Sidebar_exports, {
  AppSidebar: () => AppSidebar,
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
  useSidebar: () => useSidebar
});
module.exports = __toCommonJS(Sidebar_exports);

// src/components/ui/sidebar.tsx
var import_react_slot2 = require("@radix-ui/react-slot");
var import_class_variance_authority3 = require("class-variance-authority");
var import_lucide_react2 = require("lucide-react");
var React2 = __toESM(require("react"), 1);

// src/hooks/use-mobile.ts
var React = __toESM(require("react"), 1);
var MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(void 0);
  React.useEffect(() => {
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

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/ui/button.tsx
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority = require("class-variance-authority");
var import_jsx_runtime = require("react/jsx-runtime");
var buttonVariants = (0, import_class_variance_authority.cva)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comp, __spreadValues({ "data-slot": "button", className: cn(buttonVariants({ variant, size, rounded, className })) }, props));
}

// src/components/ui/input.tsx
var import_class_variance_authority2 = require("class-variance-authority");
var import_react = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
var inputVariants = (0, import_class_variance_authority2.cva)("", {
  variants: {
    variant: {
      default: "text-gray-10 placeholder:text-gray-20 bg-transparent grow text-sm shadow-xs outline-none focus-visible:ring-none pt-4",
      icon: "flex items-center justify-center bg-gray-40/12 border-gray-0/20 w-full min-w-0 rounded-md border-[0.5px] px-2 py-2 text-sm shadow-xs transition-[color,box-shadow] aria-invalid:border-red-800 h-14 text-gray-10 placeholder:text-gray-20 outline-none focus-visible:ring-[0.5px] focus-visible:ring-gray-0/10 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-0/8",
      "label-out": "bg-gray-40/12 border-gray-0/20 w-full min-w-0 rounded-md border-[0.5px] px-2 py-2 text-sm shadow-xs transition-[color,box-shadow] aria-invalid:border-red-800 h-14 text-gray-10 placeholder:text-gray-20 grow outline-none focus-visible:ring-[1px] focus-visible:ring-gray-0/10 focus-visible:ring-offset-1 focus-visible:ring-offset-gray-0/8 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed",
      "no-label": "bg-gray-40/12 border-gray-0/20 w-full min-w-0 rounded-md border-[0.5px] px-2 py-2 text-sm shadow-xs transition-[color,box-shadow] aria-invalid:border-red-800 h-14 text-gray-10 placeholder:text-gray-20 outline-none focus-visible:ring-[0.5px] focus-visible:ring-gray-0/10 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-0/8 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed"
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
var labelVariants = (0, import_class_variance_authority2.cva)("", {
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
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(InputIcon, __spreadValues({}, props));
  }
  if (variant === "no-label") {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(NoLabelInput, __spreadValues({}, props));
  }
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: cn(labelVariants({ error: error != null ? error : false, disabled: disabled != null ? disabled : false }), className), children: [
    iconLeft && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "mr-2 text-2xl", children: iconLeft }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "input",
      __spreadValues({
        type,
        "data-slot": "input",
        id,
        disabled,
        className: cn("grow outline-none focus-visible:ring-none", className)
      }, props)
    ),
    iconRight && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "ml-2 text-2xl", children: iconRight })
  ] });
}
function NoLabelInput(_a) {
  var _b = _a, { variant, className, type, id, disabled, error } = _b, props = __objRest(_b, ["variant", "className", "type", "id", "disabled", "error"]);
  const _a2 = props, { iconLeft, iconRight } = _a2, rest = __objRest(_a2, ["iconLeft", "iconRight"]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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

// src/components/ui/separator.tsx
var SeparatorPrimitive = __toESM(require("@radix-ui/react-separator"), 1);
var import_jsx_runtime3 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
var import_lucide_react = require("lucide-react");
var import_jsx_runtime4 = require("react/jsx-runtime");
function Sheet(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SheetPrimitive.Root, __spreadValues({ "data-slot": "sheet" }, props));
}
function SheetPortal(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SheetPrimitive.Portal, __spreadValues({ "data-slot": "sheet-portal" }, props));
}
function SheetOverlay(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(SheetPortal, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SheetOverlay, {}),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
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
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(SheetPrimitive.Close, { className: "ring-offset-white focus:ring-gray-95 data-[state=open]:bg-gray-100 absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none dark:ring-offset-gray-95 dark:focus:ring-gray-30 dark:data-[state=open]:bg-gray-80", children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_lucide_react.XIcon, { className: "size-4" }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      })
    )
  ] });
}
function SheetHeader(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    "div",
    __spreadValues({
      "data-slot": "sheet-header",
      className: cn("flex flex-col gap-1.5 p-4", className)
    }, props)
  );
}
function SheetTitle(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    SheetPrimitive.Description,
    __spreadValues({
      "data-slot": "sheet-description",
      className: cn("text-gray-50 text-sm dark:text-gray-40", className)
    }, props)
  );
}

// src/components/ui/skeleton.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function Skeleton(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "div",
    __spreadValues({
      "data-slot": "skeleton",
      className: cn("bg-gray-100 animate-pulse rounded-md dark:bg-gray-80", className)
    }, props)
  );
}

// src/components/ui/tooltip.tsx
var TooltipPrimitive = __toESM(require("@radix-ui/react-tooltip"), 1);
var import_jsx_runtime6 = require("react/jsx-runtime");
function TooltipProvider(_a) {
  var _b = _a, {
    delayDuration = 0
  } = _b, props = __objRest(_b, [
    "delayDuration"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    TooltipPrimitive.Provider,
    __spreadValues({
      "data-slot": "tooltip-provider",
      delayDuration
    }, props)
  );
}
function Tooltip(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(TooltipProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(TooltipPrimitive.Root, __spreadValues({ "data-slot": "tooltip" }, props)) });
}
function TooltipTrigger(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(TooltipPrimitive.Trigger, __spreadValues({ "data-slot": "tooltip-trigger" }, props));
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
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(TooltipPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(TooltipPrimitive.Arrow, { className: "bg-gray-90 fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] dark:bg-gray-50" })
      ]
    })
  ) });
}

// src/components/ui/sidebar.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
var SIDEBAR_COOKIE_NAME = "sidebar_state";
var SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
var SIDEBAR_WIDTH = "16rem";
var SIDEBAR_WIDTH_MOBILE = "18rem";
var SIDEBAR_WIDTH_ICON = "3rem";
var SIDEBAR_KEYBOARD_SHORTCUT = "b";
var SidebarContext = React2.createContext(null);
function useSidebar() {
  const context = React2.useContext(SidebarContext);
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
  const [openMobile, setOpenMobile] = React2.useState(false);
  const [_open, _setOpen] = React2.useState(defaultOpen);
  const open = openProp != null ? openProp : _open;
  const setOpen = React2.useCallback(
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
  const toggleSidebar = React2.useCallback(() => {
    return isMobile ? setOpenMobile((open2) => !open2) : setOpen((open2) => !open2);
  }, [isMobile, setOpen, setOpenMobile]);
  React2.useEffect(() => {
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
  const contextValue = React2.useMemo(
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
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(SidebarContext.Provider, { value: contextValue, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(TooltipProvider, { delayDuration: 0, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
  React2.useEffect(() => {
    if (isMobile) {
      setOpen(false);
    }
  }, [isMobile]);
  if (collapsible === "none") {
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      "div",
      {
        className: "group peer block",
        "data-state": state,
        "data-collapsible": state === "collapsed" ? collapsible : "",
        "data-variant": variant,
        "data-side": side,
        "data-slot": "sidebar",
        children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          "div",
          __spreadProps(__spreadValues({
            "data-slot": "sidebar-container",
            className: cn(
              "menu-shadow inset-y-0 flex w-screen transition-[left,right,width] duration-200 ease-linear",
              className
            )
          }, props), {
            children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
              "div",
              {
                "data-sidebar": "sidebar",
                "data-slot": "sidebar-inner",
                className: "flex h-full w-full flex-col",
                children: [
                  header,
                  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Sheet, __spreadProps(__spreadValues({ open: openMobile, onOpenChange: setOpenMobile }, props), { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
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
                        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(SheetHeader, { className: "sr-only", children: [
                          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(SheetTitle, { children: "Sidebar" }),
                          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(SheetDescription, { children: "Displays the mobile sidebar." })
                        ] }),
                        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "flex h-full w-full flex-col menu-shadow", children })
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
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
    "div",
    {
      className: "group peer hidden md:block",
      "data-state": state,
      "data-collapsible": state === "collapsed" ? collapsible : "",
      "data-variant": variant,
      "data-side": side,
      "data-slot": "sidebar",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          "div",
          {
            "data-slot": "sidebar-gap",
            className: cn(
              "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
              "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
            )
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
            children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
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
        isMobile ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react2.Menu, {}) : /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react2.PanelLeftIcon, {}),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    })
  );
}
function SidebarRail(_a) {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
  const Comp = asChild ? import_react_slot2.Slot : "div";
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
  const Comp = asChild ? import_react_slot2.Slot : "button";
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "li",
    __spreadValues({
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      className: cn("group/menu-item relative", className)
    }, props)
  );
}
var sidebarMenuButtonVariants = (0, import_class_variance_authority3.cva)(
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
  const Comp = asChild ? import_react_slot2.Slot : "button";
  const { isMobile, state } = useSidebar();
  const button = /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(Tooltip, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(TooltipTrigger, { asChild: true, children: button }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(TooltipContent, __spreadValues({ side: "right", align: "center", hidden: state !== "collapsed" || isMobile }, tooltip))
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
  const Comp = asChild ? import_react_slot2.Slot : "button";
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
  const width = React2.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
    "div",
    __spreadProps(__spreadValues({
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      className: cn("flex h-8 items-center gap-2 rounded-md px-2", className)
    }, props), {
      children: [
        showIcon && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Skeleton, { className: "size-4 rounded-md", "data-sidebar": "menu-skeleton-icon" }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
  const Comp = asChild ? import_react_slot2.Slot : "a";
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
var import_react3 = require("react");

// src/components/Sidebar/content.tsx
var import_lucide_react3 = require("lucide-react");
var import_link = __toESM(require("next/link"), 1);
var import_navigation = require("next/navigation");

// src/components/ui/collapsible.tsx
var CollapsiblePrimitive = __toESM(require("@radix-ui/react-collapsible"), 1);
var import_jsx_runtime8 = require("react/jsx-runtime");
function Collapsible(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(CollapsiblePrimitive.Root, __spreadValues({ "data-slot": "collapsible" }, props));
}
function CollapsibleTrigger2(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    CollapsiblePrimitive.CollapsibleTrigger,
    __spreadValues({
      "data-slot": "collapsible-trigger"
    }, props)
  );
}
function CollapsibleContent2(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    CollapsiblePrimitive.CollapsibleContent,
    __spreadValues({
      "data-slot": "collapsible-content"
    }, props)
  );
}

// src/components/Sidebar/content.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
var Content3 = ({ nav }) => {
  const pathname = (0, import_navigation.usePathname)();
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SidebarContent, { children: nav == null ? void 0 : nav.map((group, index) => {
    var _a;
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(SidebarGroup, { children: [
      group.label && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SidebarGroupLabel, { className: "uppercase", children: group.label }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SidebarGroupContent, { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SidebarMenu, { children: group.items.map(
        ({ title, url, icon, children }) => children ? /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(Collapsible, { className: "group/collapsible", children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SidebarMenuButton, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(CollapsibleTrigger2, { className: "cursor-pointer", children: [
            icon,
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { children: title }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react3.ChevronDown, { className: "ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(CollapsibleContent2, { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SidebarGroupContent, { children: children.map(({ title: title2, url: url2, icon: icon2 }) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SidebarMenuButton, { asChild: true, isActive: pathname === url2, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_link.default, { href: url2 != null ? url2 : "#", children: [
            icon2,
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { children: title2 })
          ] }) }) }, title2)) }) })
        ] }, title) : /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SidebarMenuButton, { asChild: true, isActive: pathname === url, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(import_link.default, { href: url != null ? url : "#", children: [
          icon,
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { children: title })
        ] }) }) }, title)
      ) }) })
    ] }, (_a = group.label) != null ? _a : index);
  }) });
};
var content_default = Content3;

// src/components/Sidebar/header.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
var Header = ({ product = "Example" }) => {
  const { open, isMobile, openMobile } = useSidebar();
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(SidebarHeader, { children: [
    open || isMobile && openMobile ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h1", { className: "flex items-center", children: product }) : null,
    !isMobile && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(SidebarTrigger, {})
  ] });
};
var header_default = Header;

// src/components/Sidebar/navRail.tsx
var import_lucide_react5 = require("lucide-react");
var import_link2 = __toESM(require("next/link"), 1);
var import_react2 = require("react");

// src/components/ui/avatar.tsx
var AvatarPrimitive = __toESM(require("@radix-ui/react-avatar"), 1);
var import_jsx_runtime11 = require("react/jsx-runtime");
function Avatar(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
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
var import_lucide_react4 = require("lucide-react");
var import_jsx_runtime12 = require("react/jsx-runtime");
function DropdownMenu(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(DropdownMenuPrimitive.Root, __spreadValues({ "data-slot": "dropdown-menu" }, props));
}
function DropdownMenuTrigger(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(DropdownMenuPrimitive.Trigger, __spreadValues({ "data-slot": "dropdown-menu-trigger" }, props));
}
function DropdownMenuContent(_a) {
  var _b = _a, {
    className,
    sideOffset = 4
  } = _b, props = __objRest(_b, [
    "className",
    "sideOffset"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
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

// src/components/Sidebar/navRail.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
var DASHBOARD_URL = "https://prism.uprockstaging.com/console";
var products = [
  {
    icon: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_lucide_react5.MonitorUp, { className: " [&>svg]:size-6" }),
    name: "UpTime",
    url: "https://uptime.uprockstaging.com/uptime"
  },
  {
    icon: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_lucide_react5.Globe, { className: " [&>svg]:size-6" }),
    name: "RockScapper",
    url: "https://rockscraper.uprockstaging.com/dashboard"
  }
];
var NavRail = ({ notifications, user, logOut }) => {
  var _a;
  const [url, setUrl] = (0, import_react2.useState)(null);
  const { isMobile } = useSidebar();
  (0, import_react2.useEffect)(() => {
    setUrl(window.location.href);
  }, []);
  const hasNotifications = (notifications == null ? void 0 : notifications.length) && notifications.length > 0;
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(SidebarRail, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SidebarHeader, { className: "p-0 w-8 h-8 md:w-10 md:h-10 justify-center", children: isMobile ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SidebarTrigger, {}) : /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      SidebarMenuButton,
      {
        asChild: true,
        isActive: url == null ? void 0 : url.includes(DASHBOARD_URL),
        className: "flex items-center justify-center h-10",
        children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_link2.default, { href: DASHBOARD_URL, title: "Dashboard", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_lucide_react5.Home, { className: " [&>svg]:size-6" }) })
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SidebarContent, { className: "grow", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SidebarMenu, { className: "", children: products.map((product) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      SidebarMenuButton,
      {
        asChild: true,
        isActive: url == null ? void 0 : url.includes(product.url),
        className: "flex items-center justify-center h-10",
        children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_link2.default, { href: product.url, title: product.name, children: product.icon })
      }
    ) }, product.name)) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SidebarFooter, { className: "p-0 self-end", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(SidebarMenu, { className: "flex flex-col items-center justify-center gap-1", children: [
      hasNotifications ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(DropdownMenu, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(DropdownMenuTrigger, { className: "flex items-center justify-center w-8 h-8 md:w-10 md:h-10", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          "span",
          {
            className: cn(
              "relative",
              hasNotifications ? "before:w-1.5 before:h-1.5 before:bg-[#FFB4AB] before:rounded-full before:-top-0.5 before:-right-0.5 before:absolute" : ""
            ),
            children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_lucide_react5.Bell, { className: "text-gray-10" })
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          DropdownMenuContent,
          {
            className: `w-[--radix-popper-anchor-width] bg-gray-80 text-gray-20 border-transparent`,
            children: notifications.map((notification, index) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(DropdownMenuItem, { asChild: true, className: "max-w-64 flex flex-col gap-1 items-start", children: notification }, index))
          }
        )
      ] }) }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(DropdownMenu, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "flex items-center justify-center", children: user ? /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(Avatar, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(AvatarImage, { src: (_a = user.image) != null ? _a : void 0, className: "w-8 h-8 rounded-full" }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(AvatarFallback, { children: user.username[0].toUpperCase() })
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(Avatar, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(AvatarImage, { src: "https://placecats.com/32/32", className: "w-8 h-8 rounded-full" }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(AvatarFallback, { children: "JD" })
        ] }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          DropdownMenuContent,
          {
            side: "top",
            className: `w-[--radix-popper-anchor-width] bg-gray-80 text-gray-20 border-transparent`,
            children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(DropdownMenuItem, { onClick: logOut, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { children: "Sign out" }) })
          }
        )
      ] }) })
    ] }) })
  ] });
};
var navRail_default = NavRail;

// src/components/Sidebar/Sidebar.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
var AppSidebar = ({ product = "Example", nav, footer, notifications, logOut, user }) => {
  var _a, _b;
  const { isMobile, setOpenMobile } = useSidebar();
  const pathname = (0, import_navigation2.usePathname)();
  (0, import_react3.useEffect)(() => {
    if (isMobile) {
      setOpenMobile(false);
    }
  }, [pathname]);
  return isMobile ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    Sidebar,
    {
      header: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
        "div",
        {
          className: cn(
            `sticky z-10 w-full flex items-center justify-start bg-blur border-b-[0.5px] border-gray-0/20 gap-2 p-2 text-gray-10 font-medium`
          ),
          id: "mobile-header",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(SidebarTrigger, {}),
            nav.some((item) => item.items.some((i) => i.url === pathname)) ? /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h1", { className: "flex items-center", children: (_b = (_a = nav.find((item) => item.items.some((i) => i.url === pathname))) == null ? void 0 : _a.items.find((i) => i.url === pathname)) == null ? void 0 : _b.title }) : null
          ]
        }
      ),
      children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(navRail_default, { notifications, logOut, user }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex flex-col w-full bg-linear-180 from-blue-105/80 to-blue-115/80 backdrop-blur-xl", children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(header_default, { product }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(content_default, { nav }),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(SidebarFooter, { children: footer != null ? footer : null })
        ] })
      ] })
    }
  ) : /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { className: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(navRail_default, { notifications, logOut, user }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(Sidebar, { collapsible: "icon", children: [
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(header_default, { product }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(content_default, { nav }),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(SidebarFooter, { children: footer != null ? footer : null })
    ] })
  ] });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AppSidebar,
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
  useSidebar
});
//# sourceMappingURL=index.cjs.map