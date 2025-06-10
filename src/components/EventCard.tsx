
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface EventCardProps {
  title: string;
  emoji: string;
  description: string;
  link: string;
  gradient: string;
}

const EventCard = ({ title, emoji, description, link, gradient }: EventCardProps) => {
  return (
    <Link to={link} className="block group">
      <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-0 overflow-hidden">
        <CardContent className="p-0">
          <div className={`${gradient} h-32 flex items-center justify-center text-6xl`}>
            {emoji}
          </div>
          <div className="p-6">
            <h3 className="text-xl font-playfair font-semibold mb-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground text-sm">
              {description}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default EventCard;
