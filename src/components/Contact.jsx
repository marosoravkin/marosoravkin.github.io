import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [contact, setContact] = useState({});

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/data/portfolio.json')
      .then(res => res.json())
      .then(data => setContact(data.about.contact));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    ).then(
      (result) => {
        alert("Thank you for your email! I will reach back to you within 1-2 working days.");
        console.log(result.text);
        form.reset();
      },
      (error) => {
        alert("Failed to send email. Please try again.");
        console.error(error.text);
      }
    );
  };

  return (
    <div className='contact-container'>
      <div className='contact-block'>
        <h1>Contact Me</h1>
        <div>
          <p><strong>Email:</strong> {contact.email}</p>
          <p><strong>Phone:</strong> {contact.phone}</p>
          <p><strong>GitHub:</strong> <a href={contact.github} target="_blank" rel="noreferrer">{contact.github}</a></p>
          <p><strong>Linkedin:</strong> <a href={contact.linkedin} target="_blank" rel="noreferrer">{contact.linkedin}</a></p>
        </div>

        {/* Call to Action Buttons */}
        <div className='contact-block'>
          <a href={`tel:${contact.phone}`}>
            <button className="braces-button">Call Me</button>
          </a> 
          &nbsp;
          <a href={`https://wa.me/${contact.phone}`} target="_blank" rel="noreferrer">
            <button className="braces-button">Message on WhatsApp</button>
          </a>
        </div>

        {/* Contact Form */}
        <form className='contact-block' onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input type="text" name="name" required style={{ width: '100%' }} />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" required style={{ width: '100%' }} />
          </div>
          <div>
            <label>Message:</label>
            <textarea name="message" rows="5" required style={{ width: '100%' }} />
          </div>
          <button type="submit" className="braces-button">Send Email</button>
        </form>
      </div>
    </div>
  );
}