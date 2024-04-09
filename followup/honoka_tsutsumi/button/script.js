document.getElementById('color-button').addEventListener('click', changeColor)

function changeColor() {
  let red = Math.floor(Math.random()*256);
  let green = Math.floor(Math.random()*256);
  let blue = Math.floor(Math.random()*256);

  document.getElementsByTagName("body")[0].style.backgroundColor = `rgb(${red},${green},${blue})`;
  console.log('Button clicked!'); // feel free to change/delete this line
}