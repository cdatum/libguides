
<h1>Weekly Hours</h1>
<p>This example uses jQuery to access the LibCal api to display weekly hours. </p>

<p>The results are formatted and then placed into a table that is marked up with Bootstrap 3 styling for use in Libguides.</p>

<p>See the example output here: <a href="https://clluzzo.github.io/hours/">https://clluzzo.github.io/hours/</a></p>

<p>Other LibCal sites can use this by inserting their unique iid number in the URL:<br />
<code>https://api3.libcal.com/api_hours_grid.php?iid=<b>XXXX</b>&format=json&weeks=1&systemTime=1&callback=?</code>
<br /><br />
The iid number can be found by visiting your main LibCal page <code>https://YOURSITE.libcal.com</code>, view the source code for the page, and look for the iid near the page header. 
</p>
