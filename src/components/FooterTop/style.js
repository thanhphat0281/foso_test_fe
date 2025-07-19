// style.js
import styled from "styled-components";
import { Typography } from "antd";

export const FeaturesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const FeatureCard = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: #ffffff;
  padding: 16px;
  border-radius: 8px;
`;

export const FeatureIcon = styled.img`
  width: 48px;
  object-fit: contain;
`;

export const FeatureTitle = styled(Typography.Text)`
  font-weight: 600;
  font-size: 16px;
`;

export const FeatureDescription = styled(Typography.Text)`
  font-size: 14px;
  color: #637381;
  display: block;
  margin-top: 4px;
`;
