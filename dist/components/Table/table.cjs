"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/Table/table.tsx
var table_exports = {};
__export(table_exports, {
  Table: () => Table2,
  default: () => table_default
});
module.exports = __toCommonJS(table_exports);
var import_react_table = require("@tanstack/react-table");

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/ui/table.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Table(_a) {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "div",
    {
      "data-slot": "table-container",
      className: cn("relative w-full overflow-x-auto  border-[0.5px] border-gray-0/20 rounded-xl", className),
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", __spreadProps(__spreadValues({ "data-slot": "table", className: cn("w-full caption-bottom text-sm") }, props), { children }))
    }
  );
}
function TableHeader(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "thead",
    __spreadValues({
      "data-slot": "table-header",
      className: cn("[&_tr]:border-b border-gray-0/20 text-gray-30 bg-gray-0/5", className)
    }, props)
  );
}
function TableBody(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", __spreadValues({ "data-slot": "table-body", className: cn("[&_tr:last-child]:border-0", className) }, props));
}
function TableHeaderRow(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "tr",
    __spreadValues({
      "data-slot": "table-header-row",
      className: cn("h-[2.75rem] border-b-[0.5px] border-gray-0/20 ", className)
    }, props)
  );
}
function TableRow(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "tr",
    __spreadValues({
      "data-slot": "table-row",
      className: cn(
        "hover:bg-gray-0/2 data-[state=selected]:bg-gray-60/20 border-b-[0.5px] border-gray-0/16 transition-colors h-[3.5rem]",
        className
      )
    }, props)
  );
}
function TableHead(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "th",
    __spreadValues({
      "data-slot": "table-head",
      className: cn(
        "text-gray-30 h-10 px-2 align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )
    }, props)
  );
}
function TableCell(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "td",
    __spreadValues({
      "data-slot": "table-cell",
      className: cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )
    }, props)
  );
}

// src/components/Table/table.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function Table2({ columns, data, className }) {
  var _a;
  const table = (0, import_react_table.useReactTable)({
    data,
    columns,
    getCoreRowModel: (0, import_react_table.getCoreRowModel)()
  });
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(Table, { className, children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(TableHeader, { children: table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(TableHeaderRow, { children: headerGroup.headers.map((header) => {
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(TableHead, { children: header.isPlaceholder ? null : (0, import_react_table.flexRender)(header.column.columnDef.header, header.getContext()) }, header.id);
    }) }, headerGroup.id)) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(TableBody, { children: ((_a = table.getRowModel().rows) == null ? void 0 : _a.length) ? table.getRowModel().rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(TableRow, { "data-state": row.getIsSelected() && "selected", children: row.getVisibleCells().map((cell) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(TableCell, { children: (0, import_react_table.flexRender)(cell.column.columnDef.cell, cell.getContext()) }, cell.id)) }, row.id)) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(TableCell, { colSpan: columns.length, className: "h-24 text-center", children: "No results." }) }) })
  ] });
}
var table_default = Table2;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Table
});
//# sourceMappingURL=table.cjs.map