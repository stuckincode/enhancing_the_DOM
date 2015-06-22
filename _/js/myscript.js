$(document).ready(function(){
    $(".group li").on("click", "img", function(e){
       $("body").append("<div id='overlay'></div>");  

       // Create an overlay to appear at current scroll possition

     var scrollPosTop = $(window).scrollTop();
     var scrollPosLeft = $(window).scrollLeft();
       $('#overlay').css({
            "top": scrollPosTop,
            "left": scrollPosLeft
       });

       //create the big Image over the overlay

       var bigImg = $(this).attr('src');
       
       var bigImgSrc = bigImg.substr(0, bigImg.length - 7) + '.jpg';
       $('#overlay').append("<img id='largeImage'>");
       $('#largeImage').attr('src', bigImgSrc);
       $('#largeImage').css({
        'position': "absolute",
        'display': 'block',
        'cursor': 'pointer'
       }); // css

       // Resize image wait until image is loaded

      $('#largeImage').on('load', function(){
            var imgHeight = ($('#largeImage').height());
            var imgWidth = ($('#largeImage').width());

           if(imgHeight > $(window).height()){
                var hRatio = $(window).height() / imgHeight;
                $(this).height(imgHeight * hRatio);
                $(this).width(imgWidth * hRatio);

           } else{
            if(imgWidth > $(window).width()){
                var wRatio = $(window).width() / imgWidth;
                $(this).height (imgHeight * wRatio);
                $(this).width (imgWidth * wRatio);
            };
          };//else
         centerImage($('#largeImage'));

         $(this).on('click', function(){
           $("#overlay").remove();
         }); //centerImage
      });//on load
      $(window).scroll(function(){
            $('#overlay').css({
                'top': $(window).scrollTop() + 'px',
                'left': $(window).scrollLeft() + 'px'
            });
      }); // scroll

      $(window).resize(function(){
            var imgHeight = ($('#largeImage').height());
            var imgWidth = ($('#largeImage').width());
            var wRatio = $(window).width() / imgWidth;
            var hRatio = $(window).height() / imgHeight;

                $('#largeImage').height(imgHeight * hRatio);
                $('#largeImage').width(imgWidth * hRatio);

                centerImage($('#largeImage'));
      }); //resize
      
    }); // on click

        function centerImage(image){
            var xPos = ($(window).innerWidth() - $(image).width()) / 2;
            var yPos = ($(window).innerHeight() - $(image).height()) /2;

               $(image).css({
                'top': yPos + 'px',
                'left': xPos + 'px'
                });
        }//centerImage

}); //document ready
   