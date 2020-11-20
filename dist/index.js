/*!
 * name: @jswork/next-deep-each
 * description: Deep each for next.
 * homepage: https://github.com/afeiship/next-deep-each
 * version: 1.0.0
 * date: 2020-11-20 13:56:37
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var MSG_ERROR_MUST_TARGET = 'Target must be an array or an object.';

  nx.deepEach = function (inTarget, inCallback, inContext) {
    if (!inTarget || typeof inTarget !== 'object') {
      nx.error(MSG_ERROR_MUST_TARGET);
    }

    var each = function (target) {
      nx.each(target, function (_, value) {
        inCallback.apply(inContext, arguments);
        if (value && typeof value === 'object') {
          each(value);
        }
      });
    };

    each(inTarget);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.deepEach;
  }
})();
