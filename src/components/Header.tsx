import threedots from '../assets/threedots.png'
import next from '../assets/Chevron.png'
import panel from '../assets/Panel.png'
import search from '../assets/search2.png'
import bell from "../assets/Notification_bell.png"
import user from "../assets/user.png"
import type { AlertColor } from "@mui/material/Alert";
import NotificationSnackbar from "../NotificationSnackbar";
import { useState } from 'react'

const Header = () => {
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: AlertColor;
  }>({
    open: false,
    message: "",
    severity: "success",
  });


  const showSnackbar = (message: string, severity: AlertColor = "success") => {
    console.log(message);
    setSnackbar({ open: true, message, severity });
  };

  return (
    <>
      <div>

        <NotificationSnackbar
          open={snackbar.open}
          message={snackbar.message}
          severity={snackbar.severity}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
        />
      </div>
      <div className="flex justify-between items-center px-4 py-2  border-b border-gray-300 text-sm">
        {/* Left Side */}
        <div className="flex items-center justify-left space-x-2 text-gray-400">
          <img src={panel} alt="" className="mr-2" />
          <span className="hover:underline cursor-pointer" onClick={() => {
            showSnackbar("Workspace clicked", "info");
            console.log("Workspace clicked");
          }}>Workspace</span>
          <span><img src={next} alt="" /></span>
          <span className="hover:underline cursor-pointer" onClick={() => {
            showSnackbar("Folder 2 clicked", "info");
            console.log("Folder 2 clicked");
          }}>Folder 2</span>
          <span><img src={next} alt="" /></span>
          <span className="text-gray-700 cursor-pointer" onClick={() => {
            showSnackbar("Spreadsheet 3 clicked", "info");
            console.log("Spreadsheet 3 clicked");
          }}>Spreadsheet 3</span>
          <span><img src={threedots} alt="" /></span>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">

          <div className="relative">
            <input
              type="text"
              placeholder="Search within sheet"
              className="pl-8 ml-4 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
              onChange={(e) => console.log("Search typed:", e.target.value)}
            />
            <img
              src={search}
              alt="search"
              className="absolute left-6 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none"
            />
          </div>


          <button className="p-1 rounded hover:bg-gray-200">
            <img src={bell} alt="" />
          </button>

          <div className="flex items-center space-x-2">
            <img
              src={user}
              alt="avatar"
              className="w-7 h-7 rounded-full object-cover"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-gray-700 font-medium">John Doe</span>
              <span className="text-gray-500 text-xs">john.doe@email.com</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
