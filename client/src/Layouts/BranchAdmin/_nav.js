import React from "react";
import CIcon from "@coreui/icons-react";

const NEW = "10";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Branch Dashboard",
    to: "/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "success",
      text: NEW,
    },
  },
  {
    _tag: "CSidebarNavItem",
    name: "Branch Employees",
    to: "/Employee/List",
    icon: "cil-group",
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Machines-Managment"],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Machine Controlling",
    route: "/Machine",
    icon: "cil-print",
    _children: [
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
        _tag: "CSidebarNavItem",
        name: "Machine Sales",
        to: "/sales/alerts",
    icon: "cil-star",
      },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Client-Managment"],
  },
  {
        _tag: "CSidebarNavItem",
        name: "Clients List",
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
    name: "Jupiter Branchs",
    to: "/Branch/List",
    icon: "cil-bank",
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
  }
];

export default _nav;
