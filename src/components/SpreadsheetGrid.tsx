import React, { useState } from "react";
import link from '../assets/Link.png'
import refresh from '../assets/refresh.png'
import newaction from '../assets/newaction.png'
import threedots from '../assets/threedots.png'
import briefcase from '../assets/Briefcase.png'
import calendar from '../assets/Calendar.png'
import status from '../assets/status.png'
import submitter from '../assets/submitter.png'
import url from '../assets/url.png'
import assigned from '../assets/assigned.png'
import hash from '../assets/hash.png'
import down from '../assets/down.png'
import gray from '../assets/grayaction.png'
import plus from '../assets/Add.png'
import NotificationSnackbar from "../NotificationSnackbar";
import type { AlertColor } from "@mui/material/Alert";
const SpreadsheetGrid: React.FC = () => {

  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    severity: AlertColor;
  }>({
    open: false,
    message: "",
    severity: "success",
  });


  const showSnackbar = (message: string,severity: AlertColor = "success") => {
    console.log(message);
    setSnackbar({ open: true, message, severity });
  };
  const rows = 52;
  const cols = 11;


  const data = [
    ["Launch social media campaign for product", "15-11-2024", "In-process", "Aisha Patel", "www.aishapatel.com", "Sophie Choudhury", "Medium", "20-11-2024", "6,200,000 ₹"],
    ["Update press kit for company redesign", "28-10-2024", "Need to start", "Irfan Khan", "www.irfankhanprojects.com", "Tejas Pandey", "High", "30-10-2024", "3,500,000 ₹"],
    ["Finalize user testing feedback for app", "05-12-2024", "In-process", "Mark Johnson", "www.markjohnson.com", "Rachel Lee", "Medium", "10-12-2024", "4,750,000 ₹"],
    ["Design new features for the website", "10-01-2025", "Complete", "Emily Green", "www.emilygreen.com", "Tom Wright", "Low", "15-01-2025", "5,900,000 ₹"],
    ["Prepare financial report for Q4", "25-01-2025", "Blocked", "Jessica Brown", "www.jessicabrown.com", "Kevin Smith", "Low", "30-01-2025", "2,800,000 ₹"],
  ];

  const headerCells = [
    {
      icon: hash,
      bg: "bg-gray-100",
    },
    {
      text: "Job Request",
      icon: briefcase,
      bg: "bg-gray-100",
    },
    {
      text: "Submitted",
      icon: calendar,
      bg: "bg-gray-100",
    },
    {
      text: "Status",
      icon: status,
      bg: "bg-gray-100",
    },
    {
      text: "Submitter",
      icon: submitter,
      bg: "bg-gray-100",
    },
    {
      text: "URL",
      icon: url,
      bg: "bg-gray-100",
    },
    {
      text: "Assigned",
      icon: assigned,
      bg: "bg-green-100",
    },
    {
      text: "Priority",
      bg: "bg-purple-100",
    },
    {
      text: "Due Date",
      bg: "bg-purple-100",
    },
    {
      text: "Est. Value",
      bg: "bg-pink-100",
    },
  ];
  const statusBgColors: Record<string, string> = {
    "In-process": "bg-yellow-100 text-yellow-700 px-3 py-1 rounded-xl",
    "Need to start": "bg-blue-100 text-blue-700 px-3 py-1 rounded-xl",
    "Complete": "bg-green-100 text-green-700 px-3 py-1 rounded-xl",
    "Blocked": "bg-red-100 text-red-700 px-3 py-1 rounded-xl",
  };
  const priorityBgColors: Record<string, string> = {
    High: "text-red-500 font-semibold",
    Medium: "text-yellow-500 font-semibold",
    Low: "text-blue-500 font-semibold",
  };

  const handleKeyNavigation = (
    e: React.KeyboardEvent<HTMLDivElement>,
    row: number,
    col: number
  ) => {
    const totalRows = rows;
    const totalCols = cols;

    let newRow = row;
    let newCol = col;

    switch (e.key) {
      case "ArrowRight":
        newCol = col + 1 > totalCols ? totalCols : col + 1;
        break;
      case "ArrowLeft":
        newCol = col - 1 < 2 ? 2 : col - 1;
        break;
      case "ArrowDown":
        newRow = row + 1 > totalRows + 2 ? totalRows + 2 : row + 1;
        break;
      case "ArrowUp":
        newRow = row - 1 < 3 ? 3 : row - 1;
        break;
      default:
        return;
    }

    e.preventDefault();

    const nextCell = document.getElementById(`cell-${newRow}-${newCol}`);
    if (nextCell) {
      nextCell.focus();
    }
  };
  const initialWidths = [
    50,
    250,
    120,
    130,
    130,
    120,
    130,
    100,
    120,
    100
  ];

  const [colWidths, setColWidths] = useState<number[]>(initialWidths);
  const handleMouseDownResize = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    colIndex: number
  ) => {
    e.preventDefault();
    e.stopPropagation();

    const startX = e.clientX;
    const startWidth = colWidths[colIndex];

    const onMouseMove = (moveEvent: MouseEvent) => {
      const deltaX = moveEvent.clientX - startX;
      const newWidth = Math.max(50, startWidth + deltaX);

      setColWidths((prev) => {
        const updated = [...prev];
        updated[colIndex] = newWidth;
        return updated;
      });
    };

    const onMouseUp = () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
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
      <div
        className="grid w-full h-screen text-gray-500 text-xs"
        style={{
          gridTemplateColumns: colWidths.map(w => `${w}px`).join(" ")
            + " "
            + "repeat(10, 100px)",
          gridTemplateRows: `repeat(${rows}, 35px)`
        }}
      >

        <div className="col-start-2 col-end-6 row-start-1 row-end-2 p-2 text-sm flex items-center justify-left bg-gray-300  ">
          <div className="flex items-center  bg-gray-100 p-1 rounded mr-2 cursor-pointer">
            <img src={link} alt="Link" className="w-4 h-4 mr-2" onClick={() => {
            showSnackbar("Link clicked", "info");
            console.log("Link clicked");
          }}/>
            Q3 Financial Overview
          </div>
          <img src={refresh} alt="Refresh" className="cursor-pointer" onClick={() => {
            showSnackbar("Refreshed data", 'info');
            console.log("Refresh clicked");
          }} />
        </div>

        <div className="col-start-7 col-end-8 row-start-1 row-end-2 p-2 flex items-center justify-center gap-2 bg-green-200 text-sm cursor-pointer" onClick={() => {
          showSnackbar("ABC clicked", "info");
        }}>
          <img src={gray} alt="" />
          ABC
          <img src={threedots} alt="Three Dots" className=" w-3" />

        </div>
        <div className="col-start-8 col-end-10 row-start-1 row-end-2 p-2 flex items-center justify-center gap-2 bg-purple-200 text-sm cursor-pointer" onClick={() => {
          showSnackbar("Answer a question clicked", "info");
          console.log("Answer a question clicked");
        }}>
          <img src={newaction} alt="" className="h-3 w-3" />

          Answer a question
          <img src={threedots} alt="Three Dots" className=" w-3" />
        </div>
        <div className="col-start-10 col-end-11 row-start-1 row-end-2 p-2 flex items-center justify-center gap-2 bg-pink-200 text-sm cursor-pointer" onClick={() => {
          showSnackbar("Extract action clicked", "info");
          console.log("Extract action clicked");
        }}>
          <img src={newaction} alt="" className="h-3 w-3" />
          Extract
          <img src={threedots} alt="Three Dots" className=" w-3" />

        </div>
        <div className="col-start-11 col-end-12 row-start-1 row-end-2 p-2 flex items-center justify-center bg-gray-100 " onClick={() => {
          showSnackbar("Add new item", "info");
          console.log("Add new item clicked");
        }}>
          <img src={plus} alt="" />
        </div>

        {headerCells.map((cell, i) => (
          <div
            key={`h-${i}`}
            className={`row-start-2 row-end-3 col-start-[${i + 1}] col-end-[${i + 2}] border px-1 flex items-center justify-between text-xs relative ${cell.bg}`}
          >
            <div className="flex items-center gap-1">
              <img src={cell.icon} alt="" />
              <span>{cell.text}</span>
            </div>

            {i === 0 || i === 6 || i === 7 || i === 8 || i === 9
              ? ""
              : <img src={down} alt="Down Arrow" className="" />}

            {/* resize */}
            <div
              onMouseDown={(e) => handleMouseDownResize(e, i)}
              className="absolute right-0 top-0 h-full w-1 cursor-col-resize bg-gray-300 opacity-0 hover:opacity-100"
            ></div>
          </div>
        ))}


        {Array.from({ length: rows - 2 }).map((_, i) => (
          <div
            key={`row-index-${i}`}
            className="border border-gray-100 flex items-center justify-center text-xs"
            style={{
              gridColumnStart: 1,
              gridRowStart: i + 3,
            }}
            tabIndex={-1}
          >
            {i + 1}
          </div>
        ))}
        {data.map((row, rowIndex) => {
          return [
            <div
              key={`row-${rowIndex}-0`}
              className="border border-gray-100 flex items-center justify-center text-xs "
              style={{
                gridColumnStart: 1,
                gridRowStart: rowIndex + 3,
              }}
            >
              {rowIndex + 1}
            </div>,
            ...row.map((cell, cellIndex) => {
              let displayValue = cell;

              if (cellIndex === 4) {
                displayValue =
                  cell.length > 12 ? cell.substring(0, 12) + "..." : cell;
              }

              let bgClass = "";
              if (cellIndex === 2) {
                bgClass = statusBgColors[cell] || "";
              }
              if (cellIndex === 6) {
                bgClass = priorityBgColors[cell] || "";
              }

              return (
                <div
                  key={`row-${rowIndex}-${cellIndex + 1}`}
                  id={`cell-${rowIndex + 3}-${cellIndex + 2}`}
                  className={` text-gray-700 border flex items-center justify-left text-xs overflow-hidden text-ellipsis whitespace-nowrap px-1 ${cellIndex === 1 || cellIndex === 7 || cellIndex === 8 ? "justify-end" : "justify-left"} ${cellIndex === 2 && "justify-center"} ${cellIndex === 6 && 'justify-center'}`}

                  style={{
                    gridColumnStart: cellIndex + 2,
                    gridRowStart: rowIndex + 3,
                  }}
                  contentEditable
                  suppressContentEditableWarning={true}
                  onKeyDown={(e) =>
                    handleKeyNavigation(e, rowIndex + 3, cellIndex + 2)
                  }
                  onInput={(e) => {
                    const newValue = (e.target as HTMLDivElement).innerText;
                    console.log(`Cell updated: ${newValue}`);
                    showSnackbar("Cell updated", "info");
                  }}
                >
                  <div className={`${bgClass}`}>
                    {displayValue}
                  </div>
                </div>
              );
            }),
          ];
        })}

        {/* Empty Grid Cells */}
        {Array.from({ length: rows * cols }).map((_, i) => {
          const r = Math.floor(i / cols) + 1;
          const c = (i % cols) + 1;

          const occupied =
            (r === 1 && c >= 2 && c <= 11) || 
            r === 2 || 
            (r >= 3 && r < 8 && c <= 10);

          if (occupied) return null;

          return (
            <div
              contentEditable
              suppressContentEditableWarning={true}
              onInput={(e) => {
                const newValue = (e.target as HTMLDivElement).innerText;
                console.log(`Cell updated: ${newValue}`);
                showSnackbar("Cell updated", "info");
              }}
              key={`empty-${r}-${c}`}
              className=" text-gray-700 border flex items-center justify-left text-xs overflow-hidden text-ellipsis whitespace-nowrap px-1"
              style={{
                gridColumnStart: c,
                gridRowStart: r,
              }}
              id={`cell-${r}-${c}`}
              onKeyDown={(e) =>
                handleKeyNavigation(e, r, c)
              }
            ></div>
          );
        })}
      </div>
    </>
  );
};

export default SpreadsheetGrid;
