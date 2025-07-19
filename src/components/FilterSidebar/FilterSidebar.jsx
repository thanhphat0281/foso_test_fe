// components/FilterSidebar.jsx
import { useState } from 'react';

import { Checkbox} from 'antd';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { CheckboxLabel, SectionHeader, SidebarWrapper } from './style';
import imgIcon from "../../assets/image/end icon.png"


const Section = ({ title, items }) => {
  const [open, setOpen] = useState(true);

  return (
    <div style={{ padding: '16px 24px' }}>
      <SectionHeader onClick={() => setOpen(!open)}>
        <span>{title}</span>
        {open && <UpOutlined />}
        {!open && <DownOutlined/>}
      </SectionHeader>
      {open && (
        <div style={{ marginTop: 12 }}>
          {items.map((item, idx) => (
            <div key={idx} style={{ margin: '8px 0', display: 'flex', alignItems: 'center' }}>
              <Checkbox style={{marginRight:'8px'}} />
              <CheckboxLabel>{item} <span style={{ color: '#888' }}>(24)</span></CheckboxLabel>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const FilterSidebar = () => {
  const categories = [
    'Lọc gió động cơ',
    'Dầu nhớt',
    'Phanh xe',
    'Gạt mưa'
  ];
  const brands = ['Honda', 'Toyota', 'Yamaha'];
  const years = ['2020', '2021', '2022'];
  const origins = ['Việt Nam', 'Nhật Bản', 'Thái Lan'];

  return (
    <SidebarWrapper>
      <div style={{ borderBottom: '1px solid #e5e7eb', display: 'flex', padding: '24px 16px' }}>
        <img src={imgIcon} alt="icon" style={{ width: 32, height: 32, marginRight: 16, marginTop:16 }} />
        <h2 style={{ color: '#0373F3', fontSize: 20, fontWeight: 700 }}>Bộ Lọc</h2>
      </div>

      <Section title="Danh mục sản phẩm" items={categories} />

      <Section
        title="Khoảng giá"
        items={[
          'Dưới 100,000 đ',
          '100,000 đ – 300,000 đ',
          '300,000 đ – 500,000 đ',
          'Trên 500,000 đ',
        ]}
      />

      <Section title="Thương hiệu" items={brands} />
      <Section title="Năm sản xuất" items={years} />
      <Section title="Xuất xứ" items={origins} />
    </SidebarWrapper>
  );
};

export default FilterSidebar;
