// Initial Post Content
var contentText = 'Node.js treats each JavaScript file as a separate module. For instance, if you have a file containing some code and this file is named xyz.js, then this file is treated as a module in Node, and you can say that you"ve created a module named xyz. Node.js treats each JavaScript file as a separate module. For instance, if you have a file containing some code and this file is named xyz.js, then this file is treated as a module in Node, and you can say that you"ve created a module named xyz. Node.js treats each JavaScript file as a separate module. For instance, if you have a file containing some code and this file is named xyz.js, then this file is treated as a module in Node, and you can say that you"ve created a module named xyz. Node.js treats each JavaScript file as a separate module. For instance, if you have a file containing some code and this file is named xyz.js, then this file is treated as a module in Node, and you can say that you"ve created a module named xyz.';

// Counter variable to keep likes count
var count = 0;

// Initial Subject Post
var subjectText = 'Everything you should know about "module" & "require" in Node.js';

// To Load the Post Details
function onLoading(st,ct){

    // Subject Heading
    var templateHead = '<div id="sub" contenteditable="false">'+st+'</div>';
    document.getElementById('subHead').innerHTML = templateHead;

    // Content 
    var templateContent = '<div id="content" contenteditable="false" >'+ct+'</div>';
    document.getElementById('contentHead').innerHTML = templateContent;

    // Edit Button
    var btnEdit = '<button class="edit" onclick="editable()">Edit &nbsp;<i class="fa fa-pencil-square-o"></i></button>';
    document.getElementById('editBtn').innerHTML = btnEdit;

    // Like Button
    var likebtn = '<i class="fa fa-thumbs-up"></i>&nbsp; Like';
    document.getElementById('likeBtn').innerHTML = likebtn;

    // Like Message
    var likeMsg = 'Be the first one to like this!';
    document.getElementById('likeText').innerHTML = likeMsg;

}

// Calling the function to show the post details
onLoading(subjectText,contentText);


// To Give like Message and keep like count
function likeCount(){

    // For like button
    var liker = '<i class="fa fa-thumbs-up"></i>&nbsp; Liked';
    document.getElementById('likeBtn').innerHTML = liker;

    // incrementing like count
    count += 1;

    // checking if only one like is there or more than that
    // if one like is there
    if(count == 1){

        var cnt = '1 person likes this!';
        document.getElementById('likeText').innerHTML = cnt;

    }
    // else more than one like is there
    else{

        var cnt = count+' people liked this!';
        document.getElementById('likeText').innerHTML = cnt;

    }
}

// For saving the Edited Content
function saver(){

    // Subject
    subjectText = document.getElementById('sub').textContent;
    var EditedSubText = 'UPDATED : '+subjectText;

    // Content
    contentText = document.getElementById('content').textContent;
    var EditedContText = 'UPDATED : <br>'+contentText;

    // Calling Post displaying function
    onLoading(EditedSubText,EditedContText);
}

// For making the post content Editable
function editable(){

    // Save Button
    var btnSave = '<button class="edit" onclick="saver()">Save &nbsp;<i class="fa fa-save"></i></button>';
    document.getElementById('editBtn').innerHTML = btnSave;

    // Subject Heading
    var templateHead = '<div id="sub" contenteditable="true" class="editor">'+subjectText+'</div>';
    document.getElementById('subHead').innerHTML = templateHead;

    // Content
    var templateContent = '<div id="content" contenteditable="true" class="editor">'+contentText+'</div>';
    document.getElementById('contentHead').innerHTML = templateContent;

}

// For Commenting Feat
function commentIt(){

    // Getting the comment from textarea box
    var CommentText = document.getElementById('textareaBox').value;

    // Checking if the comment is not empty
    if(CommentText!=""){
    
        // new comment
        var textCom = '<p id="CommentTexter">'+CommentText+'</p>';

        // previous comments
        var prevCont = document.getElementById('allComments').innerHTML;

        // adding new comment
        document.getElementById('allComments').innerHTML = textCom;

        // placing older comments below the new comment
        document.getElementById('allComments').innerHTML += prevCont;

        // emptying the textarea box after saving the comment
        document.getElementById('textareaBox').value = "";
    
    }
}