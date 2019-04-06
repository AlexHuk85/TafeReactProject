import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Row from './row';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../layout/style.css';

class Home extends Component{
    constructor(props){
        super(props);

        let list = JSON.parse(localStorage.getItem('list'));
        if(!list){
            list = [];
        }

        this.state={

            list: list
        }

        this.onRowClick.bind(this);

    }

    onRowDelete(i){
        // get the list from storage
        let list = JSON.parse(localStorage.getItem('list'));
        // remove i
        list.splice(i, 1);
        // save back into storage
        localStorage.setItem('list', JSON.stringify(list));

        // not generic code
        this.setState({ list });
        toast.info('Deleted');
    }
    onRowClick(i) {
        // edit this index
        //<Link to="/editnotepage" />
        this.props.history.push('/editnotepage/'+i);
        // window.location = '/editnotepage';
        // return i;
        //console.log(i)
    }

    renderRows(){
        //let list = [];
        //list.push(JSON.parse(localStorage.getItem('list')));
        //console.log(list);
        // for(let i = 0; i < this.state.list.length; i++){
        //     list.push(<li className="rowlist">{this.state.list[i].title}
        //     <button className="button">Delete</button>
        //     </li>);
        // }

        return this.state.list.map((note, i) => {
            return(
                <Row key={'note' + i}
                    title={note.title} 
                    onClick={() => this.onRowClick(i)}
                    onDelete={(e) => {
                        this.onRowDelete(i);
                        e.stopPropagation();
                    }}
                    
                />
                
            );
        });

        //return list;
    }

    render(){
        return(
            <div>
                <p>Current Notes:</p>
                <ul className="listbody">
                    {this.renderRows()}
                </ul>
                <ToastContainer />
                <br />
                <Link to="/addnotepage">Add New Note</Link>
            </div>
        )
    };
}

export default Home;