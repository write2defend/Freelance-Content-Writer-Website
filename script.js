
function submitForm() {
    const messageSending = document.getElementById("message_sending");
    const confirmation = document.getElementById("confirmation");
    const form = document.getElementById("submitForm");

    // Show "sending" message
    messageSending.style.display = "block";
    confirmation.style.display = "none";

    // Simulate sending
    setTimeout(() => {
        messageSending.style.display = "none";  // hide sending
        confirmation.style.display = "block";   // show confirmation

        // Reset form fields
        form.reset();

        // Hide confirmation after 2 seconds
     setTimeout(() => {
        confirmation.style.display = "none";
        }, 2000);
    }, 2000);

    // Prevents page reload //
    return false;
}
// Character count for message box in the contact form//
  
const messageInput = document.getElementById('message');
const characterCount = document.getElementById('characterCount');
const maxLength = 300;

messageInput.addEventListener('input', () => {
  let currentLength = messageInput.value.length;

  if (currentLength > maxLength) {
	    messageInput.value = messageInput.value.substring(0, maxLength);
	    currentLength = maxLength;
  }
  characterCount.textContent = `${currentLength} / ${maxLength}`;
});
