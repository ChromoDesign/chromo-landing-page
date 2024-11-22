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
      <Accordion type="single" collapsible className="w-full max-w-[58rem]">
        {FAQ_ITEMS.map(({ id, question, answer }) => (
          <AccordionItem value={id} key={id}>
            <AccordionTrigger>{question}</AccordionTrigger>
            <AccordionContent>
              {Array.isArray(answer) ? (
                answer.map((ans, index) => (
                  <p key={index} className="pb-5">
                    {ans}
                  </p>
                ))
              ) : (
                <p className="pb-5">{answer}</p>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
