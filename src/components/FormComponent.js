import React, { useState } from "react";
import '../css/formComponent.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";

const initialForm = {
  id: "",
  name: "",
  age: "",
};

export default function FormComponent({ create }) {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form, //concatenacion de lo que tenía el form mas lo nuevo
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.id || !form.name || !form.age) {
      alert("Empty data");
    } else {
      create(form);
    }
    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className="form-section">
        <Form.Group className="mb-3" controlId="formBasicId">
          <Form.Label>Identification</Form.Label>
          <Form.Control
            name="id"
            type="id"
            placeholder="Id"
            onChange={handleChange}
            value={form.id}
            className="text-space"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            type="name"
            placeholder="Name"
            onChange={handleChange}
            value={form.name}
            className="text-space"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Label>Age</Form.Label>
          <Form.Control
            name="age"
            type="age"
            placeholder="Age"
            onChange={handleChange}
            value={form.age}
            className="text-space"
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
        <Button variant="danger" type="button" className="clean-btn" onClick={handleReset}>
          Clean
        </Button>
      </Form>
    </>
  );
}
