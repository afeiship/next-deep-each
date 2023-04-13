import nx from '@jswork/next';

const MSG_ERROR_MUST_TARGET = 'Target must be an array or an object.';

nx.deepEach = function (inTarget, inCallback, inContext) {
  if (!inTarget || typeof inTarget !== 'object') nx.error(MSG_ERROR_MUST_TARGET);

  const each = function (target) {
    nx.each(target, function (_, value) {
      inCallback.apply(inContext, arguments);
      if (value && typeof value === 'object') each(value);
    });
  };

  each(inTarget);
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = nx.deepEach;
}

export default nx.deepEach;
