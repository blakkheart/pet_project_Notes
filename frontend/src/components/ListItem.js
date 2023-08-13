import React from 'react'

const ListItem = ({ note }) => {
    return (
        <div>
            <h3>{note.title}</h3>
            Text: {note.text}
        </div>
    )
}

export default ListItem