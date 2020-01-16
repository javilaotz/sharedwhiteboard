import React from 'react'
import './Styles.css'
import json_response from "../mock/response.json"

function Users() {
    console.log(json_response.users, "RESPONSE")
    const users = json_response && json_response.users,

    content = users.map(user => {
        const name = user && user.name,
              color = user && user.color,
              key = user && user.id

        return (<li key={key}>
                <span style={{
                    background: `rgb(${color.r}, ${color.g}, ${color.b})`, 
                    color: "#fff", 
                    fontWeight: "bold",
                    padding: "0 10px 0"
                    }}>{name}</span>
            </li>)
    })
    return (
        <div>
            <div>Users</div>
            <div><ul>{content}</ul></div>
        </div>
    );
}

export default Users;