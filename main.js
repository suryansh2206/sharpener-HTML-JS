var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

form.addEventListener('submit', addItem);

itemList.addEventListener('click', removeItem);

filter.addEventListener('keyup', filterItems);

//addItem function
function addItem(e)
{
    e.preventDefault();
//get input value
    var newItem = document.getElementById('item').value;
    var newDescription = document.getElementById('description').value;
//create a new li element
    var li = document.createElement('li');

    li.className = 'list-group-item';

    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(newDescription));
//create delete button
    var deletebtn = document.createElement('button');
    deletebtn.className = 'btn btn-danger btn-sm float-right delete';
    deletebtn.appendChild(document.createTextNode('X'));

//append button to list
    li.appendChild(deletebtn);
//append li to list    
    itemList.appendChild(li);

}
//removeItem function
function removeItem(e)
{
    if(e.target.classList.contains('delete'))
    {
       if(confirm('Are you sure?'))
       {
            var li = e.target.parentElement;
            itemList.removeChild(li);
       }
    }
}


function filterItems(e)
{
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item)
    {
      var itemName = item.firstChild.textContent;
      var desName = item.childNodes[1].textContent;
      if(itemName.toLowerCase().indexOf(text) != -1 || desName.toLowerCase().indexOf(text) != -1)
      {
        item.style.display = 'block';
      }
       else 
       {
        item.style.display = 'none';
      }
    });
  }