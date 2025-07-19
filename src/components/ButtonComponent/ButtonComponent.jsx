import { Button, Image } from "antd";

const ButtonComponent = ({
  size,
  styleButton,
  bordered,
  styleTextButton_1,
  styleTextButton_2,
  textButton_1,
  textButton_2,
  iconButton,
  disabled,
  ...rests
}) => {
  return (
    <Button
      size={size}
      bordered={bordered}
      style={{
        ...styleButton,
        background: disabled ? "#ccc" : styleButton.background,
      }}
      {...rests}
      //   icon={<SearchOutlined/>}
    >
      {/* <div>
        <Image
          style={{ marginRight: "10px", textAlign:"center" }}
          preview={false}
          src={iconButton}
        ></Image>
      </div>
      <div style={{ textAlign: "center" }}>
        <div style={styleTextButton_1}>{textButton_1}</div>
        <div style={styleTextButton_2}>{textButton_2}</div>
      </div> */}

      <div style={{ marginRight: "20px", display: "flex", alignItems: "center" }}>
        <Image preview={false} src={iconButton} width={28} />
      </div>

      {/* 2 dòng text bên phải */}
      <div style={{ display: "flex", flexDirection: "column", textAlign: "left", lineHeight: "1.2" }}>
        <span style={{ fontSize: "12px", ...styleTextButton_1 }}>{textButton_1}</span>
        <span style={{ fontSize: "16px", fontWeight: "bold", ...styleTextButton_2 }}>{textButton_2}</span>
      </div>
    </Button>
  );
};

export default ButtonComponent;
