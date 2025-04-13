import { Badge } from "@/components/atoms/Badge";
import { render } from "@testing-library/react";
import React from "react";

describe("Badge", () => {
	it("renders with default variant", () => {
		const { getByText } = render(<Badge>Default</Badge>);
		const badge = getByText("Default");
		expect(badge).toBeInTheDocument();
		expect(badge).toHaveClass("bg-primary");
	});

	it("renders with secondary variant", () => {
		const { getByText } = render(<Badge variant="secondary">Secondary</Badge>);
		const badge = getByText("Secondary");
		expect(badge).toHaveClass("bg-secondary");
	});

	it("renders with destructive variant", () => {
		const { getByText } = render(<Badge variant="destructive">Danger</Badge>);
		const badge = getByText("Danger");
		expect(badge).toHaveClass("bg-destructive");
	});

	it("renders with outline variant", () => {
		const { getByText } = render(<Badge variant="outline">Outline</Badge>);
		const badge = getByText("Outline");
		expect(badge).toHaveClass("text-foreground");
	});

	it("supports custom className", () => {
		const { getByText } = render(
			<Badge className="custom-class">Custom</Badge>,
		);
		expect(getByText("Custom")).toHaveClass("custom-class");
	});

	it("renders as child component using Slot", () => {
		const { getByText } = render(
			<Badge asChild>
				<a href="/#">Link Badge</a>
			</Badge>,
		);
		const badge = getByText("Link Badge");
		expect(badge.tagName).toBe("A");
		expect(badge).toHaveAttribute("href", "/#");
	});
});
