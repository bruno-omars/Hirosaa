/**
 * sourceとtargetを比較し、targetに存在する要素の配列を返す
 * TODO: 名前がaddに依存しているため変更したいが良いのがわからない
 * @param source number[]
 * @param target number[]
 */
export const extractAdded = (source: number[], target: number[]) => (
  target.filter((id) => !source.includes(id))
);

/**
 * sourceとtargetを比較し、sourceに存在する要素の配列を返す
 * TODO: 名前がremovedに依存しているため変更したいが良いのがわからない
 * @param source number[]
 * @param target number[]
 */
export const extractRemoved = (source: number[], target: number[]) => (
  source.filter((id) => !target.includes(id))
);