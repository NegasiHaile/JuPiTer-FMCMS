import React from 'react';

const BranchAdminDashBoard = React.lazy(() => import('../ThePages/Dashboard'));
const RgisterEmployee = React.lazy(() => import('../ThePages/RegisterEmployee'));
const EmployeesList = React.lazy(() => import('../ThePages/EmployeesList'));
// Importing of machine related pages
const MachineRegister = React.lazy(() => import('../ThePages/MachineRegister'))
const MachineDistribute = React.lazy(() => import('../ThePages/MachineDistribute'))
const MachinesList = React.lazy(() => import('../ThePages/MachinesList'))
// Importing of maintenance ralted pages
const MaintenanceAnnual = React.lazy(() => import('../ThePages/MaintenanceAnnual'))

const routes = [
  { path: '/', exact: true, name: 'B-A' },
  { path: '/dashboard', exact: true, name: 'Dashboard', component: BranchAdminDashBoard },
  // Employee
  { path: '/Employee/Register', exact: true, name: 'Employee-Registration', component: RgisterEmployee},
  { path: '/Employee/List', exact: true, name: 'Employee-List', component: EmployeesList},
  // Machine
  { path: '/machine/register', exact: true, name: 'Register-Machine', component: MachineRegister},
  { path: '/machine/distribute', exact: true, name: 'Distribute-Machine', component: MachineDistribute},
  { path: '/machines/list', exact: true, name: 'Machines-List', component: MachinesList},
    // Maintenance
  { path: '/maintenance/annual', exact: true, name: 'Annual-Maintenance', component: MaintenanceAnnual},
];

export default routes;
