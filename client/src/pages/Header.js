import React, { useState, useEffect } from "react";
import API from '../utils/API';

const Header = (props) => {

    let [email, setEmail] = useState('');

    useEffect(() => {

        getUserInfo();

        async function getUserInfo() {
            let data = await API.getUserInfo();
            let email = data.data.email;
            setEmail(email);
            console.log(email);
        }

    }, [])

    if (email == '') {
        return <div>please log in</div>
    }

    return (
        <div>welcome back, {email}. <button onClick={(e) => {
            e.preventDefault();
            localStorage.removeItem("token");
            window.location.href = "/"
            // window.location.reload();
        }}

        >Logout</button></div>
    )

}

export default Header;