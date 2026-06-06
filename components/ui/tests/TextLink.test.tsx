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
});