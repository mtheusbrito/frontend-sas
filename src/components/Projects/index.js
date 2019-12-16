import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Project } from "./styles";
import Button from "~/styles/components/Button";
import PropTypes from "prop-types";
import {bindActionCreators} from 'redux';
import ProjectsActions from '~/store/ducks/projects';

class Projects extends Component {

static propTypes = {
  getProjectsRequest: PropTypes.func.isRequired,
  activeTeam: PropTypes.shape({
    name: PropTypes.string
  }).isRequired
};
componentDidMount(){
  const { getProjectsRequest, activeTeam } = this.props;
  if (activeTeam ){
    getProjectsRequest();
  }
}

render() {
  const { activeTeam, projects } = this.props
    if (!activeTeam) return null;
    return (
      <Container>
        <header>
          <h1>{activeTeam.name}</h1>
          <div>
            <Button onClick={() => {console.log("Novo");}}>+ Novo</Button>
            <Button onClick={() => {console.log("Membros");}}>Membros</Button>
          </div>
        </header>

        {projects.data.map(project => (
          <Project key={project.id}>
            <p>{project.title}</p>
          </Project>
        ) )}
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(ProjectsActions, dispatch);

  const mapStateToProps = state => ({
  activeTeam: state.teams.active,
  projects: state.projects, 
});
export default connect(mapStateToProps, mapDispatchToProps)(Projects);
