function write()
{
	lines = localStorage.getItem('contents');
	file_name = localStorage.getItem('file_name');
	var length = lines.length;
	var content = ""; 
	for(i=0;i<length;i++)
	{	
		if(lines.charAt(i) == '\n')
			content = content + '<br>';
		else
			content = content + lines.charAt(i);
	}
	document.getElementById("file_name").innerHTML = 'Contents of ' + file_name;
	document.getElementById("file_content").innerHTML = content;
}


function key_pressed(key)
 {
    var key_ascii;
    if(window.event) // For IE    
    {                 
      key_ascii = key.keyCode;
    } 
    else if(key.which)  // For other browsers 
    {                 
      key_ascii = key.which;
    }
    if(key_ascii == 98)
    	window.open("home.html","_self");
      
 }


