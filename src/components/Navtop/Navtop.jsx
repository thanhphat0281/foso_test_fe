import React from "react";
import styled from "styled-components";
import { Typography, Image } from "antd";

import saleIcon from "../../assets/image/Sale.png";
import phoneIcon from "../../assets/image/Phone Rounded.png";
import appIcon from "../../assets/image/Smartphone.png";
import { FlexCenter, Frame, InfoBlock, NavTopWrapper } from "./style";
import Icon from "@ant-design/icons";

const { Text } = Typography;

// Wrapper with background gradient

const NavTop = () => {
  return (
    <NavTopWrapper>
      <div className="nav_top">
        <Frame>
          <FlexCenter>
            <Icon src={saleIcon} alt="Sale icon" />
            <Text style={{ color: "#f3f2f2" }}>Nhập mã </Text>
            <Text strong style={{ color: "#facc15", padding: "0 4px" }}>
              NEWBIE
            </Text>
            <Text style={{ color: "#f3f2f2" }}>
              giảm ngay 10% cho lần đầu mua hàng
            </Text>
          </FlexCenter>

          <div style={{ display: "flex", width: 350 }}>
            <InfoBlock width="250px">
              <Icon src={phoneIcon} alt="Phone icon" />
              <Text style={{ color: "#f3f2f2" }}>Hoteline:</Text>
              <Text strong style={{ color: "#facc15", padding: "0 4px" }}>
                0283 760 7607
              </Text>
            </InfoBlock>

            <InfoBlock width="150px">
              <Icon src={appIcon} alt="App icon" />
              <Text style={{ color: "#f3f2f2" }}>Tải ứng dụng</Text>
            </InfoBlock>
          </div>
        </Frame>
      </div>
    </NavTopWrapper>
  );
};

export default NavTop;
