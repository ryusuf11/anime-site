import { fireEvent, render, screen } from "@testing-library/react";
import type React from "react";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetTitle,
	SheetTrigger,
} from "./sheet";

jest.mock("@radix-ui/react-dialog", () => {
	const original = jest.requireActual("@radix-ui/react-dialog");
	return {
		...original,
		Portal: ({ children }: { children: React.ReactNode }) => <>{children}</>,
	};
});

describe("Sheet component", () => {
	it("should render and toggle the sheet open and closed", () => {
		render(
			<Sheet>
				<SheetTrigger data-testid="open-button">Open Sheet</SheetTrigger>
				<SheetContent side="right" data-testid="sheet-content">
					<SheetTitle data-testid="sheet-title">Sheet Title</SheetTitle>
					<SheetDescription data-testid="sheet-desc">
						This is a description
					</SheetDescription>
				</SheetContent>
			</Sheet>,
		);

		expect(screen.queryByTestId("sheet-title")).not.toBeInTheDocument();

		fireEvent.click(screen.getByTestId("open-button"));

		expect(screen.getByTestId("sheet-content")).toBeInTheDocument();
		expect(screen.getByTestId("sheet-title")).toHaveTextContent("Sheet Title");
		expect(screen.getByTestId("sheet-desc")).toHaveTextContent(
			"This is a description",
		);
	});

	it("should close the sheet when close button is clicked", () => {
		render(
			<Sheet>
				<SheetTrigger data-testid="open-button">Open Sheet</SheetTrigger>
				<SheetContent side="right" data-testid="sheet-content">
					<p>Sheet body</p>
				</SheetContent>
			</Sheet>,
		);

		fireEvent.click(screen.getByTestId("open-button"));

		const closeButton = screen.getByRole("button", { name: /close/i });
		expect(closeButton).toBeInTheDocument();

		fireEvent.click(closeButton);

		expect(screen.queryByTestId("sheet-content")).not.toBeInTheDocument();
	});
});
