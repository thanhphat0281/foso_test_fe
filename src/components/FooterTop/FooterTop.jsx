// ServiceFeatures.jsx

import {
  FeaturesWrapper,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription,
} from "./style";
import imgFooter1 from '../../assets/image/money标签.png';
import imgFooter2 from '../../assets/image/support客服管理.png';
import imgFooter3 from '../../assets/image/delivery物流.png';
import imgFooter4 from '../../assets/image/package收藏.png';

const features = [
  {
    icon: imgFooter1,
    title: "Miễn phí vận chuyển",
    description: "Với hóa đơn từ 1 triệu",
    alt: "shipping",
  },
  {
    icon: imgFooter2,
    title: "Hỗ trợ 24/7",
    description:
      "Đội ngũ CSKH tận tình sẵn sàng lắng nghe và phục vụ tận tâm",
    alt: "support",
  },
  {
    icon: imgFooter3,
    title: "Giao hàng nhanh 2h",
    description: "Trong vòng bán kính 10km nội thành TP.HCM",
    alt: "delivery",
  },
  {
    icon: imgFooter4,
    title: "30 ngày đổi trả",
    description:
      "Hoàn tiền nếu phát sinh lỗi từ NSX hoặc đơn vị vận chuyển",
    alt: "return",
  },
];

const FooterTop = () => {
  return (
    <FeaturesWrapper>
      {features.map((feature, idx) => (
        <FeatureCard key={idx}>
          <FeatureIcon src={feature.icon} alt={feature.alt} />
          <div>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </div>
        </FeatureCard>
      ))}
    </FeaturesWrapper>
  );
};

export default FooterTop;
