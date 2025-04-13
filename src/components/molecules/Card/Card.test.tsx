import { render, screen } from "@testing-library/react";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./card";

// Mock utility for cn
jest.mock("@/lib/utils", () => ({
	cn: (...classes: string[]) => classes.join(" "),
}));

describe("Card Component", () => {
	it("renders Card component without crashing", () => {
		render(<Card data-testid="custom-card">Content</Card>);

		const card = screen.getByTestId("custom-card");
		expect(card).toBeInTheDocument();
	});

	it("applies custom className to Card", () => {
		render(
			<Card data-testid="custom-card" className="custom-card-class">
				Content
			</Card>,
		);

		const card = screen.getByTestId("custom-card");
		expect(card).toHaveClass("custom-card-class");
	});

	it("renders CardHeader component without crashing", () => {
		render(<CardHeader data-testid="card-header">Header Content</CardHeader>);

		const header = screen.getByTestId("card-header");
		expect(header).toBeInTheDocument();
	});

	it("applies custom className to CardHeader", () => {
		render(
			<CardHeader data-testid="card-header" className="custom-header-class">
				Header Content
			</CardHeader>,
		);

		const header = screen.getByTestId("card-header");
		expect(header).toHaveClass("custom-header-class");
	});

	it("renders CardTitle component without crashing", () => {
		render(<CardTitle data-testid="card-title">Title</CardTitle>);

		const title = screen.getByTestId("card-title");
		expect(title).toBeInTheDocument();
	});

	it("applies custom className to CardTitle", () => {
		render(
			<CardTitle data-testid="card-title" className="custom-title-class">
				Title
			</CardTitle>,
		);

		const title = screen.getByTestId("card-title");
		expect(title).toHaveClass("custom-title-class");
	});

	it("renders CardDescription component without crashing", () => {
		render(
			<CardDescription data-testid="card-description">
				Description
			</CardDescription>,
		);

		const description = screen.getByTestId("card-description");
		expect(description).toBeInTheDocument();
	});

	it("applies custom className to CardDescription", () => {
		render(
			<CardDescription
				data-testid="card-description"
				className="custom-description-class"
			>
				Description
			</CardDescription>,
		);

		const description = screen.getByTestId("card-description");
		expect(description).toHaveClass("custom-description-class");
	});

	it("renders CardAction component without crashing", () => {
		render(<CardAction data-testid="card-action">Action</CardAction>);

		const action = screen.getByTestId("card-action");
		expect(action).toBeInTheDocument();
	});

	it("applies custom className to CardAction", () => {
		render(
			<CardAction data-testid="card-action" className="custom-action-class">
				Action
			</CardAction>,
		);

		const action = screen.getByTestId("card-action");
		expect(action).toHaveClass("custom-action-class");
	});

	it("renders CardContent component without crashing", () => {
		render(<CardContent data-testid="card-content">Content</CardContent>);

		const content = screen.getByTestId("card-content");
		expect(content).toBeInTheDocument();
	});

	it("applies custom className to CardContent", () => {
		render(
			<CardContent data-testid="card-content" className="custom-content-class">
				Content
			</CardContent>,
		);

		const content = screen.getByTestId("card-content");
		expect(content).toHaveClass("custom-content-class");
	});

	it("renders CardFooter component without crashing", () => {
		render(<CardFooter data-testid="card-footer">Footer</CardFooter>);

		const footer = screen.getByTestId("card-footer");
		expect(footer).toBeInTheDocument();
	});

	it("applies custom className to CardFooter", () => {
		render(
			<CardFooter data-testid="card-footer" className="custom-footer-class">
				Footer
			</CardFooter>,
		);

		const footer = screen.getByTestId("card-footer");
		expect(footer).toHaveClass("custom-footer-class");
	});
});
