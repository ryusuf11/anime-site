import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

describe("Tabs component", () => {
	it("should show the correct content when tab is clicked", async () => {
		render(
			<Tabs defaultValue="tab1">
				<TabsList>
					<TabsTrigger value="tab1" data-testid="trigger-tab1">
						Tab 1
					</TabsTrigger>
					<TabsTrigger value="tab2" data-testid="trigger-tab2">
						Tab 2
					</TabsTrigger>
				</TabsList>
				<TabsContent value="tab1" data-testid="content-tab1">
					Content for Tab 1
				</TabsContent>
				<TabsContent value="tab2" data-testid="content-tab2">
					Content for Tab 2
				</TabsContent>
			</Tabs>,
		);

		expect(screen.getByTestId("content-tab1")).toBeVisible();
		expect(screen.getByTestId("content-tab2")).not.toBeVisible();

		await userEvent.click(screen.getByTestId("trigger-tab2"));

		expect(screen.getByTestId("content-tab2")).toBeVisible();
		expect(screen.getByTestId("content-tab1")).not.toBeVisible();
	});
});
