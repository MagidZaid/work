
var image_tracker = "d";
 function change(){

var image =  document.getElementById('social');


if(image_tracker == 'd'){
 image.src = 'images/mag.jpg';
  image_tracker = 'f';

}else{

    image.src = 'images/dessert.jpg';
    image_tracker = 'd';

}

 }

setInterval('change()' ,2000);

//===================================================

var image_trackerm = "s";

function changem(){

var image = document.getElementById('rest');

    if(image_trackerm == 's'){
        image.src = 'images/blog2.jpg';
        image_trackerm = 'b';

    }else{

        image.src = 'images/sect3.jpg';
         image_trackerm = 's';
    }


}

setInterval('changem()' ,2000);

//================================================

var image_trackers = "m";

function changes(){

var image = document.getElementById('sect');

    if(image_trackers == 'm'){

        image.src = 'images/sect7.jpg';
         image_trackers = 'z';


    }else{

        image.src = 'images/sect2.jpg';
        image_trackers = 'm';
    }

}

setInterval('changes()' ,2000);






//==============================================
