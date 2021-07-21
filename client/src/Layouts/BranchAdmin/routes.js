import React, { lazy } from "react";

// Auth
const ChangePassword = lazy(() =>
  import("../../Components/UserAccount/ChangePassword.js")
);

// Dashboards
const BranchAdminDashBoard = lazy(() =>
  import("../../Components/Dashboard/Dashboard.js")
);
const RgisterEmployee = lazy(() =>
  import("../../Components/Employee/RegisterEmployee")
);
const EmployeesList = lazy(() =>
  import("../../Components/Employee/EmployeesList")
);
// Importing of machine related pages
const MachineRegister = lazy(() =>
  import("../../Components/Machine/MachineRegister")
);
const MachineDistribute = lazy(() =>
  import("../../Components/Machine/MachineDistribute")
);
const MachinesList = lazy(() =>
  import("../../Components/Machine/MachinesList")
);
// Importing of maintenance ralted pages
const MaintenanceAnnual = lazy(() =>
  import("../../Components/Maintenance/MaintenanceAnnual")
);
const aa = 3
const routes = [
  { path: "/", exact: true, name: "B-A" },
  {
    path: "/dashboard",
    exact: true,
    name: "Dashboard",
    component: BranchAdminDashBoard,
  },
  // Employee
  // {
  //   path: "/Employee/Register",
  //   exact: true,
  //   name: "Employee-Registration",
  //   component: RgisterEmployee,
  // },
  {
    path: "/Employee/List",
    exact: true,
    name: "Employee-List",
    component: EmployeesList,
  },
  // Machine
  {
    path: "/machine/register",
    exact: true,
    name: "Register-Machine",
    component: MachineRegister,
  },
  {
    path: "/machine/distribute",
    exact: true,
    name: "Distribute-Machine",
    component: MachineDistribute,
  },
  {
    path: "/machines/list",
    exact: true,
    name: "Machines-List",
    component: MachinesList,
  },
  // Maintenance
  {
    path: "/maintenance/annual",
    exact: true,
    name: "Annual-Maintenance",
    component: MaintenanceAnnual,
  },

  // Auth
  {
    path: "/change_password",
    exact: true,
    name: "change_password",
    component: ChangePassword,
  },
];

export default routes;
