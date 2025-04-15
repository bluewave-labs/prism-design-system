"use strict";
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

// src/components/Card/index.ts
var Card_exports = {};
__export(Card_exports, {
  Card: () => Card2,
  CardAction: () => CardAction,
  CardContent: () => CardContent,
  CardDescription: () => CardDescription,
  CardFooter: () => CardFooter,
  CardHeader: () => CardHeader,
  CardTitle: () => CardTitle,
  ConsoleButton: () => ConsoleButton
});
module.exports = __toCommonJS(Card_exports);

// src/components/ui/card.tsx
var React = __toESM(require("react"), 1);
var import_react_slot2 = require("@radix-ui/react-slot");
var import_class_variance_authority2 = require("class-variance-authority");

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

// src/components/ui/card.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(CardContext.Provider, { value, children });
}
var cardVariants = (0, import_class_variance_authority2.cva)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", __spreadValues({ "data-slot": "card-title", className: cn("leading-none font-semibold", className) }, props));
}
function CardDescription(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", __spreadValues({ "data-slot": "card-description", className: cn(" text-sm", className) }, props));
}
function CardAction(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "div",
    __spreadValues({
      "data-slot": "card-action",
      className: cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className)
    }, props)
  );
}
function CardContent(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", __spreadValues({ "data-slot": "card-content", className: cn("min-h-24", className) }, props));
}
function CardFooter(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", __spreadValues({ "data-slot": "card-footer", className: cn("flex items-center [.border-t]:pt-6", className) }, props));
}
function ConsoleButton(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  const { isHovered } = useCardContext();
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
var import_jsx_runtime3 = require("react/jsx-runtime");
var Card2 = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(CardProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Card, __spreadValues({}, props)) });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  ConsoleButton
});
//# sourceMappingURL=index.cjs.map