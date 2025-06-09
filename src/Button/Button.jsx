
function Button() {

    const handleClick = (e) => {
        console.log(e)
    }

    return (
        <button className="button" onClick={handleClick}>Click me</button>
    );
}

export default Button;
