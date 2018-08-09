console.log('Add validation!');
// block form from submitting if any fields are empty

document.getElementById('parking-form').addEventListener('submit', function(event) {
    event.preventDefault()

    var field = document.getElementById('name').value.trim()

    if (field === "") {
       showEmptyError ()
    } 
})

function showEmptyError () {
    var errorDiv = document.createElement('div')
    errorDiv.classList.add('error-msg')
    errorDiv.innerText = 'All fields must be entered'
}