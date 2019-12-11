import React from "react";
import api from "~/services/api";
import TeamSwitcher from "~/components/TeamSwitcher";
import { Container } from "./styles";
class Main extends React.Component {
  componentDidMount() {
    api.get("/teste");
  }
  render() {
    return (
      <Container>
        <TeamSwitcher />
      </Container>
    );
  }
}

export default Main;
