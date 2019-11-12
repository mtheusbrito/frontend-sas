import React from "react";
import { Container, SignForm } from "./styles";
import Button from "~/styles/components/Button.js";
class SignIn extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {

    e.preventDefault();
    const {email, password} = this.state;


    //função email password
     
  }
  render() {
    const { email, password } = this.state;
    return (
      <Container>
        <SignForm onSubmit={this.handleSubmit}>
          <h1>Boas vindas</h1>
          <span>Email</span>
          <input type="email" name="email" value={email} onChange={this.handleInputChange}/>
          <span> Senha</span>
          <input type="password" name="password" value={password} onChange={this.handleInputChange} />
          <Button size="big" type="submit" >
            Entrar
          </Button>
        </SignForm>
      </Container>
    );
  }
}

export default SignIn;
