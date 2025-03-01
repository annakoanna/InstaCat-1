import { useState } from 'react';
import './UserSettingPage.css';
import * as usersService from '../../utilities/users-service'


export default function UserSettingPage({ user, setUser }) {
    const [username, setUsername] = useState(user.name);
    const [passwords, setPasswords] = useState({
        oldPassword: "",
        newPassword: ""

    });

    function handleChangeUserName(evt) {
        // console.log("new username: " + evt.target.value);
        setUsername(evt.target.value);
    }

    async function handleSubmitUserName(evt) {
        evt.preventDefault();
        try {
            user.name = username; // update the username.
            const newUser = await usersService.changeUsername(user);
            setUser(newUser);
        } catch {
            //   setError('Change username failed - Try Again');
            alert('Change username failed - Try Again');
        }
    }
    function handleChangePassword(evt) {
        // console.log("new password: " + evt.target.value);
        setPasswords({...passwords, [evt.target.name]: evt.target.value});
        
    }
    async function handleSubmitPassword(evt) {
        evt.preventDefault();
        try {
            // console.log("passwords: ", passwords);
            user.oldPassword = passwords.oldPassword;
            user.newPassword = passwords.newPassword;
            // console.log("user", user);
            const newUser = await usersService.changePassword(user);
            setUser(newUser);
        } catch {
            //   setError('Change username failed - Try Again');
            alert('Change password failed - Try Again');
        }
    }


    function changeUserPassword(evt) {
        console.log(evt);
    }

    return (
        <div className="user-setting">
            <h3>General settings</h3>
            <form autoComplete="off" className="form-username" onSubmit={handleSubmitUserName}>
                <label>Username</label>
                <input type="text" placeholder="New username" name="username" value={username} onChange={handleChangeUserName} required />
                <button type="submit" >Submit</button>
            </form>
            <form autoComplete="off" className="form-password" onSubmit={handleSubmitPassword}>
                <label>Password</label>
                <input type="text" placeholder="Old password" name="oldPassword" required onChange={handleChangePassword} />
                <label>New password</label>
                <input type="text" placeholder="New password" name="newPassword" 
                onChange={handleChangePassword} required />
                <button type="submit" >Submit</button>
            </form>
        </div>
    );




}
