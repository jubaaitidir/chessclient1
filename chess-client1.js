console.log("DEBUT : chess-client1.js");

let N = 10;
let morpionOuPas = document.getElementById("chess");

let table = document.createElement("table");

morpionOuPas.appendChild(table);


let click = 10;
let signe = 'X';

function jouerUnCoup() {
    click++;
    if ((click % 2) == 0) {
        signe = 'X';
    } else {
        signe = 'O';
    }
    //alert("Gros Click : " + l + " "  + c);
    //td.innerHTML = l+","+c;
    td.innerHTML = signe;

}
//let ligneID = ['d', '1', '2', '3', '4', '5', '6', '7', '8', 'z'];
let ligneID = ['d', '8', '7', '6', '5', '4', '3', '2', '1', 'z'];
let colonneID = ['d', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'z'];
let borderText = [
    ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', ''],
    ['8', '', '', '', '', '', '', '', '', '8'],
    ['7', '', '', '', '', '', '', '', '', '7'],
    ['6', '', '', '', '', '', '', '', '', '6'],
    ['5', '', '', '', '', '', '', '', '', '5'],
    ['4', '', '', '', '', '', '', '', '', '4'],
    ['3', '', '', '', '', '', '', '', '', '3'],
    ['2', '', '', '', '', '', '', '', '', '2'],
    ['1', '', '', '', '', '', '', '', '', '1'],
    ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', '']
]
let row = null;
for (let l = 0; l < N; l++) {
    let row = document.createElement("tr");
    table.appendChild(row);
    let td = null;
    for (let c = 0; c < N; c++) {
        let td = document.createElement("td");

        // ligne 0 => bordure ||ligne 9 => bordure
        if (l == 0 || l == 9 || c == 0 || c == 9) {
            td.setAttribute("class", "casebordure");
            td.innerHTML = borderText[l][c];
            row.appendChild(td);
            continue;
        }
        if (l % 2 == 0) {
            td.setAttribute("class", c % 2 == 0 ? "caseblanche" : "casenoire");
            // if(c%2==0){
            //     td.setAttribute("class","caseblanche");
            // }
            // else{
            //     td.setAttribute("class","casenoire");
            // }
        } else {
            td.setAttribute("class", c % 2 == 0 ? "casenoire" : "caseblanche");
            // if(c%2==0){
            //     td.setAttribute("class","casenoire");
            // }
            // else{
            //     td.setAttribute("class","caseblanche");
            // }
        }
        row.appendChild(td);
        td.setAttribute("id", `${colonneID[c]}${ligneID[l]}`);

        td.addEventListener('click', (event) => {
            td.innerHTML = td.getAttribute("id");
        });
        td.addEventListener('dblclick', (event) => {
            if (event.ctrlKey == true) {
                td.innerHTML = "";

            } else {
                td.innerHTML = "boo";
            }
        });

    }
}

//let colonneID = ['d','a','b','c','d','e','f','g','h','z'];
//let ligneID = ['d','8','7','6','5','4','3','2','1','z'];
// let chessBoard = [['TN','CN','FN','QN','KN','FN','CN','TN'],
//                   ['PN','PN','PN','PN','PN','PN','PN','PN'],
//                   ['','','','','','','',''],
//                   ['','','','','','','',''],
//                   ['','','','','','','',''],
//                   ['','','','','','','',''],
//                   ['PB','PB','PB','PB','PB','PB','PB','PB'],
//                   ['TB','CB','FB','QB','KB','FB','CB','TB']
//                 ];

