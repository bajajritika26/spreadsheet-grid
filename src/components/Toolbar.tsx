import React, { useState } from "react";
import hide from '../assets/hide.png'
import sort from '../assets/sort.png'
import filter from '../assets/Filter.png'
import cell from '../assets/cellview.png'
import importt from '../assets/import.png'
import exportt from '../assets/export.png'
import share from '../assets/Share.png'
import newactiion from '../assets/newaction.png'
import next from '../assets/nextdouble.png'
import type { AlertColor } from "@mui/material/Alert";
import NotificationSnackbar from "../NotificationSnackbar";


const Toolbar: React.FC = () => {

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
      <div className="flex justify-between items-center px-4 py-2 border-b border-gray-200 bg-white">
        {/* Left section */}
        <div className="flex items-center gap-4 text-sm text-gray-900 space-x-2">

          <button className="flex items-center gap-1 hover:text-black border-r pr-4" onClick={() => {
            showSnackbar("Toolbar clicked", "info");
            console.log("Toolbar clicked");
          }}>
            <span className="font-medium">Toolbar</span>
            <img src={next} alt="" />
          </button>

          {/* Hide Fields */}
          <button className="flex items-center gap-1 hover:text-black cursor-pointer" onClick={() => {
            showSnackbar("Hide Fields clicked", "info");
            console.log("Hide Fields clicked");
          }}>
            <img src={hide} alt="Hide Fields" className="w-4 h-4" />
            <span>Hide Fields</span>
          </button>

          {/* Sort */}
          <button className="flex items-center gap-1 hover:text-black cursor-pointer" onClick={() => {
            showSnackbar("Sort button clicked", "info");
            console.log("Sort button clicked");
          }} >
            <img src={sort} alt="Sort" className="w-4 h-4" />
            <span>Sort</span>
          </button>

          {/* Filter */}
          <button className="flex items-center gap-1 hover:text-black cursor-pointer" onClick={() => {
            showSnackbar("Filter button clicked", "info");
            console.log("Filter button clicked");
          }}>
            <img src={filter} alt="Filter" className="w-4 h-4" />
            <span>Filter</span>
          </button>

          {/* Cell view */}
          <button className="flex items-center gap-1 hover:text-black cursor-pointer" onClick={() => {
            showSnackbar("Cell view clicked", "info");
            console.log("Cell view clicked");
          }}>
            <img src={cell} alt="Cell view" className="w-4 h-4" />
            <span>Cell view</span>
          </button>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 text-sm text-gray-700 border hover:text-black px-2 py-1 rounded hover:bg-gray-100 cursor-pointer" onClick={() => {
            showSnackbar("Imported !", "success");
            console.log("Imported ");
          }}>
            <img src={importt} alt="Import" className="w-4 h-4 " />
            <span>Import</span>
          </button>
          <button className="flex items-center gap-1 text-sm text-gray-700 border hover:text-black px-2 py-1 rounded hover:bg-gray-100 cursor-pointer" onClick={() => {
            showSnackbar("Exported !", "success");
            console.log("Exported !");
          }}>
            <img src={exportt} alt="Export" className="w-4 h-4" />
            <span>Export</span>
          </button>
          <button className="flex items-center gap-1 text-sm text-gray-700 border hover:text-black px-2 py-1 rounded hover:bg-gray-100 cursor-pointer" onClick={() => {
            showSnackbar("Shared", "success");
            console.log("Shared");
          }}>
            <img src={share} alt="Share" className="w-4 h-4" />
            <span>Share</span>
          </button>
          <button className="flex items-center gap-1 bg-green-700 hover:bg-green-600 text-white text-sm px-3 py-1 rounded cursor-pointer" onClick={() => {
            showSnackbar("New Action created", "success");
            console.log("New Action created");
          }}>
            <img src={newactiion} alt="New Action" className="w-4 h-4" />
            <span>New Action</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Toolbar;
