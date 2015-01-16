$(document).foundation();

$(document).ready(function() {
    $('a.degdeg').each(function() {
        var id = $(this).attr('id');
        $('a#'+id).zclip({
            path: 'js/zclip/ZeroClipboard.swf',
            copy: function() {return $('a#'+id).text();}
        });
    });
});
    $( "a.copy" ).each(function() {
     var id=$(this).attr("id");
     $('a#'+id).zclip({
         copy:function(){return $('input#'+id).val();},
        });
    });