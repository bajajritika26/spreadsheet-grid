# Spreadsheet App

This is a simple spreadsheet-style web application built with **React**, **TypeScript**, **Tailwind CSS**, and **Material UI**.

It demonstrates an editable grid layout, toolbar actions, interactive notifications, and a modern UI, suitable as a starter for building complex data-entry or spreadsheet apps.

---

## Getting Started

Follow these steps to set up and run the project locally.

1. Clone the Repository

```bash
git clone <your-repo-url>
cd spreadsheet-app


2. Install Dependencies

```bash

npm install

3. Start the Development Server
```bash

npm run dev

The app should be running at:
http://localhost:5173

4. Run Linter (Optional)
To check for TypeScript or code style issues:

```bash

npx eslint src --ext .ts,.tsx

--- 
### FEATURES

✅ Editable Grid

-Click into any cell to edit its content.
-keyboard navigation with arrow keys.

✅ Toolbar Actions

Toolbar buttons (Hide Fields, Sort, Filter, Cell View, Import, Export, Share, New Action) log messages to the console or show notifications — ensuring no dead UI.

✅ Breadcrumb Navigation

Breadcrumb links (Workspace, Folder 2, Spreadsheet 3) respond to clicks and log to the console for future routing implementation.

✅ Snackbar Notifications

Actions show pop-up notifications using Material UI’s Snackbar and Alert.

✅ Resizable Columns

Drag column borders to resize columns dynamically.

✅ Search Bar

UI present for search input.

✅ Icons & Visuals

Toolbar and header icons enhance UX.

### Trade-offs & Limitations
1. No backend integration

Data is in-memory only; refreshing the page resets the grid.

2. No real routing yet

Breadcrumb clicks only log messages. Routing can be added with React Router.


 --- 
 
### Tech Stack
1. React

2. TypeScript

3. Tailwind CSS

4. Material UI