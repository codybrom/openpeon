import { Suspense } from "react";
import type { Metadata } from "next";
import { fetchAllPacks } from "@/lib/registry";
import { PacksClient } from "./PacksClient";

export const metadata: Metadata = {
  title: "Sound Packs",
  description:
    "Browse CESP-compatible sound packs for Claude Code, Cursor, Codex, and any agentic IDE.",
};

export default async function PacksPage() {
  const packs = await fetchAllPacks();

  return (
    <Suspense>
      <PacksClient packs={packs} />
    </Suspense>
  );
}
