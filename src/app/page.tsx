import Signature from "@/components/ui/atoms/signature";
import { Toaster } from "@/components/ui/molecules/toaster";
import OnboardingScreen from "@/components/ui/pages/onboarding-screen";

export default async function Home() {
  
  return (
    <main className="min-h-screen bg-blue-800 h-full flex flex-col justify-between">
      <OnboardingScreen />
      <Toaster />
      <Signature textColor="text-white" className="bg-blue-800" />
    </main>
  );
}
