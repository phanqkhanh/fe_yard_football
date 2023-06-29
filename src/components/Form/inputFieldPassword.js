import React, { useState } from 'react';
import { Input, FormGroup, Label, FormFeedback } from 'reactstrap';
import { ErrorMessage } from 'formik';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const InputFieldPassword = (props) => {
    const { field, form, type, lable, placeholder, disabled = false } = props;
    const [showPassword, setShowPassword] = useState(false);

    const { name } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];

    function handleShowPassword() {
        setShowPassword(!showPassword);
    }

    return (
        <FormGroup style={{ position: 'relative' }}>
            {lable && <Label for={name}>{lable}</Label>}
            <Input
                id={name}
                type={showPassword ? 'text' : 'password'}
                disabled={disabled}
                placeholder={placeholder}
                invalid={showError}
                {...field}
            />
            {!showError && (
                <>
                    {showPassword ? (
                        <AiOutlineEye className="eye-password" onClick={handleShowPassword} />
                    ) : (
                        <AiOutlineEyeInvisible className="eye-password" onClick={handleShowPassword} />
                    )}
                </>
            )}
            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    );
};

export default InputFieldPassword;
