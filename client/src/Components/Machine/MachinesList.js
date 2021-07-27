import React, { useState, useContext } from "react";
import axios from "axios";
import { GlobalState } from "../../GlobalState";
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
import CIcon from "@coreui/icons-react";
import Swal from "sweetalert2";

const machineDetail = {
  serialNumber: "",
  machineModel: "",
  brand: "",
  price: "",
  branch: "60e004d012f47733a9b2c04c",
  problemStatus: "",
  // for distributing
  businessId: "",
};

const MachinesList = () => {
  const state = useContext(GlobalState);
  const [token] = state.token;
  const [machine, setMachine] = useState(machineDetail);
  const [machines] = state.MachineAPI.machines;
  const [callback, setCallback] = state.MachineAPI.callback;
  const [activemachine, setActivemachine] = useState("none");
  const [showModal, setShowModal] = useState(false);
  const [machineStatus, setMachineStatus] = useState("fine");
  const [distributingMachineId, setDistributingMachineId] = useState("none");
  const [showMachineDistributeModal, setShowMachineDistributeModal] =
    useState(false);
  const [businesses] = state.BusinessAPI.businesses;

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setMachine({ ...machine, [name]: value });
  };
  const onSubmitRegisterMachine = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/machine/register", { ...machine });
      Swal.fire({
        position: "center",
        background: "#EBEDEF", // 2EB85C success // E55353 danger // 1E263C sidebar
        icon: "success",
        text: res.data.msg,
        confirmButtonColor: "#1E263C",
        showConfirmButton: false,
        // timer: 1500,
      });
      setShowModal(!showModal);
      setCallback(!callback);
    } catch (error) {
      Swal.fire({
        position: "center",
        background: "#EBEDEF", // 2EB85C success // E55353 danger // 1E263C sidebar
        icon: "error",
        text: error.response.data.msg,
        confirmButtonColor: "#1E263C",
        showConfirmButton: false,
        // timer: 1500,
      });
    }
  };
  const editmachineDetail = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `/machine/edit/${activemachine}`,
        { ...machine },
        {
          headers: { Authorization: token },
        }
      );
      Swal.fire({
        position: "top-center",
        background: "#EBEDEF", // 2EB85C success // E55353 danger // 1E263C sidebar
        icon: "success",
        text: res.data.msg,
        showConfirmButton: false,
        // timer: 1500,
      });
      setShowModal(!showModal);
      setCallback(!callback);
    } catch (error) {
      Swal.fire({
        position: "top-center",
        background: "#EBEDEF", // 2EB85C success // E55353 danger // 1E263C sidebar
        icon: "error",
        text: error.response.data.msg,
        showConfirmButton: false,
        // timer: 1500,
      });
    }
  };
  const deletemachine = async (_id, serialNumber) => {
    // e.preventDefault();
    try {
      Swal.fire({
        title: "Delete?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#1E263C",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await axios.delete(`/machine/delete/${_id}`, {
            headers: { Authorization: token },
          });
          Swal.fire("Deleted!", res.data.msg, "success");
          setCallback(!callback);
        }
      });
    } catch (error) {
      Swal.fire({
        position: "center",
        background: "#EBEDEF", // 2EB85C success // E55353 danger // 1E263C sidebar
        icon: "error",
        text: error.response.data.msg,
        confirmButtonColor: "#1E263C",
        showConfirmButton: false,
        // timer: 1500,
      });
    }
  };

  const distributeMachine = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/machine/distribute", {
        ...machine,
        machineId: distributingMachineId,
      });
      Swal.fire({
        position: "center",
        background: "#EBEDEF", // 2EB85C success // E55353 danger // 1E263C sidebar
        icon: "success",
        text: res.data.msg,
        confirmButtonColor: "#1E263C",
        showConfirmButton: false,
        // timer: 1500,
      });
      setShowMachineDistributeModal(!showMachineDistributeModal);
      setCallback(!callback);
    } catch (error) {
      Swal.fire({
        position: "center",
        background: "#EBEDEF", // 2EB85C success // E55353 danger // 1E263C sidebar
        icon: "error",
        text: error.response.data.msg,
        confirmButtonColor: "#1E263C",
        showConfirmButton: false,
        // timer: 1500,
      });
    }
  };
  const machineTablefields = [
    "serialNumber",
    "machineModel",
    "brand",
    "bussiness",
    "problemStatus",
    "salesStatus",
    "Actions",
  ];
  return (
    <>
      <CCard className=" shadow-sm">
        <CCardHeader className="d-flex justify-content-between">
          <CLabel>Jupiter all machine list</CLabel>
          <CButton
            size="sm"
            color="dark"
            onClick={() => {
              setActivemachine("none");
              setMachine({ machine, ...machineDetail });
              setShowModal(!showModal);
            }}
          >
            <CIcon name="cil-plus" /> Add Machine
          </CButton>
        </CCardHeader>
        <CCardBody>
          <CDataTable
            items={machines}
            fields={machineTablefields}
            tableFilter
            columnFilter
            itemsPerPageSelect
            itemsPerPage={10}
            hover
            cleaner
            sorter
            pagination
            scopedSlots={{
              Actions: (machine) => (
                <td className="d-flex justify-content-between">
                  <CLink
                    className="text-success"
                    onClick={() => {
                      setMachine({ machine, ...machine });
                      setActivemachine(machine._id);
                      setShowModal(!showModal);
                    }}
                  >
                    <CTooltip
                      content={`Edit the  - ${machine.serialNumber}- machine detail.`}
                    >
                      <CIcon name="cil-pencil" />
                    </CTooltip>
                  </CLink>

                  {machine.salesStatus !== "sold" ? (
                    <>
                      <span className="text-muted">|</span>
                      <CLink
                        className="text-danger"
                        onClick={() => deletemachine(machine._id)}
                      >
                        <CTooltip
                          content={`Delete - ${machine.serialNumber}- machine.`}
                        >
                          <CIcon name="cil-trash" />
                        </CTooltip>
                      </CLink>
                      <span className="text-muted">|</span>
                      <CLink
                        className="text-primary"
                        onClick={() => {
                          setDistributingMachineId(machine._id);
                          setShowMachineDistributeModal(
                            !showMachineDistributeModal
                          );
                        }}
                      >
                        <CTooltip
                          content={`Distribut this - ${machine.serialNumber}- machine.`}
                        >
                          <CIcon name="cil-control" />
                        </CTooltip>
                      </CLink>
                    </>
                  ) : (
                    ""
                  )}
                </td>
              ),
            }}
          />
        </CCardBody>

        {/* register machine modal */}
        <CModal
          size="lg"
          show={showModal}
          onClose={() => setShowModal(!showModal)}
        >
          <CModalHeader closeButton>
            <CModalTitle className="text-muted">Open-New-machine</CModalTitle>
          </CModalHeader>
          <CForm onSubmit={onSubmitRegisterMachine}>
            <CModalBody>
              <CRow>
                <CCol xs="12" md="6">
                  <CFormGroup>
                    Serial Number
                    <CInput
                      id="serialNumber"
                      name="serialNumber"
                      placeholder="Enter serial number."
                      value={machine.serialNumber}
                      onChange={onChangeInput}
                      required
                    />
                  </CFormGroup>
                </CCol>
                <CCol xs="12" md="6">
                  <CFormGroup>
                    Model
                    <CInput
                      id="machineModel"
                      name="machineModel"
                      placeholder="Enter machine model."
                      value={machine.machineModel}
                      onChange={onChangeInput}
                      required
                    />
                  </CFormGroup>
                </CCol>

                <CCol xs="12" md="4">
                  <CFormGroup>
                    Brand
                    <CInput
                      id="brand"
                      name="brand"
                      placeholder="Enter brand."
                      value={machine.brand}
                      onChange={onChangeInput}
                    />
                  </CFormGroup>
                </CCol>
                <CCol xs="12" md="4">
                  <CFormGroup>
                    Price
                    <CInput
                      id="price"
                      name="price"
                      placeholder="Enter price."
                      value={machine.price}
                      onChange={onChangeInput}
                      required
                    />
                  </CFormGroup>
                </CCol>
                <CCol xs="12" md="4">
                  <CFormGroup>
                    Machine status
                    <CSelect
                      aria-label="Default select example"
                      id="problemStatus"
                      name="problemStatus"
                      onChange={onChangeInput}
                      value={machine.problemStatus}
                      required
                    >
                      <option value="">Select machine status...</option>
                      <option value="fine">Fine</option>
                      <option value="damaged">Damaged</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
              </CRow>
            </CModalBody>
            <CModalFooter>
              {activemachine === "none" ? (
                <CButton type="submit" size="sm" color="dark">
                  <CIcon name="cil-save" /> Register machine
                </CButton>
              ) : (
                <CButton size="sm" color="dark" onClick={editmachineDetail}>
                  <CIcon name="cil-pencil" /> Save Changes
                </CButton>
              )}
              <CButton
                size="sm"
                color="danger"
                onClick={() => setShowModal(!showModal)}
              >
                <CIcon name="cil-x" /> Close
              </CButton>
            </CModalFooter>
          </CForm>
        </CModal>

        {/* Distribute machine modal */}
        <CModal
          show={showMachineDistributeModal}
          onClose={() => setShowModal(!showMachineDistributeModal)}
        >
          <CModalHeader closeButton>
            <CModalTitle className="text-muted">Distribute-machine</CModalTitle>
          </CModalHeader>
          <CForm onSubmit={distributeMachine}>
            <CModalBody>
              <CRow>
                <CCol md="6">
                  <CFormGroup>
                    Machine Id
                    <CSelect
                      aria-label="Default select example"
                      id="machineId"
                      name="machineId"
                      onChange={onChangeInput}
                      required
                    >
                      <option value={distributingMachineId}>
                        {distributingMachineId}
                      </option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol md="6">
                  <CFormGroup>
                    To wich business
                    <CSelect
                      aria-label="Default select example"
                      id="businessId"
                      name="businessId"
                      onChange={onChangeInput}
                      value={machine.businessId}
                      required
                    >
                      <option value="">Select business...</option>
                      {businesses
                        .filter(
                          (bussiness) =>
                            bussiness.machine === "unassigned" &&
                            bussiness.credentials === "Accepted"
                        )
                        .map((filteredBussiness) => (
                          <option
                            value={filteredBussiness._id}
                            key={filteredBussiness._id}
                          >
                            {filteredBussiness.businessName}
                          </option>
                        ))}
                    </CSelect>
                    <small className="text-muted">
                      If the business is not in the list it may be assigned a
                      mchine or not registered yet!
                    </small>
                  </CFormGroup>
                </CCol>
              </CRow>
            </CModalBody>
            <CModalFooter>
              <CButton type="submit" size="sm" color="dark">
                <CIcon name="cil-fullscreen" /> Distribute
              </CButton>
              <CButton
                size="sm"
                color="danger"
                onClick={() =>
                  setShowMachineDistributeModal(!showMachineDistributeModal)
                }
              >
                <CIcon name="cil-x" /> Close
              </CButton>
            </CModalFooter>
          </CForm>
        </CModal>
      </CCard>
    </>
  );
};

export default MachinesList;
