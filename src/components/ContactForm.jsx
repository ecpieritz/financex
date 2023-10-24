import React from "react";

function ContactForm() {
  return (
    <form>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputName">Your Name</label>
          <input
            type="text"
            class="form-control"
            id="inputName"
            placeholder=""
          />
        </div>
        <div class="form-group col-md-6">
          <label for="inputEmail">Email</label>
          <input type="email" class="form-control" id="inputEmail" />
        </div>
      </div>
      <div class="form-group">
        <label for="inputMessage">Your Message</label>
        <textarea
          class="form-control"
          id="inputMessage"
          placeholder=""
        />
      </div>
      <button type="submit" class="fx-btn outline-black">
        SEND
      </button>
    </form>
  );
}

export default ContactForm;
