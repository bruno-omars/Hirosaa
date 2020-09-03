import React, { FC } from "react";
import Default from "../Atoms/Buttons/Default";
import { Pagination } from "../Pages/CircleListPage";

type Props = {
  maxPage: number;
  pagination: Pagination;
  setPagination: React.Dispatch<React.SetStateAction<Pagination>>;
};

type PaginationAction = number | "pre" | "next";

const maxPageListNum = 8;

const Pagenation: FC<Props> = (props) => {
  const { maxPage, pagination, setPagination } = props;
  const setNewPage = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    action: PaginationAction
  ) => {
    e.preventDefault();
    if (action === "pre") {
      const newPage = pagination.currentPage - 1;
      setPagination({ ...pagination, currentPage: newPage });
    } else if (action === "next") {
      const newPage = pagination.currentPage + 1;
      setPagination({ ...pagination, currentPage: newPage });
    } else {
      setPagination({ ...pagination, currentPage: action });
    }
  };

  const pageListNum = maxPage > maxPageListNum ? maxPageListNum : maxPage;

  const pages = [...Array(pageListNum)]
    .map((_, i) => {
      if (pagination.currentPage <= maxPage / 2) {
        return i + 1;
      } else if (pagination.currentPage > maxPage / 2) {
        return i + maxPage - pageListNum + 1;
      } else {
        return i + pagination.currentPage - maxPage / 2;
      }
    })
    .map((pageNum) => {
      return (
        <Default
          clickHandler={(e) => setNewPage(e, pageNum)}
          buttonSize="MINI"
          shadowDepth="NONE"
          bgColor={pageNum === pagination.currentPage ? "LIGHT_GREEN" : "WHITE"}
          key={pageNum}
        >
          {pageNum}
        </Default>
      );
    });

  return (
    <>
      <Default
        clickHandler={(e) => setNewPage(e, "pre")}
        buttonSize="MINI"
        shadowDepth="NONE"
        bgColor="WHITE"
        disabled={pagination.currentPage <= 1}
      >
        {"<"}
      </Default>
      {pages}
      <Default
        clickHandler={(e) => setNewPage(e, "next")}
        buttonSize="MINI"
        shadowDepth="NONE"
        bgColor="WHITE"
        disabled={pagination.currentPage >= maxPage}
      >
        {">"}
      </Default>
    </>
  );
};

export default Pagenation;
