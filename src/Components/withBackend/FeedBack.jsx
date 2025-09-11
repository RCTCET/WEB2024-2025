import { useState } from "react";
import axios from "axios";

export default function FeedBackForm() {
  const [formData, setFormData] = useState({
    name: "",
    mail: "",
    event: "",
    feedback: "",
    clubname: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const res = await axios.post(
        "https://rctcet-backend.onrender.com/addFeedBack",
        formData
      );
      setSuccessMsg(res.data.message || "Feedback submitted successfully!");
      setFormData({
        name: "",
        mail: "",
        event: "",
        feedback: "",
        clubname: "",
      });
    } catch (err) {
      console.error(err);
      setErrorMsg(err.response?.data?.message || "Failed to submit feedback.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 dark:bg-stone-900 min-h-[80vh] flex justify-center">
      <div className="w-full max-w-lg bg-white dark:bg-stone-700 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-center text-orange-500">
          📝 Submit Feedback
        </h2>

        {successMsg && (
          <p className="text-green-600 text-center mb-4">{successMsg}</p>
        )}
        {errorMsg && (
          <p className="text-red-500 text-center mb-4">{errorMsg}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 dark:bg-stone-600 dark:text-white"
            required
          />
          <input
            type="email"
            name="mail"
            placeholder="Email"
            value={formData.mail}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 dark:bg-stone-600 dark:text-white"
          />
          <input
            type="text"
            name="event"
            placeholder="Event *"
            value={formData.event}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 dark:bg-stone-600 dark:text-white"
            required
          />
          <textarea
            name="feedback"
            placeholder="Feedback *"
            value={formData.feedback}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 dark:bg-stone-600 dark:text-white"
            required
          />
          <input
            type="text"
            name="clubname"
            placeholder="Club Name *"
            value={formData.clubname}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 dark:bg-stone-600 dark:text-white"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit Feedback"}
          </button>
        </form>
      </div>
    </div>
  );
}
