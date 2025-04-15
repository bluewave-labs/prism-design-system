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

// src/components/Banner/index.ts
var Banner_exports = {};
__export(Banner_exports, {
  AlertDescription: () => AlertDescription,
  AlertTitle: () => AlertTitle,
  Banner: () => Alert
});
module.exports = __toCommonJS(Banner_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AlertDescription,
  AlertTitle,
  Banner
});
//# sourceMappingURL=index.cjs.map