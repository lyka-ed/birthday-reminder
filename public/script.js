document
  .getElementById("birthdayForm")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const birthdate = document.getElementById("birthdate").value.trim();
    const submitButton = document.querySelector('button[type="submit"]');

    submitButton.disabled = true;
    submitButton.textContent = "Submitting...";

    try {
      console.log(username, email, birthdate);
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, birthdate }),
      });
      if (response.ok) {
        // alert('User added successfully');
        showToast("User added successfully");
        document.getElementById("birthdayForm").reset();
      } else {
        // alert('Failed to add user');
        showToast("Failed to add user");
      }
    } catch (error) {
      console.error(error);
      //   alert('Failed to add user');
      showToast("Failed to add user");
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "Add User";
    }
  });

function showToast(message) {
  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("message");
  toastMessage.textContent = message;
  toast.className = "toast show";
  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 3000);
}
