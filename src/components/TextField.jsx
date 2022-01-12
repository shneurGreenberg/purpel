import React, { useState, useCallback } from "react";
import { TextField } from "@shopify/polaris";

export function TextFieldFn(props) {
  const [value, setValue] = useState("");

  const handleChange = useCallback((newValue) => setValue(newValue), []);

  return (
    <TextField
      label={props.title}
      value={value}
      onChange={handleChange}
      autoComplete="off"
      multiline={props.multiline}

    />
  );
}
