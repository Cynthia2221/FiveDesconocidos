import { LoadingStyled } from "./loading.styled";
import { TailChase } from "ldrs/react";
import "ldrs/react/TailChase.css";
import { useTheme } from "styled-components";

export const Loading = () => {
  const theme = useTheme();
  return (
    <LoadingStyled>
      <TailChase size="40" speed="1.75" color={theme.color.cerulean} />{" "}
    </LoadingStyled>
  );
};
