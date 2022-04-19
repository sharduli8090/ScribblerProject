
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


for(var i=0;i<postlistArr.length;i++){
    var textCont = postlistArr[i].content;
    var shortCont = textCont.substring(0,140);
    var template = '<div id="myDiv1" class="postCards">'+
    '<div class="nameCard">'+
        '<p>'+postlistArr[i].name+'</p>'+
    '</div>'+
    '<div class="subCardMain">'+
        '<div class="subCard">'+
            '<p>'+postlistArr[i].subject+'</p>'+
            '<span>'+
            '<i class="fa fa-trash fa-lg trashBin"></i>'+
            '</span>'+
        '</div>'+
        '<div class="contentCard">'+
        '<p style="margin-bottom:0px;padding-bottom:0px;">'+shortCont+'...</p>'+
        '</div>'+
        '<i class="fa fa-ellipsis-h fa-lg menuIcon"></i>'+
    '</div>';
    document.getElementById('mainDiv').innerHTML += template;

}