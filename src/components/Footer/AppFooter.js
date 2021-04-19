import React from "react";
import houm_logo from "../../assets/imgs/houm_icon.png";
import { Row, Col, Layout } from "antd";
import { BrowserRouter, Link } from "react-router-dom";
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
                <Link style={{ textDecoration: 'none', color: COLORS.GREY }} to='https://houm.com/cl/'> Ir a Houm</Link>
            </Row>
            <Row>
                <Link style={{ textDecoration: 'none', color: COLORS.GREY }} to='https://houm.com/cl/'> Ir a Instagram</Link>
            </Row>
            <Row>
                <Link style={{ textDecoration: 'none', color: COLORS.GREY }} to='https://houm.com/cl/'> Ir a Facebook</Link>
            </Row>
        </Col>
      </Row>
    </Footer>
    </BrowserRouter>
  );
};

export default AppFooter;


