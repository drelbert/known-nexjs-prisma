import React, { FunctionComponent } from "react";

export type LeadProps = {
  id: number;
  name: string;
  email: string;
};

const Lead: FunctionComponent<{ lead: LeadProps }> = ({ lead }) => {
  return (
    <li>
      {lead.name} {lead.id}
    </li>
  );
};

export default Lead;
