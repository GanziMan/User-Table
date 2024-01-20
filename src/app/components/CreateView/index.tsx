"use client";
import { Box, Grid, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export interface Info {
  name: string;
  email: string;
  password: string;
}

const CreateView = () => {
  // path
  const router = useRouter();

  // State
  const [userInfo, setUserInfo] = useState<Info>({
    name: "",
    email: "",
    password: "",
  });

  // Hook
  const onChange = (field: string, value: string) => {
    setUserInfo((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const fetchUserCraete = async (params: Info) => {
    const { name, email, password } = params;
    await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
  };

  return (
    <div style={{ width: "500px" }}>
      <Box alignContent={"center"}>
        <Grid container spacing={1} alignItems={"center"}>
          <Grid item xs={5}>
            <div>이름</div>
          </Grid>
          <Grid item xs={7}>
            <TextField
              label="이름"
              variant="outlined"
              fullWidth
              onChange={(e) => onChange("name", e.target.value)}
            />
          </Grid>

          <Grid item xs={5}>
            <div>이메일</div>
          </Grid>
          <Grid item xs={7}>
            <TextField
              label="이메일"
              variant="outlined"
              fullWidth
              onChange={(e) => onChange("email", e.target.value)}
            />
          </Grid>

          <Grid item xs={5}>
            <div>나이</div>
          </Grid>
          <Grid item xs={7}>
            <TextField
              label="비밀번호"
              variant="outlined"
              fullWidth
              onChange={(e) => onChange("password", e.target.value)}
            />
          </Grid>
        </Grid>
        <Box mt={2}>
          <Button
            variant="contained"
            color="primary"
            style={{ marginRight: 8 }}
            onClick={() => {
              alert("생성되었습니다.");
              fetchUserCraete(userInfo);
              router.push("/main");
            }}
          >
            저장
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              router.push("/main");
            }}
          >
            목록
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default CreateView;
