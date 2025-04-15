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

// src/utils/codeToHtml.ts
var codeToHtml_exports = {};
__export(codeToHtml_exports, {
  default: () => codeToHtml_default
});
module.exports = __toCommonJS(codeToHtml_exports);
var import_shiki = require("shiki");
var codeToHtml = async (code) => {
  const html = await (0, import_shiki.codeToHtml)(code, {
    lang: "javascript",
    theme: "dracula"
  });
  return html;
};
var codeToHtml_default = codeToHtml;
//# sourceMappingURL=codeToHtml.cjs.map