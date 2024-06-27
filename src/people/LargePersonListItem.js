export const LargePersonListItem = ({ person }) => {
    const { name, age, hairColor, hobbies } = person;

    return (
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
    );
}