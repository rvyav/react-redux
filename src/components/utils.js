import { useState } from "react";

export function FormFields(initialState) {
  const [fields, setValues] = useState(initialState);

  return [
    fields,
    function(e) {
      setValues({
        ...fields,
        [e.target.id]: e.target.value
      });
    }
  ];
}
