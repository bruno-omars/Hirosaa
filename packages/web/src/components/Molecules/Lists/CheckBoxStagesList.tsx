import React, { FC, useState, useEffect, useMemo, useCallback } from "react";
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
  selectedChildrenIds: number[];
  setChildrenIds: React.Dispatch<React.SetStateAction<number[]>>;
};

const CheckBoxStagesList: FC<Props> = ({
  parentItem,
  childrenItems,
  selectedChildrenIds,
  setChildrenIds,
}) => {
  const [parentIsSelected, setParent] = useState(false);
  const childrenIds = useMemo(
    () => childrenItems.map((childItem) => childItem.id),
    [childrenItems]
  );

  const allChildrenSelected = useCallback(
    () => childrenIds.every((id) => selectedChildrenIds.includes(id)),
    [childrenIds, selectedChildrenIds]
  );

  const handleClickParent = useCallback(() => {
    if (allChildrenSelected()) {
      setChildrenIds((selectedChildrenIds) =>
        selectedChildrenIds.filter((child) => !childrenIds.includes(child))
      );
      setParent(false);
    } else {
      setChildrenIds((selectedChildrenIds) => [
        ...selectedChildrenIds,
        ...childrenIds,
      ]);
      setParent(true);
    }
  }, [allChildrenSelected]);

  useEffect(() => {
    if (allChildrenSelected()) {
      setParent(true);
    } else {
      setParent(false);
    }
  }, [selectedChildrenIds]);

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
        selectedItems={selectedChildrenIds}
        setSelectedItems={setChildrenIds}
      />
    </ParentUl>
  );
};

export default CheckBoxStagesList;
