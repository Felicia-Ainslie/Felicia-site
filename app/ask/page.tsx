// This is the page for the Ask Felicia AI project. It will be a conversational AI that is trained to mimic my personality and knowledge seeking skills. 
//Layout is imported via "Barrel Export": components > index.ts

import {PageShell, SectionHeading, TextLink} from "@/components";


export default function Ask() {
    return (
        <PageShell centered={false}>
            <section className="content-width">

                <SectionHeading>Ask Felicia AI</SectionHeading>

                <div className="body">
                    <p className="gold-text italic font-medium mb-4">
                    First attempt at cloning myself.
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
                        If you want to see the progress of Ask Felicia AI, check out my <TextLink href="/portfolio">Portfolio</TextLink> where I will be posting updates on the development of Ask Felicia AI.
                    </p>
                </div>
            </section>
        </PageShell>
    );
}