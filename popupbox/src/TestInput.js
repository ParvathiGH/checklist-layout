import React from "react";
import { InputGroup,FormGroup, FormControl } from "react-bootstrap";

export default class TestInput extends React.Component {


  handleKeyPress() {
      alert('Enter clicked!!!');
    }
  

  render() {
    return (
      <FormGroup>

        <InputGroup>
          <FormControl
            placeholder="Press Enter"
            type="input"
            onKeyPress={event => {
              if (event.key === "Enter") {
                this.handleKeyPress();
              }
            }}
          />
        </InputGroup>

      </FormGroup>
    );
  }
}
