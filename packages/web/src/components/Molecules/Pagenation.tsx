import React, { FC } from "react";
import Default from "../Atoms/Buttons/Default";
import { Pagination } from "../Pages/CircleListPage";

type Props = {
  maxPage: number;
  pagination: Pagination;
  setPagination: React.Dispatch<React.SetStateAction<Pagination>>;
};

const Pagenation: FC<Props> = (props) => {
  const setNewPage = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    moveNum: number
  ) => {
    e.preventDefault();
    const newPage = props.pagination.currentPage + moveNum;
    props.setPagination({ ...props.pagination, currentPage: newPage });
  };

  return (
    <>
      <Default
        clickHandler={(e) => setNewPage(e, -1)}
        buttonSize="MINI"
        shadowDepth="NONE"
        bgColor="WHITE"
        disabled={props.pagination.currentPage <= 1}
      >
        {"<"}
      </Default>
      <Default
        clickHandler={(e) => setNewPage(e, 1)}
        buttonSize="MINI"
        shadowDepth="NONE"
        bgColor="WHITE"
        disabled={props.pagination.currentPage >= props.maxPage}
      >
        {">"}
      </Default>
    </>
  );
};

export default Pagenation;
