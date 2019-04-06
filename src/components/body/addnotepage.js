import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import '../layout/style.css';


class AddNote extends Component{
    constructor(props){
        super(props);

        //todo: get session storage
        let titlesession = JSON.parse(sessionStorage.getItem('titlesession'));
        if(!titlesession){
            titlesession = []
        };
        let notesession = JSON.parse(sessionStorage.getItem('notesession'));
        

        let list = JSON.parse(localStorage.getItem('list'));
        if(!list){
            list = []
        };
        this.state={
                title:'',
                note:notesession,
                list:list
            };
    }

    //for input new note
    onNewNoteAdd(){
        let new_note = {
            title: this.state.title,
            note: this.state.note
        };

        let list = this.state.list;
        list.push(new_note);
        //todo: remove session items
        sessionStorage.clear();

        localStorage.setItem('list', JSON.stringify(this.state.list));
        this.setState({title: '', note: '', list: list});
        
    }


    onTitleInputChange(event){
        
        this.setState({title:event.target.value}, () => {
            //console.log(this.state.title);
            sessionStorage.setItem('titlesession', JSON.stringify(this.state.title));
            //console.log(sessionStorage);;
        });
        
        //todo: set session storage
        //sessionStorage.setItem('titlesession', JSON.stringify(this.state.title));

        //console.log(sessionStorage);
    }
    onNoteInputChange(e){
        this.setState({note:e.target.value}, () => {
            sessionStorage.setItem('notesession', JSON.stringify(this.state.note));
            //console.log(sessionStorage);
        });
        //sessionStorage.setItem('notesession', JSON.stringify(this.state.note));
        //console.log(sessionStorage);
        
    }

    // displayList(){
    //     let list = [];
    //     //list.push(JSON.parse(localStorage.getItem('list')));
    //     //console.log(list);
    //     for(let i = 0; i < this.state.list.length; i++){
    //         list.push(<li>{this.state.list[i].title}</li>);
    //     }
    //     return list;value={this.state.title}
    // }

    
    render(){
        return(
            <div>
                <p>Title</p>
                <input  onChange={this.onTitleInputChange.bind(this)}/>
                <p>Detail:</p>
                <textarea value={this.state.note} className="textarea" onChange={this.onNoteInputChange.bind(this)}/>
                <br />
                {/* <ul>{this.displayList()}</ul> */}
                {/* <button onClick={this.onNewNoteAdd.bind(this)}>Add</button> */}
                <Link onClick={this.onNewNoteAdd.bind(this)} to="/">Save to List</Link>
                <Link to="/">Cancel</Link>
            </div>
        )
    };
}

export default AddNote;