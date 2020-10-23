import React, { FC } from "react";
import styled from "styled-components";
import CheckBoxWithText from "../CheckBoxes/CheckBoxWithText";
import CheckBoxList from "./CheckBoxList";

const ParentUl = styled.ul`
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
  parentItem: Item;
  childrenItems: Item[];
  selectedChildrenItems: number[];
  setChildrendCategories: React.Dispatch<React.SetStateAction<number[]>>;
};

const CheckBoxStagesList: FC<Props> = ({
  parentItem,
  childrenItems,
  selectedChildrenItems,
  setChildrendCategories,
}) => {
  const handleParentCategorySet = (
    e: React.ChangeEvent<HTMLInputElement>,
    childrenIds: number[]
  ) => {
    let newSelectedChildrenItems: number[];
    childrenIds.forEach((id) => {
      if (selectedChildrenItems.includes(id)) {
        newSelectedChildrenItems = selectedChildrenItems.filter(
          (num) => !childrenIds.includes(num)
        );
        setChildrendCategories(newSelectedChildrenItems);
        return;
      } else {
        newSelectedChildrenItems = [...selectedChildrenItems, ...childrenIds];
        setChildrendCategories(newSelectedChildrenItems);
        return;
      }
    });
  };

  return (
    <ParentUl>
      <StyledLi>
        <CheckBoxWithText
          text={parentItem.name}
          onChange={(e) =>
            handleParentCategorySet(
              e,
              childrenItems.map((childItem) => childItem.id)
            )
          }
        />
      </StyledLi>
      <CheckBoxList
        items={childrenItems}
        selectedItems={selectedChildrenItems}
        setSelectedItems={setChildrendCategories}
      />
    </ParentUl>
  );
};

export default CheckBoxStagesList;
