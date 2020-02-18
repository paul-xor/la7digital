import React, { Component } from "react";
import axios from "axios";
import { Form, Button, FormGroup, Input, Label } from "reactstrap";

export default class ContactFormTwo extends Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input type="text" name="name" onChange={this.handleChange} />
        </FormGroup>

        <FormGroup>
          <Label for="company">company:</Label>
          <Input type="text" name="company" onChange={this.handleChange} />
        </FormGroup>

        <FormGroup>
          <Label for="email">email:</Label>
          <Input type="email" name="email" onChange={this.handleChange} />
        </FormGroup>

        <FormGroup>
          <Label for="phone">phone:</Label>
          <Input type="text" name="phone" onChange={this.handleChange} />
        </FormGroup>

        <FormGroup>
          <Label for="message">message:</Label>
          <Input type="textarea" name="message" onChange={this.handleChange} />
        </FormGroup>

        <Button>Submit</Button>
      </Form>
    );
  }
}
