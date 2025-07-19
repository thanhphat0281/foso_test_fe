import { Product } from "../../services/ProductService";
import { Row, Col, Image, Typography } from "antd";
import {
  ImageIcon,
  PriceWrapper,
  ProductCard,
  ProductDiscount,
  ProductInfo,
  ProductOldPrice,
  ProductPrice,
  SubCategoryItem,
  SubIcon,
  WrapperText,
  WrapperTextAll,
} from "./style";

import { ArrowRightOutlined } from "@ant-design/icons";
import arowRight from "../../assets/image/Vector (Stroke).svg"
const {  Text } = Typography;

{
  Product.map((item, index) => {
    return <div key={item.id}>{item.name}</div>;
  });
}
const CategoryContent = ({ data }) => {
  if (!data) return null;

  return (
    // <CartContainer>
    <div style={{backgroundColor:' #F4F6F8;'}}>
      <div style={{margin:'20px'}}>
        <Row gutter={[16, 16]}>
          {data.sub.map((item, index) => (
            <Col span={8} key={index}>
              <SubCategoryItem>
                <SubIcon src={item.icon_item} alt={item.item} />
                <Typography.Text>{item.item}</Typography.Text>
              </SubCategoryItem>
            </Col>
          ))}
        </Row>
      </div>
      <div style={{margin:'20px'}}>
        <Row>
          <WrapperText>
            <h3>Sản Phẩm Bán Chạy</h3>

            <WrapperTextAll>
                <p style={{paddingRight:'10px'}}>Xem tất cả</p>
                <ImageIcon src={arowRight} preview={false}></ImageIcon>
            </WrapperTextAll>
          </WrapperText>
        </Row>
        <Row>
          {Product.slice(0, 5).map((product, idx) => (
            <Col key={idx}>
              <ProductCard>
                <Image
                  src={product.image}
                  alt="Product"
                  width={184}
                  height={184}
                  preview={false}
                  style={{textAlign:'center'}}
                />
                <ProductInfo>{product.name}</ProductInfo>
                {/* <Text style={{margin:'8px', color:'red', fontWeight: 600}} >
                  {product.price.toLocaleString()} đ
                </Text> */}
                <ProductPrice>{product.price.toLocaleString()} đ</ProductPrice>
                <PriceWrapper>
                  {/* <Text style={{margin:'8px'}} delete>{product.oldPrice.toLocaleString()} đ</Text> */}
                  <ProductOldPrice delete>
                    {product.oldPrice.toLocaleString()} đ
                  </ProductOldPrice>

                  <ProductDiscount>
                    -{product.discount}%
                  </ProductDiscount>
                  {/* <Text type="danger" style={{ marginLeft: 4, fontSize:'12px', fontWeight: 600 }}>
                    -{product.discount}%
                  </Text> */}
                </PriceWrapper>
              </ProductCard>
            </Col>
          ))}
        </Row>
      </div>
    </div>
    // </CartContainer>
  );
};

export default CategoryContent;
