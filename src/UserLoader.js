import React, { useState, useEffect } from 'react'; // Import React library
import axios from 'axios'; // Import axios library

export const UserLoader = ({ userID, children }) => {
    const [users, setUser] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await axios.get('/users/${userID}');
            setUser(response.data);
        })();
    }, [userID]);

    return (
        <>
            { React.Children.map(children, child => {
                if(React.isValidElement(child)) {
                    return React.cloneElement(child, { users });
                }
            })}
        </>
    )

}