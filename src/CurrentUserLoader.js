import React, { useState, useEffect } from 'react'; // Import React library
import axios from 'axios'; // Import axios library

export const CurrentUserLoader = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await axios.get('/current-user');
            setUser(response.data);
        })();
    }, []);

    return (
        <>
            { React.Children.map(children, child => {
                if(React.isValidElement(child)) {
                    return React.cloneElement(child, { user });
                }
            })}
        </>
    )

}