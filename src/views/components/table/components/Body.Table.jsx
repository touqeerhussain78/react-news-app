import React from "react";

export default function TableBodyHandler({ data, length, isLoading, children }) {
  return (
    <>
      {isLoading && (
        <tbody>
          <tr>
            <td colSpan={length} style={{ textAlign: "center" }}>
              <i className="fas fa-circle-notch fa-spin" style={{ fontSize: 42 }}></i>
            </td>
          </tr>
        </tbody>
      )}
      {data?.length === 0 && (
        <tbody>
          <tr>
            <td colSpan={length} style={{ textAlign: "center" }}>
              No Records Found
            </td>
          </tr>
        </tbody>
      )}
      {children}
    </>
  );
}
