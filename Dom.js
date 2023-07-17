
var form = document.getElementById('addForm');

var itemList = document.getElementById('items')

// Form submit event
form.addEventListener('submit', addItem);

//Delete Event
itemList.addEventListener('click', removeItem);


// Add item
function addItem(e){
  e.preventDefault();
//console.log(1);

//Get input value;
var newItem = document.getElementById('item').value;
var description = document.getElementById('description').value;

//create new li element
var li = document.createElement('li');

//Add Class
li.className = 'list-group-item'

//Add TextNode
li.appendChild(document.createTextNode(newItem));

li.appendChild(document.createTextNode(description)); 


//Add delete button 
var deleteBtn = document.createElement('button');

//Add Class 
deleteBtn.className = 'btn btn-danger btn-sm float-right delete'

//Add TextNode 
deleteBtn.appendChild(document.createTextNode('X'));

//Append Buttn to li
li.appendChild(deleteBtn);

//Append li to itemList
itemList.appendChild(li);
}


// Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
      }
    }
  }
 

  //Filter Function
  var filter = document.getElementById('filter');
  filter.addEventListener('keyup', filterItems);
  
  function filterItems(e) {
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
  
    Array.from(items).forEach(function (item) {
      var itemName = item.firstChild.textContent.toLowerCase();
      var description = item.childNodes[1].textContent.toLowerCase();
  
      if (itemName.indexOf(text) !== -1 || description.indexOf(text) !== -1) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }


