import { Button } from "antd";
import styled from "styled-components";
import ProductCard from "../ProductCart/ProductCart";

export const ArrowButton = styled(Button)`
  position: absolute;
  top: 50%;
  z-index: 2;
  transform: translateY(-50%);
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  border: none;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PrevArrow = styled(ArrowButton)`
  left: -20px;
`;

export const NextArrow = styled(ArrowButton)`
  right: -20px;
`;

export const CustomProductCard = styled(ProductCard)`
  width: 230px;
  height: 445px;
  margin: 0;
`;
