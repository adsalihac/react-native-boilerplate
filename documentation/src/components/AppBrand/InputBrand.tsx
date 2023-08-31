import React, { useState, useContext } from "react";
import Link from "@docusaurus/Link";
import BrowserOnly from "@docusaurus/BrowserOnly";

function InputAppName() {
  const [inputValue, setInputValue] = useState("");

  const getLocalStorage = () => {
    const myValue = localStorage.getItem("appBrand");
    const val = myValue ? myValue : "";
    setInputValue(val);
  };

  React.useEffect(() => {
    getLocalStorage();
  }, []);

  const handleChange = (event) => {
    setInputValue(event.target.value.trim());
  };

  const handleSubmit = () => {
    if (inputValue == "") {
      alert("Please enter your brand name");
      return;
    }
    // Do something with the input value, such as save it to localStorage
    localStorage.setItem("appBrand", inputValue.toLowerCase());
    window.location.reload();
  };

  return (
    <BrowserOnly>
      {() => (
        <div>
          <input
            type="text"
            id="inputBox"
            name="inputBox"
            style={{
              borderRadius: "10px",
              padding: "10px",
              border: "2px solid #ccc",
              fontSize: "16px",
              width: "250px",
            }}
            value={inputValue || ""}
            onChange={handleChange}
            placeholder={"Enter your brand name"}
          />

          <Link
            style={{ marginLeft: "10px" }}
            className="button button--secondary button--md"
            onClick={() => {
              handleSubmit();
            }}
          >
            Save Brand Name
          </Link>
          <br />
          <br />
        </div>
      )}
    </BrowserOnly>
  );
}

export default InputAppName;
