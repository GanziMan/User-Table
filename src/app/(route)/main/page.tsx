"use client";

import BasicTable from "@/app/components/Table";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export interface Info {
  id: number;
  name: string;
  email: string;
  password: string;
}
const index = () => {
  const [infoList, setInfoList] = useState<Info[]>([]);

  const router = useRouter();

  const fetchInfoList = async () => {
    const response = await fetch("/api/users", {
      method: "GET",
    });

    const data = await response.json();
    setInfoList(data.result);
  };

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
