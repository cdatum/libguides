$(document).ready(function () {    
// Append an asterisk to each <td> element that has Saturday hours
$("tr.s-lc-mhw-cells  td:nth-child(7) div.s-lc-mhw-loc span.s-lc-time").append("<span style='font-size: 1.3em; color: #c41230;'>*</span>");

// Append an asterisk to all Saturdays except for the 2nd Saturdays of the month
// $("tr.s-lc-mhw-cells:not(:nth-child(3)) td:nth-child(7) div.s-lc-mhw-loc span.s-lc-time").append("<span style='font-size: 1.3em; color: #c41230;'>*</span>");
});
