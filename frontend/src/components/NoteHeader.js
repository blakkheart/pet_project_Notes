import React from 'react'

const NoteHeader = ({ note }) => {
    return (
        <div>
            {note?.tite}
        </div>
    )
}

export default NoteHeader