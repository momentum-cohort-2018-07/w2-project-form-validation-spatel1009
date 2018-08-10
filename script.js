console.log('Add validation!');
// block form from submitting if any fields are empty

document.getElementById('parking-form').addEventListener('submit', function (event) {
    event.preventDefault()

    var name = document.getElementById('name').value.trim()

    if (name === "") {
        showEmptyError()
    } else if (name !== "") {
        fieldPopulate()
    }

    var carY = document.getElementById('car-year').value.trim()

    if (carY === "") {
        showEmptyErrorY()
    } else if (carY !== ""){
        fieldPopulateY()
    }
})



function showEmptyError() {
    var field = document.getElementById('name-field')
    field.classList.add('input-invalid')
}

function fieldPopulate() {
    var field = document.getElementById('name-field')
    field.classList.add('input-valid')
    field.classList.remove('errorDiv')
}

function showEmptyErrorY() {
    var test = document.getElementById('car-field')
    test.classList.add('input-invalid')
}

function fieldPopulateY() {
    var test = document.getElementById('car-field')
    test.classList.add('input-valid')
}