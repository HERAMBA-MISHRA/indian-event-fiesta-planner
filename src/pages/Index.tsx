
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  const events = [
    {
      title: "Marriage",
      emoji: "🎉",
      description: "Traditional & modern wedding planning with all ceremonies",
      link: "/services/marriage",
      gradient: "gradient-indian"
    },
    {
      title: "Pooja",
      emoji: "📿",
      description: "Sacred ceremonies with authentic rituals and arrangements",
      link: "/services/pooja",
      gradient: "gradient-gold"
    },
    {
      title: "Birthday",
      emoji: "🎂",
      description: "Memorable birthday celebrations for all ages",
      link: "/services/birthday",
      gradient: "bg-gradient-to-br from-pink-500 to-purple-600"
    },
    {
      title: "Griha Pravesh",
      emoji: "🏡",
      description: "House warming ceremonies with traditional blessings",
      link: "/services/griha-pravesh",
      gradient: "bg-gradient-to-br from-green-500 to-teal-600"
    },
    {
      title: "Rooftop Party",
      emoji: "🌆",
      description: "Elegant rooftop celebrations under the stars",
      link: "/services/rooftop-party",
      gradient: "bg-gradient-to-br from-indigo-500 to-blue-600"
    },
    {
      title: "Corporate Events",
      emoji: "🏢",
      description: "Professional events and team celebrations",
      link: "/services/corporate",
      gradient: "bg-gradient-to-br from-slate-600 to-slate-800"
    },
    {
      title: "Seminars",
      emoji: "📚",
      description: "Educational and business seminars with full arrangements",
      link: "/services/seminars",
      gradient: "bg-gradient-to-br from-emerald-500 to-green-600"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 text-gradient animate-fade-in">
              Plan Every Indian Event Effortlessly
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
              Weddings, Poojas, Birthdays & More — All Managed Online
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Link to="/dashboard">
                <Button size="lg" className="gradient-indian text-white border-0 px-8 py-6 text-lg">
                  Start Planning Now
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Event Cards Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold mb-4">Choose Your Celebration</h2>
            <p className="text-xl text-muted-foreground">From traditional ceremonies to modern parties</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {events.map((event, index) => (
              <div key={event.title} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <EventCard {...event} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-playfair font-bold mb-4">Why Choose EventWala?</h2>
            <p className="text-xl text-muted-foreground">Complete event management made simple</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">One-Stop Solution</h3>
              <p className="text-muted-foreground">Everything you need for your event in one place</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold mb-2">Verified Vendors</h3>
              <p className="text-muted-foreground">Trusted professionals with authentic reviews</p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
              <p className="text-muted-foreground">Competitive pricing with transparent costs</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
