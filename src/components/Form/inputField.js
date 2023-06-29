import React from 'react';
import { Input, FormGroup, Label, FormFeedback } from 'reactstrap';
import { ErrorMessage } from 'formik';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const InputField = (props) => {
    const { field, form, type, lable, placeholder, disabled = false } = props;

    const { name } = field;
    const { errors, touched } = form;
    const showError = errors[name] && touched[name];
    return (
        <FormGroup style={{ position: 'relative' }}>
            {lable && <Label for={name}>{lable}</Label>}
            <Input id={name} type={type} disabled={disabled} placeholder={placeholder} invalid={showError} {...field} />
            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    );
};

export default InputField;
