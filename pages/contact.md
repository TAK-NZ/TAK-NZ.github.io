---
title: Contact
layout: contact
description: Contact
permalink: /contact/
---

<form
  action="https://formspree.io/f/mqapkyoy"
  class="fs-form"
  target="_top"
  method="POST"
>
  <input type="text" name="_gotcha" style="display:none" tabindex="-1" autocomplete="off" />
  <div class="fs-field">
    <label class="fs-label" for="name">Name</label>
    <input class="fs-input" id="name" name="name" required />
  </div>
  <div class="fs-field">
    <label class="fs-label" for="organisation">Organisation</label>
    <input class="fs-input" id="organisation" name="organisation" required />
  </div>
  <div class="fs-field">
    <label class="fs-label" for="email">Email</label>
    <input class="fs-input" id="email" name="email" type="email" required />
  </div>
  <div class="fs-field">
    <label class="fs-label" for="reason">Reason for contact</label>
    <select class="fs-select" id="reason" name="reason" required>
      <option value="" disabled selected>Select an option</option>
      <option value="Request access">Request access</option>
      <option value="Technical question">Technical question</option>
      <option value="Partnership">Partnership</option>
      <option value="Other">Other</option>
    </select>
  </div>
  <div class="fs-field">
    <label class="fs-label" for="message">Message</label>
    <textarea class="fs-textarea" id="message" name="message" required></textarea>
    <p class="fs-description"></p>
  </div>
  <div class="fs-button-group">
    <button class="fs-button" type="submit">Send</button>
  </div>
</form>