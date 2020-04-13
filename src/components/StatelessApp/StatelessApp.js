import React, { Component } from 'react';
// import Example from './Example';

const XYZ = (props) => {
    return <h1> I am a Stateless component</h1>
}

class App extends Component {
    render() {
        return (
            <div className='container'>
                <XYZ />
                {/* <Example name='Stateless Component' /> */}
            </div>
        );
    }
}
export default App;