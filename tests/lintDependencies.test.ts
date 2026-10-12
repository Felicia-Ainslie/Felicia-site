// @vitest-environment node
// Exercise the Next lint plugin's actual caller when changing its glob dependency.
// A normal lint run uses the default root and would not catch broken glob support.
import { createRequire } from "node:module";
import { resolve } from "node:path";
import { ESLint } from "eslint";
import { describe, expect, it } from "vitest";

const pluginRequire = createRequire(import.meta.resolve("@next/eslint-plugin-next"));
const { getRootDirs } = pluginRequire("./utils/get-root-dirs.js") as {
  getRootDirs: (context: { cwd: string; settings: { next?: { rootDir?: string | string[] } } }) => string[];
};

describe("Next.js lint dependency compatibility", () => {
  it("preserves default and globbed directory resolution", () => {
    expect(getRootDirs({ cwd: process.cwd(), settings: {} })).toEqual([process.cwd()]);
    const roots = getRootDirs({ cwd: process.cwd(), settings: { next: { rootDir: "app/*/" } } });
    expect(roots.map((root) => resolve(root))).toContain(resolve("app/experience"));
    expect(roots.every((root) => !root.endsWith(".tsx"))).toBe(true);
  });

  it("supports an array of root patterns", () => {
    const roots = getRootDirs({
      cwd: process.cwd(),
      settings: { next: { rootDir: ["app/experience/", "app/portfolio/"] } },
    });
    expect(roots.map((root) => resolve(root)).sort()).toEqual([
      resolve("app/experience"), resolve("app/portfolio"),
    ].sort());
  });

  it("retains Next.js lint rules with a configured root pattern", async () => {
    const eslint = new ESLint({ overrideConfig: { settings: { next: { rootDir: "./" } } } });
    const [result] = await eslint.lintText(
      'export default function Example() { return <img src="/example.png" alt="Example" />; }',
      { filePath: "app/example/page.tsx" },
    );
    expect(result.messages.some((message) => message.ruleId === "@next/next/no-img-element")).toBe(true);
  });
});
