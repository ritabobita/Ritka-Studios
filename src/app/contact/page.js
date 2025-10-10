'use client';
import { useState } from 'react';
import styles from './contact.module.scss';

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(event.target);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    firstname: formData.get('firstname'),
                    lastname: formData.get('lastname'),
                    email: formData.get('email'),
                    subject: formData.get('subject'),
                    message: formData.get('message')
                })
            });

            if (response.ok) {
                setIsSubmitted(true);
            } else {
                alert('Failed to send message. Please try again.');
            }
        } catch (error) {
            alert('Failed to send message. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
      <main className={`${styles.ContactPage}`}>
        <h1 className="mt-9 text-4xl text-center font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">Contact Ritka Studios</h1>

        {isSubmitted ? (
          <div className={`${styles.SuccessMessage}`}>
            <div className={`${styles.SuccessMessage__icon}`}>✓</div>
            <h2 className={`${styles.SuccessMessage__title}`}>Message Sent Successfully!</h2>
            <p className={`${styles.SuccessMessage__text}`}>
              Thank you for reaching out, I will get back to you as soon as I can.
            </p>
            <p className={`${styles.SuccessMessage__text}`}>
              In the meantime, check out what I've been up to on{' '}
              <a href="https://www.instagram.com/ritkastudios/" target="_blank" rel="noopener noreferrer" className={`${styles.SuccessMessage__link}`}>
                Instagram
              </a>
              {' '}or browse the online shop{' '}
              <a href="https://ritkastudios.etsy.com" target="_blank" rel="noopener noreferrer" className={`${styles.SuccessMessage__link}`}>
                here
              </a>.
            </p>
          </div>
        ) : (
          <>
            <p className="text-center text-md w-1/2 text-gray-500 mt-10 mx-auto">If you have any questions or inquiries about my work, sales, or other; please don't hesistate to reach out.</p>
            <div className={`${styles.ContactPage__container}`}>
              <form onSubmit={handleSubmit}>
                <div className={`${styles.ContactPage__container__name} flex justify-center gap-8`}>
                  <div className={`${styles.ContactPage__container__name__first} w-1/2`}>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                  </div>

                  <div className={`${styles.ContactPage__container__name__last} w-1/2`}>
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                  </div>
                </div>

                <label htmlFor="email">Email *</label>
                <input type="text" id="email" name="email" placeholder="Your email.." required/>

                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="Your subject.." />

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Write something.." style={{ height: '200px' }}></textarea>

                <input type="submit" value={isSubmitting ? "Sending..." : "Submit"} disabled={isSubmitting} />
              </form>
            </div>
          </>
        )}
      </main>
    );
}