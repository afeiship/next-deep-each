# next-deep-each
> Deep each for next.

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
