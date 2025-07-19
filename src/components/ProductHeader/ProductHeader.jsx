// ProductHeader.jsx
import { Typography, Button, Select } from "antd";
import { HeaderWrapper, ButtonGroup, CustomButton, ActiveButton } from "./style";

const { Title } = Typography;
const { Option } = Select;

const ProductHeader = () => {
  return (
    <HeaderWrapper>
      <Title level={5}>Danh sách sản phẩm</Title>

      <ButtonGroup>
        <label>Sắp xếp theo:</label>

        <ActiveButton>
          Liên quan
          <span className="corner" />
          <span className="check">✓</span>
        </ActiveButton>

        <CustomButton>Bán chạy</CustomButton>
        <CustomButton>Mới nhất</CustomButton>
        <CustomButton>Nổi bật</CustomButton>

        <Select defaultValue="asc" size="middle">
          <Option value="asc">Giá: Thấp → Cao</Option>
          <Option value="desc">Giá: Cao → Thấp</Option>
        </Select>
      </ButtonGroup>
    </HeaderWrapper>
  );
};

export default ProductHeader;
