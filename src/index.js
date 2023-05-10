import nx from '@jswork/next';

const MSG_ERROR_MUST_TARGET = 'Target must be an array or an object.';

nx.deepEach = function (inTarget, inCallback, inContext) {
  if (!inTarget || typeof inTarget !== 'object') nx.error(MSG_ERROR_MUST_TARGET);

  const each = function (target, paths = []) {
    nx.each(target, function (key, value) {
      const newPath = paths.concat(key);
      const args = [...arguments, newPath];
      inCallback.apply(inContext, args);
      if (value && typeof value === 'object') each(value, newPath);
    });
  };

  each(inTarget, []);
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = nx.deepEach;
}

export default nx.deepEach;
