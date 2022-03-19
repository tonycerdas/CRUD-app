import React, { useState, useEffect } from "react";
import FormComponent from "./FormComponent";
import TableComponent from "./TableComponent";

const PersonData = [
  {
    id: 402410478,
    name: "Anthony Cerdas Chacón",
    age: 23,
  },
  {
    id: 102410478,
    name: "Ana María Araya",
    age: 25,
  },
  {
    id: 302410478,
    name: "Mateo Alvarado Chacón",
    age: 9,
  },
  {
    id: 502410478,
    name: "Yoryi Soto Kiewith",
    age: 48,
  },
];

export default function CrudApp(params) {
  const [database, setDatabase] = useState(PersonData);

  useEffect(() => {
    console.log(database);
  }, [database])
  
  const createData = (obj) => {
    setDatabase([...database, obj]);
  };

  return (
    <>
      <FormComponent create={createData}></FormComponent>
      <TableComponent
        data={database}
        setDatabase={setDatabase}
      ></TableComponent>
    </>
  );
}
