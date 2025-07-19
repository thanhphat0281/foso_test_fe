import {
  NavMidWrapper,
  Header,
  Logo,
  SearchWrapper,
  SearchContainer,
  InputStyled,
  IconBtn,
  CartContainer,
  Badge,
  IconImage,
  Language,
  Account,
} from "./style";

import logo from "../../assets/image/logo_sunfil1.png";
import iconCamera from "../../assets/image/Camera.png";
import iconSearch from "../../assets/image/Magnifer.png";
import iconVN from "../../assets/image/ico-country-c-vietnam.png";
import iconCart from "../../assets/image/Cart.png";
import iconUser from "../../assets/image/User Circle.png";

const NavMid = () => {
  return (
    <NavMidWrapper>
      <Header>
        {/* Logo */}
        <Logo>
          <img src={logo} alt="Logo" />
        </Logo>

        {/* Search bar */}
        <SearchWrapper>
          <SearchContainer>
            <InputStyled placeholder="Tìm sản phẩm" />
            <IconBtn>
              <img src={iconCamera} alt="camera" className="icon" />
            </IconBtn>
            <IconBtn className="search">
              <img src={iconSearch} alt="search" className="icon" />
            </IconBtn>
          </SearchContainer>
        </SearchWrapper>

        {/* Icons */}
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <Language>
            <IconImage src={iconVN} alt="VN" />
            VI
          </Language>

          <CartContainer>
            <img src={iconCart} alt="cart" className="icon" />
            <Badge>12</Badge>

            <span className="label">Giỏ hàng</span>
          </CartContainer>

          <Account>
            <img src={iconUser} alt="account" className="icon" />
            <span className="label">Tài khoản</span>
          </Account>
        </div>
      </Header>
    </NavMidWrapper>
  );
};

export default NavMid;
