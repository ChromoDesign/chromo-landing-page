import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TESTIMONIALS } from "@/constants/testimonials";
import { TestimonialCard2 } from "../cards/testimonial-card";

export const TestimonialsCarousel = () => {
  return (
    <div className="relative">
      <Carousel
        opts={{
          loop: true,
        }}
      >
        <div className="mt-14">
          <CarouselContent className="flex gap-4 px-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <CarouselItem key={index} className="sm:basis-1/1 lg:basis-1/3">
                <TestimonialCard2 testimonial={testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
