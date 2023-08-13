import React from 'react'
import { Link } from 'react-router-dom'


const ListItem = ({ note }) => {
    return (
        <Link to={`/note/${note.id}`}>
            <div className='notes-list-item'>
                <div className='notes-list-item-title'>
                    <h3>{note.title}</h3>
                </div>

                {note.text}
            </div>
        </Link>
    )
}

export default ListItem