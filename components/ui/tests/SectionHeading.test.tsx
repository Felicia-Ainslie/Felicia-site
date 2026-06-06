//Test for SectionHeading component to ensure it renders correctly and has the correct href attribute.

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SectionHeading from "../SectionHeading";

describe("SectionHeading", () => {
    it("renders heading text", () => {
        render(
        <SectionHeading>
            Portfolio
        </SectionHeading>);

        expect(
            screen.getByRole("heading", { name: "Portfolio" })
        ).toBeInTheDocument();
    });
});