

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

/*const readbox = document.querySelector('.readbox');
readbox.addEventListener('click', () => {
    alert('lol');
});*/

let newcheck = true;

function set(x){
    if(newcheck === true){
        x.value = 'x';
        newcheck = false;
        x.style.pointerEvents = 'none';
    }
    else{
        x.value = 'o';
        newcheck = true;
        x.style.pointerEvents = 'none';
    }
}
