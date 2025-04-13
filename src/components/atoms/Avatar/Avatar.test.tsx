import { render, screen } from "@testing-library/react";
import { Avatar, AvatarFallback } from "./Avatar";

describe("Avatar Component", () => {
	it("renders fallback if image not loaded", () => {
		render(
			<Avatar>
				<AvatarFallback>UA</AvatarFallback>
			</Avatar>,
		);

		const fallback = screen.getByText("UA");
		expect(fallback).toBeInTheDocument();
	});
});
