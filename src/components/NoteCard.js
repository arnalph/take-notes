import React from 'react';
import 'bulma/css/bulma.min.css';
import { Link } from 'react-router-dom';
import DOMPurify from "dompurify";

export default class NoteCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.getNote = (noteID) => {
            const ls = localStorage;
            var htmlNote = DOMPurify.sanitize(ls.getItem(noteID))
            return <div dangerouslySetInnerHTML={{__html: htmlNote}}/>
        }
    }
    render() {
        return (
            <Link to={"/note/"+this.props.noteID}>
                <div class="box">
                    <div class="card-content">
                        <div class="title is-size-6">
                            { this.getNote(this.props.noteID) }
                        </div>
                    </div>
                </div>
            </Link>
        );
    }
}