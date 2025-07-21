// components/FilterSidebar.jsx
import { useState } from "react";

import { Checkbox } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import {
  CheckboxLabel,
  IconFilterSidebar,
  ItemButton,
  ItemsWrapper,
  SectionHeader,
  SectionWrapper,
  SidebarTitle,
  SidebarWrapper,
  TitleRow,
} from "./style";
import imgIcon from "../../assets/image/end icon.png";

const Section = ({ title, items }) => {
  const [open, setOpen] = useState(true);

  return (
    <div style={{ padding: "16px 24px" }}>
      <SectionHeader onClick={() => setOpen(!open)}>
        <span>{title}</span>
        {open && <UpOutlined />}
        {!open && <DownOutlined />}
      </SectionHeader>
      {open && (
        <div style={{ marginTop: 12 }}>
          {items.map((item, idx) => (
            <div
              key={idx}
              style={{ margin: "8px 0", display: "flex", alignItems: "center" }}
            >
              <Checkbox style={{ marginRight: "8px" }} />
              <CheckboxLabel>
                {item} <span style={{ color: "#888" }}>(24)</span>
              </CheckboxLabel>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
const Section_Rate = ({ title, items }) => {
  const [open, setOpen] = useState(true);

  return (
    <SectionWrapper>
      <TitleRow onClick={() => setOpen(!open)}>
        <span>{title}</span>
        {open ? <UpOutlined /> : <DownOutlined />}
      </TitleRow>

      {open && (
        <ItemsWrapper>
          {items.map((item, index) => (
            <ItemButton key={index}>{item}</ItemButton>
          ))}
        </ItemsWrapper>
      )}
    </SectionWrapper>
  );
};

const FilterSidebar = () => {
  const categories = [
    "Lọc gió Động cơ - Air Filter",
    "Lọc Nhiên Liệu - Fuel Filter",
    "Bộ lọc dầu",
    "Chưa phân loại",
    "Khác",
  ];
  const brands = ["Asakashi", "Bosch", "Huyndai"];
  const years = ["2021", "2020", "2019", "2018"];
  const origins = ["Đức", "Nhật Bản", "Trung Quốc"];
  const rangeRate = [
    "Dưới 100,000 đ",
    "100,000 đ – 300,000 đ",
    "300,000 đ – 500,000 đ",
    "Trên 500,000 đ",
  ];
  return (
    <SidebarWrapper>
      <SidebarTitle>
        <IconFilterSidebar preview={false} src={imgIcon} alt="icon" />
        <h2 style={{ color: "#0373F3", fontSize: 20, fontWeight: 700 }}>
          Bộ Lọc
        </h2>
      </SidebarTitle>
      <Section title="Danh mục sản phẩm" items={categories} />
      <Section_Rate title="Khoảng giá" items={rangeRate} />
      <Section title="Thương hiệu" items={brands} />
      <Section title="Năm sản xuất" items={years} />
      <Section title="Xuất xứ" items={origins} />
    </SidebarWrapper>
  );
};

export default FilterSidebar;
