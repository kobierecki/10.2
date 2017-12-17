var span = $('span');
var randomIgnored = Math.floor(Math.random() * span.length);
console.log(randomIgnored);
span.each(function(index, element, randomIgnored) {
    var ignored = []; 
    console.log(randomIgnored);
    if(index == randomIgnored) {
        $(element).append(ignored);
    } 
    if(element.inArray(ignored)) {
        $(element).css('color', 'red');
    }
})

var paragraphs = $('p');
paragraphs.each(function(index, element) {
    var button = '<button class="btn" data-tmp="' + index + '">Click me!</button>';
    $(element).append(button);
})

$("button").click(function(){
	alert($(this).attr("data-tmp"));
});
