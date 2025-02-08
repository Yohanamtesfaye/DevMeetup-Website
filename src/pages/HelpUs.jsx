import { motion } from "framer-motion"
import Button from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Heart, Users, Lightbulb, Share2 } from "lucide-react"

function HelpUs() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-12"
    >
      <div className="container mx-auto lg:px-16 px-4 sm:px-6">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center text-indigo-600"
        >
          Help Us Grow
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mb-16 text-center"
        >
          <p className="text-lg text-gray-600">
            Join our mission to build a stronger tech community in Ethiopia. There are many ways you can contribute to
            our growth and impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            {
              icon: Heart,
              title: "Volunteer",
              description: "Share your skills and time to help organize and run our events.",
              action: "Join as Volunteer",
            },
            {
              icon: Users,
              title: "Community Ambassador",
              description: "Represent DevMeetup in your network and help us reach more people.",
              action: "Become Ambassador",
            },
            {
              icon: Lightbulb,
              title: "Share Knowledge",
              description: "Contribute as a speaker or workshop facilitator at our events.",
              action: "Apply as Speaker",
            },
            {
              icon: Share2,
              title: "Spread the Word",
              description: "Help us reach more people by sharing our events and initiatives.",
              action: "Share DevMeetup",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <item.icon className="w-12 h-12 text-indigo-600 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-6">{item.description}</p>
                    <Button variant="outline">{item.action}</Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <h2 className="text-2xl font-semibold mb-6 text-indigo-500">Have Other Ideas?</h2>
            <p className="text-gray-600 mb-6">
              We're always open to new ideas and ways to improve our community. If you have suggestions or want to
              contribute in other ways, we'd love to hear from you.
            </p>
            <Button>Contact Us</Button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default HelpUs

