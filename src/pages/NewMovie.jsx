import React from 'react'

function NewMovie() {
    return (
        <form>
            <div>
                <label>Title</label>
                <input type="text" />
            </div>
            <div>
                <label>Rating</label>
                <input type="text" />
            </div>
            <div>
                <label>Img Link</label>
                <input type="text" />
            </div>
            <div>
                <label>Youtube trailer link</label>
                <input type="text" />
            </div>
            <input type="submit" />
        </form>
    )
}

export default NewMovie
