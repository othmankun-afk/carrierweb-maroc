import { describe, it, expect } from "vitest";
import { isEmail, escapeHtml } from "../route";

describe("isEmail", () => {
  it("accepts well-formed addresses", () => {
    expect(isEmail("othman@example.com")).toBe(true);
    expect(isEmail("a.b-c@sub.domain.co.uk")).toBe(true);
  });
  it("rejects malformed addresses", () => {
    expect(isEmail("not-an-email")).toBe(false);
    expect(isEmail("missing@domain")).toBe(false);
    expect(isEmail("@no-local.com")).toBe(false);
    expect(isEmail("spa ce@domain.com")).toBe(false);
    expect(isEmail("")).toBe(false);
  });
});

describe("escapeHtml (prevents injection in the notification email)", () => {
  it("escapes HTML-significant characters", () => {
    expect(escapeHtml('<script>alert("x")</script>')).toBe(
      "&lt;script&gt;alert(&quot;x&quot;)&lt;/script&gt;"
    );
  });
  it("escapes ampersands", () => {
    expect(escapeHtml("Salaoui & Fils")).toBe("Salaoui &amp; Fils");
  });
  it("leaves plain text unchanged", () => {
    expect(escapeHtml("Casablanca 2026")).toBe("Casablanca 2026");
  });
});
