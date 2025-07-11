import React, { useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import type { AlertColor } from "@mui/material/Alert";
import plus from '../assets/Add.png';

const tabs = ["All Orders", "Pending", "Reviewed", "Arrived"];

const BottomTabs: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<AlertColor>("success");
  const [activeTab, setActiveTab] = useState("All Orders");

  const handleTabClick = (tab: string, level: AlertColor = "success") => {
    setActiveTab(tab);
    setMessage(`Viewing ${tab}`);
    setSeverity(level);
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return (
    <>
      <div className="  w-full bg-white border-t border-gray-300 flex justify-start items-center space-x-2 text-sm font-medium shadow-md z-50 pl-12 ">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`
              px-4 py-2 
              border-t
              ${
                activeTab === tab
                  ? "text-green-700 bg-green-100 border-green-300"
                  : "text-gray-600 hover:text-gray-900 border-transparent"
              }
            `}
            onClick={() =>
              handleTabClick(
                tab,
                tab === "Pending" || tab === "Reviewed" || tab === "Arrived"
                  ? "info"
                  : "success"
              )
            }
          >
            {tab}
          </button>
        ))}

        <button
          className="ml-auto"
          onClick={() => handleTabClick("New Action Clicked", "success")}
        >
          <img src={plus} alt="" className="w-5 h-5" />
        </button>
      </div>

      {/* Snackbar Notification */}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <MuiAlert onClose={handleClose} severity={severity} variant="filled">
          {message}
        </MuiAlert>
      </Snackbar>
    </>
  );
};

export default BottomTabs;
