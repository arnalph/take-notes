import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

export default class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '' } // You can also pass a Quill Delta here
        this.handleChange = this.handleChange.bind(this)
        this.saveNote = () => {  //Notes are stored in LocalStorage by this function
            const uid = uuidv4();
            const ls = localStorage;
            ls.setItem(uid, this.state.text);
            var noteDir = ls.getItem('noteDir')
            if (noteDir===null | noteDir==='' | noteDir==="[object Object]") { //If the ls variable is empty
                var dir = {};
                dir[Date().toString()]=uid;
                console.log(dir);
                ls.setItem('noteDir', JSON.stringify(dir));
            } else {// If it is not empty
                var dir = JSON.parse(noteDir);
                dir[Date().toString()] = uid;
                console.log(dir)
                ls.setItem('noteDir', JSON.stringify(dir));
            }
            //Send back to home page
            this.props.history.push('/');
        }
    }
    
    handleChange(value) {
        this.setState({ text: value })
    }

    render() {
        return (
                <div class="columns is-centered">         
                    <div class="column is-three-fifths m-3 mt-6" >
                        <p class="title is-4">New Note</p>
                        <div class="box">
                            <ReactQuill value={this.state.text}
                                onChange={this.handleChange} 
                                theme="snow" 
                                style={{ backgroundColor: 'white'}}
                            />
                        </div>
                        <Link to="/">
                            <button class="button is-success is-light is-size-6 has-text-weight-medium">Back</button>
                        </Link>
                        <button class="button is-success is-light is-size-6 has-text-weight-medium is-pulled-right"
                            onClick={this.saveNote}>
                            Save
                        </button>
                    </div>
                </div>
        );
    }
}
