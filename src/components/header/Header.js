import React from "react";
import { withRouter } from "react-router";
import { Menu, Icon, Header as HeaderText } from 'semantic-ui-react'

const Header = () => {
    return (
      <Menu fluid text>
        <Menu.Menu position='left'>
          <HeaderText size='small' color='green'>
            <Icon name='hand spock' size='big' color='green' circular/>
            {' '} DOMAIN CHECKER
          </HeaderText>
        </Menu.Menu>
      </Menu>
    );
}

export default withRouter(Header);
