import React from "react";
import format from "date-fns/format";
import { Controller } from "react-hook-form";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import brLocale from "date-fns/locale/pt-BR";

class LocalizedUtils extends DateFnsUtils {
  getDatePickerHeaderText(date) {
    return format(date, "d MMM yyyy", { locale: this.locale });
  }
}

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
        <MuiPickersUtilsProvider utils={LocalizedUtils} locale={brLocale}>
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
