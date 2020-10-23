import React, { FC, useState, useEffect } from "react";
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
  const [parentIsSelected, setParent] = useState(false);

  const okay = () => {
    const childrenIds = childrenItems.map((childItem) => childItem.id);
    return childrenIds.every((id) => selectedChildrenItems.includes(id));
  };

  const handleClickParent = () => {
    const childrenIds = childrenItems.map((childItem) => childItem.id);
    if (okay()) {
      setChildrendCategories((selectedChildren) =>
        selectedChildren.filter((child) => !childrenIds.includes(child))
      );
      setParent(false);
    } else {
      setChildrendCategories((selectedChildren) => [
        ...selectedChildren,
        ...childrenIds,
      ]);
      setParent(true);
    }
  };

  useEffect(() => {
    if (okay()) {
      setParent(true);
    } else {
      setParent(false);
    }
  }, [selectedChildrenItems]);

  return (
    <ParentUl>
      <StyledLi>
        <CheckBoxWithText
          checked={parentIsSelected}
          text={parentItem.name}
          onChange={handleClickParent}
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
