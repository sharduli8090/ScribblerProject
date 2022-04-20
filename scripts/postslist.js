// Array of Posts as objects

var postlistArr = [
    {
        name:'Srishti Gupta',
        subject:'"let" me be a "const"(ant), not a "var"(iable)!',
        content:'Since JavaScript does not have any type-checking, either of these keywords can be used to declare a variable of any type (datatype) in JavaScript. Though all the three keywords are used for the same purpose, they are different.'
    },
    {
        name:'Colby Fayock',
        subject:'What is linting and how can it save you time?',
        content:'One of the biggest challenges in software development is time. It"s something we can"t easily get more of, but linting can help us make the most out of the time we have.'
    },
    {
        name:'Yazeed Bzadough',
        subject:'How to Get More Views on Your Tech Blog',
        content:'If you re a developer with a Twitter account, you have already seen everyone and their cat start a blog, YouTube channel, or Patreon. We all want to become stars, or at the very least, a recognizable name in the industry.'
    },
    {
        name:'Cedd Burge',
        subject:'How to write easily describable code',
        content:'When code is not describable using words, most people have to do some mental mapping to turn it in to words. This wastes mental energy, and you run the risk of getting the mapping wrong. Different people will map to different words, which leads to confusion when discussing the code.'
    },
    {
        name:'Srishti Gupta',
        subject:'Everything you should know about "module" & "require" in Node.js',
        content:'Node.js treats each JavaScript file as a separate module. For instance, if you have a file containing some code and this file is named xyz.js, then this file is treated as a module in Node, and you can say that you’ve created a module named xyz.'
    }
];


// Function to display the cards

function displayCards(postlistArr){

    document.getElementById('mainDiv').innerHTML = "";

    
    for(var i=0;i<postlistArr.length;i++){

    // Shortening the content of the post 
    var textCont = postlistArr[i].content;
    var shortCont = textCont.substring(0,140);


    // Template of the card
    var template = '<div id="myDiv1" class="postCards">'+
    '<div class="nameCard">'+
        '<p>'+postlistArr[i].name+'</p>'+
    '</div>'+
    '<div class="subCardMain">'+
        '<div class="subCard">'+
            '<p>'+postlistArr[i].subject+'</p>'+
            '<span>'+
            '<i class="fa fa-trash fa-lg trashBin" onclick="confirmCall('+i+')"></i>'+

            '<!-- The Modal -->'+
            '<div  id="cnfrmModal" class="modalClass">'+
            '<!-- Modal Content -->'+
              '<div class="contentMod">'+
                     '<h6 style="text-align:center;">Are you sure you want to delete?</h6>'+
                    '<div id="modHeadFlex">'+
                        '<button type="button" class="btn btn-success" id="yesButton">Yes</button>'+
                        '<button type="button" class="btn btn-danger closermod" aria-label="Close">No</button>'+
                    '</div>'+
              '</div>'+
            '</div>'+

            '</span>'+
        '</div>'+
        '<div class="contentCard">'+
        '<p style="margin-bottom:0px;padding-bottom:0px;">'+shortCont+'...</p>'+
        '</div>'+
        '<i class="fa fa-ellipsis-h fa-lg menuIcon" onclick=openPageCall()></i>'+
    '</div>';

    // Adding the template of card to the window
    document.getElementById('mainDiv').innerHTML += template;
    
    }
}

// Calling the display card function
displayCards(postlistArr);


// To open the Next Post Page
function openPageCall(){
    window.open('../html/post.html');
}


// Function to delete a particular card
function deleteCard(num){
    postlistArr.splice(num,1);
    displayCards(postlistArr);
}



// Function to display the modal of confirmation of deletion

function confirmCall(ind){
   
    // To display the modal
    var modal = document.getElementById("cnfrmModal");
    modal.style.display = "block";

    // To close the modal when clicked on NO
    var span = document.getElementsByClassName("closermod")[0];
    span.onclick = function() {
        modal.style.display = "none";
    }

    // To close the modal if clicked outside the modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // To delete the card when clicked on YES
    var yeser = document.getElementById('yesButton');
    yeser.onclick = function() {
        deleteCard(ind);
    }

}

