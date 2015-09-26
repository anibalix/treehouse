//Problem: User when clicking on image goes to a dead end
//Solution: Create a user overlay with the large image - Lightbox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>")

//Add image to overlay
$overlay.append($image);

//add caption to overlay
$overlay.append($caption)

//Add overlay
$("body").append($overlay);

//Capture the click event on a link to an image
$('#imageGallery a').click(function(event) {
    event.preventDefault()
    var imageLocation = $(this).attr('href');
    $image.attr('src', imageLocation );

    //show overlay
    $overlay.show()

    var captionText = $(this).children('img').attr("alt")
    $caption.text(captionText);


});


$overlay.click(function() {
    $overlay.hide()
});