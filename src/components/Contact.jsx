import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [contact, setContact] = useState({});

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/data/portfolio.json')
      .then(res => res.json())
      .then(data => setContact(data.about.contact));
  }, []);

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const form = e.target;

  //   const formData = {
  //     name: form.name.value,
  //     email: form.email.value,
  //     message: form.message.value,
  //   };

  //   emailjs.sendForm(
  //     process.env.REACT_APP_EMAILJS_SERVICE_ID,
  //     process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  //     form,
  //     process.env.REACT_APP_EMAILJS_PUBLIC_KEY
  //   ).then(
  //     (result) => {
  //       alert("Thank you for your email! I will reach back to you within 1-2 working days.");
  //       console.log(result.text);
  //       form.reset();
  //     },
  //     (error) => {
  //       alert("Failed to send email. Please try again.");
  //       console.error(error.text);
  //     }
  //   );
  // };

  return (
    <div className='contact-container'>
      <div className='contact-block'>
        <h1>Contact</h1>
        <div>
          {Object.entries(contact)
            // optionally skip nested/complex fields
            .filter(([key]) => key !== 'cv')
            .map(([key, value]) => {
              // Capitalize first letter of key
              const title = key.charAt(0).toUpperCase() + key.slice(1);

              // Render links for URLs, plain text otherwise
              const isUrl = typeof value === 'string' && value.startsWith('http');

              return (
                <p key={key}>
                  <strong>[ {title} ] </strong>
                  {isUrl ? (
                    <a href={value} target="_blank" rel="noreferrer">
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </p>
              );
            })}
        </div>
        &nbsp;

        {/* Call to Action Buttons */}
        <div className='contact-block'>
          <a href={`mailto:${contact.email}?subject=${encodeURIComponent('Portfolio message')}`} target="_blank" rel="noreferrer">
            <button className="braces-button">Email Me</button>
          </a>
          <a href={`tel:${contact.phoneCZ}`}>
            <button className="braces-button">{"Call Me [CZ]"}</button>
          </a> 
          &nbsp;
          <a href={`https://wa.me/${contact.phoneSK}`} target="_blank" rel="noreferrer">
            <button className="braces-button">Message on WhatsApp</button>
          </a>
        </div>

        {/* Contact Form */}
        {/* <form className='contact-block' onSubmit={handleSubmit}>
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
        </form> */}
      </div>
    </div>
  );
}