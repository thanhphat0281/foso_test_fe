// ✅ External imports
import { useState } from "react";
import { Image, Typography } from "antd";
import {
  ClockCircleFilled,
  DownOutlined,
  GiftFilled,
  MenuOutlined,
  SyncOutlined,
  TruckFilled,
} from "@ant-design/icons";

// Internal component imports
import CategoryContent from "../CategoryContent/CategoryContent";

// Assets
import icon1 from "../../assets/image/category_1.png";
import icon2 from "../../assets/image/category_2.png";
import icon3 from "../../assets/image/category_3.png";
import icon4 from "../../assets/image/category_4.png";
import icon5 from "../../assets/image/category_5.png";
import icon6 from "../../assets/image/category_6.png";
import icon7 from "../../assets/image/category_7.png";
import icon8 from "../../assets/image/category_8.png";
import imgIcon from "../../assets/image/Alt Arrow Right.png";

// Styled-components
import {
  Wrapper,
  DropdownArea,
  LeftMenu,
  RightContent,
  CategoryItem,
  IconImage,
  CategoryButton,
  CategoryButtonWrapper,
  CategoryList,
  InfoList,
  InfoItem,
  TitleMenu,
} from "./style";

const { Text } = Typography;

const categories = [
  {
    label: "Bộ lọc dầu",
    icon: icon1,
    sub: [
      {
        icon_item: icon1,
        item: "Lọc Gió",
      },
      {
        icon_item: icon2,
        item: "Lọc Gió",
      },
      {
        icon_item: icon3,
        item: "Lọc Gió",
      },
      {
        icon_item: icon4,
        item: "Lọc Nhớt",
      },
      {
        icon_item: icon5,
        item: "Lọc Nhớt",
      },
      {
        icon_item: icon6,
        item: "Lọc Nhớt",
      },
    ],
  },
  {
    label: "Bộ Lọc Không Khí",
    icon: icon2,
    sub: [
      {
        icon_item: icon1,
        item: "Lọc Gió",
      },
      {
        icon_item: icon2,
        item: "Lọc Dầu",
      },
      {
        icon_item: icon3,
        item: "Lọc Gió",
      },
      {
        icon_item: icon7,
        item: "Lọc Nhớt",
      },
      {
        icon_item: icon8,
        item: "Lọc Nhớt",
      },
      {
        icon_item: icon6,
        item: "Lọc Nhớt",
      },
    ],
  },
  {
    label: "Bộ Lọc Nhiên Liệu",
    icon: icon3,
    sub: [
      {
        icon_item: icon4,
        item: "Lọc Nhớt",
      },
      {
        icon_item: icon6,
        item: "Lọc Nhớt",
      },
      {
        icon_item: icon1,
        item: "Lọc Nhớt",
      },
    ],
  },
  {
    label: "Bộ Lọc Trong Cabin",
    icon: icon4,
    sub: [
      {
        icon_item: icon2,
        item: "Lọc Nhớt",
      },
      {
        icon_item: icon3,
        item: "Lọc Nhớt",
      },
      {
        icon_item: icon4,
        item: "Lọc Nhớt",
      },
    ],
  },
  {
    label: "Bộ Lọc Không Khí",
    icon: icon5,
    sub: [
      {
        icon_item: icon2,
        item: "Lọc Nhớt",
      },
      {
        icon_item: icon3,
        item: "Lọc Nhớt",
      },
      {
        icon_item: icon4,
        item: "Lọc Nhớt",
      },
    ],
  },
  {
    label: "Bộ Lọc Trong Cabin",
    icon: icon6,
    sub: [
      {
        icon_item: icon2,
        item: "Lọc Nhớt",
      },
      {
        icon_item: icon3,
        item: "Lọc Nhớt",
      },
      {
        icon_item: icon4,
        item: "Lọc Nhớt",
      },
    ],
  },
  {
    label: "Bộ Lọc Nhiên Liệu",
    icon: icon7,
    sub: [
      {
        icon_item: icon2,
        item: "Lọc Nhớt",
      },
      {
        icon_item: icon3,
        item: "Lọc Nhớt",
      },
      {
        icon_item: icon4,
        item: "Lọc Nhớt",
      },
    ],
  },
  {
    label: "Bộ Lọc Không Khí",
    icon: icon8,
    sub: [
      {
        icon_item: icon2,
        item: "Lọc Nhớt",
      },
      {
        icon_item: icon3,
        item: "Lọc Nhớt",
      },
      {
        icon_item: icon4,
        item: "Lọc Nhớt",
      },
    ],
  },
];

const features = [
  { icon: <ClockCircleFilled />, label: "Hỗ trợ 24/7" },
  { icon:<GiftFilled />, label: "Miễn Phí Vận Chuyển" },
  { icon: <TruckFilled />, label: "Giao Hàng Nhanh 2h" },
  { icon: <SyncOutlined />, label: "30 Ngày Đổi Trả" },
];

const CategoryMenu = () => {
  const [visible, setVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Wrapper>
      <CategoryButtonWrapper
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => {
          setVisible(false);
          setHoveredIndex(null);
        }}
      >
        <CategoryButton>
          <MenuOutlined />
          <TitleMenu >Danh Mục Sản Phẩm</TitleMenu>
          <DownOutlined style={{marginLeft:'13px'}} />
        </CategoryButton>

        {visible && (
          <DropdownArea>
            <LeftMenu>
              {categories.map((cat, index) => (
                <CategoryItem
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  className={hoveredIndex === index ? "active" : ""}
                >
                  <IconImage src={cat.icon} alt={cat.label} preview={false}/>
                  <span style={{ width: "150px" }}>{cat.label}</span>
                  <Image src={imgIcon} preview={false}></Image>
                </CategoryItem>
              ))}
            </LeftMenu>
            <RightContent>
              {hoveredIndex !== null && (
                <CategoryContent data={categories[hoveredIndex]} />
              )}
            </RightContent>
          </DropdownArea>
        )}
      </CategoryButtonWrapper>

      <CategoryList>
        <Text className="menu-item">Về Chúng Tôi</Text>
        <Text className="menu-item">Bài Viết</Text>
        <Text className="menu-item">Catalog</Text>
        <Text className="menu-item">Liên Hệ</Text>
      </CategoryList>

      <InfoList>
        {features.map((f, i) => (
          <InfoItem key={i}>
            {f.icon}
            <span style={{paddingTop:'2px'}}>{f.label}</span>
          </InfoItem>
        ))}
      </InfoList>
    </Wrapper>
  );
};

export default CategoryMenu;
