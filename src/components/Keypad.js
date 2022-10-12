// Code Keypad Component Here

const Keypad = () => {
    function handleInput(){
        console.log("Entering password...")
    }
    
    return (
        <div>
            <input type="password" onChange={handleInput}></input>
        </div>
    )
}

export default Keypad;
