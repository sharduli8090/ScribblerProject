// Initial Post Content
var contentText = 'Node.js treats each JavaScript file as a separate module. For instance, if you have a file containing some code and this file is named xyz.js, then this file is treated as a module in Node, and you can say that you"ve created a module named xyz. Node.js treats each JavaScript file as a separate module. For instance, if you have a file containing some code and this file is named xyz.js, then this file is treated as a module in Node, and you can say that you"ve created a module named xyz. Node.js treats each JavaScript file as a separate module. For instance, if you have a file containing some code and this file is named xyz.js, then this file is treated as a module in Node, and you can say that you"ve created a module named xyz. Node.js treats each JavaScript file as a separate module. For instance, if you have a file containing some code and this file is named xyz.js, then this file is treated as a module in Node, and you can say that you"ve created a module named xyz. Node.js treats each JavaScript file as a separate module. For instance, if you have a file containing some code and this file is named xyz.js, then this file is treated as a module in Node, and you can say that you"ve created a module named xyz. Node.js treats each JavaScript file as a separate module. For instance, if you have a file containing some code and this file is named xyz.js, then this file is treated as a module in Node, and you can say that you"ve created a module named xyz. Node.js treats each JavaScript file as a separate module. For instance, if you have a file containing some code and this file is named xyz.js, then this file is treated as a module in Node, and you can say that you"ve created a module named xyz.';

// Initial Subject Post
var subjectText = 'Everything you should know about "module" & "require" in Node.js';

// To Load the Post Details
function onLoading(st,ct){
    var templateHead = '<div id="sub" contenteditable="false">'+st+'</div>';
    document.getElementById('subHead').innerHTML = templateHead;

    var templateContent = '<div id="content" contenteditable="false" >'+ct+'</div>';
    document.getElementById('contentHead').innerHTML = templateContent;

    var btnEdit = '<button id="edit" onclick="editable()">Edit &nbsp;<i class="fa fa-pencil-square-o"></i></button>';
    document.getElementById('editBtn').innerHTML = btnEdit;
}

// Calling the function to show the post details
onLoading(subjectText,contentText);

// For saving the Edited Content
function saver(){
    subjectText = document.getElementById('sub').textContent;
    var EditedSubText = 'Updated : '+subjectText;
    contentText = document.getElementById('content').textContent;
    var EditedContText = 'Updated : <br>'+contentText;
    onLoading(EditedSubText,EditedContText);
}

// For making the post content Editable
function editable(){

    var btnSave = '<button id="edit" onclick="saver()">Save &nbsp;<i class="fa fa-save"></i></button>';
    document.getElementById('editBtn').innerHTML = btnSave;

    var templateHead = '<div id="sub" contenteditable="true" class="editor">'+subjectText+'</div>';
    document.getElementById('subHead').innerHTML = templateHead;

    var templateContent = '<div id="content" contenteditable="true" class="editor">'+contentText+'</div>';
    document.getElementById('contentHead').innerHTML = templateContent;

}
