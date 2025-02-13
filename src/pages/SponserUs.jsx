import { motion } from "framer-motion"
import Button from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Check } from "lucide-react"
import { useNavigate } from "react-router-dom"

const sponsorshipTiers = [
  {
    name: "Platinum",
    price: "50,000 ETB",
    features: [
      "Premium logo placement",
      "10 VIP event passes",
      "Dedicated presentation slot",
      "Exhibition booth",
      "Social media promotion",
      "Access to networking events",
    ],
  },
  {
    name: "Gold",
    price: "30,000 ETB",
    features: [
      "Logo on event materials",
      "5 VIP event passes",
      "Exhibition space",
      "Social media mentions",
      "Networking opportunities",
    ],
  },
  {
    name: "Silver",
    price: "15,000 ETB",
    features: ["Logo on website", "3 event passes", "Social media mention", "Networking access"],
  },
]

function SponsorUs() {

    const navigate = useNavigate()

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
            Become a Sponsor
          </motion.h1>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto mb-16 text-center"
          >
            <p className="text-lg text-gray-600">
              Join us in shaping the future of technology in Ethiopia. Your sponsorship helps us create impactful events
              and foster a thriving tech community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {sponsorshipTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="relative ">
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-indigo-600 mb-2">{tier.name}</h3>
                      <div className="text-4xl font-bold text-gray-900 mb-4">{tier.price}</div>
                    </div>
                    <ul className="space-y-4">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-green-500" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button onClick={() => navigate("/contact-us")} className="w-full mt-6">Choose {tier.name}</Button>
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
            <div className="bg-white rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-6 text-indigo-500 text-center">Custom Sponsorship</h2>
              <p className="text-gray-600 text-center mb-6">
                Looking for a different sponsorship package? We're happy to create a custom solution that meets your
                specific needs and objectives.
              </p>
              <div className="text-center">
                <Button variant="outline" onClick={() => navigate("/contact-us")}>
                  Contact Us for Custom Packages
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    )
  }

export default SponsorUs

