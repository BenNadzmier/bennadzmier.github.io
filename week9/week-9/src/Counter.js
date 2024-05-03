export default function Counter(props){
    return (
        <>
        <h1>Counter: {props.val}</h1>
        <button onClick={()=> alert("Added")}>Add</button>
        </>
    );
}