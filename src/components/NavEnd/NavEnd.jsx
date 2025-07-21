// NavEnd.jsx
import { BreadcrumbLink, BreadcrumbText, NavWrapper } from "./style";

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
