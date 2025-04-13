import { cn } from "@/lib/utils";
// Button.test.tsx
import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button"; // Adjust the import path as necessary

// Mock the `cn` utility to avoid complexity
jest.mock("@/lib/utils", () => ({
	cn: jest.fn((...args) => args.join(" ")),
}));

describe("Button Component", () => {
	it("renders correctly with default props", () => {
		render(<Button>Click Me</Button>);

		const button = screen.getByRole("button", { name: /click me/i });
		expect(button).toBeInTheDocument();
		expect(button).toHaveClass(
			"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
		);
	});

	it("applies the correct variant classes", () => {
		render(<Button variant="destructive">Delete</Button>);

		const button = screen.getByRole("button", { name: /delete/i });
		expect(button).toHaveClass(
			"bg-destructive text-white shadow-xs hover:bg-destructive/90",
		);
	});

	it("applies the correct size classes", () => {
		render(<Button size="sm">Small Button</Button>);

		const button = screen.getByRole("button", { name: /small button/i });
		expect(button).toHaveClass("h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5");
	});

	it("renders as child when asChild is true", () => {
		render(
			<Button asChild>
				<span>Custom Element Button</span>
			</Button>,
		);

		const button = screen.getByText(/custom element button/i);
		expect(button).toBeInTheDocument();
		expect(button.tagName).toBe("SPAN");
	});

	it("calls the onClick handler when clicked", () => {
		const handleClick = jest.fn();
		render(<Button onClick={handleClick}>Click Me</Button>);

		const button = screen.getByRole("button", { name: /click me/i });
		fireEvent.click(button);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it("is disabled when the disabled prop is passed", () => {
		render(<Button disabled>Disabled Button</Button>);

		const button = screen.getByRole("button", { name: /disabled button/i });
		expect(button).toBeDisabled();
	});
});
