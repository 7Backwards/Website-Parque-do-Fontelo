
var $doc = $('html, body');
$('.ScrollSuave').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

$('.ScrollSuave1').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top-100  
    }, 500);
    return false;
});


