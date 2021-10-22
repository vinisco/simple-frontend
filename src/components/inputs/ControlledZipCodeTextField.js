import React from "react";
import { TextField as MTextField } from "@material-ui/core";

import { Controller } from "react-hook-form";
import { ZipCodeTextField } from ".";

const ControlledZipCodeTextField = ({ formProps, name, ...otherProps }) => {
  const { control, errors, rules, initialValues } = formProps;
  const isError = errors[name] !== undefined;

  return (
    <Controller
      name={name}
      control={control}
      rules={rules[name]}
      defaultValue={initialValues[name]}
      render={({ onChange, onBlur, value = initialValues[name] }) => (
        <ZipCodeTextField
          {...otherProps}
          value={value}
          error={isError}
          customInput={MTextField}
          helperText={errors[name]?.message}
          onChange={(v) => {
            onChange(v);
            !!otherProps.onChange && otherProps.onChange(v);
          }}
          onBlur={() => {
            onBlur();
            !!otherProps.onBlur && otherProps.onBlur(value);
          }}
        />
      )}
    />
  );
};

export default ControlledZipCodeTextField;
