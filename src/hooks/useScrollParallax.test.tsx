import { render } from "@testing-library/react";
import React from "react";
import { useScrollParallax } from "./useScrollParallax";
import { describe, it, expect, vi, beforeEach } from "vitest";

describe("useScrollParallax", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    window.innerHeight = 1000;
    Object.defineProperty(window, "scrollY", {
      value: 0,
      writable: true,
      configurable: true,
    });
  });

  it("should calculate and apply translate3d transform based on scroll", () => {
    const TestComponent = () => {
      const ref = useScrollParallax(0.2, "up");
      return <div ref={ref} data-testid="parallax-div" style={{ height: "200px" }} />;
    };

    const { getByTestId, unmount } = render(<TestComponent />);
    const element = getByTestId("parallax-div");

    // Stub getBoundingClientRect
    element.getBoundingClientRect = vi.fn().mockReturnValue({
      top: 400,
      height: 200,
      bottom: 600,
      left: 0,
      right: 0,
      width: 100,
    });

    // Simulate initial measurement
    window.dispatchEvent(new Event("resize"));

    // Expected calculations:
    // elementTop = rect.top + window.scrollY = 400 + 0 = 400
    // elementHeight = 200
    // viewHeight = 1000
    // relativeTop = elementTop - scrollY = 400 - 0 = 400
    // relativeBottom = relativeTop + height = 400 + 200 = 600
    // Visible in viewport: 400 < 1000 and 600 > 0 (True)
    // elementCenter = relativeTop + height / 2 = 400 + 100 = 500
    // screenCenter = viewHeight / 2 = 500
    // offset = (elementCenter - screenCenter) * speed = (500 - 500) * 0.2 = 0
    // transform should be translate3d(0, 0px, 0)
    expect(element.style.transform).toBe("translate3d(0, 0px, 0)");

    // Modify scrollY to 100
    Object.defineProperty(window, "scrollY", {
      value: 100,
      writable: true,
      configurable: true,
    });

    window.dispatchEvent(new Event("scroll"));

    // relativeTop = elementTop - scrollY = 400 - 100 = 300
    // relativeBottom = relativeTop + height = 300 + 200 = 500
    // elementCenter = 300 + 100 = 400
    // screenCenter = 500
    // offset = (400 - 500) * 0.2 = -20
    // sign = -1 (direction === "up")
    // offset * sign = -20 * -1 = 20px
    expect(element.style.transform).toBe("translate3d(0, 20px, 0)");

    unmount();
  });

  it("should respect direction down", () => {
    const TestComponent = () => {
      const ref = useScrollParallax(0.2, "down");
      return <div ref={ref} data-testid="parallax-div" style={{ height: "200px" }} />;
    };

    const { getByTestId, unmount } = render(<TestComponent />);
    const element = getByTestId("parallax-div");

    element.getBoundingClientRect = vi.fn().mockReturnValue({
      top: 400,
      height: 200,
      bottom: 600,
      left: 0,
      right: 0,
      width: 100,
    });

    // Measure at scrollY = 0 first
    Object.defineProperty(window, "scrollY", {
      value: 0,
      writable: true,
      configurable: true,
    });
    window.dispatchEvent(new Event("resize"));

    // Scroll to 100
    Object.defineProperty(window, "scrollY", {
      value: 100,
      writable: true,
      configurable: true,
    });
    window.dispatchEvent(new Event("scroll"));

    // offset = (400 - 500) * 0.2 = -20
    // sign = 1 (direction === "down")
    // offset * sign = -20px
    expect(element.style.transform).toBe("translate3d(0, -20px, 0)");

    unmount();
  });
});
