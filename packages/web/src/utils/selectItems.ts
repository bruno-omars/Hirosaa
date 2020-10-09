export const selectItems = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  selectedItems: number[],
  setSelectedItems: React.Dispatch<React.SetStateAction<number[]>>
) => {
  e.preventDefault();
  let newItems: number[];
  const id = Number(e.currentTarget.id);
  if (selectedItems.includes(id)) {
    newItems = selectedItems.filter((num) => num !== id);
  } else {
    newItems = [...selectedItems, id];
  }
  setSelectedItems(newItems);
};
