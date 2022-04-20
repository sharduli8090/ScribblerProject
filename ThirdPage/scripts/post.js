var contentText = 'Node.js treats each JavaScript file as a separate module. For instance, if you have a file containing some code and this file is named xyz.js, then this file is treated as a module in Node, and you can say that you"ve created a module named xyz. Node.js treats each JavaScript file as a separate module. For instance, if you have a file containing some code and this file is named xyz.js, then this file is treated as a module in Node, and you can say that you"ve created a module named xyz. Node.js treats each JavaScript file as a separate module. For instance, if you have a file containing some code and this file is named xyz.js, then this file is treated as a module in Node, and you can say that you"ve created a module named xyz. Node.js treats each JavaScript file as a separate module. For instance, if you have a file containing some code and this file is named xyz.js, then this file is treated as a module in Node, and you can say that you"ve created a module named xyz. Node.js treats each JavaScript file as a separate module. For instance, if you have a file containing some code and this file is named xyz.js, then this file is treated as a module in Node, and you can say that you"ve created a module named xyz. Node.js treats each JavaScript file as a separate module. For instance, if you have a file containing some code and this file is named xyz.js, then this file is treated as a module in Node, and you can say that you"ve created a module named xyz. Node.js treats each JavaScript file as a separate module. For instance, if you have a file containing some code and this file is named xyz.js, then this file is treated as a module in Node, and you can say that you"ve created a module named xyz.';
var subjectText = 'Everything you should know about "module" & "require" in Node.js';

function onLoading(st,ct){
    var templateHead = '<div id="sub" contenteditable="false">'+st+'</div>';
    document.getElementById('subHead').innerHTML = templateHead;

    var templateContent = '<div id="content" contenteditable="false" >'+ct+'</div>';
    document.getElementById('contentHead').innerHTML = templateContent;

    var btnEdit = '<button id="edit" onclick="editable()">Edit</button>';
    document.getElementById('editBtn').innerHTML = btnEdit;
}

onLoading(subjectText,contentText);

function saver(){
    subjectText = document.getElementById('sub').textContent;
    var EditedSubText = 'Updated : '+subjectText;
    contentText = document.getElementById('content').textContent;;
    onLoading(EditedSubText,contentText);
}

function editable(){

    var btnSave = '<button id="edit" onclick="saver()">Save</button>';
    document.getElementById('editBtn').innerHTML = btnSave;

    var templateHead = '<div id="sub" contenteditable="true">'+subjectText+'</div>';
    document.getElementById('subHead').innerHTML = templateHead;

    var templateContent = '<div id="content" contenteditable="true" >'+contentText+'</div>';
    document.getElementById('contentHead').innerHTML = templateContent;

}
