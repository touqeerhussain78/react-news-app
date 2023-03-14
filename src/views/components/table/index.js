import React from "react";

import TableHeader from "./components/Header.Table";
import TableBody from "./components/Body.Table";

export default function Table({ headings, data, children, isLoading }) {
  return (
    <div className="maain-tabble table-responsive">
      <table className="table table-bordered zero-configuration text-center">
        <TableHeader headings={headings} />
        <TableBody data={data} length={headings?.length} isLoading={isLoading}>
          {children}
        </TableBody>
      </table>
    </div>
  );
}
