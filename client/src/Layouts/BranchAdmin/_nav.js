import React from "react";
import CIcon from "@coreui/icons-react";

const NEW = "10";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
      text: NEW,
    },
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Machines-Managment"],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Controlling",
    route: "/Machine",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Register Machine",
        to: "/machine/register",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Distribute Machine",
        to: "/machine/distribute",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Machines List",
        to: "/machines/list",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Maintenance",
    route: "/maintenance",
    icon: "cil-star",
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
    _tag: "CSidebarNavDropdown",
    name: "Sales",
    route: "/sales",
    icon: "cil-bell",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Alerts",
        to: "/sales/alerts",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Badges",
        to: "/notifications/badges",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Modal",
        to: "/notifications/modals",
      },
    ],
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Client-Managment"],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Client Account",
    route: "/Client",
    icon: "cil-puzzle",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Allow Client",
        to: "/client/register",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Clients List",
        to: "/clients/list",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Machines List",
        to: "/machines/list",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Client Business",
    route: "/Business",
    icon: "cil-star",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Register Business",
        to: "/business/register",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Business",
        to: "/businesses/list",
      },
    ],
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Others"],
  },

  {
    _tag: "CSidebarNavItem",
    name: "Add Employee",
    to: "/Employee/Register",
    icon: "cil-drop",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Get Employees",
    to: "/Employee/List",
    icon: "cil-pencil",
  },
];

export default _nav;
