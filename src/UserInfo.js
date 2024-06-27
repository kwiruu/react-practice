import { useCurrentUser } from "./useCurrentUser";

export const UserInfo = ({ users }) => {
    const user = useCurrentUser();
    const { name, age, hairColor, hobbies } = users || {};

    return users ? (
        <>
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
            <p>Hobbies: {hobbies}</p>
            <ul>
                {hobbies.map((item) =>
                    <li key={item}>{item}</li>
                )}
            </ul>
        </>
    ) : <p>Loading...</p>;
}