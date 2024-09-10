var html = document.childNodes[1];
console.log(html);

var head = html.children[0];
console.log(head);
console.log(head.parentElement)

var meta = head.children[0];
console.log(meta);

var title = head.children[1];
console.log(title);

var style = head.children[2];
console.log(style);

var body = html.children[1];
console.log(body);

var p = document.getElementById("paragraph");
console.log(p);
console.log(p.getAttribute("id"));

var p = document.getElementsByTagName("p")[1];
console.log(p);
console.log(p.previousSibling);

var ul =document.getElementsByClassName("unorderList")[0];
console.log(ul);

var ful = document.getElementById("ful");
console.log(ful);
console.log(ful.previousSibling);

var sil = document.getElementsByTagName("sul");
console.log(sul);
console.log(sul.previousSibling);