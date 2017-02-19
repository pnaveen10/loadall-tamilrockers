//TESTED WITH GOOGLE CHROME
// SPECIFY MAXIMUM PAGES TO LOAD
var maxpages = 10 //DEFAULT IS TO LOAD 10 PAGES
var waitTime = 2000 //DEFAULT 2 SECONDS

// PRESET VALUES (DON'T CHANGE)
var intervalid;
var xpath = $x;
var count = 4;

//PATH AS OF TODAY
xpath('//*[@id="forum_load_more"]').forEach(function(val,inddd){val.click()});
intervalid = setInterval(scrr, waitTime);

function scrr() {
	xpath('//*[@id="forum_load_more"]').forEach(function(val,inddd){val.click()});
	window.scrollTo(0,document.body.scrollHeight);
	if (count > maxpages) {clearInterval(intervalid);window.scrollTo(0,0)}
	count++;
}