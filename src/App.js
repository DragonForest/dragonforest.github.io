import React, { useEffect , useState } from 'react';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm' ;

const App= () =>  {

  const usersData = [
    {id: 1, name: "Tania", username: "floppydiskette"},
    {id: 2, name: "Craig", username: "siliconeidolon" },
    {id: 3, name: "Ben", username: "benisphere"}
  ]

  const initialUser = {id: null, name: "", username: "" }

  const [users, setUsers] = useState(usersData);
  const [editMode, setEditMode] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialUser);

    const addUser = (user) => {
      user.id = users.length+1;
      setUsers([...users,user])
     }

   const deleteUser = (id) => {
     setEditMode(false);
     setUsers(users.filter((user)=>user.id !== id))
   }

   const handleSubmitEdit = (currentUser) => {
     setUsers(users.map((user)=> currentUser.id===user.id ? currentUser : user));
     setEditMode(false);
   }

   const editUser = (user) => {
      setEditMode(true);
      console.log(user);
//      setCurrentUser({...currentUser,...user});
      setCurrentUser({id: user.id, name: user.name, username: user.username});
      console.log(currentUser);
   }

  return (
    <div className="container">
      <h1> SIMPLE CRUD APP WITH HOOKS</h1>
      <div className="flex-row">
         <div className = "flex-large">
           {(editMode===true) ? <h2> Edit User </h2> : <h2> Add User </h2>}
            <AddUserForm 
              addUser={addUser}
              editMode={editMode} 
              handleSubmitEdit={handleSubmitEdit} 
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
         </div>
        <div className = "flex-large">
              <h2>View Users</h2>
              <UserTable users={users} deleteUser={deleteUser} editUser={editUser}/> 
        </div>
      </div>
    </div>
  );
}

export default App;
