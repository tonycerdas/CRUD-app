import React, { useState, useEffect } from "react";
import "../css/tableComponent.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
import RowTableComponent from "./RowTableComponent";

export default function FormComponent({ data, setDatabase }) {
  const [objDelete, setObjDelete] = useState({});
  const [objUpdate, setObjUpdate] = useState({});

  useEffect(() => {
    setDatabase(
      data.map((el) =>
        el.id === objUpdate.id
          ? { ...el, name: objUpdate.name, age: objUpdate.age }
          : el
      )
    );
  }, [objUpdate]);

  useEffect(() => {
    setDatabase(data.filter((ele) => ele.id !== objDelete.id));
  }, [objDelete]);

  return (
    <>
      <Table striped bordered hover variant="dark" className="table">
        <thead>
          <tr>
            <th>Identification</th>
            <th>Full Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <>
              <tr>
                <td>---</td>
                <td>---</td>
                <td>---</td>
                <td>---</td>
              </tr>
            </>
          ) : (
            data.map((ele) => (
              <RowTableComponent
                key={ele.id}
                obj={ele}
                setObjDelete={setObjDelete}
                setObjUpdate={setObjUpdate}
              ></RowTableComponent>
            ))
          )}
        </tbody>
      </Table>
    </>
  );
}
