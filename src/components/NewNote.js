import React from 'react';
import 'bulma/css/bulma.min.css';
import { Link } from 'react-router-dom';

export default class NewNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Link to="/new">
                <div class="box has-background-warning-light is-outlined">
                    <div class="card-content">
                        <p class="title is-size-2 is-vcentered has-text-centered">
                            +
                            <br />
                        </p>
                        <p class="is-italic is-size-6 has-text-centered">
                            Create a new note...
                        </p>
                    </div>
                </div>
            </Link>
        );
    }
}