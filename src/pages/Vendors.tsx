
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VendorCard from "@/components/VendorCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Vendors = () => {
  const { serviceType } = useParams();
  
  const serviceTitles: { [key: string]: string } = {
    pandit: "Pandit Services 🙏",
    venue: "Venues & Halls 🏨",
    decoration: "Decoration Services 🌸",
    catering: "Catering Services 🍽️",
    photographer: "Photography Services 📸",
    music: "Music & Entertainment 🎵",
    dress: "Dress & Accessories 👗",
    ghodi: "Ghodi Services 🐎",
    makeup: "Makeup Artists 💄"
  };

  // Mock vendor data
  const vendors = [
    {
      name: "Pandit Sharma Ji",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&w=400",
      rating: 4.8,
      reviews: 127,
      price: "₹5,000 - ₹15,000",
      specialty: "Vedic ceremonies specialist"
    },
    {
      name: "Royal Decorators",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&w=400",
      rating: 4.6,
      reviews: 89,
      price: "₹25,000 - ₹2,00,000",
      specialty: "Wedding & event decoration"
    },
    {
      name: "Spice Garden Catering",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&w=400",
      rating: 4.9,
      reviews: 203,
      price: "₹400 - ₹1,200 per plate",
      specialty: "Multi-cuisine catering"
    },
    {
      name: "Memories Photography",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&w=400",
      rating: 4.7,
      reviews: 156,
      price: "₹15,000 - ₹75,000",
      specialty: "Wedding photography"
    },
    {
      name: "Melody Makers",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&w=400",
      rating: 4.5,
      reviews: 94,
      price: "₹10,000 - ₹50,000",
      specialty: "Live music & DJ services"
    },
    {
      name: "Glamour Studio",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&w=400",
      rating: 4.8,
      reviews: 178,
      price: "₹3,000 - ₹25,000",
      specialty: "Bridal makeup artist"
    }
  ];

  const currentTitle = serviceTitles[serviceType || ""] || "Service Vendors";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Header Section */}
      <section className="bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-playfair font-bold text-center mb-4 text-gradient">
            {currentTitle}
          </h1>
          <p className="text-center text-muted-foreground text-lg">
            Choose from verified and highly rated service providers
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-white border-b py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">Sort by:</span>
              <Select defaultValue="rating">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white border shadow-lg">
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="reviews">Most Reviews</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">Location:</span>
              <Select defaultValue="all">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white border shadow-lg">
                  <SelectItem value="all">All Cities</SelectItem>
                  <SelectItem value="delhi">Delhi</SelectItem>
                  <SelectItem value="mumbai">Mumbai</SelectItem>
                  <SelectItem value="bangalore">Bangalore</SelectItem>
                  <SelectItem value="hyderabad">Hyderabad</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">Budget:</span>
              <Select defaultValue="all">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-white border shadow-lg">
                  <SelectItem value="all">All Budgets</SelectItem>
                  <SelectItem value="low">Under ₹10,000</SelectItem>
                  <SelectItem value="medium">₹10,000 - ₹50,000</SelectItem>
                  <SelectItem value="high">Above ₹50,000</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Vendors Grid */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vendors.map((vendor, index) => (
              <div key={vendor.name} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <VendorCard {...vendor} />
              </div>
            ))}
          </div>
          
          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Vendors
            </Button>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-12 gradient-indian">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-playfair font-bold text-white mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-white/90 mb-6">
            Our team can help you find the perfect vendors for your specific needs
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            Get Personal Assistance
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Vendors;
