import React, {Component} from 'react';

class Testing extends Component{
    constructor(props){
        super(props);

        let list = JSON.parse(localStorage.getItem('list'));
        if(!list){
            list = [];
        }
        this.state={
            title:'',
            note:'',
            list
        };
    }

    onTitleChange(e){
        this.setState({title:e.target.value});
    }
    onNoteChange(e){
        this.setState({note:e.target.value});
    }
    onSaveClick(){
        // this.setState({list: this.state.title, title: ''});
        let new_note = {
            title: this.state.title,
            note: this.state.note
        };

        let list = this.state.list;
        list.push(new_note);

        localStorage.setItem('list', JSON.stringify(this.state.list));
        this.setState({title: '', note: '', list: list});
        console.log(localStorage, this.state.title);
        
    }
    displayList(){
        let list = [];
        //list.push(JSON.parse(localStorage.getItem('list')));
        //console.log(list);
        for(let i = 0; i < this.state.list.length; i++){
            list.push(
                <li key={'row'+i}>
                    {this.state.list[i].title}
                    <button onClick={() => this.removeItem(i)}>
                        Delete
                    </button>
                </li>
            );
        }
        return list;
    }

    removeItem(i) {
        // get the list from storage
        let list = JSON.parse(localStorage.getItem('list'));
        // remove i
        list.splice(i, 1);
        // save back into storage
        localStorage.setItem('list', JSON.stringify(list));

        // not generic code
        this.setState({ list });
    }
    // onDelete(i){
    //     localStorage.removeItem('list', list[i].title);
    // }

    render(){
        return(
            <div>
                <p>Enter your note: </p>
                <input value={this.state.title} onChange={this.onTitleChange.bind(this)}/>
                <br />
                <textarea value={this.state.note} onChange={this.onNoteChange.bind(this)}></textarea><br />
                <button onClick={this.onSaveClick.bind(this)}>Save</button>
                {/* <p>{JSON.parse(localStorage.getItem('list'))}</p> */}
                <ul>{this.displayList()}</ul>
            </div>
        );
    }
}

export default Testing;