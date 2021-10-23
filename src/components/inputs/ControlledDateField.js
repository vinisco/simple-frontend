import React from "react";
import { Controller } from "react-hook-form";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

const ControlledDateField = ({ formProps, name, ...otherProps }) => {
  const { control, errors, rules, initialValues } = formProps;
  const isError = errors[name] !== undefined;

  return (
    <Controller
      name={name}
      control={control}
      rules={rules[name]}
      defaultValue={initialValues[name]}
      render={({ onChange, value }) => (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            {...otherProps}
            value={value}
            format="dd/MM/yyyy"
            error={isError}
            helperText={errors[name]?.message}
            onChange={(v) => {
              onChange(v);
              !!otherProps.onChange && otherProps.onChange(v);
            }}
          />
        </MuiPickersUtilsProvider>
      )}
    />
  );
};

export default ControlledDateField;
