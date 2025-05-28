import { Button } from "../../components/ui/button";
import { Mail, MessageSquare, Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function SupportPage() {
  const faqs = [
    {
      question: "How do I get started with Garage61?",
      answer: "After signing up, our onboarding team will help you set up your account, configure your devices, and import any existing data. We provide comprehensive documentation and video tutorials to guide you through the process."
    },
    {
      question: "What kind of hardware is compatible with Garage61?",
      answer: "Garage61 is compatible with most major racing data systems including AiM, MoTeC, Race Technology, and custom Arduino/Raspberry Pi setups. Our API allows for integration with virtually any telemetry system."
    },
    {
      question: "How secure is my racing data?",
      answer: "We take data security very seriously. All data is encrypted both in transit and at rest, and we use industry-standard security practices. You maintain full ownership of your data, and we never share it with third parties without explicit permission."
    },
    {
      question: "Can I export my data from Garage61?",
      answer: "Yes, you can export your data in various formats including CSV, JSON, and Excel. We also offer API access for automated data export and integration with other systems."
    },
    {
      question: "What support options are available?",
      answer: "Depending on your plan, we offer email support, live chat, phone support, and dedicated account managers. Our enterprise customers also receive 24/7 emergency support."
    }
  ];

  return (
    <>
      <Header />
      <div className="py-24 px-6 md:px-12 lg:px-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Support Center</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help you get the most out of Garage61.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#e6f2ff] p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-[#0d6efd]" />
                </div>
                <div>
                  <h3 className="font-bold">Email Support</h3>
                  <p className="text-gray-600 mb-2">For general inquiries and non-urgent support</p>
                  <a href="mailto:support@garage61.com" className="text-[#0d6efd] hover:underline">
                    support@garage61.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#e6f2ff] p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-[#0d6efd]" />
                </div>
                <div>
                  <h3 className="font-bold">Phone Support</h3>
                  <p className="text-gray-600 mb-2">Available Monday-Friday, 9am-5pm ET</p>
                  <a href="tel:+18005551234" className="text-[#0d6efd] hover:underline">
                    +1 (800) 555-1234
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#e6f2ff] p-3 rounded-lg">
                  <MessageSquare className="h-6 w-6 text-[#0d6efd]" />
                </div>
                <div>
                  <h3 className="font-bold">Live Chat</h3>
                  <p className="text-gray-600 mb-2">For real-time support from our engineers</p>
                  <Button variant="outline" className="text-[#0d6efd] border-[#0d6efd] hover:bg-[#e6f2ff]">
                    Start Chat
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
