import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, TeamList, Team, NewTeam } from "./styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TeamsActions from "~/store/ducks/teams";

import Button from '~/styles/components/Button';
import Modal from '~/components/Modal';
class TeamSwitcher extends Component {
  static propTypes = {
    getTeamsRequest: PropTypes.func.isRequired,
    selectTeam: PropTypes.func.isRequired,
    
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
  componentDidMount() {
    const { getTeamsRequest } = this.props;
    getTeamsRequest();
  }
  handleSelect = team => {
    const { selectTeam} = this.props;
    selectTeam(team);
  }
  render() {
    const { teams, openTeamModal, closeTeamModal } = this.props;

    return (
      <Container>
        <TeamList>
          {teams.data.map(team => (
            <Team key={team.id} onClick={()=> this.handleSelect(team)}>
              <img
                alt={team.name}
                src={`https://ui-avatars.com/api/?font-size=0.33&background=7159c1&color=fff&name=${team.name}`}
              ></img>
            </Team>
          ))}
        </TeamList>
        <NewTeam onClick={openTeamModal}>
          NOVO 
        </NewTeam>
        { teams.teamModalOpen && (
          <Modal>
            <h1>Criar time</h1>
            <form onSubmit={()=> {}}>
              <span>Nome</span>  
              <input type='text' name="newTeam"/>

              <Button size="big" type='submit'>Salvar</Button>
              <Button size = "small" color="gray" onClick={closeTeamModal}>Cancelar</Button>
            </form>
          </Modal>
        ) }
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
