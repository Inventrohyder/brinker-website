import { Mail, MapPinned, Phone } from "lucide-react";
import { Container, Section } from "@/components/layout/container";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";
import { SectionHeader } from "@/components/blocks/section-header";

export function ContactSection() {
  const contactAction = `mailto:${site.email}`;

  return (
    <Section>
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <Card className="p-6 sm:p-8">
            <SectionHeader eyebrow="Send us a message" title="Drop your queries below. Let’s talk." summary="Required fields use native browser validation. Submissions open your email client so the form stays reliable on static hosting." />
            <form action={contactAction} method="post" encType="text/plain" className="mt-8 grid gap-4 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-bold text-foreground">Name<Input required name="name" placeholder="Full name" autoComplete="name" /></label>
              <label className="flex flex-col gap-2 text-sm font-bold text-foreground">Company<Input name="company" placeholder="Company" autoComplete="organization" /></label>
              <label className="flex flex-col gap-2 text-sm font-bold text-foreground">Phone<Input required name="phone" type="tel" placeholder="Phone" autoComplete="tel" /></label>
              <label className="flex flex-col gap-2 text-sm font-bold text-foreground">Email<Input required name="email" type="email" placeholder="Email" autoComplete="email" /></label>
              <label className="flex flex-col gap-2 text-sm font-bold text-foreground sm:col-span-2">Subject<Input required name="subject" placeholder="Subject" /></label>
              <label className="flex flex-col gap-2 text-sm font-bold text-foreground sm:col-span-2">Message<Textarea required name="message" placeholder="Tell us what you need to connect, secure, or modernize." /></label>
              <Button className="sm:col-span-2" type="submit">Send Message</Button>
            </form>
          </Card>

          <div className="grid gap-5">
            <Card className="bg-[#07141f] p-6 text-white pattern-grid">
              <h2 className="font-display text-2xl font-black tracking-[-0.05em]">Direct contact</h2>
              <div className="mt-6 grid gap-4 text-sm text-white/72">
                <a href={`mailto:${site.email}`} className="flex gap-3 hover:text-white"><Mail className="size-5 text-primary" aria-hidden={true} />{site.email}</a>
                <a href={`tel:${site.phones.nairobi.replace(/\s+/g, "")}`} className="flex gap-3 hover:text-white"><Phone className="size-5 text-primary" aria-hidden={true} />Nairobi: {site.phones.nairobi}</a>
                <a href={`tel:${site.phones.mombasa.replace(/\s+/g, "")}`} className="flex gap-3 hover:text-white"><Phone className="size-5 text-primary" aria-hidden={true} />Mombasa: {site.phones.mombasa}</a>
              </div>
            </Card>
            {site.offices.map((office) => (
              <Card key={office.name} className="p-6">
                <MapPinned className="text-primary" aria-hidden={true} />
                <h3 className="mt-4 font-display text-xl font-black tracking-[-0.05em]">{office.name}</h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{office.address}</p>
                <a href={office.mapUrl} target="_blank" rel="noreferrer" className="mt-4 inline-flex text-sm font-bold text-primary hover:underline">Open map</a>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
