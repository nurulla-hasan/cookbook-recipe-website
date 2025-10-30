import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const Features = () => {
  return (
    <div className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Card>
            <CardContent className="p-0">
              <img src="/public/images/concept-of-weight-loss-with-thin-girl-on-pink-back-2025-03-25-08-57-12-utc.jpg" alt="Woman exercising" className="rounded-lg" />
            </CardContent>
          </Card>
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-4 font-caladea">Lose weight, Build Muscle, Stay healthy</h2>
            <p className="text-muted-foreground mb-8">With 7,500+ curated recipes, the Koumanis Diet makes eating well simple, sustainable, and satisfying. Every meal is designed to support your health and fitness goals:</p>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <CheckCircle className="text-primary" />
                <span>Burn fat while staying energized</span>
              </li>
              <li className="flex items-center gap-4">
                <CheckCircle className="text-primary" />
                <span>Build lean muscle with protein-rich recipes and exercise pairing</span>
              </li>
              <li className="flex items-center gap-4">
                <CheckCircle className="text-primary" />
                <span>Asam Alfa Hidroksi</span>
              </li>
              <li className="flex items-center gap-4">
                <CheckCircle className="text-primary" />
                <span>Antioksidan</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;