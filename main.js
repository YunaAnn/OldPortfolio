/***LOADING***/
var time;

function loading()
{
  time = setTimeout(showPage, 2000);
}

function showPage()
{
  document.getElementById("loader").style.display = "none";
  document.getElementById("page").style.display = "block";
}