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
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);
  return (
    <>
      <div className="relative">
        <Carousel
          opts={{
            align: "center",
          }}
          setApi={setApi}
        >
          <div className="mt-14">
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
          </div>

          <div className="carousel-buttons-container">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>

        <CarouselDots current={current} count={count} />
      </div>
    </>
  );
};
