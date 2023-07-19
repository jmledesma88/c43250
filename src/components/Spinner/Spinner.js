import { CircularProgress, Box } from "@mui/material";

const Spinner = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
      <CircularProgress />
    </Box>
  );
};

export default Spinner;
