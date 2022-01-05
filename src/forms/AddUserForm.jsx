import React, { useEffect, useState } from 'react';


const AddUserForm = (props) => {
    const initialFormState = {id: 1, name:"", username: ""};
    const [user, setUser] = useState(initialFormState);
    // const [currentUser, setCurrentUser] = useState(props.currentUser);

    // useEffect(()=>{
    //     props.editMode===true ? setUser(props.currentUser) : setUser(initialFormState)},[props]);

    useEffect(()=>{setUser(props.currentUser)},[props]);
    

    const handleInputChange = (event) => {
        const {name,value} = event.target;
//        setUser ({...user, [name]: value})
        props.setCurrentUser({...user,[name]: value})
    }
    
    const handleSubmit = (event) => {
        console.log("Elvis: " + user.name + ", " + user.username);
        event.preventDefault();
        if (!user.name || !user.username) return;
        console.log("USER: " + user);
        (props.editMode===true) ? props.handleSubmitEdit(props.currentUser) : props.addUser(user);
        props.setCurrentUser({...user,...initialFormState});
        setUser(initialFormState);
    }
    

    return(
        <form onSubmit={handleSubmit}>
            <h2>Current user: {props.currentUser.name} User: {user.name}</h2>
            <label>Name</label>
            <input type="text" name="name" value={props.editMode===true? props.currentUser.name : user.name} onChange={handleInputChange}/>
            <label>User Name</label>
            <input type="text" name="username" value={props.editMode===true? props.currentUser.username : user.username} onChange={handleInputChange}/>
            {(props.editMode!==true) ? <button>Add New User</button> : <button>Edit User</button>}
        </form>
    )
}

export default AddUserForm