"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/Button/index.ts
var Button_exports = {};
__export(Button_exports, {
  Button: () => Button
});
module.exports = __toCommonJS(Button_exports);

// src/components/ui/button.tsx
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority = require("class-variance-authority");

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/ui/button.tsx
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button
});
//# sourceMappingURL=index.cjs.map