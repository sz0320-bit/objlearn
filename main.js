function player(name, val){
    this.name = name;
    this.val = val;
    return {name,val};
}
let playerOne;
let playerTwo;
const returnCon = (val1,name1,val2,name2) => {
    playerOne = new player(name1,val1);
    playerTwo = new player(name2,val2);
}
const returnIcon = ({val}) => {
    return val.toString();
}
const testp = new player('tyson','x');
returnCon(testp);

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
        '<div class="inside" ><input type="button"  class="readbox" id="div9" value="" onclick="set(this)"></div>';
    const player1 = document.querySelector("#player1").value.toString()
    const player1icon = document.querySelector("#player1icon").value.toString();
    const player2 = document.querySelector("#player2").value.toString()
    const player2icon = document.querySelector("#player2icon").value.toString();
    returnCon(player1icon,player1,player2icon,player2);
});

const deleteButton = document.getElementById('deleteButton');
deleteButton.addEventListener('click', () => {
       document.querySelector('.mainboard').innerHTML = '';
        board.div1 = '';
        board.div2 = '';
        board.div3 = '';
        board.div4 = '';
        board.div5 = '';
        board.div6 = '';
        board.div7 = '';
        board.div8 = '';
        board.div9 = '';
});

let newcheck = true;

function set(x){
    if(newcheck === true){
        x.value = returnIcon(playerOne);
        newcheck = false;
        x.style.pointerEvents = 'none';
        setObj(x);
        winCheck();
    }
    else{
        x.value = returnIcon(playerTwo);
        newcheck = true;
        x.style.pointerEvents = 'none';
        setObj(x);
        winCheck();
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

function winCheck(){
         if(board.div1 === board.div2 && board.div2 === board.div3 && board.div1 !== ''){
              alert('win');
             console.log('win');
         }
         else if(board.div4 === board.div5 && board.div5 === board.div6 && board.div4 !== ''){
              alert('win');
             console.log('win');
         }
         else if(board.div7 === board.div8 && board.div8 === board.div9 && board.div7 !== ''){
              alert('win');
             console.log('win');
        }
         else if(board.div1 === board.div4 && board.div4 === board.div7 && board.div1 !== ''){
              alert('win');
             console.log('win');
        }
         else if(board.div2 === board.div5 && board.div5 === board.div8 && board.div2 !== ''){
              alert('win');
             console.log('win');
         }
         else if(board.div3 === board.div6 && board.div6 === board.div9 && board.div3 !== ''){
              alert('win');
             console.log('win');
         }
         else if(board.div1 === board.div5 && board.div5 === board.div9 && board.div1 !== ''){
              alert('win');
             console.log('win');
         }
         else if(board.div3 === board.div5 && board.div5 === board.div7 && board.div3 !== ''){
              alert('win');
             console.log('win');
         }
}


