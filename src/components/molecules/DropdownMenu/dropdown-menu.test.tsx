import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "./dropdown-menu"; // adjust path

describe("DropdownMenu", () => {
	it("should render dropdown menu correctly when triggered", async () => {
		const user = userEvent.setup();
		render(
			<DropdownMenu>
				<DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem>Item 1</DropdownMenuItem>
					<DropdownMenuItem>Item 2</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>,
		);

		const trigger = screen.getByText("Open Menu");
		expect(trigger).toBeInTheDocument();

		// Simulate click to open the dropdown
		await user.click(trigger);

		// Wait for the dropdown content to appear
		await waitFor(() => {
			expect(
				screen.getByRole("menuitem", { name: "Item 1" }),
			).toBeInTheDocument();
			expect(
				screen.getByRole("menuitem", { name: "Item 2" }),
			).toBeInTheDocument();
		});
	});
});
