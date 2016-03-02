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
    if(key_ascii == 111)
      open_file();
 }

 function open_file()
 {
    var input_id = document.getElementById("info_file");
    input_id.click();
 }

 function changeContent(evt)
{
  var file_obj = document.getElementById("info_file").files[0];
  var file_name = file_obj.name;
  var ext_obj = file_name.split('.'), extension;
  var i;
  for(i in ext_obj)
    extension = ext_obj[i];
  // check file extension is info or not
  if(extension == 'info')
  {
    if (file_obj) 
    {
      var reader = new FileReader();
      reader.onload = function(e) 
      { 
        contents = e.target.result;
        localStorage.setItem('contents', contents);
        localStorage.setItem('file_name', file_name);
        document.getElementById("home_form").submit();
      }
      reader.readAsText(file_obj);
    }
     else 
     { 
      alert("Sorry,Failed to load file,Try Again");
     } 
  }
  else
    alert("Wrong file format,Please open files of info format only");
}
