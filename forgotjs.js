
 function myFunction()
 {
 var checkflag=0;
 var SignumID=document.getElementById('SignumID').value;
alert('SignumID'); 
 if(window.XMLHttpRequest)
{
 xmlHttp_forgot=new XMLHttpRequest();
}
 else
{
 xmlHttp_forgot=new ActiveXObject("Microsoft.XMLHTTP");
}
 xmlHttp_forgot.onreadystatechange=function()
{

if (xmlHttp_forgot.readyState === 4 || xmlHttp_forgot.readyState === "complete")
{

alert('reached here');
xmlDoc_forgot = xmlHttp_forgot.responseXML;

alert(xmlDoc_forgot);
var flag = xmlDoc_forgot.getElementsByTagName("flag"); 
checkflag = flag[0].childNodes[0].nodeValue;
alert(checkflag);	
if (checkflag === '1')
{
alert ("New password has been mailed to you!");
}
else 
{alert ("Incorrect information!");}
}
}
 alert ("http://10.184.20.93/um/UserManagement/forgot.php?SignumID=" + SignumID);
 xmlHttp_forgot.open("POST","http://10.184.20.93/um/UserManagement/forgot.php?SignumID=" + SignumID, false);
 xmlHttp_forgot.send();
 //
 }

			   



