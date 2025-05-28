
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PricingPage() {
  return (
    <>
      <Header />
      <div className="py-24 px-6 md:px-12 lg:px-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that best fits your team's needs. All plans include core features.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Basic Plan */}
          <Card className="border-2 border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl">Starter</CardTitle>
              <CardDescription>For small teams getting started</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$99</span>
                <span className="text-gray-500">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {['5 active drivers', 'Basic telemetry', 'Race data storage', '8 hours of support'].map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-[#0d6efd] mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-[#0d6efd] hover:bg-[#0b5ed7]">Get Started</Button>
            </CardFooter>
          </Card>

          {/* Pro Plan */}
          <Card className="border-2 border-[#0d6efd] shadow-md hover:shadow-lg transition-shadow relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#0d6efd] text-white px-4 py-1 rounded-full text-sm font-medium">
              Popular
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">Professional</CardTitle>
              <CardDescription>For professional teams</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$299</span>
                <span className="text-gray-500">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  '15 active drivers',
                  'Advanced telemetry',
                  'Unlimited race data storage',
                  'Real-time analytics',
                  'Priority support',
                  'Team collaboration tools'
                ].map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-[#0d6efd] mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-[#0d6efd] hover:bg-[#0b5ed7]">Get Started</Button>
            </CardFooter>
          </Card>

          {/* Enterprise Plan */}
          <Card className="border-2 border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl">Enterprise</CardTitle>
              <CardDescription>For large racing organizations</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">Custom</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {[
                  'Unlimited drivers',
                  'Custom integrations',
                  'Dedicated account manager',
                  'On-premise deployment option',
                  'Custom analytics',
                  '24/7 premium support'
                ].map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-[#0d6efd] mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-[#0d6efd] hover:bg-[#0b5ed7]">Contact Sales</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
}
