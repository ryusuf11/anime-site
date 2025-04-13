import { render, screen } from "@testing-library/react";
import { Skeleton } from "./skeleton";

describe("Skeleton", () => {
	it("renders correctly with default props", () => {
		render(<Skeleton data-testid="skeleton" />);

		const skeletonElement = screen.getByTestId("skeleton");
		expect(skeletonElement).toBeInTheDocument();

		expect(skeletonElement).toHaveClass("bg-accent");
		expect(skeletonElement).toHaveClass("animate-pulse");
		expect(skeletonElement).toHaveClass("rounded-md");
	});

	it("accepts and applies additional class names", () => {
		render(<Skeleton className="extra-class" data-testid="skeleton" />);

		const skeletonElement = screen.getByTestId("skeleton");
		expect(skeletonElement).toHaveClass("extra-class");
	});
});
