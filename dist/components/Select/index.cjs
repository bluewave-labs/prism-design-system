"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// src/components/Select/index.ts
var Select_exports = {};
__export(Select_exports, {
  Select: () => Select
});
module.exports = __toCommonJS(Select_exports);

// src/components/ui/select.tsx
var import_lucide_react = require("lucide-react");
var import_react = require("react");

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/ui/select.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Select = ({ selected, options, onSelect, disabled = false, className = "" }) => {
  const [isOpen, setIsOpen] = (0, import_react.useState)(false);
  const ref = (0, import_react.useRef)(null);
  const [showAbove, setShowAbove] = (0, import_react.useState)(false);
  const [highlightedIndex, setHighlightedIndex] = (0, import_react.useState)(-1);
  const handleKeyDown = (e) => {
    if (disabled) return;
    switch (e.key) {
      case "Enter":
      case " ":
        e.preventDefault();
        setIsOpen(!isOpen);
        if (isOpen && highlightedIndex >= 0) {
          onSelect(options[highlightedIndex]);
          setHighlightedIndex(-1);
        }
        break;
      case "ArrowDown":
        e.preventDefault();
        if (isOpen) {
          setHighlightedIndex((prev) => prev < options.length - 1 ? prev + 1 : prev);
        } else {
          setIsOpen(true);
        }
        break;
      case "ArrowUp":
        e.preventDefault();
        if (isOpen) {
          setHighlightedIndex((prev) => prev > 0 ? prev - 1 : 0);
        }
        break;
      case "Escape":
        e.preventDefault();
        setIsOpen(false);
        break;
      case "Tab":
        setIsOpen(false);
        break;
    }
  };
  (0, import_react.useEffect)(() => {
    const handlePosition = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const spaceBelow = window.innerHeight - rect.bottom;
        const spaceAbove = rect.top;
        setShowAbove(spaceBelow < 200 && spaceAbove > spaceBelow);
      }
    };
    if (isOpen) {
      handlePosition();
    }
  }, [isOpen]);
  (0, import_react.useEffect)(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      ref,
      onClick: () => {
        if (disabled) {
          return;
        }
        setIsOpen(!isOpen);
      },
      className: cn("relative w-[204px]", disabled ? "opacity-50 pointer-events-none" : "cursor-pointer", className),
      onKeyDown: handleKeyDown,
      tabIndex: disabled ? -1 : 0,
      role: "combobox",
      "aria-expanded": isOpen,
      "aria-haspopup": "listbox",
      "aria-controls": "select-options",
      "aria-disabled": disabled,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { className: "flex items-center justify-between border-[0.5px] bg-gray-40/12 border-gray-0/20 py-2.5 px-3.5 rounded-md cursor-pointer", children: [
          selected,
          isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronUp, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.ChevronDown, { size: 16 })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "div",
          {
            className: cn(
              "absolute border bg-gray-80 border-gray-0/20 flex-col z-20 text-gray-10 gap-0 w-full max-h-[200px] overflow-y-auto",
              isOpen ? "flex" : "hidden",
              showAbove ? "bottom-full rounded-t-sm" : "top-full rounded-b-sm"
            ),
            children: options.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "button",
              {
                onMouseEnter: () => setHighlightedIndex(index),
                onClick: () => {
                  onSelect(item);
                  setIsOpen(false);
                },
                className: cn(
                  "py-2 px-3 text-sm w-full text-left hover:bg-gray-0/12 cursor-pointer",
                  selected === item ? "bg-gray-0/12" : "",
                  highlightedIndex === index ? "bg-gray-0/12" : ""
                ),
                "aria-selected": selected === item,
                tabIndex: isOpen ? 0 : -1,
                role: "option",
                children: item
              },
              item
            ))
          }
        )
      ]
    }
  );
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Select
});
//# sourceMappingURL=index.cjs.map