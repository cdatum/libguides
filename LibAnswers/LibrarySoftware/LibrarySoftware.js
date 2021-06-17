$(document).ready(function() {

  // Setup the table id="nursing_table"
  $("#softwareTable").dataTable({
    "aoColumnDefs": [{
      "bSortable": true,
      "aTargets": [0, 1]
    }],
    buttons: ['copy', 'excel', 'pdf'],
    //Optional: set the initial sorting (descending order) to the third column.
    //Columns are counted 0, 1, 2 so 2 is column 3.
    "bPaginate": true,
    "sDom": 'Bftp<"bottom"li><"clear">',
    "oLanguage": {
      "sSearch": "Filter:"
    }
  });

  var resourceList = [{
      "computer": "AL-L200-S-01",
      "resource": "NCLEX-RN 4000",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-01",
      "resource": "Microsoft SQL Server",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-01",
      "resource": "Respondus Lockdown Browser",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-01",
      "resource": "Kurzweil 3000",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-01",
      "resource": "Git Bash",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-01",
      "resource": "Alice 3",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-02",
      "resource": "NCLEX-RN 4000",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-02",
      "resource": "Microsoft SQL Server",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-02",
      "resource": "Respondus Lockdown Browser",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-02",
      "resource": "Kurzweil 3000",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-02",
      "resource": "Git Bash",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-02",
      "resource": "Alice 3",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-03",
      "resource": "NCLEX-RN 4000",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-03",
      "resource": "Microsoft SQL Server",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-03",
      "resource": "Respondus Lockdown Browser",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-03",
      "resource": "Kurzweil 3000",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-03",
      "resource": "Git Bash",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-03",
      "resource": "Alice 3",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-04",
      "resource": "NCLEX-RN 4000",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-04",
      "resource": "Microsoft SQL Server",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-04",
      "resource": "Respondus Lockdown Browser",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-04",
      "resource": "Kurzweil 3000",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-04",
      "resource": "Git Bash",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-04",
      "resource": "Alice 3",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-05",
      "resource": "NCLEX-RN 4000",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-05",
      "resource": "Microsoft SQL Server",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-05",
      "resource": "Respondus Lockdown Browser",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-05",
      "resource": "Kurzweil 3000",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-05",
      "resource": "Git Bash",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-05",
      "resource": "Alice 3",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-06",
      "resource": "NCLEX-RN 4000",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-06",
      "resource": "Microsoft SQL Server",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-06",
      "resource": "Respondus Lockdown Browser",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-06",
      "resource": "Kurzweil 3000",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-06",
      "resource": "Git Bash",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-06",
      "resource": "Alice 3",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-07",
      "resource": "NCLEX-RN 4000",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-07",
      "resource": "Microsoft SQL Server",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-07",
      "resource": "Respondus Lockdown Browser",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-07",
      "resource": "Kurzweil 3000",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-07",
      "resource": "Git Bash",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-07",
      "resource": "Alice 3",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-08",
      "resource": "NCLEX-RN 4000",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-08",
      "resource": "Microsoft SQL Server",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-08",
      "resource": "Respondus Lockdown Browser",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-08",
      "resource": "Kurzweil 3000",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-08",
      "resource": "Git Bash",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-08",
      "resource": "Alice 3",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-09",
      "resource": "NCLEX-RN 4000",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-09",
      "resource": "Microsoft SQL Server",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-09",
      "resource": "Respondus Lockdown Browser",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-09",
      "resource": "Kurzweil 3000",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-09",
      "resource": "Git Bash",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-09",
      "resource": "Alice 3",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-10",
      "resource": "Respondus Lockdown Browser",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-10",
      "resource": "HP Scanjet G4050",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-10",
      "resource": "HP Copy G4050",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-10",
      "resource": "HP Scanning G4050",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-11",
      "resource": "Respondus Lockdown Browser",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-12",
      "resource": "Respondus Lockdown Browser",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-13",
      "resource": "Respondus Lockdown Browser",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-14",
      "resource": "Respondus Lockdown Browser",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-16",
      "resource": "Respondus Lockdown Browser",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-17",
      "resource": "Respondus Lockdown Browser",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-18",
      "resource": "Respondus Lockdown Browser",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-15",
      "resource": "Adobe Creative Cloud",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-15",
      "resource": "HP Scanjet Pro 3500",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-19",
      "resource": "Kurzweil 3000",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-19",
      "resource": "HP Scanjet Pro 2500 f1",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-20",
      "resource": "Respondus Lockdown Browser",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-S-20",
      "resource": "Kurzweil 3000",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-SA-01 (Mac)",
      "resource": "Firefox Browser",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-SA-01 (Mac)",
      "resource": "Safari",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-SA-02 (Mac) ",
      "resource": "Adobe Creative Cloud",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-SA-03 (Mac)",
      "resource": "Firefox Browser",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-SA-03 (Mac)",
      "resource": "Safari",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-SA-04 (Mac)",
      "resource": "Firefox Browser",
      "campus": "Allegheny"
    },
    {
      "computer": "AL-L200-SA-04 (Mac)",
      "resource": "Safari",
      "campus": "Allegheny"
    },
    {
      "computer": "NO-N1005-LIB-14",
      "resource": "Adobe Creative Cloud",
      "campus": "North"
    },
    {
      "computer": "NO-N1005-LIB-10",
      "resource": "HP Scanner (flatbed)",
      "campus": "North"
    },
    {
      "computer": "NO-N1005-LIB-11",
      "resource": "HP Scanner (document feeder)",
      "campus": "North"
    }
  ];


  $.each(resourceList, function(index, entry) {
    //console.log(entry.computer, entry.resource, entry.campus);
  });

  // Create array of unique software/hardware resources
  var resources = [];
  var campuses = [];
  var computers = [];

  // fill the resources array (software & hardware)
  $.each(resourceList, function(index, entry) {
    if ($.inArray(entry.resource, resources) === -1) {
      resources.push(entry.resource)
    }
    resources.sort();
  });

  // fill the computers array
  $.each(resourceList, function(index, entry) {
    if ($.inArray(entry.computer, computers) === -1) {
      computers.push(entry.computer)
    }
    computers.sort();
  });

  // fill the campuses array
  $.each(resourceList, function(index, entry) {
    if ($.inArray(entry.campus, campuses) === -1) {
      campuses.push(entry.campus)
    }
    campuses.sort();
  });


  console.log("resources", resources);
  console.log("campuses", campuses);
  console.log("computers", computers);

/*
  // for each item in resources[], look in resourceList[] to find the campus & computer
  $.each(resources, function(index, value) {
    $("#software").append("<h3>" + value + "</h3>");
      $.grep(resourceList, function(val, i){
        if (val.resource === value){
          $("#software").append(val.campus + " " + val.computer + "<br>");
          //console.log(val.resource, ":", val);
        }
      })
  })
  */

  // for each item in resources[], look in resourceList[] to find the campus & computer
  $.each(resources, function(index, value) {
    //$("#software").append("<h3>" + value + "</h3>");
        $("#accordionSoftware").append('<div class="panel panel-default"><div class="panel-heading" role="tab" id="heading' + index + '"><h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse' + index +'" aria-expanded="true" aria-controls="collapse' + index + '">' + value + '</a></h4></div><div id="collapse' + index + '" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading' + index +'"><div id="body' + index + '"class="panel-body">');
      $.grep(resourceList, function(val, i){
        if (val.resource === value){
          //collapse += val.campus + " " + val.computer + "<br>";
          //console.log(collapse);
          //$("#software").append(val.campus + " " + val.computer + "<br>");
          //$("#accordion").append(val.campus + " " + val.computer + "<br>");
          var bodyIndex = "body" + index;
          $('#' + bodyIndex).append(val.campus + " " + val.computer + "<br>");
        }
        $("#accordionSoftware").append("</div></div></div>");

      })
  })

  // for each campus, list the resource & computer #
  $.each(campuses, function(index, value) {
    //$("#software").append("<h3>" + value + "</h3>");
        $("#accordionCampus").append('<div class="panel panel-default"><div class="panel-heading" role="tab" id="headingCampus' + index + '"><h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseCampus' + index +'" aria-expanded="true" aria-controls="collapseCampus' + index + '">' + value + '</a></h4></div><div id="collapseCampus' + index + '" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingCampus' + index +'"><div id="campus' + index + '"class="panel-body">');
      $.grep(resourceList, function(val, i){
        if (val.campus === value){
          //collapse += val.campus + " " + val.computer + "<br>";
          //console.log(collapse);
          //$("#software").append(val.campus + " " + val.computer + "<br>");
          //$("#accordion").append(val.campus + " " + val.computer + "<br>");
          var bodyIndex = "campus" + index;
          $('#' + bodyIndex).append(val.computer + " " + val.resource+ "<br>");
        }
        $("#accordionCampus").append("</div></div></div>");

      })
  })

  // for each computer, list the resources
});
