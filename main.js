var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

form.addEventListener('submit', addItem);

itemList.addEventListener('click', removeItem);

//addItem function
function addItem(e)
{
    e.preventDefault();
//get input value
    var newItem = document.getElementById('item').value;
//create a new li element
    var li = document.createElement('li');

    li.className = 'list-group-item';

    li.appendChild(document.createTextNode(newItem));
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