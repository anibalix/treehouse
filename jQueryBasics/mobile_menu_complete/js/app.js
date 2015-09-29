//Problem: Is not responsive
//Solution: Hide texts links and swap out with more appropriate navigation

//Create a select and append to menu
var $select = $("<select></select>");
$('#menu').append($select);

//Cycle over menu links
$('#menu a').each(function () {
    var $anchor = $(this);
    //Create an option
    var $option = $('<option></option>');


    //Deal with selected options depending on current page
    if($anchor.parent().hasClass('selected')) {
        $option.prop('selected', true);
    }
    //options value is the href
    $option.val($anchor.attr('href'));
    //options text is the text of link
    $option.text($anchor.text());
    //append option to select
    $select.append($option)
});

//Bind click to button
$select.change(function () {
    //go to selects location
    window.location = $select.val();
});


