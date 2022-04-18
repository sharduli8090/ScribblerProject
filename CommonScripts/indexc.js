// Header template added dynamically
var template = '<div id="title">'+
'<div id="company">ScriBBler</div>'+
'<div id="tagline">Explore, Imagine, Create</div>'+
'</div>'+
'<div id="buttons">'+
'<button type="button" class="sign" data-bs-toggle="modal" data-bs-target="#exampleModal">Sign Up</button>'+
'<div class="modal " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
'<div class="modal-dialog">'+
'<div class="modal-content">'+
'<div class="modal-header">'+
'<h5 style="color:grey;">Get Started</h5>'+
'<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>'+
'</div>'+
'<div class="modal-body">'+
'<form>'+
'<div class="mb-3">'+
'<label class="form-label">Name</label>'+
'<input type="text" class="form-control" placeholder="Enter your name" style="background-color:	rgb(128,128,128,0.2);" required>'+
'</div>'+
'<div class="mb-3">'+
'<label class="form-label">Username</label>'+
'<input type="text" class="form-control" placeholder="Enter your username" style="background-color:	rgb(128,128,128,0.2);" required>'+
'</div>'+
'<div class="mb-3">'+
'<label class="form-label">Password</label>'+
'<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter your password" style="background-color:rgb(128,128,128,0.2);" required>'+
'</div>'+
'<div class="mb-3">'+
'<label class="form-label">Confirm Password</label>'+
'<input type="password" class="form-control" id="exampleInputPassword1"  placeholder="Re-Enter your password" style="background-color:rgb(128,128,128,0.2);" required>'+
'</div>'+
'<button type="submit" class="btn" style="color:white;background-color:green;width:100%">Sign Up</button>'+
'</form>'+
'</div>'+
'</div>'+
'</div>'+
'</div>&nbsp;'+

'<button type="button" class="sign" data-bs-toggle="modal"  data-bs-target="#staticBackdrop">Sign In</button>'+
'<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">'+
'<div class="modal-dialog">'+
'<div class="modal-content">'+
'<div class="modal-header">'+
'<h5 style="color:grey;">Welcome Back!</h5>'+
'<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>'+
'</div>'+
'<div class="modal-body">'+
'<form>'+
'<div class="mb-3">'+
'<label class="form-label">Username</label>'+
'<input type="text" class="form-control" placeholder="Enter your username" style="background-color:	rgb(128,128,128,0.2);" required>'+
'</div>'+
'<div class="mb-3">'+
'<label class="form-label">Password</label>'+
'<input type="password" class="form-control" id="exampleInputPassword1"  placeholder="Re-Enter your password" style="background-color:rgb(128,128,128,0.2);" required>'+
'</div>'+
'<button type="submit" class="btn" style="color:white;background-color:green;width:100%">Sign In</button>'+
'</form>'+
'<div style="text-align:center;">Not a member? <a href="#" data-bs-dismiss="modal" aria-label="Close" data-bs-toggle="modal" data-bs-target="#exampleModal">Sign Up</a></div>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'</div>';
document.getElementById('header').innerHTML += template;

