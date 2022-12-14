import {useState} from "react";

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "Kyle", age: 27 },
    { id: 2, name: "Sally", age: 32 },
    { id: 3, name: "Mike", age: 54 },
    { id: 4, name: "Jim", age: 16 },
  ])
  const [selectedUserId, setSelectedUserId] = useState()
  const selectedUser = users.find(user => user.id === selectedUserId)

  function incrementAge(id) {
    setUsers(currUsers => {
      return currUsers.map(user => {
        if(user.id === id) {
          return { ...user, age: user.age + 1}
        } else {
          return user
        }
      })
    })
  }

  function selectUser(id) {
    setSelectedUserId(id)
  }

  return (
    <>
      <h3>
        Selected User: {" "}
        {selectedUser == null
          ? "None"
          : `${selectedUser.name} is ${selectedUser.age} years old`}
      </h3>
      {users.map(user => (
        <div
          key={user.id}
          style={{
            display:"grid",
            gridTemplateColumns: "1fr auto auto",
            gap: ".25rem",
            marginBottom: ".5rem",
          }}
        >
          {user.name} is {user.age} years old
          <button onClick={() => incrementAge(user.id)}>Increment</button>
          <button onClick={() => selectUser(user.id)}>Selected</button>
        </div>
      ))}
    </>
  )
}

export default App;
