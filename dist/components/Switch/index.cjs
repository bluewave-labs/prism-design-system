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

// src/components/Switch/index.ts
var Switch_exports = {};
__export(Switch_exports, {
  Switch: () => Switch2
});
module.exports = __toCommonJS(Switch_exports);

// src/components/ui/switch.tsx
var SwitchPrimitives = __toESM(require("@radix-ui/react-switch"), 1);
var React = __toESM(require("react"), 1);
var import_class_variance_authority = require("class-variance-authority");

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/ui/switch.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var rootVariant = (0, import_class_variance_authority.cva)(
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
var thumbVariant = (0, import_class_variance_authority.cva)(
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
var Switch = React.forwardRef((_a, ref) => {
  var _b = _a, { className, size } = _b, props = __objRest(_b, ["className", "size"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchPrimitives.Root, __spreadProps(__spreadValues({ className: cn(rootVariant({ size }), className) }, props), { ref, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchPrimitives.Thumb, { className: cn(thumbVariant({ size })) }) }));
});
Switch.displayName = SwitchPrimitives.Root.displayName;

// src/components/Switch/switch.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var Switch2 = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Switch, __spreadValues({}, props));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Switch
});
//# sourceMappingURL=index.cjs.map