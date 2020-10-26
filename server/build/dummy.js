'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.isInternalLink = void 0;
exports.isInternalLink = function (link) {
  return /^\/(?!\/)/.test(link);
};
