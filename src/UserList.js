// UserList.js

import React, { useState } from 'react';

const UserList = () => {
  // Sample user data (you can replace this with an API call)
  const initialUsers = [
    { id: 1, name: 'User 1', email: 'user1@example.com' },
    { id: 2, name: 'User 2', email: 'user2@example.com' },
    { id: 3, name: 'User 3', email: 'user3@example.com' },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleSaveClick = () => {
    // Save changes to the selectedUser (you can implement this logic)
    alert(`Saved changes for ${selectedUser.name}`);
  };

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => handleUserClick(user)}>
            {user.name}
          </li>
        ))}
      </ul>
      {selectedUser && (
        <div>
          <h2>Edit User</h2>
          <input
            type="text"
            placeholder="Name"
            value={selectedUser.name}
            onChange={(e) =>
              setSelectedUser({ ...selectedUser, name: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Email"
            value={selectedUser.email}
            onChange={(e) =>
              setSelectedUser({ ...selectedUser, email: e.target.value })
            }
          />
          <button onClick={handleSaveClick}>Save</button>
        </div>
      )}
    </div>
  );
};

export default UserList;
