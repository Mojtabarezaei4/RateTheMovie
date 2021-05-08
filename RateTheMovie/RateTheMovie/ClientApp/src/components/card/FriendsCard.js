import React, { useState } from 'react'

import Popup from '../popup/Popup';

import './Card.css'

export default function FriendsCard({icon,userName,addIcon}) {
    const [add, setAdd] = useState(null)
    const [popupTrigger, setPopupTrigger] = useState(false)

    function addFriend(){
        
        return setPopupTrigger(true)
    }

    function addBtn(){
        if(add == null) {
            setAdd(true)
            addFriend()
        }
        else{
            return
        }
    }
    return (
        <div className="card-container friend ">
            <div className="card-icon d-flex">
                <img src={icon} alt=""/>
                <h4 className="userName">{userName}</h4>
            </div>
            <div className="addIcon-container">
                <img src={addIcon} 
                alt='' 
                className="add-icon"
                onClick={
                    ()=> addBtn()
                }
                />
            </div>
            <Popup 
            userName={userName}
            trigger={popupTrigger}
            setTrigger={setPopupTrigger}
            />
        </div>
    )
}

