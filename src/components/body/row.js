import React from 'react';

import '../layout/style.css';

/*
** Title: Row
** Props: title, onDelete, onClick
**
** title: string
** onDelete: function
** onClick: function
**/

const Row = function(props) {
    return(
        <li className="rowlist" onClick={props.onClick}>
            {props.title}
            <button onClick={props.onDelete} className="button">X</button>
        </li>
    );
};

export default Row;
