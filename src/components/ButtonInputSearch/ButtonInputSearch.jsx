import { Button } from "antd";
import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ButtonInputSearch = (props) => {
  const {
    size,
    placeholder,
    textButton,
    bordered,
    backgroundColorInput = "#fff",
    backgroundColorButton = "rgb(13, 92, 182)",
    colorButton = "#fff",
  } = props; // dùng để truyền vào nhiều nơi khác khi cần sử dụng lại
  return (
    <div style={{ display: "flex" }}>
      <InputComponent
        size={size}
        placeholder={placeholder}
        bordered={bordered}
        style={{ background: backgroundColorInput }}
      />
      <ButtonComponent
        size={size}
        styleButton={{
          background: backgroundColorButton,
          border: !bordered && "none",
        }}
        icon={<SearchOutlined style={{ color: colorButton }} />}
        textButton={textButton}
        styleTextButton={{ color: colorButton }}
      />
    </div>
  );
};
export default ButtonInputSearch;
