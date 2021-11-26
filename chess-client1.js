console.log("DEBUT : chess-client1.js");

let N = 10;
let morpionOuPas = document.getElementById("chess");

let table = document.createElement("table");

morpionOuPas.appendChild(table);


let click = 10;
let signe = 'X';

function jouerUnCoup(){
    click++;
    if((click % 2) == 0){
        signe='X';
    } else {
        signe='O';
    }
    //alert("Gros Click : " + l + " "  + c);
    //td.innerHTML = l+","+c;
    td.innerHTML = signe;

}
let ligneID = ['d','8','7','6','5','4','3','2','1','z'];
let colonneID = ['d','a','b','c','d','e','f','g','h','z'];
let borderText =[
    ['','a','b','c','d','e','f','g','h',''],
    ['8','','','','','','','','','8'],
    ['7','','','','','','','','','7'],
    ['6','','','','','','','','','6'],
    ['5','','','','','','','','','5'],
    ['4','','','','','','','','','4'],
    ['3','','','','','','','','','3'],
    ['2','','','','','','','','','2'],
    ['1','','','','','','','','','1'],
    ['','a','b','c','d','e','f','g','h','']
]
let row = null;
for(let l = 0; l < N; l++){
    let row = document.createElement("tr");
    table.appendChild(row);
    let td = null;
    for(let c = 0; c < N; c++){
        let td = document.createElement("td");

        // ligne 0 => bordure ||ligne 9 => bordure
        if(l==0 || l==9 || c==0 || c==9 ){
            td.setAttribute("class","casebordure");
            td.innerHTML = borderText[l][c];
            row.appendChild(td);
            continue;
        }
        if(l%2==0){
            td.setAttribute("class", c%2==0 ? "caseblanche" : "casenoire");
            // if(c%2==0){
            //     td.setAttribute("class","caseblanche");
            // }
            // else{
            //     td.setAttribute("class","casenoire");
            // }
        } else {
            td.setAttribute("class", c%2==0 ? "casenoire" : "caseblanche");
            // if(c%2==0){
            //     td.setAttribute("class","casenoire");
            // }
            // else{
            //     td.setAttribute("class","caseblanche");
            // }
        }
        row.appendChild(td);
        td.setAttribute("id",`${colonneID[c]}${ligneID[l]}`);
        
        td.addEventListener('click',(event) => {
            td.innerHTML = td.getAttribute("id");
        });
        td.addEventListener('dblclick',(event) => {
            if(event.ctrlKey == true)
            {
                td.innerHTML = "";

            } else {
                td.innerHTML = "boo";
            }
        });
       
    }
}

//let colonneID = ['d','a','b','c','d','e','f','g','h','z'];
//let ligneID = ['d','8','7','6','5','4','3','2','1','z'];
let chessBoard = [['TN','CN','FN','QN','KN','FN','CN','TN'],
                  ['PN','PN','PN','PN','PN','PN','PN','PN'],
                  ['','','','','','','',''],
                  ['','','','','','','',''],
                  ['','','','','','','',''],
                  ['','','','','','','',''],
                  ['PB','PB','PB','PB','PB','PB','PB','PB'],
                  ['TB','CB','FB','QB','KB','FB','CB','TB']
                ];
             
const displaySymbol = new Map();
displaySymbol.set('', '');
displaySymbol.set('TN', '&#9820;');
displaySymbol.set('CN', '&#9822;');
displaySymbol.set('FN', '&#9821;');
displaySymbol.set('QN', '&#9819;');
displaySymbol.set('KN', '&#9818;');
displaySymbol.set('PN', '&#9823;');
displaySymbol.set('TB', '&#9814;');
displaySymbol.set('CB', '&#9816;');
displaySymbol.set('FB', '&#9815;');
displaySymbol.set('QB', '&#9813;');
displaySymbol.set('KB', '&#9812;');
displaySymbol.set('PB', '&#9817;');

function displayChess(){
    for(let l = 1; l <9 ; l++){
        for(let c = 1; c <9; c++){
            //console.log(`${colonneID[c]}${ligneID[l]}`);
            let caseHTML = document.getElementById(`${colonneID[c]}${ligneID[l]}`);
            //caseHTML.innerText = (chessBoard[l-1][c-1]);
            caseHTML.innerHTML = displaySymbol.get((chessBoard[l-1][c-1]));

            if(chessBoard[l-1][c-1] === 'PN') {
                caseHTML.innerHTML= "<img src='./img/PN2.png' width=30 height=30>";
            }
         }
    }
}
displayChess();
//console.log(caseMorpion.outerHTML);
//console.log(caseMorpion.innerHTML);


// caseMorpion.innerHTML = "N'importe quoi ";

// let nombreDeClic = 0;

// function quandOnclique(event) {
//     alert("Vous avez cliqué " + event);
    
//     let play = 'X';
//     nombreDeClic++;
//     if((nombreDeClic % 2) == 0){
//         play = 'Ervinno';
//     } else{
//         play = 'Youcef';
//     }
//     caseMorpion.innerHTML = play;
// }

// caseMorpion.addEventListener('click',quandOnclique);

console.log("FIN : chess-client1.js");