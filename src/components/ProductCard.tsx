import React from "react";
import styled from "styled-components";
import Product from "../interfaces/Product";
import Coins from "./Coins";
import classnames from "classnames";

const ProductCardContainer = styled.div`
  background-color: white;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  margin: 11px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  position: relative;
  &.canBeRedeemed:hover {
    .product-hover {
      opacity: 1;
    }
    transition: 1s ease all;
    transform: translateY(-5px);
  }
`;

const ProductImage = styled.img`
  margin: 29px auto 9px;
`;

const LegendContainer = styled.div`
  text-align: left;
  border-top: 1px solid #d9d9d9;
  padding-top: 20px;
  margin: 0 12px 6px;

  .category {
    color: ${(props) => props.theme.secondaryColor};
    font-size: 16px;
    line-height: 20px;
  }

  .title {
    font-size: 18px;
    line-height: 23px;
  }
`;

const RedeemIcon = styled.div`
  position: absolute;
  width: 42px;
  height: 42px;
  right: 12px;
  top: 12px;
`;

const ProductHover = styled.div`
  position: absolute;
  opacity: 0;
  transition: 0.5s ease all;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: linear-gradient(
    180deg,
    rgba(10, 212, 250, 0.86) 0%,
    rgba(37, 187, 241, 0.86) 100%
  );
  z-index: 1;
  filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.1));

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;

  .cost {
    font-size: 36px;
    line-height: 45px;
    text-align: center;
    display: flex;
    justify-content: center;
    img {
      margin-top: 5px;
      margin-left: 6px;
    }
  }

  button {
    margin-top: 12px;
    font-size: 18px;
    line-height: 23px;
  }
`;

const RedeemButton = styled.button`
  border: 0;
  height: 42px;
  width: 200px;

  background-color: white;
  border-radius: ${(props) => props.theme.borderRadius};
  outline: 0;
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
`;
interface ProductCardProps {
  click: (arg0: Product) => void;
  product: Product;
}
const ProductCard = ({ click, product }: ProductCardProps) => {
  const redeemProduct = () => {
    click(product);
  };

  const canBeRedeemed = product.cost > 1000;
  return (
    <ProductCardContainer className={classnames({ canBeRedeemed })}>
      <ProductHover className="product-hover">
        <RedeemIcon>
          <img
            src={process.env.PUBLIC_URL + "/icons/buy-white.svg"}
            alt="logo"
          />
        </RedeemIcon>

        <div className="cost">
          {product.cost}
          <img src={process.env.PUBLIC_URL + "/icons/coin.svg"} alt="coins" />
        </div>
        <RedeemButton onClick={() => redeemProduct()}>Redeem Now</RedeemButton>
      </ProductHover>
      {canBeRedeemed ? (
        <RedeemIcon>
          <img
            src={process.env.PUBLIC_URL + "/icons/buy-blue.svg"}
            alt="logo"
          />
        </RedeemIcon>
      ) : (
        <Coins dark>{`You need ${product.cost}`}</Coins>
      )}
      <ProductImage src={product.img.url} alt={product._id} />

      <LegendContainer>
        <div className="category">{product.category}</div>
        <div className="title">{product.name}</div>
      </LegendContainer>
    </ProductCardContainer>
  );
};

export default ProductCard;
