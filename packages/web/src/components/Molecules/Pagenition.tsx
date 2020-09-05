import React, { FC } from "react";
import Default from "../Atoms/Buttons/Default";

type Props = {
  maxPage: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const maxPageListNum = 8;

const Pagenation: FC<Props> = (props) => {
  const { maxPage, currentPage, setCurrentPage } = props;
  const pageListNum = maxPage > maxPageListNum ? maxPageListNum : maxPage;
  const middlePage = maxPage / 2;

  const handleToNextPage = () =>
    setCurrentPage((currentPage) => currentPage + 1);
  const handleToPrePage = () =>
    setCurrentPage((currentPage) => currentPage - 1);
  const handleToSpecificPage = (pageNum: number) => setCurrentPage(pageNum);

  const pages = [...Array(pageListNum)]
    .map((_, i) => {
      if (currentPage <= middlePage) {
        return i + 1;
      } else if (currentPage > middlePage) {
        return i + maxPage - pageListNum + 1;
      } else {
        return i + currentPage - middlePage;
      }
    })
    .map((pageNum) => {
      return (
        <Default
          clickHandler={() => handleToSpecificPage(pageNum)}
          buttonSize="MINI"
          shadowDepth="NONE"
          bgColor={pageNum === currentPage ? "LIGHT_GREEN" : "WHITE"}
          key={pageNum}
        >
          {pageNum}
        </Default>
      );
    });

  return (
    <>
      {currentPage === 1 ? (
        ""
      ) : (
        <Default
          clickHandler={handleToPrePage}
          buttonSize="MINI"
          shadowDepth="NONE"
          bgColor="WHITE"
          disabled={currentPage <= 1}
        >
          {"<"}
        </Default>
      )}
      {pages}
      {currentPage === maxPage ? (
        ""
      ) : (
        <Default
          clickHandler={handleToNextPage}
          buttonSize="MINI"
          shadowDepth="NONE"
          bgColor="WHITE"
          disabled={currentPage >= maxPage}
        >
          {">"}
        </Default>
      )}
    </>
  );
};

export default Pagenation;
