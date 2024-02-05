const keypad_elements_input = Array.from(document.querySelectorAll('.keypad-elements.input'))

for (let element = 0; element < keypad_elements.length; element++) {
  keypad_elements[element].addEventListener('click', visible_capture)
}

function visible_capture(e) {
  alert(e.target.innerText)
}
