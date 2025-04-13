import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useTheme } from "next-themes";
import { ModeToggle } from "./mode-toggle";

// Mock the useTheme hook from next-themes
jest.mock("next-themes", () => ({
	useTheme: jest.fn(),
}));

describe("ModeToggle component", () => {
	let setThemeMock: jest.Mock;

	beforeEach(() => {
		setThemeMock = jest.fn();
		(useTheme as jest.Mock).mockReturnValue({ setTheme: setThemeMock });
	});

	it("should render the button with the Sun and Moon icons", () => {
		render(<ModeToggle />);

		// Ensure the button is in the document
		const button = screen.getByRole("button");
		expect(button).toBeInTheDocument();

		// Check if both Sun and Moon icons are rendered (Sun should be visible, Moon should be hidden)
		expect(screen.getByTestId("sun-icon")).toBeInTheDocument();
		expect(screen.getByTestId("moon-icon")).toBeInTheDocument();
	});

	it("should open the dropdown menu when the button is clicked", async () => {
		const user = userEvent.setup();
		render(<ModeToggle />);

		const button = screen.getByRole("button");
		await user.click(button);

		// Ensure the dropdown menu opens after clicking the button
		await waitFor(() => {
			expect(screen.getByRole("menu")).toBeInTheDocument();
		});
	});

	it("should call setTheme with 'light' when Light option is clicked", async () => {
		const user = userEvent.setup();
		render(<ModeToggle />);

		const button = screen.getByRole("button");
		await user.click(button);

		const lightOption = screen.getByText("Light");
		await user.click(lightOption);

		// Check that setTheme was called with 'light'
		expect(setThemeMock).toHaveBeenCalledWith("light");
	});

	it("should call setTheme with 'dark' when Dark option is clicked", async () => {
		const user = userEvent.setup();
		render(<ModeToggle />);

		const button = screen.getByRole("button");
		await user.click(button);

		const darkOption = screen.getByText("Dark");
		await user.click(darkOption);

		// Check that setTheme was called with 'dark'
		expect(setThemeMock).toHaveBeenCalledWith("dark");
	});

	it("should call setTheme with 'system' when System option is clicked", async () => {
		const user = userEvent.setup();
		render(<ModeToggle />);

		const button = screen.getByRole("button");
		await user.click(button);

		const systemOption = screen.getByText("System");
		await user.click(systemOption);

		// Check that setTheme was called with 'system'
		expect(setThemeMock).toHaveBeenCalledWith("system");
	});

	it("should toggle between Sun and Moon icons based on theme", () => {
		render(<ModeToggle />);

		expect(screen.getByTestId("sun-icon")).toBeVisible();

		setThemeMock("dark");

		expect(screen.getByTestId("moon-icon")).toBeVisible();
	});
});
