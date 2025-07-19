// NavEnd.jsx
import { BreadcrumbLink, BreadcrumbText, NavWrapper } from "./style";
import { Typography } from "antd";

const NavEnd = () => {
  return (
    <NavWrapper>
      <BreadcrumbLink href="#">Trang chủ</BreadcrumbLink>
      <BreadcrumbText>›</BreadcrumbText>
      <BreadcrumbLink href="#" className="active">
        Sản phẩm
      </BreadcrumbLink>
    </NavWrapper>
  );
};

export default NavEnd;
