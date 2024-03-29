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
    _tag: "CSidebarNavDropdown",
    name: "My Businesses",
    route: "/Business",
    icon: "cil-building",
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "Register Business",
        to: "/business/register",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Business-List",
        to: "/business/list",
      },
    ],
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
    name: "Backup System",
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
