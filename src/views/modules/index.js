import React from "react";
import Table from "../components/table";

export default function App() {
  return <div>Table</div>;
}

export function CustomTable() {
  const DUMMYDATA = [
    {
      firstName: "Touqeer",
      lastName: "Hussain",
      email: "touqeerh7@gmail.com",
      organization: "abc",
    },
  ];

  return (
    <div>
      <Table
        headings={["S. No", "First Name", "Last Name", "Email", "Organization", ""]}
        //   perPage={perPage}
        //   setPerPage={setPerPage}
        //   totalPages={data?.data?.logs?.totalPages}
        //   setPage={setPage}
        data={DUMMYDATA}
      >
        <tbody className="orange-bg p-3">
          {DUMMYDATA?.map((el, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{el?.firstName}</td>
              <td>{el?.lastName}</td>
              <td>{el?.email}</td>
              <td>12/03/2022</td>
              <td>
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn transparent-btn ellipsis-btn"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fa fa-ellipsis-v" />
                  </button>
                  <div className="dropdown-menu text-left custom-dropdown" x-placement="bottom-start">
                    <button className="dropdown-item">
                      <i className="far fa-eye" />
                      Unsubscribe
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
