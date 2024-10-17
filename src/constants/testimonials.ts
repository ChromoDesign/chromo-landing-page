export type Testimonial = {
  name: string;
  website: string;
  description: string;
};

export const TESTIMONIALS = [
  {
    name: "Johnathan Curiel",
    website: "torqapp.io",
    description:
      "Alamo Algorithmic elevated torqapp.io with their stellar work on our web and mobile apps. The improvements were noticeable in both performance and design. Their team was professional, quick to respond, and highly efficient. We’re thrilled with the outcome and excited for future collaborations.",
  },
  {
    name: "Rock Ultrasound, CEO",
    website: "rockultrasound.com",
    description:
      "Alamo Algorithmic created an engaging landing page for us that boosted user engagement. The contact form streamlined communication, increasing leads. Their SEO efforts greatly improved our rankings. Overall, we were highly impressed by their professionalism and attention to detail.",
  },
  {
    name: "Mighty Shield, CEO",
    website: "mightyshieldinsurance.com",
    description:
      "Alamo Algorithmic crafted an impressive landing page that perfectly captured our brand. The improved SEO resulted in more visibility, and the project exceeded our expectations. Their team was professional and easy to work with. We couldn’t be happier with the final outcome.",
  },
  {
    name: "Villalobos Tile, CEO",
    website: "villalobostile.com",
    description:
      "Alamo Algorithmic delivered a beautifully designed landing page for us that looks polished and professional. The contact form helped increase client inquiries, and the SEO improvements were fantastic. We highly recommend them for their expertise and commitment to quality.",
  },
] as const satisfies Testimonial[];
