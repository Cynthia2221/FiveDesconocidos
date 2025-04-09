import { useState } from "react";

import {
  ToggleSwitchCheckedSlider,
  ToggleSwitchStyled,
  ToggleSwitchInput,
  ToggleSwitchSlider,
} from "./toggleSwitch.styled";

export const ToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <ToggleSwitchStyled>
      <ToggleSwitchInput type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
      {isChecked ? <ToggleSwitchCheckedSlider /> : <ToggleSwitchSlider />}
    </ToggleSwitchStyled>
  );
};
