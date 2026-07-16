import { describe, it, expect } from "vitest";
import {
  isLocale,
  dirFor,
  prefix,
  localizePath,
  stripLocale,
  pageAlternates,
} from "../i18n";

describe("isLocale", () => {
  it("accepts the three supported locales", () => {
    expect(isLocale("fr")).toBe(true);
    expect(isLocale("ar")).toBe(true);
    expect(isLocale("en")).toBe(true);
  });
  it("rejects anything else", () => {
    expect(isLocale("de")).toBe(false);
    expect(isLocale("")).toBe(false);
  });
});

describe("dirFor", () => {
  it("is RTL for Arabic only", () => {
    expect(dirFor("ar")).toBe("rtl");
    expect(dirFor("fr")).toBe("ltr");
    expect(dirFor("en")).toBe("ltr");
  });
});

describe("prefix", () => {
  it("has no prefix for the default (French) locale", () => {
    expect(prefix("fr")).toBe("");
    expect(prefix("ar")).toBe("/ar");
    expect(prefix("en")).toBe("/en");
  });
});

describe("localizePath", () => {
  it("prefixes non-default locales", () => {
    expect(localizePath("ar", "/solutions")).toBe("/ar/solutions");
    expect(localizePath("en", "/solutions")).toBe("/en/solutions");
  });
  it("leaves French at the root", () => {
    expect(localizePath("fr", "/solutions")).toBe("/solutions");
  });
  it("handles the homepage correctly", () => {
    expect(localizePath("fr", "/")).toBe("/");
    expect(localizePath("ar", "/")).toBe("/ar");
    expect(localizePath("en", "/")).toBe("/en");
  });
});

describe("stripLocale", () => {
  it("removes a locale prefix to recover the bare path", () => {
    expect(stripLocale("/ar/solutions")).toBe("/solutions");
    expect(stripLocale("/en/secteurs/logistique")).toBe("/secteurs/logistique");
  });
  it("maps a bare locale root back to '/'", () => {
    expect(stripLocale("/ar")).toBe("/");
    expect(stripLocale("/en")).toBe("/");
  });
  it("leaves French (root) paths untouched", () => {
    expect(stripLocale("/solutions")).toBe("/solutions");
    expect(stripLocale("/")).toBe("/");
  });
});

describe("pageAlternates (canonical + hreflang)", () => {
  const alt = pageAlternates("ar", "/solutions/suivi-gps");

  it("points the canonical at the current locale", () => {
    expect(alt.canonical).toBe("https://www.carrierweb.ma/ar/solutions/suivi-gps");
  });
  it("declares all three languages plus x-default", () => {
    expect(alt.languages.fr).toBe("https://www.carrierweb.ma/solutions/suivi-gps");
    expect(alt.languages.ar).toBe("https://www.carrierweb.ma/ar/solutions/suivi-gps");
    expect(alt.languages.en).toBe("https://www.carrierweb.ma/en/solutions/suivi-gps");
    expect(alt.languages["x-default"]).toBe(alt.languages.fr);
  });
});
