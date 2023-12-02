import { useUsers } from "../hook/useUsers"
const UserPage = () => {

    const {users} = useUsers();
    return (
        <div className='container mt-5'>
            <div className='table-responsive'>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>EMAIL</th>
                            <th>NAME</th>
                            <th>AVATAR</th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            users.map((user, i) => (
                                <tr key={i}>
                                    <td>{user.id}</td>
                                    <td>{user.email}</td>
                                    <td>{user.first_name} {user.last_name}</td>
                                    <td><img src={user.avatar} alt={user.first_name}
                                        className='img-thumbail' style={{width:50}} />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserPage
