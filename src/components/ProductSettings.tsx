import React from "react";
import styled from "styled-components";
import Button from "./common/Button";
import PaginationButton from "./common/PaginationButton";

const Container = styled.div`
  display: flex;
  padding-bottom: 24px;
  border-bottom: 1px solid #d9d9d9;
  justify-content: space-between;
  align-items: center;
  margin: 0 11px;
  & > div {
    display: flex;
    &.left-panel {
      font-size: 24px;
      line-height: 48px;
    }
  }
  .sort-by {
    border-left: 1px solid #d9d9d9;
    padding-left: 24px;
    padding-right: 24px;
    margin-left: 24px;

    font-size: 24px;
    line-height: 48px;
    color: ${(props) => props.theme.secondaryColor};
  }
`;
interface IProductSettingsProps {
  showSorts?: boolean;
}
const ProductsSettings = ({ showSorts = true }: IProductSettingsProps) => {
  const changeSort = (item: string) => {
    console.log(item);
  };
  const [currentPage, setCurrentPage] = React.useState<number>(1);

  const changePage = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <Container>
      <div className="left-panel">
        <div> 16 of 32 products</div>
        {showSorts ? (
          <>
            <div className="sort-by">Sort by</div>
            <Button click={() => changeSort("most recent")}>Most Recent</Button>
            <Button click={() => changeSort("lowest price")}>
              Lowest Price
            </Button>
            <Button click={() => changeSort("highest price")}>
              Highest Price
            </Button>
          </>
        ) : null}
      </div>
      <div>
        <PaginationButton
          img={process.env.PUBLIC_URL + "/icons/arrow-left.svg"}
          click={() => changePage(currentPage + 1)}
          text="Previous page"
        />
        <PaginationButton
          img={process.env.PUBLIC_URL + "/icons/arrow-right.svg"}
          click={() => changePage(currentPage - 1)}
          text="Next Page"
        />
      </div>
    </Container>
  );
};

export default ProductsSettings;
