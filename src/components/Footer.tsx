import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 bg-[#f8f9fa] text-gray-800">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="mb-4">
              <img src={process.env.NODE_ENV === 'production' ? '/garage61-LP-devin/assets/footer_logo.png' : '/assets/footer_logo.png'} alt="Garage61 Logo" className="h-8" />
            </div>
            <p className="text-gray-600">
              Collaborative data for faster laps and better racing performance.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gray-800">Features</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-[#0d6efd] transition-colors">Data Analysis</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#0d6efd] transition-colors">Team Collaboration</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#0d6efd] transition-colors">Performance Insights</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gray-800">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-[#0d6efd] transition-colors">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#0d6efd] transition-colors">Team</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#0d6efd] transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gray-800">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/support" className="text-gray-600 hover:text-[#0d6efd] transition-colors">Contact</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-[#0d6efd] transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#0d6efd] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-300 flex justify-between items-center text-gray-600">
          <p>© {new Date().getFullYear()} Garage61. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src={process.env.NODE_ENV === 'production' ? '/garage61-LP-devin/assets/image 130.png' : '/assets/image 130.png'} alt="Discord" className="h-6" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src={process.env.NODE_ENV === 'production' ? '/garage61-LP-devin/assets/image 131.png' : '/assets/image 131.png'} alt="Twitter/X" className="h-6" />
            </a>
            <a href="mailto:contact@garage61.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src={process.env.NODE_ENV === 'production' ? '/garage61-LP-devin/assets/image 132.png' : '/assets/image 132.png'} alt="Email" className="h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
