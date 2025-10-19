import { Col } from "antd";
import React from "react";
import {
  WrapperHeader,
  WrapperHeaderAccout,
  WrapperTextHeader,
  WrapperTextHeaderSmall,
} from "./style";
import Search from "antd/es/transfer/search";
import {
  CaretDownOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";

const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader gutter={16}>
        {/* tên của web */}
        <Col span={6}>
          <WrapperTextHeader>HUNGIT-9135</WrapperTextHeader>
        </Col>
        {/* phần input thanh tìm kiếm */}
        <Col span={12}>
          <Search
            placeholder="input search text"
            enterButton
            // onSearch={onSearch}
          />
        </Col>
        {/* phần đăng ký/đăng nhập,tài khoản */}
        <Col span={6} style={{ display: "flex", gap: "20px" }}>
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
