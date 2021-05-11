import React from 'react'

import "./Search.css"

export default function Search() {
    return (
        <div className="search-bar-container">
               <form className="search-form">
                <input
                    className="search-input"
                    type="text"
                    name="search-input"
                    placeholder="Search For a user"
                    required
                />
                <button>Search</button>
            </form>
        </div>
    )
}
