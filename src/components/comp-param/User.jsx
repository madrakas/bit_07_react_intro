export function User (props) {
    const style = {
        display: 'inline-block',
        padding: '1rem',
        margin: '1rem',
        border: '1px solid #ccc',
    };

    return (
        <div style={style}>
            <h2>{props.name}</h2>
            <p>{props.age}</p>
        </div>
    )
}