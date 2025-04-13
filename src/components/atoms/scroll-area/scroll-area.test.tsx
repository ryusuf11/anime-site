import { render, screen } from "@testing-library/react";
import { ScrollArea, ScrollBar } from "./scroll-area";

jest.mock("@/lib/utils", () => ({
	cn: jest.fn((...args) => args.join(" ")),
}));

describe("ScrollArea Component", () => {
	it("renders correctly with children", () => {
		render(
			<ScrollArea>
				<div>Content</div>
			</ScrollArea>,
		);

		const content = screen.getByText(/content/i);
		expect(content).toBeInTheDocument();
	});

	it("applies custom className to ScrollArea", () => {
		const { container } = render(
			<ScrollArea className="custom-scroll-area">
				<div>Content</div>
			</ScrollArea>,
		);

		const scrollArea = container.querySelector('[data-slot="scroll-area"]');
		expect(scrollArea).toHaveClass("custom-scroll-area");
	});
});
