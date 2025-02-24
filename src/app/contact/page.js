'use client';
import styles from './contact.module.scss';

export default function Contact() {
    const handleSubmit = (event) => {
        event.preventDefault();
      console.log("form submitted")
    };

    return (
      <main className={`${styles.ContactPage}`}>
        <h1 className="mt-9 text-4xl text-center font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl">Contact Ritka Studios</h1>
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

            <input type="submit" value="Submit" />
          </form>
        </div>
      </main>
    );
}