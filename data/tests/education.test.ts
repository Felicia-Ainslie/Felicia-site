// Verify downloadable assets and cross-page references, so broken migrations are caught.
import { readFileSync, readdirSync, statSync } from "node:fs";
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
    if (document.archivePath) {
      expect(document.href).toBe(document.sourceUrl);
      expect(new URL(document.href).protocol).toBe("https:");
      expect(document.archivePath.startsWith("public/")).toBe(false);
    }
    const file = readFileSync(document.archivePath
      ? resolve(document.archivePath)
      : resolve("public", `.${document.href}`));
    expect(file.length).toBeGreaterThan(1000);
    // A downloaded HTML error page must not masquerade as a document.
    if (document.format === "PDF") expect(file.subarray(0, 5).toString()).toBe("%PDF-");
    else expect([...file.subarray(0, 4)]).toEqual([0x50, 0x4b, 0x03, 0x04]);
  });

  it("keeps every public asset within Cloudflare Pages' 25 MiB limit", () => {
    function checkDirectory(directory: string) {
      for (const entry of readdirSync(directory, { withFileTypes: true })) {
        const path = resolve(directory, entry.name);
        if (entry.isDirectory()) checkDirectory(path);
        else expect(statSync(path).size, path).toBeLessThanOrEqual(25 * 1024 * 1024);
      }
    }
    checkDirectory(resolve("public"));
  });

  it("connects each degree example to its own project and local featured document", () => {
    for (const degree of degrees.filter((item) => item.projectId)) {
      const project = academicProjects.find((item) => item.id === degree.projectId);
      expect(project).toBeDefined();
      expect(academicDocuments.some((item) => item.href === project?.featuredDocument && item.group === degree.projectId)).toBe(true);
    }
  });
});
