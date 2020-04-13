import React, { Component } from 'react';
import First from './First';

class ComponentApp extends Component {
    render() {
        return (
            <div className='container py-5'>
                <First />
            </div>
        );
    }
}

export default ComponentApp;