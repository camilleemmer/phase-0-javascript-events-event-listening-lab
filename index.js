const input = document.getElementById('input')
function addingEventListener() {
    

    // input.addEventListener('click', function(e){
    //   return 'I was clicked!'
    // });

    function clickAlert() {
      alert('I was clicked!');
    }
    
    input.addEventListener('click', clickAlert);
     

}

// function addingEventListener() {
//     const input = document.getElementById('input');

// function clickAlert() {
//   alert('I was clicked!');
// }

// input.addEventListener('click', clickAlert); 
// }





