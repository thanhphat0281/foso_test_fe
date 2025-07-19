import styled from "styled-components";

export const NavTopWrapper = styled.div`
  padding-left: 240px;
  padding-right: 240px;
  background: linear-gradient(to right, #0D57C6, #37CFFF, #0D57C6);
`;

export const Frame = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 4px;
  font-family: 'Inter', sans-serif;
`;

export const InfoBlock = styled.div`
  display: flex;
  align-items: center;
  width: ${(props) => props.width || "auto"};
`;

export const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;