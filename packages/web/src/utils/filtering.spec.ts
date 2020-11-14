import { extractAdded, extractRemoved } from './filtering';

describe('extractAdded', () => {
  const testedObj = [
    {
      source: [1, 2],
      target: [1, 2, 3],
      expect: [3],
    },
    {
      source: [1],
      target: [1, 2, 3],
      expect: [2, 3],
    },
    {
      source: [],
      target: [1, 2, 3],
      expect: [1, 2, 3],
    },
    {
      source: [1, 2, 3],
      target: [],
      expect: [],
    },
  ];

  testedObj.forEach((obj) => {
    it(`sourceが${obj.source}, targetが${obj.target}の場合${obj.expect}が返却される`, () => {
      expect(extractAdded(obj.source, obj.target)).toStrictEqual(obj.expect);
    })
  })
});