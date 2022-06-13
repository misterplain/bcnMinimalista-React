import React from "react";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import "../../styles/ui/Loading.css";

export const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-row">
        <div className="loading-col">
          <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
            <LinearProgress color="secondary" />
            <LinearProgress color="success" />
            <LinearProgress color="inherit" />
            <LinearProgress color="secondary" />
            <LinearProgress color="success" />
            <LinearProgress color="inherit" />
          </Stack>
        </div>
      </div>
    </div>
  );
};
