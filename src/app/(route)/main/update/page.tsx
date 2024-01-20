import CreateView from "@/app/components/CreateView";

const index = () => {
  return (
    <div
      style={{
        display: "flex",

        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <CreateView />
    </div>
  );
};

export default index;
