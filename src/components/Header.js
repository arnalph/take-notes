import React from 'react';
import 'bulma/css/bulma.min.css';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="#">
                    <h2 class="subtitle">Take Notes</h2>
                    </a>
                </div>
                {/*<div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <a class="button is-outlined is-link is-light">
                                <b>+</b>
                            </a>
                        </div>
                    </div>
                </div>*/
                }
            </nav>
        );
    }
}