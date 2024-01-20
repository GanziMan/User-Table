"use client";
import { Box, Grid, TextField, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Info {
  id: number;
  name: string;
  email: string;
  password: string;
}

const CreateView = () => {
  // SearchParams
  const router = useRouter();
  const currentUrl = window.location.pathname;
  const id = Number(currentUrl.split("/").pop());

  // State
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<Info>({
    id: 0,
    name: "",
    email: "",
    password: "",
  });

  // Hook

  // Hook
  const onChange = (field: string, value: string) => {
    setUserInfo((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const fetchUserUpdate = async (params: Info) => {
    const { id, name, email, password } = params;

    const response = await fetch(`/api/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, email, password }),
    });
    const data = await response.json();
    if (data.result) {
      alert("저장되었습니다.");
      setIsUpdate(false);
      fetchUserDetail(id);
    }
  };

  const fetchUserDetail = async (id: number) => {
    const response = await fetch(`/api/users/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ id }),
    });
    const data = await response.json();
    setUserInfo(data.result);
  };

  const fetchUserDelete = async (id: number) => {
    const response = await fetch(`/api/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ id }),
    });
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    fetchUserDetail(id);
  }, [id]);

  return (
    <div style={{ width: "500px" }}>
      <Box alignContent={"center"}>
        <Grid container spacing={1} alignItems={"center"}>
          <Grid item xs={5}>
            <div>순번</div>
          </Grid>
          <Grid item xs={7}>
            <TextField
              variant="outlined"
              value={userInfo?.id}
              disabled
              fullWidth
            />
          </Grid>
          <Grid item xs={5}>
            <div>이름</div>
          </Grid>
          <Grid item xs={7}>
            <TextField
              variant="outlined"
              value={userInfo?.name}
              disabled={isUpdate ? false : true}
              fullWidth
              onChange={(e) => onChange("name", e.target.value)}
            />
          </Grid>

          <Grid item xs={5}>
            <div>이메일</div>
          </Grid>
          <Grid item xs={7}>
            <TextField
              variant="outlined"
              value={userInfo?.email}
              disabled={isUpdate ? false : true}
              fullWidth
              onChange={(e) => onChange("email", e.target.value)}
            />
          </Grid>

          <Grid item xs={5}>
            <div>비밀번호</div>
          </Grid>
          <Grid item xs={7}>
            <TextField
              variant="outlined"
              value={userInfo?.password}
              disabled={isUpdate ? false : true}
              fullWidth
              onChange={(e) => onChange("password", e.target.value)}
            />
          </Grid>
        </Grid>
        <Box mt={3}>
          <Button
            variant="contained"
            color="primary"
            style={{ marginRight: 8 }}
            onClick={() => {
              isUpdate ? fetchUserUpdate(userInfo) : setIsUpdate(true);
            }}
          >
            {isUpdate ? "저장" : "수정"}
          </Button>
          {!isUpdate ? (
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                router.push("/main");
              }}
              style={{ marginRight: 8 }}
            >
              목록
            </Button>
          ) : null}

          <Button
            variant="contained"
            color="error"
            onClick={() => {
              alert("삭제되었습니다.");
              fetchUserDelete(userInfo?.id);
              router.push("/main");
            }}
          >
            삭제
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default CreateView;