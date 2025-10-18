import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How do I book a tour?",
    answer:
      "You can book a tour directly through our website by selecting your desired tour, choosing your dates, and completing the booking process. You can also call our support team for assistance.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Our cancellation policy varies by tour and booking date. Generally, you can cancel up to 48 hours before your tour for a full refund. Please check the specific terms for your booking.",
  },
  {
    question: "Do you offer group discounts?",
    answer:
      "Yes! We offer special rates for groups of 8 or more people. Contact our team to discuss group pricing and custom itineraries for your group.",
  },
  {
    question: "Are your tours suitable for children?",
    answer:
      "Many of our tours are family-friendly, but age restrictions may apply to certain activities. Check the tour details or contact us to find the best options for your family.",
  },
  {
    question: "What happens if weather affects my tour?",
    answer:
      "Safety is our priority. If weather conditions make a tour unsafe, we'll offer alternative dates, modified itineraries, or full refunds depending on the circumstances.",
  },
  {
    question: "Do you provide travel insurance?",
    answer:
      "We strongly recommend travel insurance and can connect you with trusted insurance providers. Some tours may include basic coverage, which will be clearly stated in the booking details.",
  },
]

export function ContactFAQ() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions about booking and traveling with RoamWise
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg px-6 border-0 card-shadow"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
