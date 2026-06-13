import "@testing-library/jest-dom";
import { vi } from "vitest";

// Mock ResizeObserver which is not implemented in JSDOM
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// Mock window.matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock requestAnimationFrame and cancelAnimationFrame synchronously for testing scroll handlers
global.requestAnimationFrame = vi.fn().mockImplementation((cb: FrameRequestCallback) => {
  cb(performance.now());
  return 0;
});
global.cancelAnimationFrame = vi.fn();
