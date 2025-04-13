import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRouter } from "next/navigation";
import { SearchInput } from "./search-input";

jest.mock("next/navigation", () => ({
	useRouter: jest.fn(),
}));

describe("SearchInput", () => {
	let push: jest.Mock;

	beforeEach(() => {
		push = jest.fn(); // Initialize the mock function
		(useRouter as jest.Mock).mockReturnValue({ push }); // Mock useRouter to return the mocked push function
	});

	it("should update the URL when the query changes after debounce", async () => {
		render(<SearchInput />);

		const input = screen.getByPlaceholderText(
			"Search anime...",
		) as HTMLInputElement;
		fireEvent.change(input, { target: { value: "Naruto" } });

		await waitFor(
			() => {
				expect(push).toHaveBeenCalledWith("/explore?q=Naruto");
			},
			{ timeout: 600 },
		);
	});

	it("should navigate immediately when 'Enter' is pressed with a non-empty query", () => {
		render(<SearchInput />);

		const input = screen.getByPlaceholderText(
			"Search anime...",
		) as HTMLInputElement;
		fireEvent.change(input, { target: { value: "Naruto" } });
		fireEvent.keyDown(input, { key: "Enter", code: "Enter" });

		expect(push).toHaveBeenCalledWith("/explore?q=Naruto");
	});

	it("should clear the input and reset the URL when the clear button is clicked", async () => {
		render(<SearchInput defaultSearch="Naruto" />);

		const input = screen.getByPlaceholderText(
			"Search anime...",
		) as HTMLInputElement;
		expect(input.value).toBe("Naruto");

		const clearButton = screen.getByTestId("clear-button");
		userEvent.click(clearButton);

		await waitFor(() => {
			expect(input.textContent).toBe("");
			expect(push).toHaveBeenCalledWith("/explore");
		});
	});

	it("should render with the correct default search value", () => {
		render(<SearchInput defaultSearch="Naruto" />);

		const input = screen.getByPlaceholderText(
			"Search anime...",
		) as HTMLInputElement;
		expect(input.value).toBe("Naruto");
	});
});
