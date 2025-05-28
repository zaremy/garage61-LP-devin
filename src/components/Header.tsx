import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "./ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-10 py-4 px-6 md:px-12 lg:px-24 bg-black/90 text-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img src={process.env.NODE_ENV === 'production' ? '/garage61-LP-devin/assets/header-logo.png' : '/assets/header-logo.png'} alt="Garage61 Logo" className="h-8" />
          </Link>
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
          <Link to="/pricing" className="hover:text-[#0d6efd] transition-colors">Pricing</Link>
          <Link to="/services" className="hover:text-[#0d6efd] transition-colors">Services</Link>
          <Link to="/support" className="hover:text-[#0d6efd] transition-colors">Support</Link>
          <Button className="bg-[#0d6efd] hover:bg-[#0b5ed7] text-white font-medium rounded-md">
            Get Started
          </Button>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden pt-4 pb-2 flex flex-col space-y-4">
          <Link to="/pricing" className="hover:text-[#0d6efd] transition-colors">Pricing</Link>
          <Link to="/services" className="hover:text-[#0d6efd] transition-colors">Services</Link>
          <Link to="/support" className="hover:text-[#0d6efd] transition-colors">Support</Link>
          <Button className="bg-[#0d6efd] hover:bg-[#0b5ed7] text-white font-medium rounded-md w-full">
            Get Started
          </Button>
        </nav>
      )}
    </header>
  );
}
