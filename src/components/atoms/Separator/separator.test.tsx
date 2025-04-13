import { render, screen } from "@testing-library/react";
import { Separator } from "./separator";

describe("Separator", () => {
	it("renders with default props (horizontal, decorative)", () => {
		render(<Separator data-testid="separator" />);
		const separator = screen.getByTestId("separator");

		expect(separator).toBeInTheDocument();
		expect(separator).toHaveAttribute("data-orientation", "horizontal");
		expect(separator).toHaveAttribute("data-slot", "separator-root");
		expect(separator).toHaveAttribute("data-orientation", "horizontal");
		expect(separator).toHaveClass("bg-border");
	});

	it("renders with vertical orientation", () => {
		render(<Separator data-testid="separator" orientation="vertical" />);
		const separator = screen.getByTestId("separator");

		expect(separator).toHaveAttribute("data-orientation", "vertical");
	});

	it("renders as non-decorative when specified", () => {
		render(<Separator data-testid="separator" decorative={false} />);
		const separator = screen.getByTestId("separator");

		expect(separator).not.toHaveAttribute("aria-hidden");
	});

	it("applies custom className", () => {
		render(<Separator data-testid="separator" className="custom-class" />);
		const separator = screen.getByTestId("separator");

		expect(separator).toHaveClass("custom-class");
	});
});
