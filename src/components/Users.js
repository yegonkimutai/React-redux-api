import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../store/users/usersSlice";


const Users = () => {
    const { users, isLoading, error } = useSelector((state) => state.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
      }, [])

    return (
        <div>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <ul>
            {users.map(user => (
                <li key={user.last}>{user.first} {user.last}</li>
            ))}
        </ul>
        </div>
    )
}

export default Users