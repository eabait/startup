
/**
 * self invoked function from https://blog.mgechev.com/2012/08/29/self-invoking-functions-in-javascript-or-immediately-invoked-function-expression/
 * after completly web page loaded function https://stackoverflow.com/questions/11936816/execute-function-after-complete-page-load
 * Explanation of DOMContentLoaded https://developer.mozilla.org/es/docs/Web/Events/DOMContentLoaded
(function () {
   
  document.addEventListener("DOMContentLoaded", function(event){
    var content = document.getElementsByClassName("hidden-content")
    I run out of ideas with this method
  })
})();
*/

(function () {
  $(document).ready(function(){
    $(".hidden-content").hide();
    $(".hidden-content").fadeIn(3000);
  });
})();

function alertmessage(){
  alert("Alert message");
}