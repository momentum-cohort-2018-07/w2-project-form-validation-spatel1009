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

function showEmptyError() {
    var field = document.getElementById('name-field')
    field.classList.add('input-invalid')
    var errorDiv = document.createElement('div')
    errorDiv.classList.add('error-msg')
    errorDiv.innerText = 'This field cannot be blank'
    field.appendChild(errorDiv)
    field.classList.add('error')
}
function clearError () {
    var field = document.getElementById('name-field')
    field.classList.remove('error')
    // same as: field.parentElement.getElementsByClassName('.error-msg')[0]
    var errorMsg = field.parentElement.querySelector('.error-msg')
    if (errorMsg) {
      errorMsg.remove()
    }
  }

function fieldPopulate() {
    var field = document.getElementById('name-field')
    field.classList.add('input-valid')
}

function showEmptyErrorY() {
    var field = document.getElementById('car-field')
    field.classList.add('input-invalid')
    var errorDiv = document.createElement('div')
    errorDiv.classList.add('error-msg')
    errorDiv.innerText = 'This field cannot be blank'
    field.appendChild(errorDiv)
    field.classList.add('error')
}

function fieldPopulateY() {
    var test = document.getElementById('car-field')
    test.classList.add('input-valid')
}

function showEmptyErrorDate(){
    var field = document.getElementById('start-date-field')
    field.classList.add('input-invalid')
    var errorDiv = document.createElement('div')
    errorDiv.classList.add('error-msg')
    errorDiv.innerText = 'This field cannot be blank'
    field.appendChild(errorDiv)
    field.classList.add('error')
}

function fieldPopulateDate(){
    var field = document.getElementById('start-date-field')
    field.classList.add('input-valid')
}

function showEmptyErrorDays() {
    var field = document.getElementById('days-field')
    field.classList.add('input-invalid')
    var errorDiv = document.createElement('div')
    errorDiv.classList.add('error-msg')
    errorDiv.innerText = 'This field cannot be blank'
    field.appendChild(errorDiv)
    field.classList.add('error')
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
    var errorDiv = document.createElement('div')
    errorDiv.classList.add('error-msg')
    errorDiv.innerText = 'This field cannot be blank'
    field.appendChild(errorDiv)
    field.classList.add('error')
}

function fieldPopulateCVV() {
    var field = document.getElementById('cvv-field')
    field.classList.add('input-valid')
}

function showEmptyErrorCVV() {
    var field = document.getElementById('cvv-field')
    field.classList.add('input-invalid')
    var errorDiv = document.createElement('div')
    errorDiv.classList.add('error-msg')
    errorDiv.innerText = 'This field cannot be blank'
    field.appendChild(errorDiv)
    field.classList.add('error')
}

function showEmptyErrorExp() {
    var field = document.getElementById('expiration-field')
    field.classList.add('input-invalid')
    var errorDiv = document.createElement('div')
    errorDiv.classList.add('error-msg')
    errorDiv.innerText = 'This field cannot be blank'
    field.appendChild(errorDiv)
    field.classList.add('error')
}

function fieldPopulateExp() {
    var field = document.getElementById('expiration-field')
    field.classList.add('input-valid')
}

