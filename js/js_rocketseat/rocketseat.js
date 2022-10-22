var jq = $.noConflict();
jq(document).ready(function(){
    jq('.title').click(function(){
        jq('#descriptionAtt').slideToggle('slow');
    });
});