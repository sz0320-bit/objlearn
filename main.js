
function player(name, val){
    this.name = name;
    this.val = val;
    return {name,val};
}
let tx = new player('tomas','x');

const returnCon = ({name,val}) => {
    console.log(player(name,val));
}

returnCon(tx);

