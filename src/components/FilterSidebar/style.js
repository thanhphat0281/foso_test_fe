import { Button, Image } from "antd";
import styled from "styled-components";

export const SidebarWrapper = styled.div`
  width: 315px;
  background-color: #ffffff;
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
`;

export const SectionWrapper = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 3px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  margin-bottom: 16px;
`;

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  color: #1c252e;
  margin-bottom: 16px;
`;

export const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ItemButton = styled(Button)`
  background: #ffffff;
  border: 1px solid #e5e7eb;
  color: #1c252e;
  font-weight: 500;
  padding: 17px 12px;
  border-radius: 6px;
  text-align: left;
  width: 100%;

  &:hover {
    background-color: #e5e7eb;
    color: #1f2937;
  }
`;

export const IconFilterSidebar = styled(Image)`
  width: 32px !important;
  height: 32px !important;
  margin-right: 16px;
  margin-top: 16px;
`;

export const SidebarTitle = styled.div`
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  padding: 24px 16px;
`;
