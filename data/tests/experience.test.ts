// Protect the distinction between employer tenure and individual promotion dates.
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { workExperience } from "../experience";
import { certificates } from "../education";

describe("LinkedIn archive reconciliation", () => {
  it("keeps the Nextiva product role separate from the full employer tenure", () => {
    const nextiva = workExperience.find((item) => item.company === "Nextiva");
    expect(nextiva?.period).toBe("Oct 2018 – Aug 2025");
    expect(nextiva?.roles).toHaveLength(10);
    expect(nextiva?.roles?.[0]).toMatchObject({title: "Product Manager", period: "Nov 2024 – Aug 2025"});
    expect(nextiva?.roles?.[9]).toMatchObject({title: "Tier 1 Technical Support", period: "Oct 2018 – Nov 2019"});
  });

  it("retains all ten direct certificate URLs exposed by the archive", () => {
    const links = certificates.filter((item) => item.proofUrl).map((item) => item.proofUrl!);
    expect(links).toHaveLength(10);
    expect(new Set(links).size).toBe(10);
    for (const link of links) {
      expect(new URL(link).protocol).toBe("https:");
      expect(new URL(link).searchParams.has("trk")).toBe(false);
    }
  });

  it("preserves the downloaded course certificate as a JPEG", () => {
    const certificate = certificates.find((item) => item.downloadHref);
    expect(certificate?.title).toBe("PMP Education Requirement Completed (35+ PDUs)");
    const file = readFileSync(resolve("public", `.${certificate?.downloadHref}`));
    expect([...file.subarray(0, 3)]).toEqual([0xff, 0xd8, 0xff]);
    expect(file.length).toBeGreaterThan(1000);
  });
});
