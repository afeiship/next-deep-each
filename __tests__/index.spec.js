require('../src');

describe('api.basic test', () => {
  test('nx.deepEach', function () {
    var execute = 0;
    var obj = {
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

    nx.deepEach(obj, (key, value) => {
      execute++;
    });

    expect(execute).toBe(20);
  });
});
