import React, { Component } from "react";
import {
  Containner,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
  SubmitText,
} from "./ReusmeElements";

import axios from "axios";

class Reusme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      msg: false,
    };
  }
  //handle input
  handleName = (e) => {
    this.setState({ name: e.target.value });
  };
  handleEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  //end of handle inputs

  formSubmit = (e) => {
    e.preventDefault();
    let data = { email: this.state.email, name: this.state.name };
    axios
      .post("/api/forma", data)
      .then(this.setState({ msg: true }, this.resetForm()))
      .catch(() => {
        console.log("msg not sent");
      });
  };
  //for resting initial data

  resetForm = () => {
    this.setState({ name: "", email: "" });
    setTimeout(() => {
      this.setState({ msg: false });
    }, 3000);
  };

  render() {
    return (
      <Containner>
        <FormWrap>
          <Icon to="/">Googi</Icon>
          <FormContent>
            <Form onSubmit={this.formSubmit}>
              <FormH1>
                E-Mail와 간단한 정보 입력해주시면 보내드리도록 하겠습니다.
                감사합니다.
              </FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                type="email"
                name="email"
                placeholder="이메일을 입력해주세요."
                value={this.state.email}
                onChange={(e) => this.handleEmail(e)}
                required
              />
              <FormLabel htmlFor="for">성함 및 소속</FormLabel>
              <FormInput
                type="name"
                name="name"
                placeholder="성함이나 소속을 입력해주세요."
                value={this.state.name}
                onChange={(e) => this.handleName(e)}
                required
              />
              <FormButton type="submit">제출</FormButton>
              <SubmitText msg={this.state.msg}>제출 되었습니다.</SubmitText>
            </Form>
          </FormContent>
          <Text>Copyright © 2020 Googi All Rights Reserved.</Text>
        </FormWrap>
      </Containner>
    );
  }
}
export default Reusme;
