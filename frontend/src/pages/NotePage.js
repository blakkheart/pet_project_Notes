import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ReactComponent as ArrowLeft } from '../assets/left-arrow.svg'
import NoteHeader from '../components/NoteHeader'


const NotePage = (props) => {

    let params = useParams()
    let [note, setNote] = useState(null)
    let navigate = useNavigate()

    useEffect(() => {
        getNote()
    }, [params])

    let getNote = async () => {
        if (params.id === 'new') return
        let response = await fetch(`/api/v1/notes/${params.id}/`)
        let data = await response.json()
        setNote(data)
    }

    let updateNote = async () => {
        fetch(`/api/v1/notes/${params.id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }


    let deleteNote = async () => {
        fetch(`/api/v1/notes/${params.id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        navigate('/')
    }

    let createNote = async () => {
        fetch(`/api/v1/notes/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }

    let handleSubmit = () => {
        if (params.id !== 'new' && note.text == '') {
            deleteNote()
        } else if (params.id !== 'new') {
            updateNote()
        } else if (params.id === 'new' & note.text !== null) {
            createNote()
        }

        navigate('/')

    }

    return (
        <div className='note'>

            <div className='note-header'>
                <h3>
                    <ArrowLeft onClick={handleSubmit} />
                </h3>
                {params.id !== 'new' ? (<button onClick={deleteNote}>Delete</button>) : (<button onClick={handleSubmit}>Done</button>)}

            </div>
            <div className='note-title'>
                <textarea maxLength={50} onChange={(e) => { setNote({ ...note, 'title': e.target.value }) }} defaultValue={note?.title}></textarea>
            </div>
            <textarea onChange={(e) => { setNote({ ...note, 'text': e.target.value }) }} defaultValue={note?.text}></textarea>
        </div>
    )
}

export default NotePage