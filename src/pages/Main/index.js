import React from "react";
import TeamSwitcher from "~/components/TeamSwitcher";
import { Container } from "./styles";
class Main extends React.Component {
  render() {
    return (
      <Container>
        <TeamSwitcher />
      </Container>
    );
  }
}

export default Main;
