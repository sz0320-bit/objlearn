

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

const startButton = document.getElementById('startButton');
startButton.addEventListener('click', () => {
    document.querySelector('.mainboard').innerHTML += '' +
        '<div class="inside" ><input type="button"  class="readbox" id="div1" value="" onclick="set(this)"></div>\n'+
        '<div class="inside" ><input type="button"  class="readbox" id="div2" value="" onclick="set(this)"></div>\n'+
        '<div class="inside" ><input type="button"  class="readbox" id="div3" value="" onclick="set(this)"></div>\n'+
        '<div class="inside" ><input type="button"  class="readbox" id="div4" value="" onclick="set(this)"></div>\n'+
        '<div class="inside" ><input type="button"  class="readbox" id="div5" value="" onclick="set(this)"></div>\n'+
        '<div class="inside" ><input type="button"  class="readbox" id="div6" value="" onclick="set(this)"></div>\n'+
        '<div class="inside" ><input type="button"  class="readbox" id="div7" value="" onclick="set(this)"></div>\n'+
        '<div class="inside" ><input type="button"  class="readbox" id="div8" value="" onclick="set(this)"></div>\n'+
        '<div class="inside" ><input type="button"  class="readbox" id="div9" value="" onclick="set(this)"></div>'
});

const deleteButton = document.getElementById('deleteButton');
deleteButton.addEventListener('click', () => {
       document.querySelector('.mainboard').innerHTML = '';
});

let newcheck = true;

function set(x){
    if(newcheck === true){
        x.value = 'x';
        newcheck = false;
        x.style.pointerEvents = 'none';
        setObj(x);
    }
    else{
        x.value = 'o';
        newcheck = true;
        x.style.pointerEvents = 'none';
        setObj(x);
    }
}

function setObj(x){
    let divid = x.id;
    board[divid] = x.value;
    console.log(board[divid]);
    console.log(board);
}

const board = {
        div1: '',
        div2: '',
        div3: '',
        div4: '',
        div5: '',
        div6: '',
        div7: '',
        div8: '',
        div9: ''
}



