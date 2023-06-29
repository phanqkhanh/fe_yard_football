import React from 'react';
import { Col, Container, Row } from 'reactstrap';

const NotFound = () => {
    const token = localStorage.getItem('token');
    const checkToken = token == 'null' || token == '' || token == undefined;
    console.log(token, checkToken);
    return (
        <section className="page_404">
            <Container>
                <Row>
                    <Col sm={12} className=" text-center">
                        <div className="four_zero_four_bg">
                            <h1 className="text-center">404</h1>
                        </div>
                        <div className="contant_box_404">
                            <h3 className="h2">Bạn đang bị lạc</h3>
                            <p>Trang bạn tìm kiếm không tồn tại!</p>
                            <a href={checkToken ? '/dang-nhap' : '/'} className="link_404">
                                {checkToken ? 'Về Trang Đăng Nhập' : 'Về Trang Chủ'}
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default NotFound;
