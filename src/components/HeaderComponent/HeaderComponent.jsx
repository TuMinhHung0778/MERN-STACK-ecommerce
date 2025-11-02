import { Col } from "antd";
import React from "react";
import {
  WrapperHeader,
  WrapperHeaderAccout,
  WrapperTextHeader,
  WrapperTextHeaderSmall,
} from "./style";
import {
  CaretDownOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";

const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader>
        {/* title of web */}
        <Col span={6}>
          <WrapperTextHeader>HUNGIT-9135</WrapperTextHeader>
        </Col>
        {/* phần input thanh tìm kiếm */}
        <Col span={12}>
          <ButtonInputSearch
            size="large"
            bordered={false}
            textButton="Tìm kiếm"
            placeholder="input search text"
            // onSearch={onSearch}
          />
        </Col>
        {/* phần đăng ký/đăng nhập,tài khoản */}
        <Col
          span={6}
          style={{ display: "flex", gap: "20px", alignItems: "center" }}
        >
          <WrapperHeaderAccout>
            <UserOutlined style={{ fontSize: "30px" }} />
            <div>
              <WrapperTextHeaderSmall style={{ fontSize: "12px" }}>
                Đăng nhập/Đăng ký
              </WrapperTextHeaderSmall>
              <div>
                <WrapperTextHeaderSmall style={{ fontSize: "12px" }}>
                  Tài khoản
                </WrapperTextHeaderSmall>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperHeaderAccout>
          {/* Giỏ hàng */}
          <div>
            <ShoppingCartOutlined style={{ fontSize: "30px", color: "#fff" }} />
            <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
};
export default HeaderComponent;
