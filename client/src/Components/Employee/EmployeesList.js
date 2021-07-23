import React, { useState, useContext } from "react";

import { GlobalState } from "../../GlobalState";
import {
  CButton,
  CCard,
  CCardHeader,
  CCardBody,
  CLabel,
  CDataTable,
  CLink,
  CTooltip,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const EmployeeList = () => {
  const state = useContext(GlobalState);
  const [employees, setEmployees] = useState(...state.UsersAPI.users);

  console.log(employees);

  const branchTableFields = [
    "fName",
    "mName",
    "lName",
    "gender",
    "email",
    "phoneNumber",
    "branch",
  ];
  return (
    <>
      <CCard className=" shadow-sm">
        <CCardHeader className="d-flex justify-content-between">
          <CLabel>List of employees</CLabel>
          <CButton
            to="/Employee/register"
            size="sm"
            variant="outline"
            color="dark"
          >
            <CIcon name="cil-plus" /> Add New
          </CButton>
        </CCardHeader>
        <CCardBody>
          <CDataTable
            items={employees}
            fields={branchTableFields}
            tableFilter
            itemsPerPageSelect
            itemsPerPage={10}
            hover
            footer
            cleaner
            sorter
            pagination
            scopedSlots={{}}
          />
        </CCardBody>
      </CCard>
    </>
  );
};

export default EmployeeList;
