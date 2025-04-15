"use strict";
"use client";
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

// src/components/Sidebar/navRail.tsx
var navRail_exports = {};
__export(navRail_exports, {
  default: () => navRail_default
});
module.exports = __toCommonJS(navRail_exports);
var import_lucide_react3 = require("lucide-react");
var import_link = __toESM(require("next/link"), 1);
var import_react = require("react");

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/ui/avatar.tsx
var AvatarPrimitive = __toESM(require("@radix-ui/react-avatar"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
function Avatar(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
var import_lucide_react = require("lucide-react");
var import_jsx_runtime2 = require("react/jsx-runtime");
function DropdownMenu(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(DropdownMenuPrimitive.Root, __spreadValues({ "data-slot": "dropdown-menu" }, props));
}
function DropdownMenuTrigger(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(DropdownMenuPrimitive.Trigger, __spreadValues({ "data-slot": "dropdown-menu-trigger" }, props));
}
function DropdownMenuContent(_a) {
  var _b = _a, {
    className,
    sideOffset = 4
  } = _b, props = __objRest(_b, [
    "className",
    "sideOffset"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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

// src/components/ui/sidebar.tsx
var import_react_slot2 = require("@radix-ui/react-slot");
var import_class_variance_authority2 = require("class-variance-authority");
var import_lucide_react2 = require("lucide-react");
var React = __toESM(require("react"), 1);

// src/components/ui/button.tsx
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority = require("class-variance-authority");
var import_jsx_runtime3 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Comp, __spreadValues({ "data-slot": "button", className: cn(buttonVariants({ variant, size, rounded, className })) }, props));
}

// src/components/ui/tooltip.tsx
var TooltipPrimitive = __toESM(require("@radix-ui/react-tooltip"), 1);
var import_jsx_runtime4 = require("react/jsx-runtime");
function TooltipProvider(_a) {
  var _b = _a, {
    delayDuration = 0
  } = _b, props = __objRest(_b, [
    "delayDuration"
  ]);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    TooltipPrimitive.Provider,
    __spreadValues({
      "data-slot": "tooltip-provider",
      delayDuration
    }, props)
  );
}
function Tooltip(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(TooltipProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(TooltipPrimitive.Root, __spreadValues({ "data-slot": "tooltip" }, props)) });
}
function TooltipTrigger(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(TooltipPrimitive.Trigger, __spreadValues({ "data-slot": "tooltip-trigger" }, props));
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
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(TooltipPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(TooltipPrimitive.Arrow, { className: "bg-gray-90 fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] dark:bg-gray-50" })
      ]
    })
  ) });
}

// src/components/ui/sidebar.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
var SidebarContext = React.createContext(null);
function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}
function SidebarTrigger(_a) {
  var _b = _a, { className, onClick } = _b, props = __objRest(_b, ["className", "onClick"]);
  const { toggleSidebar, isMobile } = useSidebar();
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
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
        isMobile ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react2.Menu, {}) : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react2.PanelLeftIcon, {}),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    })
  );
}
function SidebarRail(_a) {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
function SidebarHeader(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "div",
    __spreadValues({
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      className: cn("flex flex-col gap-2 p-2", className)
    }, props)
  );
}
function SidebarContent(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
function SidebarMenu(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "li",
    __spreadValues({
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      className: cn("group/menu-item relative", className)
    }, props)
  );
}
var sidebarMenuButtonVariants = (0, import_class_variance_authority2.cva)(
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
  const button = /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Tooltip, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(TooltipTrigger, { asChild: true, children: button }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(TooltipContent, __spreadValues({ side: "right", align: "center", hidden: state !== "collapsed" || isMobile }, tooltip))
  ] });
}

// src/components/Sidebar/server-functions.ts
var import_jsonwebtoken = __toESM(require("jsonwebtoken"), 1);
var import_headers = require("next/headers");
var logOut = async () => {
  console.log("Logging out");
};
var getUser = async () => {
  const token = (await (0, import_headers.cookies)()).get("access_token");
  if (!token) {
    return null;
  }
  try {
    const decodeUser = import_jsonwebtoken.default.verify(token.value, process.env.JWT_SECRET || "your_secret_key");
    if (!decodeUser) {
      return null;
    }
    const _a = decodeUser, { exp } = _a, user = __objRest(_a, ["exp"]);
    return user;
  } catch (error) {
    console.error("Error verifying token:", error);
    return null;
  }
};

