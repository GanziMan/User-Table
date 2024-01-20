import BasicDatePicker from "@/app/components/DatePicker";
import RadioButtonsGroup from "@/app/components/Radio";
import { Button, TextField } from "@mui/material";

const index = () => {
  return (
    <main className={"main"}>
      <section className="login-section">
        <div className="login-section--header">출석이 회원가입</div>

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
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="휴대폰 번호를 입력해주세요"
          />
          <BasicDatePicker />
          <RadioButtonsGroup />
        </div>

        <div className="login-section-footer">
          <Button>회원가입</Button>
        </div>
      </section>
    </main>
  );
};

export default index;
