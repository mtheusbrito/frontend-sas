import React from "react";
import TeamSwitcher from "~/components/TeamSwitcher";
import { Container } from "./styles";
import Projects from '~/components/Projects';
class Main extends React.Component {
  render() {
    return (
      <Container>
        <TeamSwitcher />
        <Projects/>
      </Container>
    );
  }
}

export default Main;
