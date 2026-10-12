//Test for TextLink component to ensure it renders correctly and has the correct href attribute.

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import TextLink from "../TextLink";

describe("TextLink", () => {
    it("renders link text", () => {
        render(
        <TextLink href="/contact">
            Contact
        </TextLink>);

        expect(
            screen.getByRole("link", { name: "Contact" })).toBeInTheDocument();
    });

    it("uses the correct href", () => {
        render(
            <TextLink href="/portfolio">
                Portfolio
            </TextLink>
        );

        expect(
            screen.getByRole("link", { name: "Portfolio" })
        ).toHaveAttribute("href", "/portfolio");
    });
    it("opens external URLs in a new tab with one outgoing arrow", () => {
        render(<TextLink href="https://example.com">External project</TextLink>);
        const link = screen.getByRole("link", { name: /External project/ });
        expect(link).toHaveAttribute("target", "_blank");
        expect(link).toHaveAttribute("rel", "noopener noreferrer");
        expect(link.textContent?.match(/↗/g)).toHaveLength(1);
    });

    it("opens a PDF read in a new tab, including query parameters", () => {
        render(<TextLink href="/documents/project.pdf?version=2">Read project</TextLink>);
        const link = screen.getByRole("link", { name: /Read project/ });
        expect(link).toHaveAttribute("target", "_blank");
        expect(link).not.toHaveAttribute("download");
        expect(link).toHaveTextContent("↗");
    });

    it("downloads instead of opening a PDF in a new tab", () => {
        render(<TextLink href="/documents/project.pdf" download>Download project</TextLink>);
        const link = screen.getByRole("link", { name: "Download project" });
        expect(link).toHaveAttribute("download");
        expect(link).not.toHaveAttribute("target");
        expect(link).toHaveTextContent("↓");
        expect(link).not.toHaveTextContent("↗");
    });

    it("keeps internal page navigation in the current tab without an arrow", () => {
        render(<TextLink href="/experience">Experience</TextLink>);
        const link = screen.getByRole("link", { name: "Experience" });
        expect(link).not.toHaveAttribute("target");
        expect(link.textContent).toBe("Experience");
    });
});