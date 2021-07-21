import React, { useContext, useState } from "react";
import axios from "axios";
import {
  CButton,
  CCard,
  CCardHeader,
  CCardBody,
  CCardFooter,
  CCol,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import { GlobalState } from "../../GlobalState";
const ChangePassword = () => {
  const id = "60f51308b15a3928ac5cfdd2";
  const state = useContext(GlobalState);
  const [token] = state.token;
  const [Password, setPassword] = useState({
    oldPassword: "",
    newPassword: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setPassword({ ...Password, [name]: value });
  };

  const onSubmitChangePassword = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `/user/change_password/${id}`,
        {
          ...Password,
        },
        { headers: { Authorization: token } }
      );
      alert(Password.oldPassword);
    } catch (error) {
      alert(error.response.data.msg);
    }
  };
  return (
    <CRow className="d-flex justify-content-center">
      <CCol xs="12" md="9" lg="7" xl="6">
        <CCard className="mx-4 shadow">
          <CCardHeader>
            <h5 className="text-muted">Change your password</h5>
          </CCardHeader>
          <CCardBody className="p-4">
            <CForm onSubmit={onSubmitChangePassword}>
              <CInputGroup className="mb-3">
                <CInputGroupPrepend>
                  <CInputGroupText>
                    <CIcon name="cil-lock-unlocked" />
                  </CInputGroupText>
                </CInputGroupPrepend>
                <CInput
                  type="password"
                  name="oldPassword"
                  placeholder="old password"
                  autoComplete="oldPassword"
                  onChange={onChangeInput}
                  value={Password.oldPassword}
                  required
                />
              </CInputGroup>
              <CInputGroup className="mb-3">
                <CInputGroupPrepend>
                  <CInputGroupText>
                    <CIcon name="cil-lock-locked" />
                  </CInputGroupText>
                </CInputGroupPrepend>
                <CInput
                  type="password"
                  name="newPassword"
                  placeholder="New Password"
                  autoComplete="new-password"
                  onChange={onChangeInput}
                  value={Password.newPassword}
                  required
                />
              </CInputGroup>
              <CInputGroup className="mb-4">
                <CInputGroupPrepend>
                  <CInputGroupText>
                    <CIcon name="cil-lock-locked" />
                  </CInputGroupText>
                </CInputGroupPrepend>
                <CInput
                  type="password"
                  placeholder="Repeat new password"
                  autoComplete="new-password"
                  required
                />
              </CInputGroup>
              <CButton type="submit" color="success" block>
                Change Password
              </CButton>
            </CForm>
          </CCardBody>
          <CCardFooter className="p-4"></CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default ChangePassword;
