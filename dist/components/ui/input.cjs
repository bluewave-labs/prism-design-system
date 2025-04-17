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

// src/components/ui/input.tsx
var input_exports = {};
__export(input_exports, {
  Input: () => Input
});
module.exports = __toCommonJS(input_exports);
var import_class_variance_authority = require("class-variance-authority");
var import_react = require("react");

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/ui/input.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var inputVariants = (0, import_class_variance_authority.cva)("", {
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
var labelVariants = (0, import_class_variance_authority.cva)("", {
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
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputIcon, __spreadValues({}, props));
  }
  if (variant === "no-label") {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NoLabelInput, __spreadValues({}, props));
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: cn(labelVariants({ error: error != null ? error : false, disabled: disabled != null ? disabled : false }), className), children: [
    iconLeft && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mr-2 text-2xl", children: iconLeft }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "input",
      __spreadValues({
        type,
        "data-slot": "input",
        id,
        disabled,
        className: cn("grow outline-none focus-visible:ring-none", className)
      }, props)
    ),
    iconRight && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ml-2 text-2xl", children: iconRight })
  ] });
}
function NoLabelInput(_a) {
  var _b = _a, { variant, className, type, id, disabled, error } = _b, props = __objRest(_b, ["variant", "className", "type", "id", "disabled", "error"]);
  const _a2 = props, { iconLeft, iconRight } = _a2, rest = __objRest(_a2, ["iconLeft", "iconRight"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Input
});
//# sourceMappingURL=input.cjs.map