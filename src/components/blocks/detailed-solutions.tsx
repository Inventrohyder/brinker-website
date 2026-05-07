import { CheckCircle2 } from "lucide-react";
import { Container, Section } from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { solutionGroups } from "@/content/site";
import { SectionHeader } from "@/components/blocks/section-header";

export function DetailedSolutions() {
  return (
    <Section>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeader eyebrow="Solution taxonomy" title="Detailed capabilities, organized for procurement and technical review." summary="Each major solution group can be deep-linked from service cards, search results, and proposals." />
            <Tabs className="mt-7">
              <TabsList>
                {solutionGroups.map((group) => <TabsTrigger key={group.id} href={`#${group.id}`}>{group.title}</TabsTrigger>)}
              </TabsList>
            </Tabs>
          </div>
          <div className="grid gap-5">
            {solutionGroups.map((group) => {
              const Icon = group.icon;
              return (
                <Card id={group.id} key={group.id} className="scroll-mt-28 p-6 sm:p-7">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                    <span className="grid size-13 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary"><Icon aria-hidden={true} /></span>
                    <div>
                      <h2 className="font-display text-2xl font-black tracking-[-0.05em] text-foreground">{group.title}</h2>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{group.summary}</p>
                      <TabsContent className="mt-6">
                        <Accordion>
                          <AccordionItem open>
                            <AccordionTrigger>{group.title} capabilities</AccordionTrigger>
                            <AccordionContent>
                              <div className="grid gap-3 sm:grid-cols-2">
                                {group.items.map((item) => <div key={item} className="flex gap-2 rounded-2xl bg-muted/60 p-3 text-sm font-medium text-foreground"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden={true} />{item}</div>)}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </TabsContent>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
