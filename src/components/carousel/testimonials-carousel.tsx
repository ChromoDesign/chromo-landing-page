import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { TESTIMONIALS } from "@/constants/testimonials";
import { useEffect, useState } from "react";
import { TestimonialCard } from "../cards/testimonial-card";
import { CarouselDots } from "./carousel-dots";

export const TestimonialsCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    const CAROUSEL_INTERVAL_SECONDS = 12 * 1000;

    const interval = setInterval(() => {
      api.scrollNext();
    }, CAROUSEL_INTERVAL_SECONDS);

    return () => {
      clearInterval(interval);
    };
  }, [api]);
  return (
    <>
      <div className="relative">
        <Carousel
          className="mt-14 flex flex-col lg:flex-col-reverse"
          setApi={setApi}
          opts={{
            loop: true,
            align: "center",
          }}
        >
          <CarouselContent className="">
            {TESTIMONIALS.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="sm:basis-1/1 basis-full lg:basis-1/3"
              >
                <TestimonialCard testimonial={testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-10 lg:hidden">
            <CarouselDots current={current} count={count} />
          </div>

          <div className="my-5 flex justify-center lg:justify-end">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </>
  );
};
