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

global.matchMedia =
	global.matchMedia ||
	(() => ({
		matches: false,
		addListener: jest.fn(),
		removeListener: jest.fn(),
	}));

jest.mock("next-themes", () => ({
	...jest.requireActual("next-themes"),
	useTheme: jest.fn().mockReturnValue({ theme: "light", setTheme: jest.fn() }),
}));

if (!Element.prototype.hasPointerCapture) {
	Object.defineProperty(Element.prototype, "hasPointerCapture", {
		configurable: true,
		value: () => false,
	});
}

if (!Element.prototype.setPointerCapture) {
	Object.defineProperty(Element.prototype, "setPointerCapture", {
		configurable: true,
		value: () => {},
	});
}

if (!Element.prototype.releasePointerCapture) {
	Object.defineProperty(Element.prototype, "releasePointerCapture", {
		configurable: true,
		value: () => {},
	});
}

// Optional: mock ResizeObserver if needed
global.ResizeObserver = class {
	observe() {}
	unobserve() {}
	disconnect() {}
};
