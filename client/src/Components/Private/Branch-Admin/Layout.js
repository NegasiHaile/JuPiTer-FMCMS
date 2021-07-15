import React from 'react'
import {BranchAdminSidbar, BranchAdminHeader, BranchAdminContent, PrivateFooter} from './Index'

const BranchAdminLayout = () => {

  return (
    <div className="c-app c-default-layout">
      <BranchAdminSidbar/>
      <div className="c-wrapper">
        <BranchAdminHeader/>
        <div className="c-body">
          <BranchAdminContent/>
        </div>
        <PrivateFooter/>
      </div>
    </div>
  )
}

export default BranchAdminLayout
