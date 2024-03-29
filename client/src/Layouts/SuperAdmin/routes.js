import { lazy } from "react";

// User Account
const UserProfile = lazy(() => import("../../Components/UserAccount/Profile"));
const ChangePassword = lazy(() =>
  import("../../Components/UserAccount/ChangePassword")
);

// Jupiter branchs
const OpenNewBranch = lazy(() => import("../../Components/Branch/BranchList"));
const BranchDetail = lazy(() => import("../../Components/Branch/BranchDetail"));

// Dashboards
const jupiterDashboard = lazy(() =>
  import("../../Components/Dashboard/Dashboard")
);

// Employee frontend routing
const RgisterEmployee = lazy(() =>
  import("../../Components/Employee/RegisterEmployee")
);
const EmployeesList = lazy(() =>
  import("../../Components/Employee/EmployeesList")
);

// Client routes
const RegisterClient = lazy(() =>
  import("../../Components/Client/RegisterClient")
);
const ClientDetail = lazy(() => import("../../Components/Client/ClientDetail"));

// Client business frontend routing
const BusinessRegistration = lazy(() =>
  import("../../Components/Business/BusinessRegistration")
);
const BusinessesList = lazy(() =>
  import("../../Components/Business/BusinessesList")
);
const BusinessDetail = lazy(() =>
  import("../../Components/Business/BusinessDetail")
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

const routes = [
  { path: "/", exact: true, name: "S-A" },
  {
    path: "/dashboard",
    exact: true,
    name: "Dashboard",
    component: jupiterDashboard,
  },
  // Branchs
  {
    path: "/Branch/List",
    exact: true,
    name: "Open-New-Branch",
    component: OpenNewBranch,
  },
  {
    path: "/Branch/Detail/:id",
    exact: true,
    name: "Branch-Detail",
    component: BranchDetail,
  },
  // Employee
  {
    path: "/Employee/Register",
    exact: true,
    name: "Employee-Registration",
    component: RgisterEmployee,
  },
  {
    path: "/Employee/Edit/:id",
    exact: true,
    name: "Edit-Employee-Detail",
    component: RgisterEmployee,
  },
  {
    path: "/Employee/List",
    exact: true,
    name: "Employee-List",
    component: EmployeesList,
  },
  // Client
  {
    path: "/client/register",
    exact: true,
    name: "Register-Client",
    component: RegisterClient,
  },
  {
    path: "/client/detail/:id",
    exact: true,
    name: "Client-Detail",
    component: ClientDetail,
  },
  // Client bussiness
  // {
  //   path: "/business/register/:clientid",
  //   exact: true,
  //   name: "Register-Business",
  //   component: BusinessRegistration,
  // },
  {
    path: "/business/edit/:businessId",
    exact: true,
    name: "Update-Business",
    component: BusinessRegistration,
  },

  {
    path: "/business/list",
    exact: true,
    name: "Business-List",
    component: BusinessesList,
  },
  {
    path: "/business/detail",
    exact: true,
    name: "Register-Business",
    component: BusinessDetail,
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

  // User Accont
  {
    path: "/user/profile/:id",
    exact: true,
    name: "Open-New-Branch",
    component: UserProfile,
  },
  {
    path: "/change_password",
    exact: true,
    name: "change_password",
    component: ChangePassword,
  },
];

export default routes;
