import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const CustomDropdown = ({
  options,
  isOpen,
  setIsOpen,
  defaultSelected,
  selected,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [SelectedInnerIndex, setSelectedInnerIndex] = useState(0);

  const dropdownRef = useRef(null);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionSelect = (option, index) => {
    setSelectedOption(option);
    setIsOpen(false);
    setSelectedInnerIndex(index);
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div>
      <div className={`custom-dropdown`} ref={dropdownRef}>
        <div
          className={`dropdown-header d-flex flex-wrap gap-3 justify-content-between ${
            selected ? "SelectedDropDown" : ""
          }`}
          onClick={toggleDropdown}
        >
          {selectedOption ? selectedOption.label : defaultSelected}
          {!selected ? (
            <img src="/assets/icons/AngleDown.svg" alt="AngleDown" className="DropdownIcon" />
          ) : (
            <img src="/assets/icons/AngleDownWhite.svg" alt="AngleDownWhite" className="DropdownIcon" />
          )}
        </div>
        {isOpen && (
          <ul className={`dropdown-options`}>
            {options.map((option, index) => (
              <Link key={index} to={`/deep-service-details?${option?.id}`} className="text-decoration-none">
                <li
                  className={`${
                    SelectedInnerIndex === index ? "selectedOptions" : ""
                  }`}
                  key={option.value}
                  onClick={() => handleOptionSelect(option, index)}
                >
                  {option.label}
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CustomDropdown;
