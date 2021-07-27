import React, { useState, useContext } from "react";
import axios from "axios";
import Swal from "sweetalert2";

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

const BusinessesList = () => {
  const state = useContext(GlobalState);
  const [token] = state.token;
  const [businesses] = state.BusinessAPI.businesses;
  const [callback, setCallback] = state.BusinessAPI.callback;

  const deleteBusiness = async (_id, businessName) => {
    // e.preventDefault();
    try {
      Swal.fire({
        title: "Are you sure",
        text: "You want to delelte " + businessName + "'s detail permanently?!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#1E263C",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await axios.delete(`/business/delete/${_id}`, {
            headers: { Authorization: token },
          });
          Swal.fire("Deleted!", res.data.msg, "success");
          setCallback(!callback);
        }
      });
    } catch (error) {
      Swal.fire({
        position: "center",
        background: "#EBEDEF",
        icon: "error",
        text: error.response.data.msg,
        confirmButtonColor: "#1E263C",
        showConfirmButton: true,
      });
    }
  };

  const businessTableFields = [
    "TIN",
    "businessName",
    "companyName",
    "telephone",
    "Actions",
  ];
  return (
    <>
      <CCard className=" shadow-sm">
        <CCardHeader className="d-flex justify-content-between">
          <CLabel>List of businesss</CLabel>
        </CCardHeader>
        <CCardBody>
          <CDataTable
            items={businesses}
            fields={businessTableFields}
            tableFilter
            itemsPerPageSelect
            itemsPerPage={10}
            hover
            footer
            cleaner
            sorter
            pagination
            scopedSlots={{
              Actions: (business) => (
                <td className="d-flex justify-content-between">
                  <CLink
                    className="text-success"
                    to={{
                      pathname: `/business/edit/${business._id}`,
                      state: business,
                    }}
                  >
                    <CTooltip
                      content={`Edit the  - ${business.TIN}- business detail.`}
                    >
                      <CIcon name="cil-pencil" />
                    </CTooltip>
                  </CLink>

                  <span className="text-muted">|</span>

                  <CLink
                    className="text-danger"
                    onClick={() =>
                      deleteBusiness(business._id, business.businessName)
                    }
                  >
                    <CTooltip
                      content={`Delete - ${business.businessName}- business.`}
                    >
                      <CIcon name="cil-trash" />
                    </CTooltip>
                  </CLink>

                  <span className="text-muted">|</span>

                  <CLink className="text-primary" to={`/business/Detail`}>
                    <CTooltip
                      content={`See detail of - ${business.businessName}- business.`}
                    >
                      <CIcon name="cil-fullscreen" />
                    </CTooltip>
                  </CLink>
                </td>
              ),
            }}
          />
        </CCardBody>
      </CCard>
    </>
  );
};

export default BusinessesList;
