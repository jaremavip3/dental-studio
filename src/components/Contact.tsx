"use client";
import Label from "next";
import { useTranslations } from "next-intl";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Contact() {
  const t = useTranslations("Contact");
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

    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }), // data can be `string` or {object}!
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);

        if (data.status === 200) {
          toast.success(
            `Thank you for your message ${name}! We will get back to you soon!`
          );
          setName("");
          setEmail("");
          setMessage("");
        } else {
          console.log("Data: " + data);
          console.log("data id:" + data.id);
          toast.error("Apologies! Please try again.");
        }

        // Add your logic here to send the email
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Ooops! unfortunately some error has occurred.");
      });
    return true;
  };

  return (
    <section
      id="contact"
      className="w-full flex justify-center py-12 md:py-24 lg:py-32 text-center md:px-6 text-xl"
    >
      <div className=" container grid items-center justify-center gap-4 px-4 ">
        <div className="space-y-2 text-primary">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl ">
            {t("contact_header")}🤙
          </h2>
          <p className="mx-auto max-w-[600px] text-secondary md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
            {t("contact_text")}
          </p>
        </div>
        <div className="h-full grid place-items-center">
          <form
            className="w-9/12  grid gap-3 space-y-4 "
            onSubmit={handleSubmit}
          >
            <div className="space-y-2 flex flex-col">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-background "
              >
                {t("contact_form_name")}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder={t("contact_form_placeholder_name")}
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-secondary border border-gray-300 text-background text-sm rounded-lg focus:ring-accent focus:border-accent block w-full p-2.5 "
              />
            </div>
            <div className="space-y-2 flex flex-col">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-background "
              >
                {t("contact_form_email")}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder={t("contact_form_placeholder_email")}
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-secondary border border-gray-300 text-background text-base rounded-lg focus:ring-accent focus:border-accent block w-full p-2.5  "
              />
            </div>
            <div className="space-y-2 flex flex-col ">
              <label
                htmlFor="message"
                className="block mb-2 text-base font-medium text-background "
              >
                {t("contact_form_message")}
              </label>
              <textarea
                className="min-h-[130px] resize-y block p-2.5 w-full text-base text-background bg-secondary rounded-lg border border-gray-300 focus:ring-accent focus:border-accent  "
                id="message"
                name="message"
                placeholder={t("contact_form_placeholder_message")}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                type="submit"
                className="
               flex justify-center rounded-md bg-background border-2 border-accent px-3.5 py-2.5 text-base font-semibold text-accent shadow-sm hover:bg-accent hover:text-background transition duration-300 ease-in-out hover:scale-105"
              >
                {loading ? (
                  <div
                    style={{ borderTopColor: "transparent" }}
                    className="w-6 h-6 border-4 border-primary border-solid rounded-full animate-spin"
                  ></div>
                ) : (
                  t("contact_form_submit")
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
