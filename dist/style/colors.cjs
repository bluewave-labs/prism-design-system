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

// src/style/colors.ts
var colors_exports = {};
__export(colors_exports, {
  colors: () => colors
});
module.exports = __toCommonJS(colors_exports);
var colors = {
  blue: {
    5: "#f0f4fd",
    10: "#e3ebfc",
    20: "#cdd9f8",
    30: "#b5c6f4",
    40: "#8d9fec",
    50: "#727fe2",
    60: "#575cd4",
    70: "#4749bb",
    80: "#3c4097",
    90: "#1E2F55",
    95: "#202246",
    100: "#1F2130",
    105: "#151727",
    110: "#101222",
    115: "#060819"
  },
  gray: {
    100: "#010314",
    95: "#0B0D1C",
    90: "#171825",
    85: "#212230",
    80: "#2A2B3A",
    70: "#383A4D",
    60: "#5E6077",
    50: "#9FA2B9",
    40: "#BABCD2",
    30: "#DFE1F4",
    20: "#ECECFB",
    10: "#F4F4FF",
    0: "#FFFFFF"
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  colors
});
//# sourceMappingURL=colors.cjs.map