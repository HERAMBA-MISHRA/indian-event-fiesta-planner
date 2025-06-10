
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 gradient-indian rounded-full"></div>
          <span className="text-2xl font-playfair font-bold text-gradient">EventWala</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/dashboard" className="text-foreground hover:text-primary transition-colors">Dashboard</Link>
          <Link to="#" className="text-foreground hover:text-primary transition-colors">About</Link>
          <Link to="#" className="text-foreground hover:text-primary transition-colors">Contact</Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline">Login</Button>
          <Button className="gradient-indian text-white border-0">Sign Up</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
