import React from "react";
import { Container, SignForm } from "./styles";
import Button from "~/styles/components/Button.js";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import AuthActions from "~/store/ducks/auth";
import PropTypes from "prop-types";

class SignIn extends React.Component {
  static propTypes = {
    signInRequest: PropTypes.func.isRequired
  };
  state = {
    email: "",
    password: ""
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const { signInRequest } = this.props;

    signInRequest(email, password);
    // //função email password

    console.log("Teste");
  };

  render() {
    const { email, password } = this.state;
    return (
      <Container>
        <SignForm onSubmit={this.handleSubmit}>
          <h1>Boas vindas</h1>
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleInputChange}
          />
          <span>Senha</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleInputChange}
          />
          <Button size="big" type="submit" onClick={this.handleSubmit}>
            Entrar
          </Button>
        </SignForm>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(AuthActions, dispatch);
export default connect(null, mapDispatchToProps)(SignIn);
