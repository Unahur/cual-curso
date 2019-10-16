import React from 'react'

const Contacts = ({ contacts }) => {
    return (
        <div>
            <center><h1>Contact List</h1></center>
            {contacts.map((contacts) => (
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">{contacts.name} </h5>
                        <h6 class="card-subtitle md-2 text-muted">{contacts.email}</h6>
                        <p class="card-text">{contacts.company.catchPhrase}</p>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Contacts