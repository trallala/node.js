$(loaded);

function loaded() {
  showText();
  $("#submit").click(
    function() {
      saveText();
      showText();
    });
  $("a").click(
    function(){
      //$(this)を含む$("p")を探す-> value見つける-> key見つける
      //localStorage.removeItem(key)
    });
   $("#checkbox").click(
     function(){
       $(this).replaceWith($("<s>" + this.innerHTML + "</s>"));
    });
  return false;

}

function saveText() {
  var text = $("#task");
  var time = new Date();
  localStorage.setItem(time, text.val());
  text.val("");
}

function showText() {
  var list = $("#list");
  list.children().remove();
  var key, value, html = [];
  for(var i=0, len=localStorage.length; i<len; i++) {
    key = localStorage.key(i);
    value = localStorage.getItem(key);
    html.push("<p>" + "<input id=\"checkbox\" type=\"checkbox\">"  + value + " <a>&#215;</a>" + "</p>");
  }
  list.append(html.join(''));
}
