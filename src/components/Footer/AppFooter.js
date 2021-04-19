import React from "react";
import houm_logo from "../../assets/imgs/houm_icon.png";
import { Row, Col, Layout } from "antd";
import { BrowserRouter} from "react-router-dom";
import COLORS from "../../constants/colors";

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <BrowserRouter>
    <Footer style={{ background: "white", zIndex: 1, width: "100%" }}>
      <Row className="logo">
        <Col span={8}>
          <img className="header-logo" src={houm_logo}></img>
        </Col>
        <Col span={8}>
        </Col>
        <Col span={8}>
        <Row>
                <a style={{ textDecoration: 'none', color: COLORS.GREY }} href='https://houm.com/cl/'> Ir a Houm</a>
            </Row>
            <Row>
                <a style={{ textDecoration: 'none', color: COLORS.GREY }} href='https://houm.com/cl/'> Ir a Instagram</a>
            </Row>
            <Row>
                <a style={{ textDecoration: 'none', color: COLORS.GREY }} href='https://houm.com/cl/'> Ir a Facebook</a>
            </Row>
        </Col>
      </Row>
    </Footer>
    </BrowserRouter>
  );
};

export default AppFooter;


