/* 
This script is to accompnay the code created by the Libguides Custom Description tool.
It finds thumbnail images created by the tool and then locates the URL associated with 
the database/link. Finally, the image is converted into a link.
 */

// Find the thumbnail images
var img = $('.s-lg-link-desc, .s-lg-database-desc').find('img');

// Make each thumbnail a clickable link using the URL it's paired with
$.each(img, function(){
var url = $(this).closest('li').children('div').children('a').attr('href');
});