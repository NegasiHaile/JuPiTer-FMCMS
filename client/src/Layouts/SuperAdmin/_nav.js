import React from "react";
import CIcon from "@coreui/icons-react";

// const NEW = "10";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon name="cil-applications" customClasses="c-sidebar-nav-icon" />,
    // badge: {
    //   color: "info",
    //   text: NEW,
    // },
  },
  {
    _tag: "CSidebarNavItem",
    name: "Jupiter Branchs",
    to: "/Branch/List",
    icon: "cil-bank",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Employee's-Managment"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Add Employee",
    to: "/Employee/Register",
    icon: "cil-user-plus",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Get Employees",
    to: "/Employee/List",
    icon: "cil-group",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Machine's-Managment"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "All Machines",
    to: "/machines/list",
    icon: "cil-print",
  },
  {
        _tag: "CSidebarNavItem",
        name: "General Sales",
        to: "/sales/alerts",
    icon: "cil-money",
      },
  {
    _tag: "CSidebarNavDropdown",
    name: "Maintenance",
    route: "/maintenance",
    icon: "cil-memory",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Annual",
        to: "/maintenance/annual",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Incident",
        to: "/maintenance/incident",
      },
    ],
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Client's-Managment"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Client List",
    to: "/client/register",
    icon: "cil-contact",
  },
  {
        _tag: "CSidebarNavItem",
        name: "Business-List",
        to: "/business/list",
    icon: "cil-building",
      },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Others"],
  },

  {
    _tag: "CSidebarNavItem",
    name: "Feedbacks",
    to: "/Employee/Register",
    icon: "cil-speech",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Inventory",
    to: "/Employee/List",
    icon: "cil-shield-alt",
  },
  {
    _tag: "CSidebarNavItem",
    name: "System Backup",
    to: "/Employee/List",
    icon: "cil-shield-alt",
  },
  {
    _tag: "CSidebarNavItem",
    name: "System Setting",
    to: "/Employee/List",
    icon: "cil-settings",
  },
];

export default _nav;
