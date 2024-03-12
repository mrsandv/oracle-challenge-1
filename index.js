// text
const textbox = document.getElementById("textbox");
// display
const display = document.getElementById("result-text");
// warning
const warning = document.getElementById("warning");
// buttons
const encryptButton = document.querySelector("#encrypt");
const decryptButton = document.querySelector("#decrypt");
const copyText = document.getElementById("copyText");

// helpers
const validate = (text) => {
  const match = /^[a-zA-Z\s]+$/.test(text);
  if (match) {
    warning.style.color = "black";
  } else {
    warning.style.color = "red";
  }
  return match
}
// handlers
const handleEncrypt = () => {
  let content = textbox.value;
  const check = validate(content)
  if (check) {
    content = content.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat");
    display.innerText = content;
  }
}

const handleDecrypt = () => {
  let content = textbox.value;
  const check = validate(content)
  if (check) {
    content = content.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u");
    display.innerText = content;
  }
}

async function writeClipboardText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.error(error.message);
  }
}

const handleCopy = () => {
  writeClipboardText(display.innerText);
}

// events listeners
encryptButton.addEventListener("click", handleEncrypt)

decryptButton.addEventListener("click", handleDecrypt)

copyText.addEventListener("click", handleCopy)