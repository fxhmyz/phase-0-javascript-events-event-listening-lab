function addingEventListener() {
}
// Function to add event listener to an element
function addingEventListener() {
    // Get the element with id 'button'
    const input = document.getElementById('button');
    
    // Define the callback function
    function clickAlert() {
      alert('I was clicked!');
    }
  
    // Add the event listener
    input.addEventListener('click', clickAlert);
  }
  
  // Call the function to add the event listener
  addingEventListener();
  