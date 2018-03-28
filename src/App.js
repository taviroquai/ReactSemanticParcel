import React from 'react';
import { Responsive, Container, Button, Icon, Modal, Header, Image } from 'semantic-ui-react';
import avatar from './assets/images/rachel.png';

class App extends React.Component{
    render() {
        return (
            <Modal trigger={<Button icon><Icon name="user" /> Click Me!</Button>}>
                <Modal.Header>Hello World!</Modal.Header>
                <Modal.Content image>
                    <Image wrapped size='medium' src={avatar} />
                    <Modal.Description>
                        <Header>Welcome!</Header>
                        <p>Welcome to React Boilerplate.</p>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        )
    }
}

export default App
