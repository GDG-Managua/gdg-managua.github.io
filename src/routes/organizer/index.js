import { h, Component } from "preact";
import axios from "axios";
import Card from 'preact-material-components/Card';
import LayoutGrid from 'preact-material-components/LayoutGrid';

import Header from "../../components/header";
import 'preact-material-components/Card/style.css';
import 'preact-material-components/LayoutGrid/style.css';
import style from "./style";

const API = 'https://api.meetup.com/2/members?offset=0&format=json&group_id=23332296&photo-host=public&page=20&order=name&sig_id=118186962&sig=b0a32ff1eb86c9582e9f7dcb48e8f44bf7aa55b8'

export default class Organizer extends Component {

  state = {
    members: []
  }

  componentWillMount() {
    axios.get(API)
      .then( response => {
        const members = [];
        response.data.results.forEach(member => {
          members.push({
            id: member.id,
            name: member.name,
            profile: member.link,
            thumb: member.hasOwnProperty('photo') ? member.photo.thumb_link : 'https://secure.meetupstatic.com/photos/event/1/e/8/2/600_458827810.jpeg'
          });
        });
        this.setState({ members });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const MemberList = [];
    this.state.members.forEach((member, index) => {
      if (index === 12 || index === 20) {
        MemberList.push(
          <LayoutGrid.Cell cols="2" key={index}>
          </LayoutGrid.Cell>
        )
      };
      MemberList.push(
        <LayoutGrid.Cell cols="1" key={member.id}>
          <a href={member.profile} target="_blank">
            <img src={member.thumb} alt={member.name} className={style.member} width="50" height="50" />
          </a>
        </LayoutGrid.Cell>
      )
    });
    return (
      <div>
        <Header />
        <h1 className={style.title}>Organizers</h1>
        <LayoutGrid>
          <LayoutGrid.Inner>
            <LayoutGrid.Cell cols="3">
              <Card>
                <Card.Media className={`card-media ${style.card_oscar}`} />
                <Card.Actions className={style.card_actions}>
                  <p>Oscar Cortez</p>
                </Card.Actions>
              </Card>
            </LayoutGrid.Cell>
            <LayoutGrid.Cell cols="3">
              <Card>
                <Card.Media className={`card-media ${style.card_jonathan}`} />
                <Card.Actions className={style.card_actions}>
                  <p>Jonathan Guadamuz</p>
                </Card.Actions>
              </Card>
            </LayoutGrid.Cell>
            <LayoutGrid.Cell cols="3">
              <Card>
                <Card.Media className={`card-media ${style.card_marcos}`} />
                <Card.Actions className={style.card_actions}>
                  <p>Marcos Sevilla</p>
                </Card.Actions>
              </Card>
            </LayoutGrid.Cell>
            <LayoutGrid.Cell cols="3">
              <Card>
                <Card.Media className={`card-media ${style.card_andrea}`} />
                <Card.Actions className={style.card_actions}>
                  <p>Andrea Olivera</p>
                </Card.Actions>
              </Card>
            </LayoutGrid.Cell>
          </LayoutGrid.Inner>
        </LayoutGrid>
        <h2 className={style.title}>Members</h2>
        <LayoutGrid>
          <LayoutGrid.Inner>
            { MemberList }
          </LayoutGrid.Inner>
        </LayoutGrid>
      </div>
    )
  }
}
