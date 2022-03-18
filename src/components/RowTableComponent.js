import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ButtonGroup, Button } from "react-bootstrap";

export default function RowTableComponent({ obj, setObjDelete, setObjUpdate }) {
  const [cell, setCell] = useState("false");

  const handleUpdate = (e) => {
    setCell("true");
  };

  const handleDelete = (e) => {
    setCell("false");
    setObjDelete(obj);
  };

  const handleSave = (e) => {
    setCell("false");
    setObjUpdate(obj);
  };

  const setObjProperties = (e) => {
    setObjUpdate({
      ...obj, //concatenacion de lo que tenía obj mas lo nuevo
      [e.target.headers]: e.target.innerText,
    });
  };

  return (
    <>
      <tr>
        <td>{obj.id}</td>
        <td
          headers="name"
          contentEditable={cell}
          suppressContentEditableWarning={true}
          onKeyUp={setObjProperties}
        >
          {obj.name}
        </td>
        <td
          headers="age"
          contentEditable={cell}
          suppressContentEditableWarning={true}
          onKeyUp={setObjProperties}
        >
          {obj.age}
        </td>
        <td>
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" onClick={handleUpdate}>
              Edit
            </Button>
            <Button variant="secondary" onClick={handleDelete}>
              Delete
            </Button>
            <Button variant="secondary" onClick={handleSave}>
              Save
            </Button>
          </ButtonGroup>
        </td>
      </tr>
    </>
  );
}
