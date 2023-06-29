import { ErrorMessage } from 'formik';
import React from 'react';
import { FormFeedback, FormGroup, Label } from 'reactstrap';
import Select from 'react-select';

const SelectField = (props) => {
    const { field, form, lable, placeholder, disabled = false, options = [] } = props;
    const { name, value } = field;
    const selectedOptions = options.find((option) => option.value == value);

    const handleSelectedOptionOnChange = (selectedOption) => {
        const selectedValue = selectedOption ? selectedOption.value : selectedOption;

        const changeEvent = {
            target: {
                name: name,
                value: selectedValue,
            },
        };
        field.onChange(changeEvent);
    };

    return (
        <FormGroup>
            {lable && <Label for={name}>{lable}</Label>}

            <Select
                id={name}
                {...field}
                placeholder={placeholder}
                options={options}
                isDisabled={disabled}
                value={selectedOptions}
                onChange={handleSelectedOptionOnChange}
            />

            <ErrorMessage name={name} component={FormFeedback} />
        </FormGroup>
    );
};

export default SelectField;
