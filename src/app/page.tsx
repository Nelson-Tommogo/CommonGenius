import AppLayout from "../components/layout/AppLayout";
import { Button } from "../components/ui/button";
import Card from "../components/ui/card";

export default function Home() {
  return (
    <AppLayout>
      {/* Hero Section */}
      <div className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center gap-8 p-4">
               <h1 className="text-center text-4xl font-bold text-gray-800 dark:text-gray-200">
          Welcome Common Genius!
        </h1>
        
      </div>
    </AppLayout>
  );
}