import { IResponse } from "../../interface/IResponse";
import { green, red } from "@mui/material/colors";
import { Box, Typography } from "@mui/material";

export const SubmitMessage = ({
  responseData,
}: {
  responseData: IResponse | null;
}) => {
  return (
    <Box sx={{ textAlign: "center" }}>
      {responseData?.statusCode === 200 && (
        <Typography variant="h6" sx={{ color: green[500] }}>
          {responseData?.msg || ""}
        </Typography>
      )}
      {responseData?.statusCode === 500 && (
        <Typography variant="h6" sx={{ color: red[500] }}>
          {responseData?.msg || ""}
        </Typography>
      )}
    </Box>
  );
};
