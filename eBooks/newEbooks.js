/*
Creates ebook entries and links based on vendor specifications

Gale data fields: Title, ISBN
Gale url: https://ezproxy.ccac.edu/login?url=https://link.gale.com/apps/pub/9781137496980/GVRL?sid=gale_marc&u=pitt92539

Ebsco data fields: Title, ISBN, EbscoID
Ebsco URL https://ezproxy.ccac.edu/login?url=http://search.ebscohost.com/login.aspx?direct=true&db=nlebk&AN=1141003

Source anchors created in spreadsheets will take this format
<a data-vendor="{gale, ebsco, or other}" data-ebscoid="" data-isbn="">Title</a>
*/

$(document).ready(function(){
  //setup output vars
  /*
  htmlBook = <div class="book"><div class="coverimg"><img src="http://syndetics.com/index.aspx?isbn=
  {isbn}
  postISBN = /MC.GIF&amp;client=sirsi" /></a></div><div class="booklink ebscoEbooks">
  {title}
  postTitle = </div><div class="ebscoIcon">

  url (created in functions based on vendor) = <a href="https://ezproxy.ccac.edu/login?url=http://search.ebscohost.com/login.aspx?direct=true&db=nlebk&AN=
  {ebscoid}
  "><img src="http://lgimages.s3.amazonaws.com/data/imagemanager/29104/ebooks_btn_1_.gif" alt="eBooks button" /></a></div></div>

  */

  var htmlBook = '<div class="book"><div class="coverimg"><img src="http://syndetics.com/index.aspx?isbn=';
  var postISBN = '/MC.GIF&amp;client=sirsi" /></a></div><div class="booklink ebscoEbooks">';
  var postTitle = '</div><div class="ebscoIcon"><a href="';

  // get the list of <a> in the #books div
  var books = $("#books a");

  // process each <a> into html
  $.each(books, function(i,data){
    // <a data-vendor="{gale, ebsco, or other}" data-ebscoid="" data-isbn="">Title</a>
    var vendor = $(data).attr('data-vendor');

      // process the Gale ebooks
      if (vendor == "gale"){
        var isbn = $(data).attr('data-isbn');
        var title = $(data).text();
        makeGaleEbook(title, isbn);
      }
    // process the Ebsco ebooks
    else if (vendor == "ebsco"){
      var isbn = $(data).attr('data-isbn');
      var title = $(data).text();
      var ebscoId = $(data).attr('data-ebscoid');
      makeEbscoEbook(title, isbn, ebscoId);
    }
  })

/* Creates the html for an Ebsco eBook and appends it to the page */
function makeEbscoEbook(title, isbn, ebscoId){
  //Ebsco data fields: Title, ISBN, EbscoID
  //Ebsco URL https://ezproxy.ccac.edu/login?url=http://search.ebscohost.com/login.aspx?direct=true&db=nlebk&AN={ebscoId}
  var html = "";
  // make the URL and close out the div for the ebook
  var url = 'https://ezproxy.ccac.edu/login?url=http://search.ebscohost.com/login.aspx?direct=true&db=nlebk&AN=' + ebscoId + '"><img src="https://lgimages.s3.amazonaws.com/data/imagemanager/29104/ebooks_btn_1_.gif" alt="eBooks button" /></a></div></div>';
  html += htmlBook + isbn + postISBN + title + postTitle + url;
  $("#books").append(html);
}

/* Creates the html for a Gale eBook and appends it to the page */
function makeGaleEbook(title, isbn){
  //Gale data fields: Title, ISBN
  //Gale url: https://ezproxy.ccac.edu/login?url=https://link.gale.com/apps/pub/{isbn}/GVRL?sid=gale_marc&u=pitt92539
  var html = "";
  // make the URL and close out the div for the ebook
  var url = 'https://ezproxy.ccac.edu/login?url=https://link.gale.com/apps/pub/' + isbn + '/GVRL?sid=gale_marc&u=pitt92539"><img src="https://libapps.s3.amazonaws.com/accounts/3897/images/gale-ebook.png" alt="eBooks button" /></a></div></div>';
  html += htmlBook + isbn + postISBN + title + postTitle + url;
  $("#books").append(html);
}
});
