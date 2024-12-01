import type { Testimonial } from "@/constants/testimonials";
import formatIconSvg from "@material-symbols/svg-400/rounded/format_quote-fill.svg?raw";
import kidStarSvg from "@material-symbols/svg-400/rounded/kid_star-fill.svg?raw";
import { Icon } from "../common/icon";
import { Card } from "../ui/card";

interface Props {
  testimonial: Testimonial;
}

export function TestimonialCard2({ testimonial }: Props) {
  const stars = [...Array(5)].map((_, index) => index + 1);

  return (
    <Card>
      <article className="p-5 text-black dark:text-brand-white">
        <div className="mb-24 space-y-1.5">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-base">{testimonial.name}</h3>
            <ul className="flex gap-0.5">
              {stars.map((_, index) => (
                <li key={index}>
                  <Icon icon={kidStarSvg} className="size-5 fill-amber-400" />
                </li>
              ))}
            </ul>
          </div>
          <a
            className="text-sm text-brand-gray transition-colors duration-200 hover:text-black dark:hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
            href={`https://${testimonial.website}`}
          >
            {testimonial.website}
          </a>
        </div>

        <div className="space-y-2.5">
          <Icon
            icon={formatIconSvg}
            className="size-7 rotate-180 fill-brand-gray"
          />
          <p className="text-sm">{testimonial.description}</p>
        </div>
      </article>
    </Card>
  );
}
