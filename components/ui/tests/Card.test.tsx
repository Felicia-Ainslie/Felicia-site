//Test for Card component to ensure it renders correctly and has the correct attributes.

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Card from "../Card";

describe("Card", () => {
    it("renders card title", () => {
        render(
        <Card title="Test Card">
            <p>Test Content</p>
        </Card>
        );

        expect(
            screen.getByRole("heading", { name: "Test Card" })
        ).toBeInTheDocument();
    });

    it("renders card content", () => {
        render(
        <Card title="Test Card">
            <p>Test Content</p>
        </Card>
        );
        
        expect(screen.getByText(/Test Content/i)).toBeInTheDocument();
    });
});