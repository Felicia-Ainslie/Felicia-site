// Verify downloadable assets and cross-page references, so broken migrations are caught.
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { academicDocuments } from "../academicDocuments";
import { academicProjects, degrees } from "../education";

describe("preserved academic work", () => {
  it("contains the complete bachelor and master document collections", () => {
    expect(academicDocuments.filter((item) => item.group === "bachelor")).toHaveLength(14);
    expect(academicDocuments.filter((item) => item.group === "master")).toHaveLength(7);
    expect(new Set(academicDocuments.map((item) => item.href)).size).toBe(21);
  });

  it.each(academicDocuments)("serves an original $format file for $title", (document) => {
    const file = readFileSync(resolve("public", `.${document.href}`));
    expect(file.length).toBeGreaterThan(1000);
    // A downloaded HTML error page must not masquerade as a document.
    if (document.format === "PDF") expect(file.subarray(0, 5).toString()).toBe("%PDF-");
    else expect([...file.subarray(0, 4)]).toEqual([0x50, 0x4b, 0x03, 0x04]);
  });

  it("connects each degree example to its own project and local featured document", () => {
    for (const degree of degrees.filter((item) => item.projectId)) {
      const project = academicProjects.find((item) => item.id === degree.projectId);
      expect(project).toBeDefined();
      expect(academicDocuments.some((item) => item.href === project?.featuredDocument && item.group === degree.projectId)).toBe(true);
    }
  });
});
