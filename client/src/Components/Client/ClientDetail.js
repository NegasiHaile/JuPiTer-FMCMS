import React, { useState, useContext } from "react";
import axios from "axios";
import { GlobalState } from "../../GlobalState";
import CIcon from "@coreui/icons-react";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardHeader,
  CCardBody,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CLabel,
  CForm,
  CSelect,
  CRow,
  CCol,
  CFormGroup,
  CInput,
  CDataTable,
  CLink,
  CTooltip,
} from "@coreui/react";
function ClientDetail() {
  const params = useParams();
    return (
        <>
      <CCard className=" shadow-sm">
        <CCardHeader className="d-flex justify-content-between">
          <CLabel className="text-muted">Detail of Client {params.id}</CLabel>
          <CButton
            size="sm"
            color="secondary"
            to={`/business/register/${params.id}`}
          >
            <CIcon name="cil-plus" /> Add business
          </CButton>
        </CCardHeader>
        <CCardBody>
         </CCardBody>

       </CCard>
    </>
    )
}

export default ClientDetail
