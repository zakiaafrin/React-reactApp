import React, { Component } from 'react';
import First from './First';

class StateApp extends Component {
    state = {
        persons: [
            { name: 'Zakia', email: 'abc@xyz.com', address: 'ABC' },
            { name: 'Afrin', email: 'def@xyz.com', address: 'DEF' },
            { name: 'Jeme', email: 'ghi@xyz.com', address: 'GHI' }
        ]
    }

    render() {
        return (
            <div className='App'>
                {this.state.persons.map((people, index) => {
                    return <First
                        key={index}
                        name={people.name}
                        email={people.email}
                        address={people.address} />
                })}
            </div>
        );
    }
}
export default StateApp;