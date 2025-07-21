import styled from "styled-components";
import { Image, Typography } from "antd";
const { Text } = Typography;
export const SubIcon = styled.img`
  width: 70px;
  height: 70px;
`;

export const ImageProduct = styled.img`
  width: 90px;
  height: 90px;
`;

export const WrapperText = styled.div`
  width: 100%;
  display: flex;
  margin: 20px 8px;
  justify-content: space-between;
  h3 {
    font-size: 32px;
    margin: 0;
  }
`;

export const WrapperTextAll = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  p {
    color: #0373f3;
    font-size: 16px;
  }
  margin-right: 10px;
`;

export const SubCategoryItem = styled.div`
  background: #ffffff;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #e6f4ff;
  }
`;

export const ProductCard = styled.div`
  background: #fff;
  border-radius: 12px;
  width: 187px;
  margin-right: 14px;
  height: 345px;
  padding: 6px;
  &:hover {
    background-color: #e6f4ff;
  }
`;

export const ProductInfo = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin: 8px;
  //   line-height: 1.4;
  overflow: hidden;
  display: -webkit-box;
  //   -webkit-line-clamp: 2;
  //   -webkit-box-orient: vertical;
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-top: 4px;
`;

export const ImageIcon = styled(Image)`
  padding-top: 22px;
`;

export const ProductPrice = styled(Text)`
  margin: 8px;
  color: #b71d18;
  font-weight: 600;
  font-size: 20px;
`;

export const ProductOldPrice = styled(Text)`
  margin: 8px;
  color: #919eab;
  font-size: 14px;
`;

export const ProductDiscount = styled(Text)`
  color: #b71d18;
  font-size: 12px;
  margin-left: 4px;
  font-weight: 600;
`;
