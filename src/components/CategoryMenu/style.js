import {Image, Row } from "antd";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  display: flex;
  align-items: center;
  padding: 12px 240px;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;

export const DropdownArea = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  display: flex;
  // width: 1370px;
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

export const LeftMenu = styled.div`
  width: 263px;
  height: 714px;
  border-right: 1px solid #eee;
  background-color: #ffffff;
`;

export const RightContent = styled.div`
  flex: 1;
  padding: 8px;
  width: 1112px;
  background-color: #F4F6F8;
`;

export const CategoryItem = styled(Row)`
  padding: 12px 16px;
  height: 72px;
  margin: 4px 0px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  &.active,
  &:hover {
    background-color: #e6f4ff;
  }
`;

export const IconImage = styled(Image)`
  width: 40px;
  height: 40px;
`;

export const CategoryButton = styled.div`
  background-color: #0d57c6;
  color: #FFFFFF;
  padding: 16px 20px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 500;
  width: 220px;
  position: relative;
`;

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 240px;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;

export const CategoryButtonWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const CategoryList = styled.div`
  display: flex;
  gap: 24px;
  margin-left: 32px;

  .menu-item {
    cursor: pointer;
    font-weight: 500;
    color: #111;
    &:hover {
      color: #0d57c6;
    }
  }
`;

export const InfoList = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  margin-left: auto;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #111;

  svg {
    color: #0d57c6;
    font-size: 18px;
  }
`;
export const TitleMenu = styled.span`
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 600;
`
