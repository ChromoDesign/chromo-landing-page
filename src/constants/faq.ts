export type FaqItems = {
  id: string;
  question: string;
  answer: string | string[];
};

export const FAQ_ITEMS: FaqItems[] = [
  {
    id: "item-1",
    question:
      "How do you ensure that your designs meet user needs and business goals?",
    answer: `we ensure designs meet user needs and business goals through a user-centered approach, combining research, prototyping, and collaboration. By aligning user insights with business objectives, I create functional, visually appealing designs that drive results.`,
  },
  {
    id: "item-2",
    question:
      "What tools and software do you use for your design and development work?",
    answer: [
      "For design, we primarily use Figma for UI/UX design and prototyping, as it allows for efficient collaboration and high-fidelity mockups. For interactive prototyping, we leverage Framer to create dynamic experiences.",
      "On the development side, we use React for building front-end interfaces, Node.js and NestJS for server-side development, and Flutter for cross-platform mobile applications. We also work with Laravel for back-end web development, creating robust and scalable solutions.",
      "By using this combination of tools, we ensure seamless integration between design and development, delivering both visually appealing and technically sound projects.",
    ],
  },
  {
    id: "item-3",
    question: "What if i’m not happy with the results?",
    answer:
      "If you’re not satisfied with the results, we offer unlimited revisions to ensure the final product meets your expectations. Your feedback is important, and we work closely with you to refine the design or development until you’re completely happy with the outcome. Our goal is to deliver a solution that fully aligns with your vision.",
  },
  {
    id: "item-4",
    question: "How quickly will i receive my project?",
    answer:
      "We strive to deliver an excellent product as quickly as possible. However, timelines can vary depending on the complexity and scope of the project. Rest assured, we’ll keep you informed throughout the process, providing regular updates and progress reports to ensure transparency. Our priority is balancing speed with quality to meet your expectations.",
  },
];
