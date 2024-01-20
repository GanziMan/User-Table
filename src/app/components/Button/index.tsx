import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { ResultInfo } from "@/app/(route)/main/page";

type ButtonProps = {
  buttonProps: ResultInfo;
};

const BasicButtons: React.FC<ButtonProps> = ({ buttonProps }) => {
  const { createColor, deleteColor, createLabel, deleteLabel } = buttonProps;

  return (
    <Stack spacing={2} direction="row">
      <Button variant="outlined" color={createColor}>
        {createLabel}
      </Button>
      <Button variant="outlined" color={deleteColor}>
        {deleteLabel}
      </Button>
    </Stack>
  );
};

export default BasicButtons;
