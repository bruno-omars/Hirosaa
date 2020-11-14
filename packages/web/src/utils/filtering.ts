/**
 * sourceとtargetを比較し、targetに存在する要素の配列を返す
 * @param source number[]
 * @param target number[]
 */
export const extractAdded = <T>(source: T[], target: T[]) => (
  target.filter((key) => !source.includes(key))
);

/**
 * sourceとtargetを比較し、sourceに存在する要素の配列を返す
 * TODO: 名前がremovedに依存しているため変更したいが良いのがわからない
 * @param source number[]
 * @param target number[]
 */
export const extractRemoved = <T>(source: T[], target: T[]) => (
  source.filter((key) => !target.includes(key))
);
