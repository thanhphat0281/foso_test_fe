import {
  BannerWrapper,
  BannerText,
  BannerContent,
  BannerButton,
  BannerImage,
} from "./style";
import imgMap from "../../assets/image/Map.png";

const FooterMid = () => {
  return (
    <BannerWrapper>
      <BannerContent>
        <BannerImage src={imgMap} alt="map" />
        <BannerText>Xem hệ thống 88 cửa hàng trên toàn quốc</BannerText>
      </BannerContent>

      <BannerButton type="default">
        Xem ngay <span style={{ marginLeft: 8 }}>→</span>
      </BannerButton>
    </BannerWrapper>
  );
};

export default FooterMid;
