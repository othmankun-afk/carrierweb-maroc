import { describe, it, expect } from "vitest";
import {
  compact,
  selectValue,
  getAllSolutions,
  getSolutionBySlug,
  getAllSectors,
  getSectorBySlug,
} from "../wordpress";

// These tests run with WORDPRESS_API_URL unset, so every data function
// exercises the automatic fallback to local content (lib/mock-data.ts).

describe("compact (rebuilds ACF-Free numbered lists)", () => {
  it("drops rows whose raw values are all empty", () => {
    const rows = [
      { raw: { a: "", b: null }, value: { kept: "no" } },
      { raw: { a: "x", b: null }, value: { kept: "yes" } },
      { raw: { a: undefined, b: undefined }, value: { kept: "no" } },
    ];
    expect(compact(rows)).toEqual([{ kept: "yes" }]);
  });

  it("keeps a row if any raw value is non-empty", () => {
    const rows = [{ raw: { a: "", b: "value" }, value: { id: 1 } }];
    expect(compact(rows)).toEqual([{ id: 1 }]);
  });
});

describe("selectValue (unwraps ACF Select)", () => {
  it("unwraps a single-element array", () => {
    expect(selectValue(["bar-chart-3"], "zap")).toBe("bar-chart-3");
  });
  it("returns a plain string as-is", () => {
    expect(selectValue("gauge", "zap")).toBe("gauge");
  });
  it("falls back on null, empty string, or empty array", () => {
    expect(selectValue(null, "zap")).toBe("zap");
    expect(selectValue("", "zap")).toBe("zap");
    expect(selectValue([], "zap")).toBe("zap");
    expect(selectValue(undefined, "zap")).toBe("zap");
  });
});

describe("data access falls back to local content when WordPress is absent", () => {
  it("getAllSolutions returns the local solutions", async () => {
    const solutions = await getAllSolutions();
    expect(solutions.length).toBeGreaterThan(0);
    for (const s of solutions) {
      expect(typeof s.slug).toBe("string");
      expect(typeof s.title).toBe("string");
      expect(typeof s.icon).toBe("string");
      expect(typeof s.shortDescription).toBe("string");
    }
  });

  it("getSolutionBySlug returns a full solution for a known slug", async () => {
    const solution = await getSolutionBySlug("gestion-flotte");
    expect(solution).not.toBeNull();
    expect(solution?.slug).toBe("gestion-flotte");
    expect(Array.isArray(solution?.stats)).toBe(true);
    expect(Array.isArray(solution?.features)).toBe(true);
  });

  it("getSolutionBySlug returns null for an unknown slug", async () => {
    expect(await getSolutionBySlug("does-not-exist")).toBeNull();
  });

  it("getAllSectors returns the local sectors", async () => {
    const sectors = await getAllSectors();
    expect(sectors.length).toBeGreaterThan(0);
    expect(typeof sectors[0].slug).toBe("string");
  });

  it("getSectorBySlug returns null for an unknown slug", async () => {
    expect(await getSectorBySlug("does-not-exist")).toBeNull();
  });
});
