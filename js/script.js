// MODAL CONFIRMATION

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    submitForm();
  });

function submitForm() {
  // Get the form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  // Here, you can add additional logic to handle form submission if needed.

  // Close the form modal
  var myModal = new bootstrap.Modal(document.getElementById("myModal"));
  myModal.hide();

  // Show the confirmation pop-up
  showConfirmationModal();
}

function showConfirmationModal() {
  // Create a Bootstrap modal
  var modal = document.createElement("div");
  modal.classList.add("modal", "fade");
  modal.setAttribute("tabindex", "-1");
  modal.setAttribute("role", "dialog");
  modal.innerHTML = `
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Confirmation</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>Thank you, we will send you your information shortly.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    `;

  // Show the modal
  document.body.appendChild(modal);
  var bootstrapModal = new bootstrap.Modal(modal);
  bootstrapModal.show();

  // Remove the modal from the DOM after it is hidden
  modal.addEventListener("hidden.bs.modal", function () {
    document.body.removeChild(modal);
  });
}

// CONTACT FORM MODAL SHOW ON CLICK
// Get the form element
const contactForm = document.getElementById("contactForm");

// Handle form submission when the user confirms in the modal
document.getElementById("confirmSubmit").addEventListener("click", function () {
  contactForm.submit();
});
