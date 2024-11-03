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
      "Working with Alamo Algorithmics on our web and mobile apps was a great experience. They didn't just deliver solid performance improvements; they brought fresh, creative ideas that really elevated our product. Communication was easy, and they consistently responded with solutions that felt like they were genuinely invested in our success. We're excited to keep this partnership going.",
  },
  {
    name: "Alirio Castellano",
    website: "rockultrasound.com",
    description:
      "Alamo Algorithmics crafted a landing page that really connected with our audience. The contact form helped us communicate with clients in a way that was effortless, and the SEO boost was impressive, bringing more traffic our way. I appreciated how thoughtful and detail-oriented their team was—they made sure our needs were heard and delivered above expectations.",
  },
  {
    name: "Mighty Shield, CEO",
    website: "mightyshieldinsurance.com",
    description:
      "Alamo Algorithmics took our ideas and shaped them into a landing page that perfectly reflects our brand. Our visibility online improved, and the project went above and beyond what we expected. Their team was easy to work with, thoughtful about our feedback, and committed to getting it just right. We're thrilled with the results.",
  },
  {
    name: "Villalobos Tile, CEO",
    website: "villalobostile.com",
    description:
      "Our new landing page from Alamo Algorithmics has been a fantastic addition. It looks professional, functions smoothly, and has definitely brought in more client inquiries. Their SEO work has driven extra traffic, and their commitment to getting the details right really shows. I’d highly recommend them to anyone looking for quality web design.",
  },
] as const satisfies Testimonial[];
