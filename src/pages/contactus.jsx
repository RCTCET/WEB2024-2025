import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast'; // Importing toast and Toaster from react-hot-toast
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Initialize Firebase (replace with your Firebase config)
const firebaseConfig = {
  apiKey: "AIzaSyClsdZeFbSFMLCw8YWc96m1HsPRrkF4ru0",
  authDomain: "rctcet-1b6e4.firebaseapp.com",
  projectId: "rctcet-1b6e4",
  storageBucket: "rctcet-1b6e4.firebasestorage.app",
  messagingSenderId: "210277545370",
  appId: "1:210277545370:web:17eb63e1885c5a43f1f623",
  measurementId: "G-S97K8B7PQD"
};

const app = initializeApp(firebaseConfig); // Use the default app
const db = getFirestore(app);

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add form data to Firebase Firestore
    try {
      const contactsCollection = collection(db, 'contacts');
      await addDoc(contactsCollection, {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        timestamp: new Date()
      });
      toast.success('Message sent successfully!'); // Success Toast

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message. Please try again.'); // Error Toast
    }
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

      {/* Adding Toaster here to display the toast notifications */}
      <Toaster />
    </div>
  );
};

export default ContactForm;
