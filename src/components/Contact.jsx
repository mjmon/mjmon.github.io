import React, { useRef } from "react";
import emailjs from "emailjs-com";
// import.meta.env.VITE_SERVICE_ID;
// import.meta.env.VITE_TEMPLATE_ID;
// import.meta.env.VITE_PUBLIC_ID;

const Contact = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const clearInputs = () => {
    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  };

  const sendEmail = (e) => {
    e.preventDefault();
    let name = nameRef.current.value;
    let email = emailRef.current.value;
    let message = messageRef.current.value;

    console.log(`name: ${name}`);
    console.log(`email: ${email}`);
    console.log(`message: ${message}`);

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_PUBLIC_ID
      )
      .then(
        (response) => {
          alert(
            "Successfully Sent, Thank you for reaching out.\nI will get back to you asap!"
          );
          console.log("SUCCESS!", response.status, response.text);
          clearInputs();
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Error Occured, Please try again");
        }
      );
  };

  return (
    <section id="contact" className="px-5 sm:px-28">
      <h1 className="sect-header">Contact Me</h1>
      <div className="flex justify-center">
        <form onSubmit={sendEmail}>
          <div className="mb-3">
            <label className="block">Name</label>
            <input
              className="w-96 md:w-[500px] h-10 p-2 mt-1 text-black"
              ref={nameRef}
              type="text"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="mb-3">
            <label className="block">Email</label>
            <input
              className="w-96 md:w-[500px] p-2 mt-1 text-black"
              ref={emailRef}
              type="email"
              placeholder="johndoe@hotmail.com"
              required
            />
          </div>

          <div className="mb-3">
            <label className="block">Message</label>
            <textarea
              className="w-96 md:w-[500px] h-40 p-2 mt-1 text-black"
              ref={messageRef}
              placeholder="Type your message here..."
              required
            />
          </div>
          <input
            type="submit"
            value="Send"
            className="w-96 md:w-[500px] h-10
        bg-blue-500 hover:bg-blue-700 text-blueGray font-bold py-2 px-12 border border-blue-700 rounded  mb-3 sm:mb-5 mr-0 sm:mr-4 "
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
