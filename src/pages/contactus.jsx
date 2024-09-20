import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

  };

  return (
    <div className="w-1/3 mx-auto mt-10 mb-24">
      <h1 className="text-4xl font-bold text-orange-500 mb-6 text-center">CONTACT US</h1>
      <form onSubmit={handleSubmit} className="bg-orange-50 p-6 rounded-lg shadow-md">
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="w-1/2 flex-1 p-1 rounded-xl border border-gray-300"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="flex-1 p-1 rounded-xl border border-gray-300"
          />
        </div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="w-full p-2 mb-4 rounded-xl border border-gray-300"
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your Phone no"
          className="w-full p-2 mb-4 rounded-xl border border-gray-300"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Write your Message..."
          className="w-full p-2 mb-4 rounded-xl border border-gray-300 h-32"
        />
        <button
          type="submit"
          className=" bg-black text-white p-3 rounded-xl hover:bg-gray-800 transition-colors"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default ContactForm;