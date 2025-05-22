import { useState } from 'react'
import './App.css'
import { Menu, X } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './components/ui/accordion'
import { Button } from './components/ui/button'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="relative z-10 py-4 px-6 md:px-12 lg:px-24 bg-black/90 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">Garage61</h1>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="hover:text-green-500 transition-colors">Features</a>
            <a href="#teams" className="hover:text-green-500 transition-colors">Teams</a>
            <a href="#faq" className="hover:text-green-500 transition-colors">FAQ</a>
            <Button className="bg-green-500 hover:bg-green-600 text-white font-medium rounded-md">
              Get Started
            </Button>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col space-y-4">
            <a href="#features" className="hover:text-green-500 transition-colors">Features</a>
            <a href="#teams" className="hover:text-green-500 transition-colors">Teams</a>
            <a href="#faq" className="hover:text-green-500 transition-colors">FAQ</a>
            <Button className="bg-green-500 hover:bg-green-600 text-white font-medium rounded-md w-full">
              Get Started
            </Button>
          </nav>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 bg-black/70 z-0">
          <img 
            src="https://placehold.co/1920x1080/000000/FFFFFF"
            alt="Racing car on track" 
            className="w-full h-full object-cover opacity-50 mix-blend-overlay"
          />
        </div>
        <div className="relative z-1 container mx-auto px-6 md:px-12 lg:px-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Collaborative Data for Faster Laps
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Helping teams and drivers analyze performance data to improve lap times and racing performance.
            </p>
            <Button className="bg-green-500 hover:bg-green-600 text-white font-medium rounded-md px-8 py-3 text-lg">
              Start Racing Faster
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Helping teams and drivers get faster
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Our platform provides the tools you need to analyze performance data and make data-driven decisions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="flex flex-col items-start">
              <div className="bg-green-100 p-3 rounded-lg mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-time Data Analysis</h3>
              <p className="text-gray-600">
                Analyze telemetry data in real-time to make immediate adjustments and improvements.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="flex flex-col items-start">
              <div className="bg-blue-100 p-3 rounded-lg mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
              <p className="text-gray-600">
                Share insights and data across your team to facilitate collaborative decision-making.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="flex flex-col items-start">
              <div className="bg-purple-100 p-3 rounded-lg mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Performance Insights</h3>
              <p className="text-gray-600">
                Get actionable insights to optimize your racing strategy and vehicle setup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teams/Logos Section */}
      <section id="teams" className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Trusted by top racing teams
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {/* Use actual logos from the Figma design or placeholder text */}
            <div className="h-12 w-24 flex items-center justify-center">
              <span className="text-lg font-bold text-gray-800">McLaren</span>
            </div>
            <div className="h-12 w-24 flex items-center justify-center">
              <span className="text-lg font-bold text-gray-800">Ferrari</span>
            </div>
            <div className="h-12 w-24 flex items-center justify-center">
              <span className="text-lg font-bold text-gray-800">Red Bull</span>
            </div>
            <div className="h-12 w-24 flex items-center justify-center">
              <span className="text-lg font-bold text-gray-800">Aston Martin</span>
            </div>
            <div className="h-12 w-24 flex items-center justify-center">
              <span className="text-lg font-bold text-gray-800">Mercedes</span>
            </div>
            <div className="h-12 w-24 flex items-center justify-center">
              <span className="text-lg font-bold text-gray-800">Alpine</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-black text-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Are you a Pro team looking for paddock support?
              </h2>
              <p className="text-white/80">
                Our team of experts can provide on-site support at races and testing sessions.
              </p>
            </div>
            <Button className="bg-green-500 hover:bg-green-600 text-white font-medium rounded-md px-8 py-3 text-lg whitespace-nowrap">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-gray-200 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                How does Garage61 improve lap times?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-gray-50">
                Garage61 analyzes telemetry data from your vehicle and compares it with ideal racing lines, 
                braking points, and acceleration patterns to identify areas for improvement. Our AI-powered 
                platform provides specific recommendations tailored to your driving style and vehicle setup.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border border-gray-200 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                What kind of data can I track with Garage61?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-gray-50">
                Garage61 tracks a comprehensive range of performance metrics including speed, acceleration, 
                braking force, G-forces, tire temperature, engine parameters, and GPS positioning. All this 
                data is synchronized and presented in an easy-to-understand format for quick analysis.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border border-gray-200 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                Can Garage61 be used by amateur racers?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-gray-50">
                Absolutely! Garage61 is designed for racers of all skill levels. Our platform offers different 
                tiers of analysis, from basic lap timing for beginners to advanced telemetry analysis for 
                professionals. Amateur racers often see the most dramatic improvements in their performance.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border border-gray-200 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50">
                How does team collaboration work?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-4 bg-gray-50">
                Garage61 allows team members to access and analyze the same data simultaneously. Engineers, 
                drivers, and mechanics can leave comments, highlight areas of interest, and share insights 
                directly within the platform. This facilitates better communication and faster problem-solving.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 lg:px-24 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Garage61</h3>
              <p className="text-gray-400">
                Collaborative data for faster laps and better racing performance.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Features</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Data Analysis</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Team Collaboration</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Performance Insights</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Team</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>© {new Date().getFullYear()} Garage61. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
