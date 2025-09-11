import { useEffect, useState } from "react";
import axios from "axios";

export default function SaaFineTable() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSaaFine();
  }, []);

  const fetchSaaFine = async () => {
    try {
      const res = await axios.get("https://rctcet-backend.onrender.com/getSaaFine");
      console.log("Fetched SaaFine:", res.data);
      setData(res.data);
    } catch (error) {
      console.error("Error fetching SaaFine:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p className="text-center mt-6 text-gray-500">Loading...</p>;
  }

  return (
    <div className="p-6 dark:bg-stone-900 min-h-[80vh]">
      <h2 className="text-2xl font-bold mb-4 text-center text-orange-500">
        📋 SaaFine Records
      </h2>
      <div className="overflow-x-auto rounded-lg shadow-lg">
        <table className="w-full border-collapse bg-white">
          <thead className="bg-orange-500 dark:bg-orange-800 text-white">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Reason</th>
              <th className="px-4 py-2">Mail</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((row) => (
                <tr
                  key={row.id}
                  className="border-t dark:bg-stone-600 dark:text-white hover:bg-orange-50 transition"
                >
                  <td className="px-4 py-2 text-center">{row.id}</td>
                  <td className="px-4 py-2">{row.name}</td>
                  <td className="px-4 py-2">{row.date}</td>
                  <td className="px-4 py-2 text-orange-500 font-semibold">
                    ₹{row.amount}
                  </td>
                  <td className="px-4 py-2">{row.reason}</td>
                  <td className="px-4 py-2">{row.mail}</td>
                  <td
                    className={`px-4 py-2 font-medium ${
                      row.status.toLowerCase() === "paid"
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {row.status}
                  </td>
                  <td className="px-4 py-2 text-center">
                    {row.status.toLowerCase() === "unpaid" && (
                      <a
                        href="https://docs.google.com/forms/your-google-form-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded-lg shadow-md transition"
                      >
                        Pay
                      </a>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="8"
                  className="text-center py-4 text-gray-500"
                >
                  No SaaFine records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
