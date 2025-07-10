import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import type { AlertColor } from "@mui/material/Alert";

interface NotificationSnackbarProps {
  open: boolean;
  onClose: () => void;
  message: string;
  severity?: AlertColor;
}

const NotificationSnackbar: React.FC<NotificationSnackbarProps> = ({
  open,
  onClose,
  message,
  severity = "success",
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <MuiAlert
        onClose={onClose}
        severity={severity}
        sx={{ width: "100%" }}
        elevation={6}
        variant="filled"
      >
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

export default NotificationSnackbar;
