import React, { useState, useEffect } from "react";
import axios from "axios";

export const withUser = (Component, userId) => {
    return props => {
        const[user, setUser] = useState(null);

        useEffect (() => {
            (async () => {
                const { data } = await axios.get(`/users/${userId}`);
                setUser(data.data);
            })();
        }, []);

        return <Component {...props} user={user} />;
    }
}