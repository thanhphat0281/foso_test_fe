// style.js
import styled from "styled-components";
import { Button } from "antd";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 12px;

  label {
    font-size: 14px;
  }

  select {
    border-radius: 8px;
    padding: 8px;
  }
`;

export const CustomButton = styled(Button)`
  background: #ffffff;
  border: none;
  padding: 6px 16px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
`;

export const ActiveButton = styled(CustomButton)`
  border: 1px solid #0373f3;
  color: #0373f3;
  background-color: white;
  position: relative;
  overflow: hidden;

  .corner {
    position: absolute;
    top: -4px;
    right: -12px;
    width: 32px;
    height: 20px;
    background: #0373f3;
    transform: rotate(45deg);
    border-radius: 4px;
  }

  .check {
    position: absolute;
    top: 0px;
    right: 4px;
    color: white;
    font-size: 10px;
    font-weight: bold;
  }
`;
