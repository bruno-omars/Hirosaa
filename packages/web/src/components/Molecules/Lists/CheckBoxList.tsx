import React, { FC } from "react";
import styled from "styled-components";
import CheckBoxWithText from "../CheckBoxes/CheckBoxWithText";

const ChildUl = styled.ul`
  margin-left: 20px;
  margin-top: 10px;
  list-style: none;
`;

const StyledLi = styled.li`
  margin-top: 10px;
`;

type Item = {
  id: number;
  name: string;
};

type Props = {
  items: Item[];
  selectedItems: number[];
  setSelectedItems: React.Dispatch<React.SetStateAction<number[]>>;
};

const CheckBoxList: FC<Props> = ({
  items,
  selectedItems,
  setSelectedItems,
}) => {
  const handleSubCategorySet = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    let newSelectedItems: number[];
    if (selectedItems.includes(id)) {
      newSelectedItems = selectedItems.filter((num) => num !== id);
    } else {
      newSelectedItems = [...selectedItems, id];
    }
    setSelectedItems(newSelectedItems);
    console.log(selectedItems);
  };

  return (
    <ChildUl>
      {items.map((item) => (
        <StyledLi key={item.id}>
          <CheckBoxWithText
            text={item.name}
            onChange={(e) => handleSubCategorySet(e, item.id)}
            checked={selectedItems.includes(item.id)}
          />
        </StyledLi>
      ))}
    </ChildUl>
  );
};

export default CheckBoxList;
