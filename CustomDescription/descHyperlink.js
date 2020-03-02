/* 
This script is to accompnay the code created by the Libguides Custom Description tool.
It finds thumbnail images created by the tool and then locates the URL associated with 
the database/link. Finally, the image is converted into a link.
 */


var img = $('.s-lg-link-desc, .s-lg-database-desc').find('img');
// Find URL for db and wrap <img> in an <a href> set to the URL
$.each(img, function(){
var url = $(this).closest('li').find('a').attr('href');
$(this).wrap("<a target=\"_blank\" href='" + url + "'></a>")
});