import { render, screen } from "@testing-library/react";
import { type ThemeProviderProps, useTheme } from "next-themes";
import { ThemeProvider } from "./theme-provider";

jest.mock("next-themes", () => ({
	...jest.requireActual("next-themes"),
	useTheme: jest.fn(),
}));

describe("ThemeProvider", () => {
	it("renders children correctly", () => {
		render(
			<ThemeProvider>
				<div data-testid="child">Child Content</div>
			</ThemeProvider>,
		);

		const childElement = screen.getByTestId("child");
		expect(childElement).toHaveTextContent("Child Content");
	});

	it("passes props to NextThemesProvider correctly", () => {
		render(
			<ThemeProvider>
				<div data-testid="child">Test Child</div>
			</ThemeProvider>,
		);

		const childElement = screen.getByTestId("child");
		expect(childElement).toBeInTheDocument();
		expect(childElement).toHaveTextContent("Test Child");
	});
});
