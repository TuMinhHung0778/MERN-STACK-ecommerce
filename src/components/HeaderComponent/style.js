import { Row } from "antd";
import styled from "styled-components";

// Row là component từ thư viện Ant Design, dùng để tạo layout dạng hàng(grid)
// - WrapperHeader là một phiên bản của Row, nhưng được thêm style:
// - padding: 10px 120px: tạo khoảng cách bên trong.
// - background-color: rgb(26, 148, 255): màu nền xanh dương.

export const WrapperHeader = styled(Row)`
  padding: 10px 120px;
  background-color: rgb(26, 148, 255);
  align-items: center;
`;

export const WrapperTextHeader = styled.span`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  text-align: left;
`;

export const WrapperHeaderAccout = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  gap: 10px;
`;

export const WrapperTextHeaderSmall = styled.span`
  font-size: 12px;
  color: #fff;
`;



/**
 * 1. Ở ĐÂY SỬ DỤNG styled-components : 
 * Styled-components là một thư viện CSS-in-JS dành cho React và React Native, 
 * cho phép bạn viết CSS trực tiếp trong JavaScript bằng cách sử dụng cú pháp template literals (dấu backtick ``). 
 * Thay vì tách riêng file .css, bạn có thể gắn style trực tiếp vào component — giúp mã nguồn gọn gàng, dễ bảo trì và tránh trùng lặp tên class.
 * 
 *  2. Styled-components làm được gì ?
 * - Tạo component có style riêng biệt: Style gắn liền với logic của component.
 * - Không cần className hay file CSS riêng.
 * - Hỗ trợ dynamic styling: Có thể thay đổi style theo props.
 * - Tự động sinh tên class duy nhất: Tránh xung đột CSS.
 */