// src/components/Sidebar/navRail.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
var DASHBOARD_URL = "https://prism.uprockstaging.com/console";
var products = [
  {
    icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react3.MonitorUp, { className: " [&>svg]:size-6" }),
    name: "UpTime",
    url: "https://uptime.uprockstaging.com/uptime"
  },
  {
    icon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react3.Globe, { className: " [&>svg]:size-6" }),
    name: "RockScapper",
    url: "https://rockscraper.uprockstaging.com/dashboard"
  }
];
var NavRail = ({
  notifications,
  fallbackUser
}) => {
  const [url, setUrl] = (0, import_react.useState)(null);
  const [user, setUser] = (0, import_react.useState)(null);
  const { isMobile } = useSidebar();
  const findUser = async () => {
    const cookieUser = await (fallbackUser ? fallbackUser() : getUser());
    if (cookieUser) {
      setUser(cookieUser);
    } else {
      window.location.href = DASHBOARD_URL;
    }
  };
  (0, import_react.useEffect)(() => {
    setUrl(window.location.href);
    findUser();
  }, []);
  const hasNotifications = (notifications == null ? void 0 : notifications.length) && notifications.length > 0;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(SidebarRail, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(SidebarHeader, { className: "p-0 w-8 h-8 md:w-10 md:h-10 justify-center", children: isMobile ? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(SidebarTrigger, {}) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      SidebarMenuButton,
      {
        asChild: true,
        isActive: url == null ? void 0 : url.includes(DASHBOARD_URL),
        className: "flex items-center justify-center h-10",
        children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_link.default, { href: DASHBOARD_URL, title: "Dashboard", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react3.Home, { className: " [&>svg]:size-6" }) })
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(SidebarContent, { className: "grow", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(SidebarMenu, { className: "", children: products.map((product) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      SidebarMenuButton,
      {
        asChild: true,
        isActive: url == null ? void 0 : url.includes(product.url),
        className: "flex items-center justify-center h-10",
        children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_link.default, { href: product.url, title: product.name, children: product.icon })
      }
    ) }, product.name)) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(SidebarFooter, { className: "p-0 self-end", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(SidebarMenu, { className: "flex flex-col items-center justify-center gap-1", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(DropdownMenu, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(DropdownMenuTrigger, { className: "flex items-center justify-center w-8 h-8 md:w-10 md:h-10", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "span",
          {
            className: cn(
              "relative",
              hasNotifications ? "before:w-1.5 before:h-1.5 before:bg-[#FFB4AB] before:rounded-full before:-top-0.5 before:-right-0.5 before:absolute" : ""
            ),
            children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react3.Bell, { className: "text-gray-10" })
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          DropdownMenuContent,
          {
            className: `w-[--radix-popper-anchor-width] bg-gray-80 text-gray-20 border-transparent`,
            children: hasNotifications ? notifications.map((notification, index) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(DropdownMenuItem, { asChild: true, className: "max-w-64 flex flex-col gap-1 items-start", children: notification }, index)) : /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(DropdownMenuItem, { className: "max-w-64", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "text-gray-40", children: "No notifications" }) })
          }
        )
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(DropdownMenu, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "flex items-center justify-center", children: user ? /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(Avatar, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(AvatarImage, { src: user.image, className: "w-8 h-8 rounded-full" }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(AvatarFallback, { children: user.username[0].toUpperCase() })
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(Avatar, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(AvatarImage, { src: "https://placecats.com/32/32", className: "w-8 h-8 rounded-full" }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(AvatarFallback, { children: "JD" })
        ] }) }) }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          DropdownMenuContent,
          {
            side: "top",
            className: `w-[--radix-popper-anchor-width] bg-gray-80 text-gray-20 border-transparent`,
            children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              DropdownMenuItem,
              {
                onClick: () => {
                  logOut().then(() => window.location.href = `https://prism.uprockstaging.com/auth/register`);
                },
                children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { children: "Sign out" })
              }
            )
          }
        )
      ] }) })
    ] }) })
  ] });
};
var navRail_default = NavRail;
//# sourceMappingURL=navRail.cjs.map