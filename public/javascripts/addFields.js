/* Adds a given number of item fields to the page.
 * Necessary for B&B.
 *
 * NOTE - Help from:
 *     https://stackoverflow.com/questions/14853779/
 *          adding-input-elements-dynamically-to-form
*/
function add_fields(){
  // Num of inputs to create
  var number = document.getElementById("item").value;
  // Container <div> where dynamic content will be placed
  var container = document.getElementById("item-container");
  // Clear previous contents of the container
  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }

  for(i = 1; i <= number; i++){
    // Append a node with a random text
    container.appendChild(document.createTextNode("item" + i));
    // Create an <input> element, set its type and name attributes
    var input = document.createElement("input");
    input.type = "text";
    input.name = "item" + i;
    container.appendChild(input);

    // Append a line break
    container.appendChild(document.createElement("br"));
  }
}
