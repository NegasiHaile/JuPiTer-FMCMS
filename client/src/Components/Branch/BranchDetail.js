import React from "react";
import { useParams } from "react-router-dom";

function BranchDetail() {
  const params = useParams();
  return (
    <div>
      <h2>
        {params.id} In this page everything about the branch is goning to be
        display!
      </h2>
    </div>
  );
}

export default BranchDetail;
