console.log('Add validation!');
// block form from submitting if any fields are empty

document.getElementById('parking-form').addEventListener('submit', function (event) {
    event.preventDefault()

    var name = document.getElementById('name').value.trim()

    if (name === "") {
        showEmptyError()
    } else {
        fieldPopulate()
    }

    var carY = document.getElementById('car-year').value.trim()

    if (carY === "") {
        showEmptyErrorY()
    } else{
        fieldPopulateY()
    }

    var carMa = document.getElementById('car-make').value.trim()

    if (carMa === "") {
        showEmptyErrorY()
    } else {
        fieldPopulateY
    }

    var carMo = document.getElementById('car-model').value.trim()

    if (carMo ===""){
        showEmptyErrorY()
    } else {
        fieldPopulateY
    }

    var date = document.getElementById('start-date').value.trim()

    if (date === "") {
        showEmptyErrorDate()
    } else {
        fieldPopulateDate()
    }

    var days = document.getElementById('days').value.trim()

    if (days ==="") {
        showEmptyErrorDays()
    } else {
        fieldPopulateDays()
    }

    var cc = document.getElementById('credit-card').value.trim()

    if (cc ==="") {
        showEmptyErrorCC()
    } else {
        fieldPopulateCC()
    }

    var CVV = document.getElementById('cvv').value.trim()

    if (CVV ==="") {
        showEmptyErrorCVV()
    } else {
        fieldPopulateCVV()
    }

    var exp = document.getElementById('expiration').value.trim()

    if (exp ==="") {
        showEmptyErrorExp()
    } else {
        fieldPopulateExp()
    }
})

function showEmptyError(field,id) {
    var field = document.getElementById('name-field')
    field.classList.add('input-invalid')
}

function fieldPopulate() {
    var field = document.getElementById('name-field')
    field.classList.add('input-valid')
}

function showEmptyErrorY() {
    var test = document.getElementById('car-field')
    test.classList.add('input-invalid')
}

function fieldPopulateY() {
    var test = document.getElementById('car-field')
    test.classList.add('input-valid')
}

function showEmptyErrorDate(){
    var field = document.getElementById('start-date-field')
    field.classList.add('input-invalid')
}

function fieldPopulateDate(){
    var field = document.getElementById('start-date-field')
    field.classList.add('input-valid')
}

function showEmptyErrorDays() {
    var field = document.getElementById('days-field')
    field.classList.add('input-invalid')
}

function fieldPopulateDays() {
    var field = document.getElementById('days-field')
    field.classList.add('input-valid')
}

function fieldPopulateCC() {
    var field = document.getElementById('credit-card-field')
    field.classList.add('input-valid')
}

function showEmptyErrorCC() {
    var field = document.getElementById('credit-card-field')
    field.classList.add('input-invalid')
}

function fieldPopulateCVV() {
    var field = document.getElementById('cvv-field')
    field.classList.add('input-valid')
}

function showEmptyErrorCVV() {
    var field = document.getElementById('cvv-field')
    field.classList.add('input-invalid')
}

function showEmptyErrorExp() {
    var field = document.getElementById('expiration-field')
    field.classList.add('input-invalid')
}

function fieldPopulateExp() {
    var field = document.getElementById('expiration-field')
    field.classList.add('input-valid')
}