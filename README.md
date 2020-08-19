# next-deep-each
> Deep each for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @feizheng/next-deep-each
```

## usage
```js
import '@feizheng/next-deep-each';

const obj = {
  name: 'deep-each',
  items: [
    {
      name: 'each',
      type: 'any'
    },
    {
      name: 'forEach',
      type: 'array'
    },
    {
      name: 'forIn',
      type: 'object'
    }
  ],
  other: {
    a: {
      b: 1,
      c: {
        d: 2,
        e: 4,
        g: {
          g1: 1,
          g2: 123
        }
      }
    }
  }
};

// main
nx.deepEach(obj, (key, value) => {
  console.log(key,value);
});
```

## resources
- https://github.com/afeiship/next-is-circular

## license
Code released under [the MIT license](https://github.com/afeiship/next-deep-each/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/next-deep-each
[version-url]: https://npmjs.org/package/@feizheng/next-deep-each

[license-image]: https://img.shields.io/npm/l/@feizheng/next-deep-each
[license-url]: https://github.com/afeiship/next-deep-each/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/next-deep-each
[size-url]: https://github.com/afeiship/next-deep-each/blob/master/dist/next-deep-each.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/next-deep-each
[download-url]: https://www.npmjs.com/package/@feizheng/next-deep-each
