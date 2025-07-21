import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import imgBackground from "../../assets/image/57eeb82522ca9397b4ceb087337a194794c008a6.jpg"

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

export const BackgroundWrapper = styled.div`
  position: relative;
  // width: 100%;
  // height: 300px;
  overflow: hidden;
    padding: 0 240px;
`;

// Background image riêng, có opacity
export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-image: url(${imgBackground});
  background-size: cover;
  background-position: center;
  opacity: 0.3;
  z-index: 1;
`;

// Nội dung nổi trên ảnh
export const Content = styled.div`
  position: relative;
  z-index: 2;
  padding: 20px;
  color: #000;
`;