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

// src/components/Tabs/tabs.tsx
var tabs_exports = {};
__export(tabs_exports, {
  Tabs: () => Tabs2,
  default: () => tabs_default
});
module.exports = __toCommonJS(tabs_exports);

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/ui/tabs.tsx
var TabsPrimitive = __toESM(require("@radix-ui/react-tabs"), 1);
var React = __toESM(require("react"), 1);
var import_class_variance_authority = require("class-variance-authority");
var import_jsx_runtime = require("react/jsx-runtime");
var Tabs = TabsPrimitive.Root;
var tabsListVariants = (0, import_class_variance_authority.cva)(
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
var TabsList = React.forwardRef((_a, ref) => {
  var _b = _a, { className, variant } = _b, props = __objRest(_b, ["className", "variant"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsPrimitive.List, __spreadValues({ ref, className: cn(tabsListVariants({ variant }), className) }, props));
});
TabsList.displayName = TabsPrimitive.List.displayName;
var tabsTriggerVariants = (0, import_class_variance_authority.cva)(
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
var TabsTrigger = React.forwardRef((_a, ref) => {
  var _b = _a, { className, variant, position } = _b, props = __objRest(_b, ["className", "variant", "position"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsPrimitive.Trigger, __spreadValues({ ref, className: cn(tabsTriggerVariants({ variant, position }), className) }, props));
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
var TabsContent = React.forwardRef((_a, ref) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
var import_jsx_runtime2 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Tabs, __spreadProps(__spreadValues({ defaultValue: defaultValue != null ? defaultValue : tabsList[0].value, className: cn(className) }, props), { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(TabsList, { variant: props.variant, className: tabsListClassName, children: tabsList.map((tab, index) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
    tabsList.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(TabsContent, { value: tab.value, className: contentClassName, children: tab.content }, tab.value))
  ] }));
};
var tabs_default = Tabs2;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Tabs
});
//# sourceMappingURL=tabs.cjs.map