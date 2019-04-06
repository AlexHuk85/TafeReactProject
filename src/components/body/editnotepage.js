import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import '../layout/style.css';
import 'react-toastify/dist/ReactToastify.css';


class EditPage extends Component{
    constructor(props){
        super(props);

        let title = '';
        let note = '';

        let list = JSON.parse(localStorage.getItem('list'));
        let id = props.match.params.id;

        if(list){
            let note_obj = list[id];
            if(note_obj) {
                title = note_obj.title;
                note = note_obj.note;
            } else {
                props.history.goBack();
            }
        } else {
            props.history.goBack();
        }
        
        this.state={
            index: id,
            title,
            note
        };
    }
    //for input new note
    onSaveNote(){
        let new_note = {
            title: this.state.title,
            note: this.state.note
        };

        let list = JSON.parse(localStorage.getItem('list'));
        
        // update the note by index
        // list[this.state.index].title = this.state.title;
        // list[this.state.index].note = this.state.note;

        list[this.state.index] = new_note;

        localStorage.setItem('list', JSON.stringify(list));
        this.setState({title: '', note: ''});
    }


    onTitleInputChange(event){
        this.setState({title:event.target.value});
    }
    onNoteInputChange(e){
        this.setState({note:e.target.value});
    }

    // displayList(){
    //     let list = [];
    //     //list.push(JSON.parse(localStorage.getItem('list')));
    //     //console.log(list);
    //     for(let i = 0; i < this.state.list.length; i++){
    //         list.push(<li>{this.state.list[i].title}</li>);
    //     }
    //     return list;
    // }

    
    render(){
        return(
            <div>
                <p>Title</p>
                <input
                    value={this.state.title}
                    onChange={this.onTitleInputChange.bind(this)}
                />
                <p>Detail:</p>
                <textarea
                    className="textarea"
                    value={this.state.note}
                    onChange={this.onNoteInputChange.bind(this)}
                />
                <br />
                {/* <ul>{this.displayList()}</ul> */}
                {/* <button onClick={this.onNewNoteAdd.bind(this)}>Add</button> */}
                
                <Link onClick={this.onSaveNote.bind(this)} to="/">Save to List</Link>
                <Link to="/">Cancel</Link>
            </div>
        )
    };
}

export default EditPage;