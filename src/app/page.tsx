"use client";

import * as React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import Stack from "@mui/material/Stack";

const Home = () => {
  return (
    <Stack direction="row" spacing={2}>
      <LoadingButton
        loading
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="outlined"
        color="primary"
      >
        시작하기
      </LoadingButton>
    </Stack>
  );
};

export default Home;
