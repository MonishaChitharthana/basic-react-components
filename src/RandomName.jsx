function RandomName(){
    function handleName(){
        const name = ["Earned","Donated","Spent"];
        const rand = Math.floor(Math.random()*name.length);
        return name[rand];
    }
    return(
        handleName()
    );
}

export default RandomName;