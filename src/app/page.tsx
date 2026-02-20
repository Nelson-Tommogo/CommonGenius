import BottomNav from "../components/layout/bottomnav";
import { Button } from "../components/ui/button";
import Card from "../components/ui/card";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 font-roboto dark:bg-black">
      {/* Hero Section */}
      <div className="flex min-h-screen flex-col items-center justify-center gap-8 p-4">
        {/* Heading */}
        <h1 className="text-center text-4xl font-bold text-gray-800 dark:text-gray-200">
          Welcome Common Genius!
        </h1>
        
        {/* Button */}
        <Button size="lg" variant="primary">
          Click Me
        </Button>
        
        {/* Card */}
        <Card className="w-96 max-w-full">
          <Card.Image 
            src="https://source.unsplash.com/random/400x200" 
            alt="Random Image" 
          />
          <Card.Content>
            <Card.Title>Card Title</Card.Title>
            <Card.Description>
              This is a description of the card content.
            </Card.Description>
          </Card.Content>
        </Card>
        <div className="text-center text-gray-600 dark:text-gray-400">
          <BottomNav />
        </div>
      </div>
    </main>
  );
}