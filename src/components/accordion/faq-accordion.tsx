import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/constants/faq";

export const FaqAccordion = () => {
  return (
    <div className="flex justify-center px-4">
      <Accordion type="single" collapsible className="w-full max-w-5xl">
        {FAQ_ITEMS.map(({ id, question, answer }) => (
          <AccordionItem value={id} key={id}>
            <AccordionTrigger>{question}</AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};