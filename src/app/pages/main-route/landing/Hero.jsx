import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Hero = () => {
  return (
    <div className="bg-secondary min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <img src="/src/assets/logo1.png" alt="Koumanis Diet Logo" className="w-48 mx-auto md:mx-0 mb-4" />
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 font-caladea">Transform Your Health with the Koumanis Diet Meal Planner</h1>
            <p className="text-muted-foreground mb-8">Join thousands who have achieved their health goals with our science-backed meal plans and fitness guidance.</p>
            <Card>
              <CardHeader>
                <CardTitle>Get Desktop App</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="flex flex-col sm:flex-row gap-4">
                  <Input type="text" placeholder="name" />
                  <Input type="email" placeholder="email" />
                  <Button type="submit">Get Desktop App</Button>
                </form>
                <p className="text-xs text-muted-foreground mt-2">Available on iPhone, iPad, Android, Windows, Mac & Linux</p>
              </CardContent>
            </Card>
          </div>
          <div className="relative">
            <img src="/public/images/diet-app-preview.svg" alt="Koumanis Diet App Preview" className="w-full h-auto" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-4">
              <Button variant="outline" size="lg" className="rounded-full">Click to Watch Video +</Button>
              <Button variant="outline" size="icon" className="rounded-full"><img src="/public/images/scanner.svg" alt="Get App" className="w-8 h-8" /></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;