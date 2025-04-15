"use strict";
"use client";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
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

// src/components/Card/card.tsx
var card_exports = {};
__export(card_exports, {
  Card: () => Card2,
  default: () => card_default
});
module.exports = __toCommonJS(card_exports);

// src/components/ui/card.tsx
var React = __toESM(require("react"), 1);
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority = require("class-variance-authority");

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/ui/card.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var CardContext = React.createContext(void 0);
function useCardContext() {
  const context = React.useContext(CardContext);
  if (!context) {
    throw new Error("Card components must be used within a Card component");
  }
  return context;
}
function CardProvider({ children }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const value = React.useMemo(() => ({ isHovered, setIsHovered }), [isHovered]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContext.Provider, { value, children });
}
var cardVariants = (0, import_class_variance_authority.cva)(
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
  const Comp = asChild ? import_react_slot.Slot : "div";
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    Comp,
    __spreadValues({
      "data-slot": "card",
      className: cn(cardVariants({ variant }), className),
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave
    }, props)
  );
}

// src/components/Card/card.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var Card2 = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(CardProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Card, __spreadValues({}, props)) });
};
var card_default = Card2;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Card
});
//# sourceMappingURL=card.cjs.map