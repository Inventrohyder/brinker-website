"use client";

import * as React from "react";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { clients } from "@/content/site";
import { publicAsset } from "@/lib/public-asset";

export function PartnerLogoCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [isPaused, setIsPaused] = React.useState(false);

  React.useEffect(() => {
    if (!api || isPaused) {
      return;
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      return;
    }

    const interval = window.setInterval(() => {
      api.scrollNext();
    }, 2800);

    return () => window.clearInterval(interval);
  }, [api, isPaused]);

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      setApi={setApi}
      className="logo-carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <CarouselContent className="-ml-4">
        {clients.map((client) => (
          <CarouselItem key={client.name} className="basis-[78%] pl-4 sm:basis-1/2 lg:basis-[38%] xl:basis-1/3">
            <div className="logo-carousel-card">
              <Image
                src={publicAsset(client.logo)}
                alt={`${client.name} logo`}
                width={360}
                height={136}
                className="logo-carousel-image"
                loading="eager"
                sizes="(min-width: 1280px) 23vw, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 72vw"
                unoptimized
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="logo-carousel-control -left-3 hidden sm:flex" />
      <CarouselNext className="logo-carousel-control -right-3 hidden sm:flex" />
    </Carousel>
  );
}
