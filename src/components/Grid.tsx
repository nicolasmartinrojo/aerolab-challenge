import { useEffect, useState } from "react";
import styled from "styled-components";
import Product from "../interfaces/Product";
import api from "../services/api";
import ProductCard from "./ProductCard";
import ProductsSettings from "./ProductSettings";

const Container = styled.div`
  background-color: #f2f2f2;
  padding: 64px 0;
`;
const ProductsContainer = styled.div`
  max-width: 1188px;
  margin: auto;
`;
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(276px, 1fr));
  margin-top: 42px;
  margin-bottom: 60px;
`;

const Grid = () => {
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState<Product | null>(null);
  useEffect(() => {
    api.getProducts().then((res) => setProducts(res));
  }, []);

  useEffect(() => {
    console.log(selected);
  }, [selected]);

  return (
    <Container>
      <ProductsContainer>
        <ProductsSettings />
        <GridContainer>
          {products.map((p: any) => (
            <ProductCard click={(p) => setSelected(p)} product={p} />
          ))}
        </GridContainer>
        <ProductsSettings showSorts={false} />
      </ProductsContainer>
    </Container>
  );
};

export default Grid;
