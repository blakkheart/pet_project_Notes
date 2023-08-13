import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ReactComponent as ArrowLeft } from '../assets/left-arrow.svg'
import { Link } from 'react-router-dom'

const NotePage = (props) => {

    let params = useParams()
    let [note, setNote] = useState(null)

    useEffect(() => {
        getNote()
    }, [params])

    let getNote = async () => {
        let response = await fetch(`/api/v1/notes/${params.id}/`)
        let data = await response.json()
        setNote(data)
    }

    return (
        <div className='note'>
            <div className='note-header'>
                <h3>
                    <Link to='/'>
                        <ArrowLeft />
                    </Link>
                </h3>

            </div>
            <textarea onChange={(e) => { setNote({ ...note, 'text': e.target.value }) }} defaultValue={note?.text}></textarea>
        </div>
    )
}

export default NotePage