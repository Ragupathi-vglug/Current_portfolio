import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Send,
  CheckCircle,
} from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setLoading(false);
      setIsSubmitted(true);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error(error);
      setLoading(false);
      alert("Failed to send message. Please try again.");
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ragu94555@gmail.com",
      href: "mailto:ragu94555@gmail.com",
      color: "blue",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 8667723804",
      href: "tel:+918667723804",
      color: "green",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Panruti, Cuddalore",
      href: "#",
      color: "purple",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "Ragupathi-vglug",
      href: "https://github.com/Ragupathi-vglug",
      color: "gray",
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue:
        "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/50",
      green:
        "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/50",
      purple:
        "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 hover:bg-purple-200 dark:hover:bg-purple-900/50",
      gray:
        "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600",
    };

    return colors[color as keyof typeof colors];
  };

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              Get In{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Touch
              </span>
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-400">
              Let's discuss opportunities and collaborations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">

            {/* Left Side */}

            <div className="space-y-8">

              <div>

                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                  Contact Information
                </h3>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  I'm always open to discussing new opportunities,
                  freelance work, collaborations, or simply chatting
                  about technology.
                </p>

              </div>

              <div className="grid sm:grid-cols-2 gap-4">

                {contactInfo.map((info) => (

                  <a
                    key={info.title}
                    href={info.href}
                    target={
                      info.href.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      info.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className={`p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${getColorClasses(
                      info.color
                    )}`}
                  >
                    <div className="flex items-center gap-4">
                      <info.icon size={24} />

                      <div>
                        <h4 className="font-semibold">
                          {info.title}
                        </h4>

                        <p className="text-sm opacity-80">
                          {info.value}
                        </p>

                      </div>

                    </div>

                  </a>

                ))}

              </div>

              <div className="p-6 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">

                <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Quick Response
                </h4>

                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  I usually reply within 24 hours.
                </p>

              </div>

            </div>

            {/* Right Side */}

            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">

              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Send a Message
              </h3>

              {isSubmitted ? (

                <div className="text-center py-10">

                  <div className="w-16 h-16 mx-auto rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">

                    <CheckCircle
                      size={34}
                      className="text-green-600"
                    />

                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-gray-800 dark:text-white">
                    Message Sent Successfully!
                  </h3>

                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Thank you for contacting me. I'll reply soon.
                  </p>

                </div>

              ) : (

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >

                  <div className="grid sm:grid-cols-2 gap-4">

                    <div>

                      <label className="block mb-2 font-medium">
                        Full Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your Name"
                        className="w-full px-4 py-3 rounded-lg border bg-white dark:bg-gray-700 dark:border-gray-600"
                      />

                    </div>

                    <div>

                      <label className="block mb-2 font-medium">
                        Email
                      </label>

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-lg border bg-white dark:bg-gray-700 dark:border-gray-600"
                      />

                    </div>

                  </div>

                  <div>

                    <label className="block mb-2 font-medium">
                      Subject
                    </label>

                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Subject"
                      className="w-full px-4 py-3 rounded-lg border bg-white dark:bg-gray-700 dark:border-gray-600"
                    />

                  </div>

                  <div>

                    <label className="block mb-2 font-medium">
                      Message
                    </label>

                    <textarea
                      rows={6}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Write your message..."
                      className="w-full px-4 py-3 rounded-lg border resize-none bg-white dark:bg-gray-700 dark:border-gray-600"
                    />

                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg hover:scale-105 transition-all disabled:opacity-70"
                  >
                    <Send size={20} />

                    {loading ? "Sending..." : "Send Message"}
                  </button>

                </form>

              )}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;