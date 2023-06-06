import React from "react";

const Contact = () => {

    return (
        <div class="container">
            <h1 class="mt-5 mb-3">Contact Us</h1>
            <div class="contact-form">
            <form>
                <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" required/>
                </div>
                <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" required/>
                </div>
                <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea class="form-control" id="message" rows="5" required></textarea>
                </div>
                <button type="submit" class="btn btn-warning">Send Message</button>
            </form>
            </div>
        </div>
    )
}

export default Contact;