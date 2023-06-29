import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'reactstrap';

import LoginForm from '../../components/Login/loginForm';

const Login = ({ authState, history }) => {
    const [checkRender, setCheckRender] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token == 'null' || token == null) {
            setCheckRender(true);
        } else {
            setCheckRender(false);
            window.location.href = '/';
        }
    }, []);

    return (
        <>
            {checkRender ? (
                <Row
                    style={{
                        height: '100vh',
                        justifyContent: 'end',
                        alignItems: 'center',
                        width: '100vw',
                    }}
                    className="bg-login"
                >
                    <Col md={6} lg={4}>
                        <Card style={{ padding: '35px', borderRadius: '5px', maxWidth: '350px' }}>
                            <LoginForm></LoginForm>
                        </Card>
                    </Col>
                </Row>
            ) : null}
        </>
    );
};

export default Login;
