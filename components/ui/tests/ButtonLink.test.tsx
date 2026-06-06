//Test for ButtonLink component to ensure it renders correctly and has the correct href attribute.

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ButtonLink from "../ButtonLink";

describe("ButtonLink", () => {
    it("renders the link text", () => {
        render(<ButtonLink href="/content">Contact Me</ButtonLink>);
        expect(screen.getByRole("link", { name: "Contact Me" })).toBeInTheDocument();
    });

    it("uses the correct href", () => {
        render(<ButtonLink href="/portfolio">View Portfolio</ButtonLink>);
        expect(screen.getByRole("link", { name: "View Portfolio" })).toHaveAttribute("href", "/portfolio");
    });
});