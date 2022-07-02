import React, { useState } from "react";
import Select from "react-select";

function SelectTest() {
  const data = [
    {
      value: 1,
      label: "cerulean",
    },
    {
      value: 2,
      label: "fuchsia rose",
      isdisabled: true, // disable this option
    },
    {
      value: 3,
      label: "true red",
    },
    {
      value: 4,
      label: "aqua sky",
      isdisabled: true, // disable this option
    },
    {
      value: 5,
      label: "tigerlily",
    },
    {
      value: 6,
      label: "blue turquoise",
    },
  ];

  const [selectTestedOption, setSelectTestedOption] = useState(null);

  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setSelectTestedOption(e);
  };

  return (
    <div className="SelectTest">
      <a href="https://www.cluemediator.com">Clue Mediator</a>
      <br />
      <br />

      <SelectTest
        placeholder="SelectTest Option"
        value={selectTestedOption} // set selectTested value
        options={data} // set list of the data
        onChange={handleChange} // assign onChange function
        isOptionDisabled={(option) => option.isdisabled} // disable an option
      />

      {selectTestedOption && (
        <div style={{ marginTop: 20, lineHeight: "25px" }}>
          <b>SelectTested Option</b>
          <br />
          <div style={{ marginTop: 10 }}>
            <b>Label: </b> {selectTestedOption.label}
          </div>
          <div>
            <b>Value: </b> {selectTestedOption.value}
          </div>
        </div>
      )}
    </div>
  );
}

export default SelectTest;
