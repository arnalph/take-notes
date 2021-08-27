import React from 'react';
import NewNote from '../components/NewNote.js';
import NoteCard from '../components/NoteCard.js'

export default class NoteDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        //Function to retreive notes from local storage
        this.getNotes = () => {
            const ls = localStorage;
            var dir = ls.getItem('noteDir');
            dir = JSON.parse(dir);
            var JSXunits = [];
            for (var key in dir) {
                console.log(key);
                JSXunits.push(
                    <div class="column  is-one-third">
                        <NoteCard noteID={ dir[key] } />
                    </div>
                );
            }
            console.log(JSXunits);
            if (JSXunits.length===0) {
                JSXunits = (
                    <div class="column is-half is-offset-one-quarter is-italic is-size-5 has-text-centered is-centered">
                        <br /><br /><br />
                        Your notes appear here.
                    </div>
                )
            }
            return JSXunits;
        }
    }
    
    render() {
        return (
            <div>
                <div class="columns">
                    <div class="column"></div>
                    <div class="column">
                        <NewNote />
                    </div>
                    <div class="column">
                        <br />
                    </div>
                </div>
                <div class="columns is-multiline">
                    { this.getNotes() }
                </div>
            </div>
        );
    }
}