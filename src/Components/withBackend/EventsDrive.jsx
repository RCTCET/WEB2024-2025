import { useEffect, useState } from "react";
import axios from "axios";

export default function EventsDrive() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await axios.get("https://rctcet-backend.onrender.com/getEventsDrive");
      console.log("Fetched events:", res.data.reverse());
      setEvents(res.data.reverse());
    } catch (error) {
      console.error("Error fetching Events:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p className="text-center mt-6 text-gray-500">Loading events...</p>;
  }

  return (
    <div className="border-t-2 mt rounded-t-xl p-6">
      <h2 className="text-3xl mt-10 font-bold mb-4 text-center text-orange-500">
        🎉 Events & Drives
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex">
          {events.length > 0 ? (
          events.map((event, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-xl p-4 hover:shadow-2xl transition border border-orange-100"
            >
              <h3 className="text-lg font-semibold text-orange-500">
                {event.eventName}
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                📅 {event.date}
              </p>
              <a
                href={event.driveLink}
                // target="_blank"
                // rel="noopener noreferrer"
                className="text-white bg-orange-500 hover:bg-orange-600 px-3 py-1 rounded-lg inline-block mt-2 shadow-md transition"
              >
                View Drive
              </a>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No events available.
          </p>
        )}
        </div>
      </div>
    </div>
  );
}
