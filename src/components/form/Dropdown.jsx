import { useState, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import styles from "./Form.module.css";

function Dropdown(props) {
  const [isDropdown, setIsDropdown] = useState(false);
  const [isOption, setIsOption] = useState("");

  const openDropdownHandler = () => {
    setIsDropdown((prevState) => !prevState);
  };

  const selectOptionHandler = (event) => {
    setIsOption(event.target.innerText);
  };

  useEffect(() => {
    props.onIsBank(isOption);
  }, [isOption]);

  return (
    <div className={styles.dropdown}>
      <h6 name={props.message} onClick={openDropdownHandler}>
        {!isOption ? "Choose an Option" : isOption}
        <RiArrowDropDownLine size="30px" />
      </h6>
      {isDropdown && (
        <div
          onClick={openDropdownHandler}
          className={styles["dropdown-options"]}
        >
          {props.values.map((value) => (
            <h5 key={value.key} onClick={selectOptionHandler}>
              {value.title}
            </h5>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
