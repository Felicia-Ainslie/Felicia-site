import PageShell from "@/components/layout/PageShell";
import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";

export default function Ask() {
    return (
        <PageShell centered={false}>
            <section className="max-w-5x1 ms-auto px-8 py-32">

                <SectionHeading className="mb-8 px-8 py-32">Ask Felicia AI</SectionHeading>

                <p className="text-2x1 text-[#c9a063] tracking-wide mb-8">
                   <em><strong>First attempt at cloning myself.</strong></em>
                </p>

                <p>
                    <strong>Coming soon</strong>, Ask Felicia AI will be a conversational AI that is trained to mimic my personality and knowledge seeking skills. This is only the beginning, so follow along for more to come! 
                </p>
                
                <br />

                <p>
                    If you have any questions feel free to <Link href="/contact" className="text-[#c9a063] hover:text-[#24324A] font-bold">contact me</Link> and I'll do my best to answer them!
                </p>

                <br />

                <p>
                    If you want to see the progress of Ask Felicia AI, check out my <Link href="/portfolio" className="text-[#c9a063] hover:text-[#24324A] font-bold">Portfolio</Link> where I'll be posting updates on the development of Ask Felicia AI.
                </p>
            </section>
        </PageShell>
    );
}