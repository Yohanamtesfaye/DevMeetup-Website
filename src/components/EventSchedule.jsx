import { motion } from "framer-motion";

const schedule = [
  { time: "9:00 AM", event: "Opening Keynote: The Future of Tech", speaker: "Jane Doe" },
  { time: "10:30 AM", event: "Workshop: Mastering React 18 Features", speaker: "John Smith" },
  { time: "12:00 PM", event: "Lunch Break & Networking" },
  { time: "1:30 PM", event: "Panel: Ethical AI Development", speaker: "Emily Johnson, Michael Chen" },
  { time: "3:00 PM", event: "Workshop: Building Scalable Cloud Solutions", speaker: "Michael Chen" },
  { time: "4:30 PM", event: "Closing Remarks & Networking Session" },
];

function EventSchedule() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-500">Schedule</h2>
        <div className="bg-white shadow-lg rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Time
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Event
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Speaker
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {schedule.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.time}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.event}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.speaker || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </motion.div>
  );
}

export default EventSchedule;