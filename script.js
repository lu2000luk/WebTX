$("#savestatus").html('')
var param = location.href.split("?")
var filename = param[1]
if (filename === "undefined") {
  console.log("No filename found in the url!")
} else {
  var fnam = filename.replace("%20"," ")
  for(var l; fnam.indexOf("%20") > 0; l++) {
     var fnam = fnam.replace("%20"," ")
  }
  $("#fn").val(fnam)
}

var tparam = location.href.split("?")
var text= tparam[2]
if (text === "undefined") {
  console.log("No text_data found in the url!")
} else {
  var ftxt = text.replace("%20"," ")
  for(var l; ftxt.indexOf("%20") > 0; l++) {
     var ftxt = ftxt.replace("%20"," ")
  }
  $("#textbox").val(ftxt)
}
function download() {
let link = document.getElementById('al');
link.download = $("#fn").val();
let blob = new Blob([$("#textbox").val()], {type: 'text/plain'});
link.href = URL.createObjectURL(blob);
}