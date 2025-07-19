import {
  WrapperContent,
  WrapperLabelText,
  WrapperTextValue,
  WrapperTextPrice,
} from "./style";
import { Checkbox, Rate} from "antd";

const NavbarComponent = () => {
  const onChange = (checkedValues) => {};
  const renderContent = (type, options) => {
    switch (type) {
      case "text":
        return options.map((option) => {
          return <WrapperTextValue>{option}</WrapperTextValue>;
        });
      case "checkbox":
        return (
          <Checkbox.Group
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
            onChange={onChange}
          >
            {options.map((item) => (
              <Checkbox key={item.value} value={item.value}>
                {item.label}
              </Checkbox>
            ))}
          </Checkbox.Group>
        );
      case "star":
        return options.map((item) => (
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Rate style={{ fontSize: "12px" }} key={item} defaultValue={item} />
            <span key={item}>{`Từ ${item} sao `}</span>
          </div>
        ));
      case "price":
        return options.map((item) => (
          <WrapperTextPrice>{item}</WrapperTextPrice>
        ));
      default:
        return {};
    }
  };

  return (
    <div>
      <WrapperLabelText>Label</WrapperLabelText>
      <WrapperContent>
        {renderContent("text", ["TV", "Tu lanh", "Laptop"])}
      </WrapperContent>
      <WrapperContent>
        {renderContent("checkbox", [
          { value: "a", label: "A" },
          { value: "b", label: "B" },
        ])}
      </WrapperContent>
      <WrapperContent>{renderContent("star", [3, 4, 5])}</WrapperContent>
      <WrapperContent>
        {renderContent("price", ["Dưới 40", "Trên 50.000"])}
      </WrapperContent>
    </div>
  );
};

export default NavbarComponent;
