import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast'; // Importing toast and Toaster
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

const app = initializeApp(firebaseConfig); // Initialize Firebase app
const db = getFirestore(app); // Initialize Firestore

const ClubInsightHero = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
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
      const usersCollection = collection(db, 'users'); // Assuming you are saving in a 'users' collection
      await addDoc(usersCollection, {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        timestamp: new Date()
      });
      toast.success('Form submitted successfully!'); // Success Toast

      // Reset form fields after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit form. Please try again.'); // Error Toast
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 bg-[#fffff]">
      {/* Header Buttons */}
      <div className="flex justify-between w-full max-w-lg text-lg font-semibold text-black mb-4">
        <div className='pr-2'>New Master Attendance</div>
        <div>Grievance Form</div>
      </div>

      {/* Titles above buttons */}
      <div className="flex justify-between w-full max-w-lg mb-12">
        <button className="bg-[#ffedd4] text-black py-3 px-6 rounded-lg hover:bg-[#fcd9a3] transition-all">
          Click Here
        </button>
        <button className="bg-[#ffedd4] text-black py-3 px-6 rounded-lg hover:bg-[#fcd9a3] transition-all">
          Click Here
        </button>
      </div>

      {/* Fine Payment Details Heading */}
      <h2 className="text-2xl font-bold bg-gradient-to-b from-[#98430A] via-[#FE7011] to-[#FDD24C] bg-clip-text text-transparent mb-8">
        Fine Payment Details
      </h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-[#fff7ed] p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex flex-col gap-4 mb-6">
          <div className='flex flex-row space-x-5'>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 w-[45%]"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 w-[45%]"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 w-[95%]"
            required
          />
        </div>

        {/* Last part */}
        <div className="flex flex-col items-center justify-center">
          <input
            type="text"
            placeholder=""
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 w-[45%] mb-4"
          />
          <button
            type="submit"
            className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-all w-[35%]"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Adding Toaster here to display the toast notifications */}
      <Toaster />
    </div>
  );
};

export default ClubInsightHero;
