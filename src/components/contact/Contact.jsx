import "./Contact.css";
import Phone from "../../img/phone.png";
import Address from "../../img/address.png";
import Message from "../../img/email.png";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_useeejp",
        "template_4y7lzvq",
        formRef.current,
        "xGuirysMrR5nVQb5K"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-image"></img>
              +1 123 456 777
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-image"></img>
              245 King Street, Touterie Victoria 8520 Australia
            </div>
            <div className="c-info-item">
              <img src={Message} alt="" className="c-image"></img>
              xyz@example.com
            </div>
          </div>
        </div>

        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message " name="message"></textarea>
            <button>Sumit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
