"use client";
import Label from "next";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  //function to call send API to send email
  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();

    if (name == "" || email == "" || message == "") {
      setLoading(false);
      alert("Please fill all the fields");
      return false;
    }
    await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify({ name, email, message }), // data can be `string` or {object}!
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data && data.id) {
          alert(
            `Thank you for your message ${name}! We will get back to you soon!`
          );
          setName("");
          setEmail("");
          setMessage("");
        } else {
          alert("Apologies! Please try again.");
        }

        // Add your logic here to send the email
      })
      .catch((error) => {
        setLoading(false);
        alert("Ooops! unfortunately some error has occurred.");
      });
    return true;
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 text-center md:px-6">
      <div className="container grid items-center justify-center gap-4 px-4 ">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Contact Us
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Ready to schedule an appointment or have questions about our
            services? Contact our friendly team today.
          </p>
        </div>
        <form className="mx-auto max-w-sm space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2 flex flex-col">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Enter your name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="space-y-2 flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2 flex flex-col">
            <label htmlFor="message">Message</label>
            <textarea
              className="min-h-[150px] resize-y"
              id="message"
              name="message"
              placeholder="Enter your message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              type="submit"
              className="flex justify-center rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
            >
              {loading ? (
                <div
                  style={{ borderTopColor: "transparent" }}
                  className="w-6 h-6 border-4 border-white border-solid rounded-full animate-spin"
                ></div>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
