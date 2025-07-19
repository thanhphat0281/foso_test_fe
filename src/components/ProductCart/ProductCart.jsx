// ProductCard.jsx
import { Button, Typography } from "antd";
import {
  CardWrapper,
  ProductImage,
  DiscountTag,
  PriceText,
  OldPrice,
  BuyButton,
  ProductOldPrice,
} from "./style";
import iconLeft from "../../assets/image/Left.png";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { ProductDiscount } from "../CategoryContent/style";

const { Paragraph, Text } = Typography;

const ProductCard = ({ product, className }) => {
  return (
    <CardWrapper className={className}>
      <ProductImage src={product.image} alt="Product" />
      <DiscountTag>
        <img src={iconLeft} alt="icon" />
        <span>Giá cực sốc</span>
      </DiscountTag>

      <Paragraph ellipsis={{ rows: 2 }}>
        <Text strong>{product.name}</Text>
      </Paragraph>

      <PriceText>{product.price.toLocaleString()} đ</PriceText>

      <ProductOldPrice delete>
        {product.oldPrice.toLocaleString()} đ
      </ProductOldPrice>
  
      <ProductDiscount>-{product.discount}%</ProductDiscount>

      <BuyButton>Mua ngay</BuyButton>
    </CardWrapper>
  );
};

export default ProductCard;
