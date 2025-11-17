import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, Users, Eye, MousePointerClick, Globe, Clock, ArrowUpRight, ArrowDownRight } from "lucide-react";

const Index = () => {
  const stats = [
    { title: "Total Visitors", value: "45,231", change: "+12.5%", trend: "up", icon: Users },
    { title: "Page Views", value: "123,456", change: "+8.2%", trend: "up", icon: Eye },
    { title: "Bounce Rate", value: "42.3%", change: "-3.1%", trend: "down", icon: MousePointerClick },
    { title: "Avg. Session", value: "3m 24s", change: "+15.3%", trend: "up", icon: Clock },
  ];

  const topPages = [
    { page: "/home", views: "23,456", unique: "18,234", bounceRate: "38.2%" },
    { page: "/products", views: "18,923", unique: "15,432", bounceRate: "42.1%" },
    { page: "/about", views: "12,345", unique: "10,234", bounceRate: "35.6%" },
    { page: "/contact", views: "8,234", unique: "7,123", bounceRate: "28.4%" },
    { page: "/blog", views: "6,789", unique: "5,432", bounceRate: "45.2%" },
  ];

  const trafficSources = [
    { source: "Direct", visitors: "18,234", percentage: "40.3%" },
    { source: "Organic Search", visitors: "12,456", percentage: "27.5%" },
    { source: "Social Media", visitors: "8,923", percentage: "19.7%" },
    { source: "Referral", visitors: "4,123", percentage: "9.1%" },
    { source: "Email", visitors: "1,495", percentage: "3.4%" },
  ];

  const locations = [
    { country: "United States", visitors: "12,345", flag: "🇺🇸" },
    { country: "United Kingdom", visitors: "8,234", flag: "🇬🇧" },
    { country: "Canada", visitors: "5,678", flag: "🇨🇦" },
    { country: "Germany", visitors: "4,321", flag: "🇩🇪" },
    { country: "France", visitors: "3,456", flag: "🇫🇷" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BarChart3 className="h-8 w-8 text-red" />
              <h1 className="text-2xl font-bold text-foreground">Web Traffic Analyzer</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline">Export Data</Button>
              <Button className="bg-red text-red-foreground hover:bg-red/90">
                <TrendingUp className="h-4 w-4 mr-2" />
                Generate Report
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title} className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="flex items-center gap-1 mt-2">
                    {stat.trend === "up" ? (
                      <ArrowUpRight className="h-4 w-4 text-green-500" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 text-red" />
                    )}
                    <span className={stat.trend === "up" ? "text-green-500 text-sm" : "text-red text-sm"}>
                      {stat.change}
                    </span>
                    <span className="text-muted-foreground text-sm">vs last period</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Analytics Tabs */}
        <Tabs defaultValue="pages" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-3">
            <TabsTrigger value="pages">Top Pages</TabsTrigger>
            <TabsTrigger value="sources">Traffic Sources</TabsTrigger>
            <TabsTrigger value="locations">Locations</TabsTrigger>
          </TabsList>

          {/* Top Pages */}
          <TabsContent value="pages">
            <Card>
              <CardHeader>
                <CardTitle>Most Visited Pages</CardTitle>
                <CardDescription>Pages with highest traffic in the last 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topPages.map((page, index) => (
                    <div key={page.page} className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <div className="flex items-center gap-4 flex-1">
                        <Badge variant="outline" className="font-mono">{index + 1}</Badge>
                        <div className="flex-1">
                          <p className="font-medium text-foreground">{page.page}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-8 text-sm">
                        <div className="text-right">
                          <p className="text-muted-foreground">Views</p>
                          <p className="font-semibold text-foreground">{page.views}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-muted-foreground">Unique</p>
                          <p className="font-semibold text-foreground">{page.unique}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-muted-foreground">Bounce</p>
                          <p className="font-semibold text-red">{page.bounceRate}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Traffic Sources */}
          <TabsContent value="sources">
            <Card>
              <CardHeader>
                <CardTitle>Traffic Sources</CardTitle>
                <CardDescription>Where your visitors are coming from</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trafficSources.map((source) => (
                    <div key={source.source} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Globe className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium text-foreground">{source.source}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-muted-foreground">{source.visitors} visitors</span>
                          <Badge className="bg-red text-red-foreground">{source.percentage}</Badge>
                        </div>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-red h-2 rounded-full transition-all duration-500"
                          style={{ width: source.percentage }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Locations */}
          <TabsContent value="locations">
            <Card>
              <CardHeader>
                <CardTitle>Visitor Locations</CardTitle>
                <CardDescription>Geographic distribution of your audience</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {locations.map((location, index) => (
                    <div key={location.country} className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <div className="flex items-center gap-4">
                        <span className="text-2xl">{location.flag}</span>
                        <div>
                          <p className="font-medium text-foreground">{location.country}</p>
                          <p className="text-sm text-muted-foreground">Rank #{index + 1}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-foreground">{location.visitors}</p>
                        <p className="text-sm text-muted-foreground">visitors</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
