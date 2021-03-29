var listofJokes = [];

$(document).ready(function () {
        
    $.ajax({
          url: 'http://api.icndb.com/jokes/random/20',
          dataType: 'json',
          type: 'GET',
          success: function (res) {
            
              listofJokes = res.value
              var randomJoke = listofJokes[Math.floor(Math.random() * listofJokes.length)].joke; 


          }
    
            
    })
    
})
function myFunction() {
    var randomJoke = listofJokes[Math.floor(Math.random() * listofJokes.length)].joke;
    document.getElementById("randomJoke").innerHTML = randomJoke;
}
