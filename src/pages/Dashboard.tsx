
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const navItems = [
    { title: "Dashboard", active: true },
    { title: "My Events", active: false },
    { title: "My Bookings", active: false },
    { title: "My Orders", active: false }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="flex-1 bg-slate-50">
        <div className="container mx-auto px-4 py-8">
          {/* Navigation Bar */}
          <div className="bg-white rounded-lg shadow-sm border mb-8">
            <div className="flex flex-wrap items-center justify-between p-6">
              <nav className="flex space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.title}
                    className={`text-sm font-medium transition-colors ${
                      item.active 
                        ? "text-primary border-b-2 border-primary pb-2" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </nav>
              
              <div className="flex items-center space-x-4">
                <span className="text-sm text-muted-foreground">Select Event:</span>
                <Select defaultValue="marriage">
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-white border shadow-lg">
                    <SelectItem value="marriage">Marriage 🎉</SelectItem>
                    <SelectItem value="pooja">Pooja 📿</SelectItem>
                    <SelectItem value="birthday">Birthday 🎂</SelectItem>
                    <SelectItem value="griha-pravesh">Griha Pravesh 🏡</SelectItem>
                    <SelectItem value="rooftop-party">Rooftop Party 🌆</SelectItem>
                    <SelectItem value="corporate">Corporate Events 🏢</SelectItem>
                    <SelectItem value="seminars">Seminars 📚</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-playfair font-bold mb-2">Welcome to Your Dashboard</h1>
            <p className="text-muted-foreground">Manage your events and bookings all in one place</p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary">5</div>
                <div className="text-sm text-muted-foreground">Active Events</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-green-600">12</div>
                <div className="text-sm text-muted-foreground">Completed Bookings</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-orange-600">3</div>
                <div className="text-sm text-muted-foreground">Pending Orders</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-purple-600">₹2,45,000</div>
                <div className="text-sm text-muted-foreground">Total Spent</div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Events */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Recent Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">🎉</div>
                    <div>
                      <div className="font-semibold">Wedding - Priya & Rahul</div>
                      <div className="text-sm text-muted-foreground">March 15, 2024 • Delhi</div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">View Details</Button>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">🎂</div>
                    <div>
                      <div className="font-semibold">Birthday Party - Arjun's 5th</div>
                      <div className="text-sm text-muted-foreground">February 28, 2024 • Mumbai</div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">View Details</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link to="/services/marriage">
                  <Button className="w-full h-20 gradient-indian text-white border-0">
                    <div className="text-center">
                      <div className="text-2xl mb-1">🎉</div>
                      <div>Plan New Wedding</div>
                    </div>
                  </Button>
                </Link>
                
                <Link to="/services/pooja">
                  <Button className="w-full h-20 gradient-gold text-white border-0">
                    <div className="text-center">
                      <div className="text-2xl mb-1">📿</div>
                      <div>Organize Pooja</div>
                    </div>
                  </Button>
                </Link>
                
                <Link to="/services/birthday">
                  <Button className="w-full h-20 bg-gradient-to-br from-pink-500 to-purple-600 text-white border-0">
                    <div className="text-center">
                      <div className="text-2xl mb-1">🎂</div>
                      <div>Plan Birthday</div>
                    </div>
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
