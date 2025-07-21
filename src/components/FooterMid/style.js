// style.js
import styled from "styled-components";
import { Typography, Button } from "antd";

export const BannerWrapper = styled.div`
  background-color: #eff6ff;
  // margin-top: 24px;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
`;

export const BannerContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #1c252e;
`;

export const BannerText = styled(Typography.Text)`
  font-size: 28px;
  font-weight: 600;
  color: #1c252e;
`;

export const BannerImage = styled.img`
  width: 32px;
  height: auto;
`;

export const BannerButton = styled(Button)`
  background-color: white;
  color: #1d4ed8; /* Tailwind blue-700 */
  font-weight: 600;
  border: none;
  border-radius: 999px;
  padding: 8px 16px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;

  &:hover {
    color: #1e40af;
  }
`;
