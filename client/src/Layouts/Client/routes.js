import { lazy } from "react";

// Auth
const ChangePassword = lazy(() =>
  import("../../Components/UserAccount/ChangePassword.js")
);

// Jupiter branchs
const BranchDetail = lazy(() => import("../../Components/Branch/BranchDetail"));

// Dashboards
const BranchAdminDashBoard = lazy(() =>
  import("../../Components/Dashboard/Dashboard.js")
);

// Client routes

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
  { path: "/", exact: true, name: "Client" },
  {
    path: "/dashboard",
    exact: true,
    name: "Dashboard",
    component: BranchAdminDashBoard,
  },
  {
    path: "/Branch/Detail",
    exact: true,
    name: "Branch-Detail",
    component: BranchDetail,
  },
  // Client bussiness
  {
    path: "/business/register",
    exact: true,
    name: "Register-Business",
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

  // Auth
  {
    path: "/change_password",
    exact: true,
    name: "change_password",
    component: ChangePassword,
  },
];

export default routes;
