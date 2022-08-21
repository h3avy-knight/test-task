import React from "react";
import { useSelector } from "react-redux";
const Table = () => {
  const data = useSelector((state) => state.appSliceReducer.value);
  return (
    <div>
      <hr />
      <table className="table py-2">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Date of Birth </th>
            <th scope="col">Sex</th>
          </tr>
        </thead>
        {data.map((el) => (
          <tbody style={{ padding: "50px" }} key={el.index}>
            <tr style={{ alignItems: "center" }}>
              <td>
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  {el.values.name}
                </p>
              </td>
              <td>
                <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                  {el.values.dateOfBirth}
                </p>
              </td>
              <td>
                <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                  {el.values.sex}
                </p>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Table;
``;
