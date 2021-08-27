import React from 'react';
import NoteDisplay from '../components/NoteDisplay.js';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div class="container">
                <br />
                <NoteDisplay />
            </div>
        );
    }
}