let chessBoard = [['', '', '', '', '', '', '', ''],
['', '', '', '', '', '', '', ''],
['', '', '', '', '', '', '', ''],
['', '', '', '', '', '', '', ''],
['', '', '', '', '', '', '', ''],
['', '', '', '', '', '', '', ''],
['', '', '', '', '', '', '', ''],
['', '', '', '', '', '', '', '']
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




//variable globales d'initialisation de fetch
let id_session = "12";
let id_chess = "13";

let id_white_player = "2";
let id_black_player = "3";

//variable globales pour les scripts

let myChess;


fetch(("http://localhost:8082/Chess/").concat(`${id_chess}`))
    .then(function (res) {
        if (res.ok) {
            return res.json();
        }
    })
    .then(function (value) {
        myChess = value;
        console.log(" chess avec id spécifique:", myChess);

        console.log("l'identifiant de mon chess: ", myChess.idChess);
        let list_locked_black_king = myChess.list_locked_black_king;
        for (const key in list_locked_black_king) {
            if (Object.hasOwnProperty.call(list_locked_black_king, key)) {
                const cases_locked_black = list_locked_black_king[key];
                console.log("key :"+key+"cases locked: "+cases_locked_black);
                for (let i = 0; i < cases_locked_black.length; i++) {
                    let case_locked_black = cases_locked_black[i];
                    //console.log(document.getElementById(case_locked).color);
                    document.getElementById(case_locked_black).style.backgroundColor = "red";

                }
               
            }
        }

        let list_locked_white_king = myChess.list_locked_white_king;
        console.log("les cases de mon chess: ", myChess.squares);
        for (const key in list_locked_white_king) {
            if (Object.hasOwnProperty.call(list_locked_white_king, key)) {
                const cases_locked_white = list_locked_white_king[key];
                console.log("key :"+key+"cases locked: "+cases_locked_white);
                for (let i = 0; i < cases_locked_white.length; i++) {
                    let case_locked_white = cases_locked_white[i];
                    //console.log(document.getElementById(case_locked).color);
                    document.getElementById(case_locked_white).style.backgroundColor = "orange";

                }

            }
        }
        
        displayChess(myChess);


    })
    .catch(function (err) {
        console.log("une erreur est survenue : ", err);
    });

function displayChess(myChess) {

    let col;
    let line;
    //console.log("afficher dans le displayChess ", myChess);
    for (const key_square in myChess.squares) {
        //console.log("col ", key_square.charAt(0), " ligne", key_square.charAt(1));
        let squares = myChess.squares;
        //console.log(squares[key_square].piece);

        line = key_square.charAt(1);
        switch (key_square.charAt(0)) {
            case 'a':
                col = 1;
                break;
            case 'b':
                col = 2;
                break;
            case 'c':
                col = 3;
                break;
            case 'd':
                col = 4;
                break;
            case 'e':
                col = 5;
                break;
            case 'f':
                col = 6;
                break;
            case 'g':
                col = 7;
                break;
            case 'h':
                col = 8;
                break;
            default:
                "case not from the chess";
        }


        let caseHTML = document.getElementById(`${colonneID[col]}${ligneID[9 - line]}`);
        //console.log(caseHTML);

        let family;
        let color;


        let piece = squares[key_square].piece;
        if (piece) {
            color = piece['color'];
            family = piece['family']
        }

        let symbol = "";
        switch (family) {
            case 'POWN':
                symbol = 'P';
                break;
            case 'ROOK':
                symbol = 'T';
                break;
            case 'BISHOP':
                symbol = 'F';
                break;
            case 'KNIGHT':
                symbol = 'C';
                break;
            case 'QUEEN':
                symbol = 'Q';
                break;
            case 'KING':
                symbol = 'K';
                break;

            default:
                "element is not from the chess";
        }

        switch (color) {
            case 'WHITE':
                symbol += 'B';
                break;
            case 'BLACK':
                symbol += 'N';
                break;

            default:
                "element is not from the chess";
        }

        //console.log(symbol)
        caseHTML.innerHTML = displaySymbol.get(symbol);
        if (chessBoard[line - 1][col - 1] === 'PN') {
            caseHTML.innerHTML = "<img src='./img/PN2.png' width=30 height=30>";
        }

    }//for
    //move a piece




    // el.addEventListener("input", (event) => {
    //     //console.log(from);
    //     affect(event.target,from );

    // }, false);

    // function affect(value, variable){
    //     variable = value; 
    // }



}//displayChess

function move() {
    //récupérer les valeurs des inputs from and to for the white player
    let input_from_white_player = document.querySelector("#from_white_player");
    let input_to_white_player = document.querySelector("#to_white_player");
    let from_white_player = input_from_white_player.value;
    let to_white_player = input_to_white_player.value;

    //récupérer les valeurs des inputs from and to for the black player
    let input_from_black_player = document.querySelector("#from_black_player");
    let input_to_black_player = document.querySelector("#to_black_player");
    let from_black_player = input_from_black_player.value;
    let to_black_player = input_to_black_player.value;

    const case_regExp=new RegExp('^[a-h][1-8]$');
    let res_reg_white_player=case_regExp.exec(from_white_player);
    //console.log("*******************"+typeof(res_reg_white_player[0])+" "+typeof(res_reg_white_player[1]));

    let res_reg_black_player=case_regExp.exec(from_black_player);
    //console.log("*******************"+typeof(res_reg_black_player[0])+" "+typeof(res_reg_black_player[1]));

    if (from_white_player && to_white_player) {

        move_by_color(id_white_player, from_white_player, to_white_player);
    } else {

        move_by_color(id_black_player, from_black_player, to_black_player);

    }

}



function move_by_color(id_player, from, to) {

    // alert(from+" "+to);

    fetch(`http://localhost:8082/Sessions/${id_session}/${id_chess}/move?idPlayer=${id_player}&from=${from}&to=${to}`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        // body: JSON.stringify(jsonBody)
    }).then(function (res) {

        if (res.ok) {
            return res.json();
        }

    }).then(function (value) {

        const update_chess = value;
        displayChess(update_chess);
        alert(update_chess['message']);
        window.location.reload();

    }).catch(function (err) {

        console.log("une erreur est survenue : ", err);
    });


}//move function


//displayChess();
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