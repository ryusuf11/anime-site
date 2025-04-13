import { fireEvent, render, screen } from "@testing-library/react";
import { Input } from "./input";

jest.mock("@/lib/utils", () => ({
	cn: jest.fn((...args) => args.join(" ")),
}));

describe("Input Component", () => {
	it("renders correctly with default props", () => {
		render(<Input placeholder="Enter text" />);

		const input = screen.getByPlaceholderText(/enter text/i);
		expect(input).toBeInTheDocument();
		expect(input).toHaveClass(
			"file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
		);
	});

	it("applies custom className", () => {
		render(<Input className="custom-class" placeholder="Custom Class Input" />);

		const input = screen.getByPlaceholderText(/custom class input/i);
		expect(input).toHaveClass("custom-class");
	});

	it("supports changing the value when typed into", () => {
		render(<Input placeholder="Type here" />);

		const input = screen.getByPlaceholderText(/type here/i);
		fireEvent.change(input, { target: { value: "Hello World" } });

		expect(input).toHaveValue("Hello World");
	});

	it("is disabled when the disabled prop is passed", () => {
		render(<Input disabled placeholder="Disabled Input" />);

		const input = screen.getByPlaceholderText(/disabled input/i);
		expect(input).toBeDisabled();
	});

	it("applies correct type attribute", () => {
		render(<Input type="password" placeholder="Password Input" />);

		const input = screen.getByPlaceholderText(/password input/i);
		expect(input).toHaveAttribute("type", "password");
	});
});
