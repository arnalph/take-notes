import React from 'react';
import { Link } from 'react-router-dom';
import DOMPurify from "dompurify";

export default class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.getNote = (noteID) => {
            const ls = localStorage;
            var htmlNote = DOMPurify.sanitize(ls.getItem(noteID))
            return <div dangerouslySetInnerHTML={{__html: htmlNote}}/>
        }
        this.deleteNote = (noteID) => {
            const ls = localStorage;
            var dir = JSON.parse(ls.getItem('noteDir'));
            for (var key in dir) {
                if (dir[key]===noteID) {
                    delete dir[key]
                }
            }
            ls.setItem('noteDir', JSON.stringify(dir));
            ls.removeItem(noteID);
            //Send back to home page
            this.props.history.push('/');
        }
    }
    
    render() {
        return (
                <div class="columns is-centered">         
                    <div class="column is-three-fifths m-3 mt-6" >
                        <p class="title is-4">View Note</p>
                        <div class="box">
                            <div class="m-5 ml-6">
                                { this.getNote(this.props.match.params.noteID) }
                            </div>
                        </div>
                        <Link to="/">
                            <button class="button is-success is-light is-size-6 has-text-weight-medium">Back</button>
                        </Link>
                        <Link to="/">
                            <button class="button is-danger is-light is-size-6 has-text-weight-medium is-pulled-right"
                                onClick={ () => { this.deleteNote(this.props.match.params.noteID) } }>
                                Delete
                            </button>
                        </Link>
                    </div>
                </div>
        );
    }
}