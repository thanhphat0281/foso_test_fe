// Footer.jsx
import { List, Select } from "antd";
import {
  FooterWrapper,
  FooterColumn,
  FooterImage,
  FooterColumnLarge,
  CompanyName,
  InfoText,
  ListItem,
  Title,
  StyledSelect,
  OptionContent,
  FlagIcon,
  SelectWrapper,
} from "./style";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import iconCHplay from "../../assets/image/play-store-fill.png";
import iconAppleStore from "../../assets/image/apple-brand.png";
import logo_1 from "../../assets/image/bo cong thuong.png";
import iconCountry_1 from "../../assets/image/ico-country-c-vietnam.png";
const { Option } = Select;

const FooterEnd = () => {
  return (
    <FooterWrapper>
      <FooterColumnLarge>
        <CompanyName>
          VIET HUNG AUTO PRODUCTION TRADING JOINT STOCK COMPANY
        </CompanyName>
        <InfoText mt="8px">Tax code: 0305094228</InfoText>
        <InfoText>
          Address: 13 Nghia Thuc, Ward 05, District 5, Ho Chi Minh City, Viet
          Nam.
        </InfoText>
        <InfoText>Phone number: 0283 760 7607</InfoText>
        <InfoText>Opening hour: 09:00 - 22:00 from Mon - Fri</InfoText>
        <FooterImage src={logo_1} alt="certified" />
      </FooterColumnLarge>

      <FooterColumn>
        <Title>Sitemap</Title>
        <List>
          <ListItem>
            <a >About</a>
          </ListItem>
          <ListItem>
            <a>Article</a>
          </ListItem>
          <ListItem>
            <a >Cart</a>
          </ListItem>
          <ListItem>
            <a >Contact</a>
          </ListItem>
        </List>
      </FooterColumn>

      <FooterColumn>
        <Title strong>Legal</Title>
        <List>
          <ListItem>
            <a >Privacy Policy</a>
          </ListItem>
          <ListItem>
            <a >Cookie Policy</a>
          </ListItem>
          <ListItem>
            <a >Delivery Policy</a>
          </ListItem>
          <ListItem>
            <a >FAQs</a>
          </ListItem>
        </List>
      </FooterColumn>

      <FooterColumn>
        <Title>Download App</Title>
        <ButtonComponent
          size={40}
          styleButton={{
            background: "#1C252E",
            width: "250px",
            height: "64px",
            borderRadius: "4px",
            border: "none",
            margin: "26px 0 10px",
          }}
          textButton_1={"Get It On"}
          textButton_2={"Google Play Store"}
          styleTextButton_1={{
            color: "#ffffff",
            fontSize: "12px",
            margin: "0 0 10px 0",
          }}
          styleTextButton_2={{
            color: "#ffffff",
            fontSize: "15px",
            fontWeight: "700",
          }}
          iconButton={iconCHplay}
        />

        <ButtonComponent
          size={40}
          styleButton={{
            background: "#0373F3",
            width: "250px",
            height: "64px",
            borderRadius: "4px",
            border: "none",
          }}
          textButton_1={"Download from"}
          textButton_2={"Apple App Store"}
          styleTextButton_1={{
            color: "#ffffff",
            fontSize: "12px",
            margin: "0 0 10px 0",
          }}
          styleTextButton_2={{
            color: "#ffffff",
            fontSize: "15px",
            fontWeight: "700",
          }}
          iconButton={iconAppleStore}
        />

        <SelectWrapper>
          <StyledSelect defaultValue="vi" size="middle">
            <Option value="vi">
              <OptionContent>
                <FlagIcon src={iconCountry_1} preview={false} />
                <span>VI</span>
              </OptionContent>
            </Option>
            <Option value="en">
              <OptionContent>
                <FlagIcon src={iconCountry_1} preview={false} />
                <span>EN</span>
              </OptionContent>
            </Option>
          </StyledSelect>
        </SelectWrapper>
      </FooterColumn>
    </FooterWrapper>
  );
};

export default FooterEnd;
