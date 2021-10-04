$(document).ready(function(){
  

   // a click
   $("#a").click(function(){
      $('#a').addClass('squish-v');
      $('#a-left').addClass('squeeze-600');  
   });

// b click
   $("#b").click(function(){
      $('#a').removeClass('squish-v');
      $('#a-left').removeClass('squeeze-600');

      $('#b').addClass('squish-h');
      $('#b-bowl-1, #b-bottom').addClass('stretch-500');  
   });

// c click
   $("#c").click(function(){
      $('#b').removeClass('squish-h');
      $('#b-bowl-1, #b-bottom').removeClass('stretch-500');
      
      $('#c').addClass('squish-v');
      $('#c-left-1, #c-top').addClass('squeeze-600'); 
   });

// d click
   $("#d").click(function(){
      $('#a').toggleClass('squish-v');
      $('#a-left').toggleClass('squeeze-600'); 
      $('#b').toggleClass('squish-h');
      $('#b-bowl-1, #b-bottom, #b-stem-2').toggleClass('stretch-500'); 
      
      $('#c').removeClass('squish-v');
      $('#c-left-1, #c-top').removeClass('squeeze-600'); 

      $('#d').addClass('squish-v');
      $('#d-stem-2, #d-bottom').addClass('squeeze-900'); 
 
   });

// e click
   $("#e").click(function(){
      $('#d').removeClass('squish-v');
      $('#d-stem-2, #d-bottom').removeClass('squeeze-900'); 

      $('#e').addClass('squish-h');
      $('#e-left-1, #e-left-2').addClass('stretch-500');
      $('#e-bottom').addClass('squeeze-900')
   });


// f click
   $("#f").click(function(){
      $('#b, #e').removeClass('squish-h');
      $('#b-bowl-1, #b-bottom, #b-stem-2, #e-left-1, #e-left-2').removeClass('stretch-500');
      $('#e-bottom, #d-stem-2, #d-bottom').removeClass('squeeze-900')

      $('#f').toggleClass('squish-v');
      $('#f-top-2, #f-tail').toggleClass('squeeze-900');
      $('#f-stem-1').toggleClass('stretch-500');
   });

// hover experiments (g/h/i/j) ... expand to rest?

   $("#g").mouseover(function(){
      $('.triple-h').addClass('squish-h');  
   });

   $("#h").mouseover(function(){
      $('.triple-h').removeClass('squish-h'); 
      $('.double-w').addClass('squeeze-900');
   });

   $("#i").mouseover(function(){
      $('.double-w').removeClass('squeeze-900');
   });

// g click
   $("#g").click(function(){
      $('#g').toggleClass('squish-v');
      $('#h-top').toggleClass('squeeze-900');
      $('#h-stem-1').addClass('stretch-500');
      $('#h').addClass('squish-h')
   });

// h click
   $("#h").click(function(){
      $('#h').removeClass('squish-h');
      $('#h-stem-1').removeClass('stretch-500');
   });

// i click
   $("#i").click(function(){
      $('#i').toggleClass('squish-h-10');
      $('#i-stem-1').toggleClass('stretch-500');

      $('#h').toggleClass('stretch-h')
      $('#h-top, #h-stem-2').toggleClass('squeeze-600');
   });

// j click
   $("#j").click(function(){
      $('#j').addClass('squish-h-10');
      $('#k').addClass('stretch-h');
      $('#k-stem-3').addClass('stretch-500');
   });

// k click
   $("#k").click(function(){
      $('#k').toggleClass('squish-v');
      $('#k-middle').toggleClass('squeeze-600');

      $('#j').removeClass('squish-h-10');
      $('#k').removeClass('stretch-h');
      $('#k-stem-3').removeClass('stretch-500');
   });
   
// l click + hover
   $("#l").click(function(){

      $('#g').toggleClass('squish-h');
      $("#g-bottom").toggleClass('squeeze-900');

      $('#h').toggleClass('stretch-h')
      $('#h-top, #h-stem-2').toggleClass('squeeze-600');
      $('#h-stem-3').toggleClass('stretch-h');

      $('#j').toggleClass('squish-h-10');

      $('#k').toggleClass('stretch-h');
      $('#k-middle').toggleClass('squeeze-600');
   });

   $('#l').mouseover(function(){
      $('.quad-h, .double-w').addClass('squish-h');  
   });

   $('#l').mouseout(function(){
      $('.quad-h, .double-w').removeClass('squish-h');  
   });



// m click 

   $("#m").click(function(){

      $('#m').toggleClass('squish-h');

      $('#n').toggleClass('squish-h');

      $('#o').addClass('stretch-h');
   });
   
// n click

   $("#n").click(function(){
      $('#o').toggleClass('stretch-h');
      $('#o-top, #o-left-1').toggleClass('squeeze-900')
   });

// o click 

   $("#o").click(function(){
      $('#o').toggleClass('stretch-h');
      $('#o-left-2, #o-left-1').toggleClass('stretch-h');

      $('#p').toggleClass('squish-v');
      $('#p-stem-2, #p-top').toggleClass('squeeze-600')
   });


// p click

   $("#p").click(function(){

      $('#p').toggleClass('squish-h');
      $('#q').toggleClass('stretch-h');
      $('#q-stem-2, #q-bottom').toggleClass('squeeze-900');
      $('#q-left').toggleClass('squish-v');
      $('#p-stem-2, #p-top').toggleClass('squeeze-600');
   });


// q click + hover

   $("#q").click(function(){

      $('#p').toggleClass('squish-v');
      $('#q').toggleClass('squish-v');
      $('#q-stem-1, #q-top').toggleClass('squeeze-900');
      $('#q-right').toggleClass('squish-v');
      $('#p-stem-1, #p-bottom').toggleClass('stretch-h');
   });

   $('#q').mouseover(function(){
      $('.triple-h, .double-w').addClass('squish-h');  
   });

   $('#q').mouseout(function(){
      $('.triple-h, .double-w').removeClass('squish-h');  
   });


// r click + hover

   $("#r").click(function(){

      $('#s').toggleClass('squish-v');
      $('#t').toggleClass('squish-v');
      $('#t-stem-1, #t-middle').toggleClass('squeeze-900');
      $('#t-right').toggleClass('squish-v');
      $('#s-top, #s-bottom').toggleClass('stretch-h');
   });

   $('#r').mouseover(function(){
      $('.triple-w, .double-w').addClass('squish-h');  
      $('.triple-h, .double-h').addClass('squeeze-900');  
   });

// s click + hover

   $('#s').mouseover(function(){
      $('.triple-h, .double-h').removeClass('squeeze-900');
      $('.double-w, .double-w').addClass('squish-v'); 
   });


   $("#s").click(function(){

      $('#s').toggleClass('squish-h');
      $('#s').toggleClass('squish-v');
      $('#t').toggleClass('squish-v');
      $('#t-right').toggleClass('squish-v');
      $('#t-stem-2, #s-stem-1').toggleClass('stretch-h');
   });

 // t click + hover

   $('#t').mouseover(function(){
      $('.triple-h, .double-h').removeClass('squeeze-900');
      $('.double-w, .double-w').removeClass('squish-v'); 
      $('.triple-w, .double-w').removeClass('squish-h'); 
   });  

   $("#t").click(function(){

      $('#s').toggleClass('squish-h');
      $('#s').toggleClass('squish-v');
      $('#t').toggleClass('squish-v');
      $('#t-right').toggleClass('squish-v');
      $('#t-stem-2, #s-stem-1').toggleClass('stretch-h');
   });


// u click 

   $("#u").click(function(){
      $('#u').toggleClass('squish-h');
      $('#v').toggleClass('stretch-h');
      $('#v-left-2, #v-right-1').addClass('squish-h');
      $('#v-left-1, #v-right-2').addClass('squeeze-600');
   });

// v click 

   $("#v").click(function(){
      $('#u').removeClass('squish-h');
      $('#v').addClass('squish-v');
      $('#v-left-2, #v-right-1').removeClass('squish-h');
      $('#v-left-1, #v-right-2').removeClass('squeeze-600');
      $('#v-left-2, #v-right-1').toggleClass('stretch-h');
   });

// w click 

   $("#w").click(function(){
      $('#w').toggleClass('squish-v');
      $('#w-left').addClass('squeeze-600'); 
      $('#w-tail').addClass('squish-v'); 
   });

//  x click + hover

   $("#x").click(function(){
      $('#x').toggleClass('squish-h');
      $('#w-bottom-1, #w-bottom-3').toggleClass('squeeze-600')
      $('#w-left, #w-middle').addClass('squish-v');
      $('#w-left').removeClass('squeeze-600'); 
      $('#w-tail').removeClass('squish-v'); 
   });

   $('#x').mouseover(function(){
      $('.triple-h, .double-h').addClass('squeeze-600');
   }); 

   $('#x').mouseout(function(){
      $('.triple-h, .double-h').removeClass('squeeze-600');
   });

// y click 

   $("#y").click(function(){
      $('#y').toggleClass('squish-v');
      $('#y-bottom').toggleClass('squish-v');

      $('#w-middle').toggleClass('squish-v'); 
      $('#w-left').toggleClass('squeeze-900'); 
   });



// z click 

$("#z").click(function(){
   $('#z').toggleClass('stretch-h');
   $('#z-left, #z-right').toggleClass('stretch-h');
   $('#z-bottom, #z-top').addClass('squeeze-600')

   $('#y').toggleClass('squish-h');

   $('#w').toggleClass('squish-h')
   $('#w-middle').toggleClass('squish-v'); 
   $('#w-left').toggleClass('squeeze-900'); 
   $('#x-left-2, #x-right-2').toggleClass('squish-v');
});




   
// major transform on click toggle
   
      $("#toggle").click(function() {
         $('.letter-wrap').toggleClass('shrink');
         $('.triple-w').toggleClass('triple-grow');
         $('.block').toggleClass('dark');
         $('.ball').toggleClass('grey');

         $('#squish-button').toggleClass('toggle');
         $('.nav').toggleClass('white');
           
      }); 
   
// slide info transition

      $("#info-button").click(function() {
         $('.nav').toggleClass('info-expand');

         $('#info').toggleClass('info-slide');
      }); 


});
   
   