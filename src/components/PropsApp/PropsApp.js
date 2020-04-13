import React, { Component } from 'react';
import First from './First';

class PropsApp extends Component {
    render() {
        return (
            <div className='App'>
                <First name='Zakia' email='abc@xyz.com' address='ABC' />
                <First name='Afrin' email='def@xyz.com' address='DEF' />
                <First name='Jeme' email='ghi@xyz.com' address='GHI' />
            </div>
        );
    }
}
export default PropsApp;