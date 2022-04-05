import { IResponse } from "../../interface/IResponse";
import { Box, Typography } from "@mui/material";

import { theme } from "../../theme";

export const SubmitMessage = ({
  responseData,
}: {
  responseData: IResponse | null;
}) => {
  return (
    <Box sx={{ textAlign: "center" }}>
      {responseData?.statusCode === 200 && (
        <Typography variant="h5" sx={{ color: theme.palette.success.dark }}>
          {responseData?.msg || ""}
        </Typography>
      )}
      {responseData?.statusCode === 500 && (
        <Typography variant="h6" sx={{ color: theme.palette.secondary.dark }}>
          {responseData?.msg || ""}
        </Typography>
      )}
    </Box>
  );
};
