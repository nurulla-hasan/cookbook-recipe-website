import React from 'react';
import { CheckCircle } from 'lucide-react';

const Features = () => {
  return (
    <section className="relative bg-[#f78fa7] ">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="relative grid md:grid-cols-3 gap-10 items-center">
          {/* Left content */}
          <div className="relative z-10 md:col-span-2 py-20">
            <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-4">
              Lose weight, Build Muscle,
              <br className="hidden md:block" />
              Stay healthy
            </h2>
            <p className="text-foreground/80 mb-8 max-w-2xl">
              With 7,500+ curated recepies, the Koumanis Diet makes eating well simple, sustainable, and satisfying. Every meal is designed to support your health and fitness goals:
            </p>
            <ul className="space-y-4 text-foreground">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 shrink-0 text-rose-600" />
                <span>Burn fat while staying energized</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 shrink-0 text-rose-600" />
                <span>Build lean muscle with protein-rich recipes and exercise pairing</span>
              </li>
              {/* <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 shrink-0 text-rose-600" />
                <span>Asam Alfa Hidroksi</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 shrink-0 text-rose-600" />
                <span>Antioksidan</span>
              </li> */}
            </ul>
          </div>

          {/* Right visual */}
          <div className="hidden pointer-events-none absolute inset-y-0 right-0 md:flex items-end justify-center md:justify-end">
            <img
              src="/images/girl-Photoroom.png"
              alt="Woman exercising"
              className="h-full w-auto max-w-none object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;