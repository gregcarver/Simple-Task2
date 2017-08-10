 var friends = ["fred","dred","sed","aed","qed","wed","eed","red","ted","yed"] 
var sentences = ["hello","my","name","is","a","very","special","name","beer","BEER!!!!"]
  
  
  
  document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    var button = document.createElement('button')
    button.id = "alertButton"

    button.innerText="click me"
    $(".innercontainer1").append(button)
    document.getElementById('alertButton').addEventListener('click', function(){
        alert('i got clicked')
    })
    var input = document.getElementById('input')
        document.getElementById('inputButton').addEventListener('click', function(){
        alert(input.value)
    })
            document.getElementById('addName').addEventListener('click', function(){
        var name=document.createElement('p')
        name.innerText="Greg"
        $("#nameContainer").append(name)
    })
        document.getElementById('addFriend').addEventListener('click', function(){
           for(var i=0;i<friends.length;i++){     
            var friend=document.createElement('li')
            friend.id="listId"
            friend.innerText=friends[i]
            $("#friendContainer").append(friend)
        }
            document.getElementById('changeFriends').addEventListener('click', function(){
                var sentence= document.getElementById('friendContainer').querySelectorAll('li')
                sentence[0].innerText=sentences[0]
                sentence[1].innerText=sentences[1]
                sentence[2].innerText=sentences[2] 
                sentence[3].innerText=sentences[3] 
                sentence[4].innerText=sentences[4] 
                sentence[5].innerText=sentences[5] 
                sentence[6].innerText=sentences[6] 
                sentence[7].innerText=sentences[7] 
                sentence[8].innerText=sentences[8]
                sentence[9].innerText=sentences[9]    

    })
    })

    colorDiv.addEventListener('mouseover',function(){
    var colorDiv = document.getElementById('colorDiv')
    console.log('moused over"')
colorDiv.style.backgroundColor = randomColor();

    function randomColor() {
    var randomRed = Math.floor(Math.random() * 350);
    var randomGreen = Math.floor(Math.random() * 350);
    var randomBlue = Math.floor(Math.random() * 350);
    var randomColor = "rgb("+randomRed+","+randomGreen+","+randomBlue+")";
    return randomColor
    }
});
    colorText.addEventListener('click',function(){
    var colorText = document.getElementById('colorText')
    console.log('moused over"')
colorText.style.color = randomColor();

    function randomColor() {
    var randomRed = Math.floor(Math.random() * 350);
    var randomGreen = Math.floor(Math.random() * 350);
    var randomBlue = Math.floor(Math.random() * 350);
    var randomColor = "rgb("+randomRed+","+randomGreen+","+randomBlue+")";
    return randomColor
    }
});
});

