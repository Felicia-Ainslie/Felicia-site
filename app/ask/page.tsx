// This is the page for the Ask Felicia AI project. It will be a conversational AI that is trained to mimic my personality and knowledge seeking skills. 

import PageShell from "@/components/layout/PageShell";
import SectionHeading from "@/components/ui/SectionHeading";
import TextLink from "@/components/ui/TextLink";

export default function Ask() {
    return (
        <PageShell centered={false}>
            <section className="max-w-5x1 ms-auto px-8 py-10">

                <SectionHeading>Ask Felicia AI</SectionHeading>

                <p className="gold-text tracking-wide mb-8">
                   <em><strong>First attempt at cloning myself.</strong></em>
                </p>

                <p>
                    <strong>Coming soon</strong>, Ask Felicia AI will be a conversational AI that is trained to mimic my personality and knowledge seeking skills. This is only the beginning, so follow along for more to come! 
                </p>
                
                <br />

                <p>
                    If you have any questions feel free to <TextLink href="/contact">contact me!</TextLink> and I will do my best to answer them!
                </p>

                <br />

                <p>
                    If you want to see the progress of Ask Felicia AI, check out my <TextLink href="/contact">Portfolio</TextLink> where I will be posting updates on the development of Ask Felicia AI.
                </p>
            </section>
        </PageShell>
    );
}