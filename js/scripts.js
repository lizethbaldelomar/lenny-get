$(document).foundation();

$(document).ready(function(){
    $('a.degdeg').each(function(){
        var id = $(this).attr('id');
        $('a#'+id).zclip({
            path: 'js/zclip/ZeroClipboard.swf',
            copy: function(){return $('a#'+id).text();},
            afterCopy: function(){}
        });
    });
    $('a.degdeg').qtip({
        content: 'Copied!',
        show: {
            event: 'click',
            solo: true,
            effect: function() {
                $(this).fadeTo(200, 1);
            }
        },
        hide: {
            effect: function() {
                $(this).animate({ opacity: 0 }, { duration: 1000 });
            }
        }
    });
});