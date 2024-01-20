"use client";

import BasicTable from "@/app/components/Table";
import useUser, { Info } from "@/app/hooks/useUser";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const index = () => {
  const router = useRouter();

  // state
  const { infoList, fetchInfoList } = useUser();

  // Hook
  useEffect(() => {
    fetchInfoList();
  }, []);

  return (
    <div
      style={{
        width: "800px",
        display: "flex",
        justifyContent: "space-around",
        flexDirection: "column",
      }}
    >
      <BasicTable infoList={infoList} />
      <Box mt={2}>
        <Button
          variant="contained"
          color="primary"
          style={{ marginRight: 8 }}
          onClick={() => {
            router.push("/main/create");
          }}
        >
          회원 생성
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => {
            fetchInfoList();
          }}
        >
          새로고침
        </Button>
      </Box>
    </div>
  );
};

export default index;
