import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { REGISTRY_TAG } from "@/lib/constants";

export async function POST(request: Request) {
  const secret = request.headers.get("x-revalidate-secret");
  if (!secret || secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: "Invalid secret" }, { status: 401 });
  }

  revalidateTag(REGISTRY_TAG, { expire: 0 });
  return NextResponse.json({ revalidated: true });
}
