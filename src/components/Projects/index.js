import React from "react";
import { connect } from "react-redux";
import { Container, Project } from "./styles";
import Button from "~/styles/components/Button";
import PropTypes from 'prop-types';

const Projects = ({ activeTeam }) => {
  if (!activeTeam) return null;
  return (
    <Container>
      <header>
        <h1>{activeTeam.name}</h1>
        <div>
          <Button
            onClick={() => {
              console.log("Novo");
            }}
          >
            + Novo
          </Button>
          <Button
            onClick={() => {
              console.log("Membros");
            }}
          >
            {" "}
            Membros
          </Button>
        </div>
      </header>

      <Project>
        <p>Aplicação com React Native</p>
      </Project>
      <Project>
        <p>Aplicação com React Native</p>
      </Project>
      <Project>
        <p>Aplicação com React Native</p>
      </Project>
      <Project>
        <p>Aplicação com React Native</p>
      </Project>
      <Project>
        <p>Aplicação com React Native</p>
      </Project>
      <Project>
        <p>Aplicação com React Native</p>
      </Project>
      <Project>
        <p>Aplicação com React Native</p>
      </Project>
      <Project>
        <p>Aplicação com React Native</p>
      </Project>
    </Container>
  );
};

Projects.propTypes = { 
  activeTeam: PropTypes.shape({
    name: PropTypes.string
  }).isRequired,
}
const mapStateToProps = state => ({
  activeTeam: state.teams.active
});
export default connect(mapStateToProps)(Projects);
