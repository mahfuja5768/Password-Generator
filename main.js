let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");

//display password length
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input", () => {
  sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener("click", () => {
  passBox.value = generatePassword();
  console.log("g");
});

let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*";

function generatePassword() {
  let genPassword = "";
  let allChars = "";

  allChars += upperChars.checked ? upperChars : "";
  allChars += lowerChars.checked ? lowerChars : "";
  allChars += numbers.checked ? allNumbers : "";
  allChars += symbols.checked ? allSymbols : "";

  if(allChars == "" || allChars.length == 0) {
    return genPassword;
  }

  let i = 1;

  while (i <= inputSlider.value) {
    genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
    i++;
  }

  return genPassword;
}


copyIcon.addEventListener('click', ()=>{
    if(passBox.value != '' || passBox.value.length >=1){
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText = 'check';
        copyIcon.title = 'Copied';

        setTimeout(()=>{
            copyIcon.innerHTML = "cont";
            copyIcon.title = ''
        }, 3000)
    }
})