 //console.log(document.domain);
 //console.log(document.URL);
 //console.log(document.title);
 //console.log(document.doctype);
 //console.log(document.head);

//  var headerTitle = document.getElementById('header-title');
//  var header = document.getElementById('main-header');

//  header.style.borderBottom = 'solid 3px #000';

//  var title = document.getElementsByClassName('title')[0];
//  title.style.fontWeight = 'bold';
//  title.style.color = 'green';

//  var items = document.getElementsByClassName('list-group-item');
// //  console.log(items);
// items[2].style.backgroundColor = 'green';
//  for(var i = 0; i<items.length; i++)
//  {
//     items[i].style.fontWeight = 'bold';
//  }
// var li = document.getElementsByTagName('li');
// li[4].style.backgroundColor = 'red';

//QUERYSELECTOR
var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = 'green';

var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.display = 'none';

//QUERYSELECTORALL
var items = document.querySelectorAll('.list-group-item');
// console.log(items);
items[1].style.color = 'green';

var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i = 0; i < odd.length; i++)
{
    odd[i].style.backgroundColor = 'green';
}
