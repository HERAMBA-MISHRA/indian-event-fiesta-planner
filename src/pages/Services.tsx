
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Services = () => {
  const { eventType } = useParams();
  
  const eventTitles: { [key: string]: string } = {
    marriage: "Marriage Services 🎉",
    pooja: "Pooja Services 📿",
    birthday: "Birthday Services 🎂",
    "griha-pravesh": "Griha Pravesh Services 🏡",
    "rooftop-party": "Rooftop Party Services 🌆",
    corporate: "Corporate Event Services 🏢",
    seminars: "Seminar Services 📚"
  };

  const services = [
    {
      title: "Pandit Booking",
      description: "Experienced pandits for all religious ceremonies",
      icon: "🙏",
      link: `/vendors/pandit`
    },
    {
      title: "Hotel/Garden Booking",
      description: "Beautiful venues for your special occasions",
      icon: "🏨",
      link: `/vendors/venue`
    },
    {
      title: "Decoration",
      description: "Stunning decorations to match your theme",
      icon: "🌸",
      link: `/vendors/decoration`
    },
    {
      title: "Catering",
      description: "Delicious food for all your guests",
      icon: "🍽️",
      link: `/vendors/catering`
    },
    {
      title: "Photographer",
      description: "Professional photography to capture memories",
      icon: "📸",
      link: `/vendors/photographer`
    },
    {
      title: "DJ/Music/Orchestra",
      description: "Entertainment and music for your celebration",
      icon: "🎵",
      link: `/vendors/music`
    },
    {
      title: "Dress & Accessories",
      description: "Traditional and modern outfits",
      icon: "👗",
      link: `/vendors/dress`
    },
    {
      title: "Ghodi",
      description: "Traditional horse arrangements for grooms",
      icon: "🐎",
      link: `/vendors/ghodi`
    },
    {
      title: "Makeup Artist",
      description: "Professional makeup for the perfect look",
      icon: "💄",
      link: `/vendors/makeup`
    }
  ];

  const currentTitle = eventTitles[eventType || ""] || "Event Services";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-gradient">
              {currentTitle}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Choose from our comprehensive range of services
            </p>
            <Button variant="outline" className="animate-bounce">
              <ArrowDown className="w-4 h-4 mr-2" />
              Explore Services
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={service.title} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 gradient-indian">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair font-bold text-white mb-4">
            Need Help Planning?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Our expert event planners are here to help you create the perfect celebration
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            Talk to Expert
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
