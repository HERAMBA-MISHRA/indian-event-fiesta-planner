
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface VendorCardProps {
  name: string;
  image: string;
  rating: number;
  reviews: number;
  price: string;
  specialty: string;
}

const VendorCard = ({ name, image, rating, reviews, price, specialty }: VendorCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <Badge className="absolute top-2 right-2 bg-white/90 text-slate-700">
            ⭐ {rating} ({reviews})
          </Badge>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-1">{name}</h3>
          <p className="text-muted-foreground text-sm mb-2">{specialty}</p>
          <div className="flex items-center justify-between mb-4">
            <span className="text-primary font-semibold">{price}</span>
          </div>
          <Button className="w-full gradient-indian text-white border-0">
            Book Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default VendorCard;
