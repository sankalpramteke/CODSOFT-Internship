function appendToDisplay(value) {
    document.getElementById('display').textContent += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').textContent = '0';
  }
  
  function calculate() {
    let result = eval(document.getElementById('display').textContent);
    document.getElementById('display').textContent = result;
  }
  
  function backspace() {
    let currentDisplay = document.getElementById('display').textContent;
    document.getElementById('display').textContent = currentDisplay.slice(0, -1);
  }
  
  document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (!isNaN(key) || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
      appendToDisplay(key);
    } else if (key === 'Enter') {
      calculate();
    } else if (key === 'Backspace') {
      backspace();
    }
  });