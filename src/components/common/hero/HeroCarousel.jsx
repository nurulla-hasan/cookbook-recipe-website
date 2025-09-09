"use client";

import React, { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import salmonFish from "../../../assets/slider/salmon.png";
import frame from "../../../assets/slider/frame.png";

const slides = [
  {
    id: 1,
    title: "The Koumanis Diet Meal Planner",
    subtitle: "Your Personalized Nutrition & Fitness Companion—Now on iPhone & Android",
    cta: "Start Learning",
    image: salmonFish,
  },
  {
    id: 2,
    title: "Delicious Healthy Recipes",
    subtitle: "Explore curated recipes for healthy living",
    cta: "Explore Recipes",
    image: salmonFish,
  },
  {
    id: 3,
    title: "Smart Grocery Planner",
    subtitle: "Auto-generate grocery lists from selected recipes",
    cta: "Start Planning",
    image: salmonFish,
  },
];

const HeroCarousel = () => {
  const [api, setApi] = useState(null);
  const autoplayPlugin = React.useRef(Autoplay({ delay: 5000, stopOnInteraction: false })).current;

  useEffect(() => {
    if (!api) return;
    // Example: listen to select
    const update = () => {
      // you can read api.selectedScrollSnap() etc.
    };
    api.on("select", update);
    return () => api.off("select", update);
  }, [api]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-t from-[#E5FFE4] to-[#0A3507]">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{ loop: true, align: "start" }}
        plugins={[autoplayPlugin]}
      >
        <CarouselContent>
          {slides.map((s) => (
            <CarouselItem key={s.id} className="pl-4 min-w-full">
                {/* LEFT */}
                <div className="container mx-auto w-full h-full flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-10 xl:px-0 py-12 lg:py-20">
                  <div className="w-full md:w-1/2 text-white">
                    <div className="hidden xl:block">
                      <img src={frame} className="w-60 h-60" alt={s.title} />
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-caladea font-extrabold leading-tight">
                      {s.title}
                    </h1>
                    <p className="mt-6 max-w-md text-lg text-white/90">{s.subtitle}</p>
                    <div className="mt-8">
                      <Button className="py-6 px-8">{s.cta}</Button>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="w-full md:w-1/3 flex justify-center">
                    <img src={s.image} alt={s.title} className="w-full object-cover rounded-2xl" />
                  </div>
                </div>
            </CarouselItem>
          ))}
        </CarouselContent>

      </Carousel>

      {/* Dots (Optional) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => api?.scrollTo(i)}
            className="w-3 h-3 rounded-full bg-white/40"
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroCarousel;
