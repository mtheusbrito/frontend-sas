import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, TeamList, Team, NewTeam } from "./styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TeamsActions from "~/store/ducks/teams";

import Button from "~/styles/components/Button";
import Modal from "~/components/Modal";
class TeamSwitcher extends Component {
  static propTypes = {
    getTeamsRequest: PropTypes.func.isRequired,
    selectTeam: PropTypes.func.isRequired,
    createTeamRequest: PropTypes.func.isRequired,
    openTeamModal: PropTypes.func.isRequired,
    closeTeamModal: PropTypes.func.isRequired,

    teams: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string
        })
      )
    })
  };

  state = {
    newTeam: ""
  };
  componentDidMount() {
    const { getTeamsRequest } = this.props;
    getTeamsRequest();
  }
  handleSelect = team => {
    const { selectTeam } = this.props;
    selectTeam(team);
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value});
  };

  handleCreateTeam = (e) => {
    e.preventDefault();
    const {newTeam} = this.state;
    const { createTeamRequest }  = this.props;
    createTeamRequest(newTeam);
    console.log(newTeam);
  }
  render() {
    const { teams, openTeamModal, closeTeamModal } = this.props;
    const { newTeam } = this.state;

    return (
      <Container>
        <TeamList>
          {teams.data.map(team => (
            <Team key={team.id} onClick={() => this.handleSelect(team)}>
              <img
                alt={team.name}
                src={`https://ui-avatars.com/api/?font-size=0.33&background=7159c1&color=fff&name=${team.name}`}
              ></img>
            </Team>
          ))}
        </TeamList>
        <NewTeam onClick={openTeamModal}>NOVO</NewTeam> 
        {teams.teamModalOpen && (
          <Modal>
            <h1>Criar time</h1>
            <form onSubmit={this.handleCreateTeam}>
              <span>Nome</span>
              <input
                type="text"
                name="newTeam"
                value={newTeam}
                onChange={this.handleInputChange}
              />

              <Button size="big" type="submit">
                Salvar
              </Button>
              <Button size="small" color="gray" onClick={closeTeamModal}>
                Cancelar
              </Button>
            </form>
          </Modal>
        )}
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  teams: state.teams
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(TeamsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TeamSwitcher);
