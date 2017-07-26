import React, { Component } from "react";

import { Header, Icon, Loader, Button, Input, Container } from 'semantic-ui-react';

const DomainWarning = ({status, status_desc}) => {
  return (<Header size='huge' icon textAlign='center'>
      <Icon name='warning' circular size='massive' color='red'/>
      <Header.Content>
        Something went wrong <br />
        Status code: {status}, reposrt: {status_desc}
      </Header.Content>
    </Header>)
}

const Loading = () => {
  return (<Loader active size='massive'>Loading ...</Loader>)
}

const DomainInfo = ({domain}) => {

  if(Object.keys(domain).length === 0 || domain.status > 10) {
    let {status, status_desc} = domain;
    return <DomainWarning status={status} status_desc={status_desc} />
  }

  let {registered, domain_name} = domain;

  if(registered) {
    return (
      <Container>
      <Header size='huge' icon textAlign='center'>
          <Icon name='thumbs outline down' circular size='massive' color='red'/>
          <Header.Content>
            {`Domain ${domain_name} registered :(`}
          </Header.Content>
        </Header>
      </Container>
    )
  } else if (!registered && registered !== undefined) {
    return (
      <Container>
      <Header size='huge' icon textAlign='center'>
          <Icon name='thumbs outline up' circular size='massive' color='green'/>
          <Header.Content>
            {`Domain ${domain_name} free :)`}
          </Header.Content>
        </Header>
      </Container>
    )
  }

  return (
      <Header size='huge' icon textAlign='center'>
        <Icon name='reply' circular size='massive' color='green'/>
        <Header.Content>
          Select domain and press search :)
        </Header.Content>
      </Header>
  )
}

class BodyComponent extends Component {
  constructor(props) {
    super(props);

    this.handleInput = this.handleInput.bind(this);
    this.checkDomain = this.checkDomain.bind(this);

    this.state={}
  }

  handleInput(e, {value}) {
    this.setState({enteredDomain: value})
  }

  checkDomain(e) {
    e.preventDefault();

    let {checkDomain} = this.props;

    checkDomain(this.state.enteredDomain);
  }

  render() {
    let {domain = {}} = this.props;
    let {loading = false} = domain;

    console.log('domain ====>', domain, this.props)

    return (
      <div style={{width: '100%'}}>
      <Input type='text' placeholder='Enter domain name...' action onChange={this.handleInput}>
        <input />
        <Button color='green' disabled={!this.state.enteredDomain} onClick={(e) => this.checkDomain(e)}>Check domain now!</Button>
      </Input>

      {loading ? <Loading /> : <DomainInfo domain={domain} />}
      </div>
    )
  }
}

export default BodyComponent;
