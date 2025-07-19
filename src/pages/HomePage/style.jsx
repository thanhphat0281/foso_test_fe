import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export const WrapperTypeProduct = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: flex-start;
`;

export const WrapperButtonMore = styled(ButtonComponent)`
  &:hover {
    background-color: rgb(26, 148, 255) !important;
    color: #fff !important;
  }
`;

export const WrapperProduct = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
  flex-wrap: wrap;
`;