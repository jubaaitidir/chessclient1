//récupérer le chess
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
        console.log("les cases de mon chess: ", myChess.squares);

    })
    .catch(function (err) {
        console.log("une erreur est survenue : ", err);
    });

// faire bouger une pièce 

fetch("http://localhost:8082/Sessions/9/9/move?idPlayer=9&from=c3&to=b1", {
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
})
    .then(function (value) {
        console.log(value);
    })
    .catch(function (err) {
        console.log("une erreur est survenue : ", err);
    });

//afficher les cases blockées en rouge 