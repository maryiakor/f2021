import React, { ChangeEvent, FC, FormEvent, useMemo } from "react";
import { useState } from "react";
import { USERS } from "./usersData";
import { IUser } from "./IUser";
import { initialUser } from "./initialUser";

const Users: FC = () => {
  const [user, setUser] = useState(initialUser);
  const [users, setUsers] = useState<IUser[]>(USERS);
  const [search, setSearch] = useState("");
  const [showUserForm, setShowUserForm] = useState(false);

  const deleteUser = (id: number) => {
    const isDelete = window.confirm("Do you realy delete  user ?");
    if (isDelete) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  const searchedUsers = useMemo(() => {
    if (search) {
      return users.filter((user) =>
        user.first_name.toLowerCase().includes(search.toLowerCase())
      );
    }
    return users;
  }, [search, users]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const field = event.target.id;
    const newValue = event.target.value;
    setUser({ ...user, [field]: newValue });
  };

  const addUser = (event: FormEvent) => {
    event.preventDefault();
    setUsers([...users, user]);
    setUser(initialUser);
  };

  return (
    <div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Search
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={(event) => setSearch(event.target.value)}
        ></input>
      </div>
      <button
        className="btn btn-success mt-3 mb-3"
        onClick={() => setShowUserForm(!showUserForm)}
      >
        Add new user
      </button>
      {showUserForm && (
        <form onSubmit={(event) => addUser(event)}>
          {Object.keys(user).map((field) => {
            if (field === "id" || field === "avatar") return;
            return (
              <div className="mb-3" key={field}>
                <label htmlFor={field} className="form-label">
                  {field}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id={field}
                  required
                  value={user[field as keyof Omit<IUser, "id" | "avatar">]}
                  onChange={(event) => onChange(event)}
                />
              </div>
            );
          })}
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
      )}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {searchedUsers.length ? (
          searchedUsers.map((user) => (
            <div className="col" key={user.id}>
              <div className="card h-100">
                <img src={user.avatar} className="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h5 className="card-title">{`№${user.id} - ${user.email}`}</h5>
                  <p className="card-text">Name:{user.first_name}</p>
                  <p className="card-text">Surname:{user.last_name}</p>
                  {/* <p className="card-text">photo: {user.avatar}</p> */}
                </div>
                <div className="card-footer">
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h2>Users not exists</h2>
        )}
      </div>
    </div>
  );
};

export default Users;
