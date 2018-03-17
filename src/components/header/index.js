import { h, Component } from "preact";
import { route } from "preact-router";
import Toolbar from "preact-material-components/Toolbar";
import Drawer from "preact-material-components/Drawer";
import List from "preact-material-components/List";
import Dialog from "preact-material-components/Dialog";
import Switch from "preact-material-components/Switch";
import "preact-material-components/Switch/style.css";
import "preact-material-components/Dialog/style.css";
import "preact-material-components/Drawer/style.css";
import "preact-material-components/List/style.css";
import "preact-material-components/Toolbar/style.css";
import style from './style';

export default class Header extends Component {

  componentDidMount() {
    this.drawer.MDComponent.open = false;
  }

  drawerRef = drawer => (this.drawer = drawer);

  openDrawer = () => (this.drawer.MDComponent.open = true);

  linkTo = path => () => {
    route(path);
  };

  goToHome = this.linkTo("/");

  goToEvents = this.linkTo("/events");

  goToOrganizers = this.linkTo("/organizers");

  goToSponsors = this.linkTo("/sponsors");

  render() {
    return (
      <div>
        <Toolbar className={style.toolbar}>
          <Toolbar.Row>
            <Toolbar.Section align-start>
              <Toolbar.Icon menu onClick={this.openDrawer}>
                menu
              </Toolbar.Icon>
              <Toolbar.Title>GDG Managua</Toolbar.Title>
            </Toolbar.Section>
          </Toolbar.Row>
        </Toolbar>
        <Drawer.TemporaryDrawer ref={this.drawerRef}>
          <Drawer.TemporaryDrawerContent>
            <List>
              <List.LinkItem onClick={this.goToHome}>
                <List.ItemIcon>home</List.ItemIcon>
                Home
              </List.LinkItem>
              <List.LinkItem onClick={this.goToEvents}>
                <List.ItemIcon>account_circle</List.ItemIcon>
                Events
              </List.LinkItem>
              <List.LinkItem onClick={this.goToOrganizers}>
                <List.ItemIcon>account_circle</List.ItemIcon>
                Organizers
              </List.LinkItem>
              <List.LinkItem onClick={this.goToSponsors}>
                <List.ItemIcon>account_circle</List.ItemIcon>
                Sponsors
              </List.LinkItem>
            </List>
          </Drawer.TemporaryDrawerContent>
        </Drawer.TemporaryDrawer>
      </div>
    );
  }
}
