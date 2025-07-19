// ProductCardStyle.js
import styled from "styled-components";
import { Typography } from "antd";
const {Text } = Typography;

export const CardWrapper = styled.div`
  background: white;
  border-radius: 12px;
  padding: 14px;
  margin:10px;
  // width: 252px;
  // height: 495px;
  flex-shrink: 0;
`;

export const ProductImage = styled.img`
  width: 225px;
  height: 225px;
  object-fit: contain;
  margin: 0 auto 8px;
  display: block;
`;

export const DiscountTag = styled.div`
  display: flex;
  align-items: center;
  background-color: #facc15; /* yellow-400 */
  width: 124px;
  padding: 4px 8px;
  border-radius: 9999px;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 600;

  img {
    width: 16px;
    height: 16px;
    margin-right: 4px;
  }

  span {
    color: #7A0916;
  }
`;

export const PriceText = styled.p`
  color: #dc2626; /* red-600 */
  font-weight: bold;
  margin-top: 8px;
`;

export const OldPrice = styled.p`
  color: #9ca3af; /* gray-400 */
  font-size: 14px;
  text-decoration: line-through;

  .discount {
    color: #B71D18;
    margin-left: 4px;
  }
`;

export const BuyButton = styled.button`
  margin-top: 8px;
  width: 100%;
  background-color: #E6F1FF;
  color: #025FCA;
  font-weight: 600;
  padding: 10px 0;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;

export const ProductOldPrice = styled(Text)`
  margin: 8px;
  color: #919eab;
  font-size: 14px;
`;