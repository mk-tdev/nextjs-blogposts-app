import Notifications from "@/components/notifications";
import Head from "next/head";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Contact = () => {
  const router = useRouter();
  const [reqStatus, setReqStatus] = React.useState<
    "pending" | "success" | "error" | ""
  >("");

  const handleNewComment = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const contactData = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    setReqStatus("pending");
    const response = await fetch(`api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    });

    if (response.ok) {
      const data = await response.json();
      setReqStatus("success");
    } else {
      setReqStatus("error");
    }
  };

  useEffect(() => {
    if (reqStatus === "success" || reqStatus === "error") {
      const timer = setTimeout(() => {
        setReqStatus("");

        router.replace("/");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [reqStatus]);

  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Get in touch with us" />
      </Head>
      <div className="m-5">
        <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
        <form className="flex flex-col  gap-4" onSubmit={handleNewComment}>
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="p-3 border border-gray-300 ring-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="p-3 border border-gray-300 ring-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="comment">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
              className="p-3 border border-gray-300 ring-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-800"
          >
            Send a message
          </button>
        </form>

        {reqStatus && (
          <Notifications
            title="Contact Form"
            message={
              reqStatus === "success"
                ? "Your message has been sent successfully!"
                : reqStatus === "error"
                ? "There was an error sending your message. Please try again later."
                : reqStatus === "pending"
                ? "Sending your message..."
                : ""
            }
            status={reqStatus}
            setReqStatus={() => {
              setReqStatus("");
            }}
          />
        )}
      </div>
    </>
  );
};

export default Contact;
