import "@testing-library/jest-dom";
import "whatwg-fetch";

class MockPointerEvent extends Event {
	button: number;
	ctrlKey: boolean;
	pointerType: string;

	constructor(type: string, props: PointerEventInit) {
		super(type, props);
		this.button = props.button || 0;
		this.ctrlKey = props.ctrlKey || false;
		this.pointerType = props.pointerType || "mouse";
	}
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
window.PointerEvent = MockPointerEvent as any;
