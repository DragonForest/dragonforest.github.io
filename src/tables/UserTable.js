import React from 'react';

const UserTable = (props) => {

    return(
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>UserName</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {props.users.length > 0 ? (
                props.users.map((user) => (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>
                        <button className="button muted-button" onClick={()=>props.editUser(user)}>Edit</button>
                        <button className="button muted-button" onClick={()=>props.deleteUser(user.id)}>Delete</button>
                        {/*<button className="button muted-button">Delete</button>*/}
                    </td>
                </tr>
                ))
            ) : (
                <tr colspan={3}>No Users</tr>
            )}
        </tbody>
    </table>
    );
}

export default UserTable