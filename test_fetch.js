//tester le post with the fetch

fetch("http://localhost:8082/Sessions/9/9/move?idPlayer=9&from=c3&to=b1", {
	method: "POST",
	headers: { 
'Accept': 'application/json', 
'Content-Type': 'application/json' 
},
	// body: JSON.stringify(jsonBody)
}).then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(value) {
    console.log(value);
  })
  .catch(function(err) {
    console.log("une erreur est survenue : ",err);
  });



  //tester le get sessions with the fetch
fetch("http://localhost:8082/Sessions")
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(value) {
    console.log(value);
  })
  .catch(function(err) {
    console.log("une erreur est survenue : ",err);
  });


 //tester le get c all chess with the fetch
 fetch("http://localhost:8082/Chess/All")
 .then(function(res) {
   if (res.ok) {
     return res.json();
   }
 })
 .then(function(value) {
   console.log(value);
 })
 .catch(function(err) {
   console.log("une erreur est survenue : ",err);
 });


 //tester le get chess by id with the fetch
 let id_chess="9";
 fetch(("http://localhost:8082/Chess/").concat(`${id_chess}`))
 .then(function(res) {
   if (res.ok) {
     return res.json();
   }
 })
 .then(function(value) {
   console.log(value);
 })
 .catch(function(err) {
   console.log("une erreur est survenue : ",err);
 });


  //tester le get c all chess with the fetch
  fetch("http://localhost:8082/Users")
  .then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function(value) {
    console.log(value);
  })
  .catch(function(err) {
    console.log("une erreur est survenue : ",err);
  });
 

   //tester le get all players with the fetch
   fetch("http://localhost:8082/Players")
   .then(function(res) {
     if (res.ok) {
       return res.json();
     }
   })
   .then(function(value) {
     console.log(value);
   })
   .catch(function(err) {
     console.log("une erreur est survenue : ",err);
   });
  