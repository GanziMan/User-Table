import { Inter } from "next/font/google";

// Component
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const inter = Inter({ subsets: ["latin"] });

const index = () => {
  return (
    <main className={""}>
      <section className="login-section">
        <div className="login-section--header">출석이 로그인</div>

        <div className="login-section-input">
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="ID를 입력해주세요."
          />
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="PW를 입력해주세요."
          />
        </div>

        <div className="login-section-footer">
          {" "}
          <Button>로그인</Button>
        </div>
      </section>
    </main>
  );
};

export default index;
