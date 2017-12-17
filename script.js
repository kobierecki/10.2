var span = $('span');
var ignored = ["js-spanArray-1", "js-spanArray-3"]; 
span.each(function(index, element) {
    if(jQuery.inArray(this.id, ignored) == -1) {
        $(element).css('color', 'red');
    } 
})

var paragraphs = $('p');
paragraphs.each(function(index, element) {
    var button = '<button class="btn" data-tmp="' + index + '">Click me!</button>';
    $(element).append(button);
});

$("button").click(function(){
	alert($(this).attr("data-tmp"));
});
