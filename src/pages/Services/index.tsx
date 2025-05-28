
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart2, Clock, Database, Settings, Share2, Shield } from "lucide-react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  const services = [
    {
      icon: <Database className="h-10 w-10 text-[#0d6efd]" />,
      title: "Race Data Collection",
      description: "Comprehensive collection of all racing telemetry, from lap times to detailed sensor data.",
    },
    {
      icon: <BarChart2 className="h-10 w-10 text-[#0d6efd]" />,
      title: "Performance Analytics",
      description: "Advanced analytics to identify performance trends and improvement opportunities.",
    },
    {
      icon: <Clock className="h-10 w-10 text-[#0d6efd]" />,
      title: "Real-Time Monitoring",
      description: "Monitor car and driver performance in real-time during races and practice sessions.",
    },
    {
      icon: <Share2 className="h-10 w-10 text-[#0d6efd]" />,
      title: "Team Collaboration",
      description: "Tools for sharing insights and collaborating across engineering and driver teams.",
    },
    {
      icon: <Shield className="h-10 w-10 text-[#0d6efd]" />,
      title: "Secure Data Storage",
      description: "Enterprise-grade security for your sensitive racing data and competitive advantage.",
    },
    {
      icon: <Settings className="h-10 w-10 text-[#0d6efd]" />,
      title: "Custom Integrations",
      description: "Connect Garage61 with your existing tools and systems for seamless workflows.",
    },
  ];

  return (
    <>
      <Header />
      <div className="py-24 px-6 md:px-12 lg:px-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive racing data solutions to help teams and drivers achieve their best performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="p-6 border rounded-lg hover:shadow-md transition-shadow">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Button variant="link" className="p-0 text-[#0d6efd] hover:text-[#0b5ed7] flex items-center gap-1">
                Learn more <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
