import React, { useContext, useEffect, useState } from 'react';
import { Button, FormGroup, Input, Label } from 'reactstrap';

import logo200Image from '../../assets/images/logo.png';
import backgroundLogin from '../../assets/images/bg-login.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../api/apiRequest/authRequest';
import { Formik, Form, FastField } from 'formik';
import * as Yup from 'yup';
import InputField from '../Form/inputField';
import { DataContext } from '../../ContextProvider/contextProvider';
import InputFieldPassword from '../Form/inputFieldPassword';

const LoginForm = () => {
    const { loading, setLoading } = useContext(DataContext);
    let { error } = useSelector((state) => ({
        error: state.auth.login.error,
    }));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState();

    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (values) => {
        const user = {
            username: values.username,
            password: values.password,
        };
        loginUser(user, dispatch, navigate, setLoading);
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string().trim().required('Vui lòng nhập tên đăng nhập'),
        password: Yup.string().trim().required('Vui lòng nhập mật khẩu'),
    });

    const initialValues = {
        username: '',
        password: '',
    };

    useEffect(() => {
        // console.log(error);
        if (error != null) {
            setErrorMessage(error);
        }
    }, [error]);

    return (
        <>
            {errorMessage && (
                <div className="login-error">
                    <span>{errorMessage}</span>
                </div>
            )}
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
                {(formikProps) => {
                    const { values, errors, touched } = formikProps;
                    // console.log(values);
                    return (
                        <Form>
                            {/* <div className="text-center pb-4">
                        <img
                            src={logo200Image}
                            className="rounded"
                            style={{ width: 100, height: 100, cursor: 'pointer' }}
                            alt="logo"
                        />
                    </div> */}
                            <FastField
                                name="username"
                                component={InputField}
                                type="text"
                                label="Tên đăng nhập"
                                placeholder="Nhập tên đăng nhập"
                            />
                            <FastField
                                name="password"
                                component={InputFieldPassword}
                                type="password"
                                placeholder="Mật khẩu"
                                label="Nhập mật khẩu..."
                            />
                            <FormGroup check>
                                <Label check>
                                    <Input
                                        style={{ borderColor: '#b0b0b0' }}
                                        type="checkbox"
                                        value={rememberMe}
                                        onChange={(e) => setRememberMe(e.target.checked)}
                                    />
                                    Nhớ mật khẩu
                                </Label>
                            </FormGroup>
                            <hr />
                            <Button size="lg" className="bg-gradient-theme-left border-0" block type="submit">
                                Đăng nhập
                            </Button>
                        </Form>
                    );
                }}
            </Formik>
        </>
    );
};

export default LoginForm;
