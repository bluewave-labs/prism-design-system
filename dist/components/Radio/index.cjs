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

// src/components/Radio/index.ts
var Radio_exports = {};
__export(Radio_exports, {
  Radio: () => Radio,
  RadioBtn: () => RadioBtn
});
module.exports = __toCommonJS(Radio_exports);

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/ui/radio.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Radio = (_a) => {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
var import_jsx_runtime2 = require("react/jsx-runtime");
var RadioBtn = (_a) => {
  var _b = _a, { id, label, disabled, className } = _b, props = __objRest(_b, ["id", "label", "disabled", "className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "label",
    {
      htmlFor: id,
      className: cn(
        "flex items-start gap-2 grow text-sm text-gray-30",
        disabled ? "opacity-50 pointer-events-none" : "",
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(radio_default, __spreadValues({ id }, props)),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "w-[calc(100%-28px)]", children: label })
      ]
    }
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Radio,
  RadioBtn
});
//# sourceMappingURL=index.cjs.map