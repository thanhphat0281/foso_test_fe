// ProductCardStyle.js
import styled from "styled-components";
import { Typography } from "antd";
const { Text } = Typography;

export const CardWrapper = styled.div`
  background: white;
  border-radius: 12px;
  padding: 13px;
  margin: 8px;
  // width: 252px;
  // height: 495px;
  flex-shrink: 0;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 12px #0375F329;
  }
`;

export const ProductImage = styled.img`
  width: 225px;
  height: 245px;
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
    color: #7a0916;
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
    color: #b71d18;
    margin-left: 4px;
  }
`;

export const BuyButton = styled.button`
  margin-top: 8px;
  width: 100%;
  background-color: #e6f1ff;
  color: #025fca;
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
    margin: 0px !important;
`;
