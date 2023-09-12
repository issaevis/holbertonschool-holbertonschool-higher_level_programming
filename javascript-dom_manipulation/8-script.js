document.addEventListener('DOMContentLoaded', function () {
    const addHello = document.getElementById('hello');
  
    // Fetch the greeting message from the URL
    fetch('https://hellosalut.stefanbohacek.dev/?lang=fr')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Extract the greeting message from the fetched data
        const hello = data.hello;
        
        // Create a text node with the greeting message
        const textNode = document.createTextNode(hello);
  
        // Append the text node to the 'hello' element
        addHello.appendChild(textNode);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  });
  