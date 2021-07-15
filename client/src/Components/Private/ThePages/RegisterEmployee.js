import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow,
  CSwitch
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { DocsLink } from '../../../reusable'

const RegisterEmployee = () => {
  const [collapsed, setCollapsed] = React.useState(true)
  const [showElements, setShowElements] = React.useState(true)

  return (
    <>
      <CRow>
      <CCol xs="12">
      <CCard>
  <CCardBody>This is some text within a card body.</CCardBody>
</CCard>
      </CCol>
        <CCol xs="12" sm="6">
          <CCard>
            <CCardHeader>
              Credit Card
              <small> Form</small>
              <DocsLink name="-Input"/>
            </CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="name">Name</CLabel>
                    <CInput id="name" placeholder="Enter your name" required />
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="12">
                  <CFormGroup>
                    <CLabel htmlFor="ccnumber">Credit Card Number</CLabel>
                    <CInput id="ccnumber" placeholder="0000 0000 0000 0000" required />
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="ccmonth">Month</CLabel>
                    <CSelect custom name="ccmonth" id="ccmonth">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="ccyear">Year</CLabel>
                    <CSelect custom name="ccyear" id="ccyear">
                      <option>2017</option>
                      <option>2018</option>
                      <option>2019</option>
                      <option>2020</option>
                      <option>2021</option>
                      <option>2022</option>
                      <option>2023</option>
                      <option>2024</option>
                      <option>2025</option>
                      <option>2026</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="cvv">CVV/CVC</CLabel>
                    <CInput id="cvv" placeholder="123" required/>
                  </CFormGroup>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs="12" sm="6">
          <CCard>
            <CCardHeader>
              Company
              <small> Form</small>
            </CCardHeader>
            <CCardBody>
              <CFormGroup>
                <CLabel htmlFor="company">Company</CLabel>
                <CInput id="company" placeholder="Enter your company name" />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="vat">VAT</CLabel>
                <CInput id="vat" placeholder="DE1234567890" />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="street">Street</CLabel>
                <CInput id="street" placeholder="Enter street name" />
              </CFormGroup>
              <CFormGroup row className="my-0">
                <CCol xs="8">
                  <CFormGroup>
                    <CLabel htmlFor="city">City</CLabel>
                    <CInput id="city" placeholder="Enter your city" />
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="postal-code">Postal Code</CLabel>
                    <CInput id="postal-code" placeholder="Postal Code" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="country">Country</CLabel>
                <CInput id="country" placeholder="Country name" />
              </CFormGroup>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <CRow>
        <CCol xs="12" sm="6">
          <CCard>
            <CCardHeader>
              Form
              <small> validation feedback</small>
            </CCardHeader>
            <CCardBody>
              <CFormGroup>
                <CLabel htmlFor="inputIsValid">Input is valid</CLabel>
                <CInput valid id="inputIsValid" />
                <CValidFeedback>Cool! Input is valid</CValidFeedback>
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="inputIsInvalid">Input is invalid</CLabel>
                <CInput invalid id="inputIsInvalid" />
                <CInvalidFeedback>Houston, we have a problem...</CInvalidFeedback>
              </CFormGroup>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <CRow>
        <CCol xs="12" md="4">
          <CCard>
            <CCardHeader>
              Button Groups
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" className="form-horizontal">
                <CFormGroup row>
                  <CCol md="12">
                    <CInputGroup>
                      <CInputGroupPrepend>
                        <CButton type="button" color="primary"><CIcon name="cil-magnifying-glass" /> Search</CButton>
                      </CInputGroupPrepend>
                      <CInput id="input1-group2" name="input1-group2" placeholder="Username" />
                    </CInputGroup>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="12">
                    <CInputGroup>
                      <CInput type="email" id="input2-group2" name="input2-group2" placeholder="Email" />
                      <CInputGroupAppend>
                        <CButton type="button" color="primary">Submit</CButton>
                      </CInputGroupAppend>
                    </CInputGroup>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="12">
                    <CInputGroup>
                      <CInputGroupPrepend>
                        <CButton type="button" color="primary"><CIcon name="cib-facebook" /></CButton>
                      </CInputGroupPrepend>
                      <CInput id="input3-group2" name="input3-group2" placeholder="Search" />
                      <CInputGroupAppend>
                        <CButton type="button" color="primary"><CIcon name="cib-twitter" /></CButton>
                      </CInputGroupAppend>
                    </CInputGroup>
                  </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" size="sm" color="success"><CIcon name="cil-scrubber" /> Submit</CButton>
              <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban" /> Reset</CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
      <CRow>

        <CCol xs="12" sm="4">
          <CCard>
            <CCardHeader>
              Example Form
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post">
                <CFormGroup>
                  <CInputGroup>
                    <CInputGroupPrepend>
                      <CInputGroupText><CIcon name="cil-user" /></CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput id="username1" name="username1" placeholder="Username" autoComplete="name"/>
                  </CInputGroup>
                </CFormGroup>
                <CFormGroup>
                  <CInputGroup>
                    <CInputGroupPrepend>
                      <CInputGroupText><CIcon name="cil-envelope-closed" /></CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="email" id="email1" name="email1" placeholder="Email" autoComplete="username"/>
                  </CInputGroup>
                </CFormGroup>
                <CFormGroup>
                  <CInputGroup>
                    <CInputGroupPrepend>
                      <CInputGroupText><CIcon name="cil-asterisk" /></CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password" id="password1" name="password1" placeholder="Password" autoComplete="current-password"/>
                  </CInputGroup>
                </CFormGroup>
                <CFormGroup className="form-actions">
                  <CButton type="submit" size="sm" color="success"><CIcon name="cil-scrubber" /> Submit</CButton>
                </CFormGroup>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default RegisterEmployee
