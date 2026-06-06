// Test for List component to ensure it renders correctly.

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import List from "../List";

describe("List", () => {
   const items = [
     {
       label: "Frontend",
       value: "React",
     },
     {
       label: "Language",
       value: "Typescript",
     },
     {
       label: "Framework",
       value: "Next.js",
     },
];

it("renders item labels", () => {
    render(<List items={items} />);

        expect(screen.getByText("Frontend")).toBeInTheDocument();
        expect(screen.getByText("Language")).toBeInTheDocument();
        expect(screen.getByText("Framework")).toBeInTheDocument();
});

it("renders item values", () => {
    render(<List items={items} />);

        expect(screen.getByText("React")).toBeInTheDocument();
        expect(screen.getByText("Typescript")).toBeInTheDocument();
        expect(screen.getByText("Next.js")).toBeInTheDocument();
    });

it("renders as a list", () => {
    render(<List items={items} />);

        expect(screen.getByRole("list")).toBeInTheDocument();
    });
});