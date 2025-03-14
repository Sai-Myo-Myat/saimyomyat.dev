import { markdownToHtml } from "@/lib/markdownToHtml";
import fs from "fs";
import matter from "gray-matter";
import { NextResponse } from "next/server";
import path from "path";

const blogDir = path.join(process.cwd(), "contents/blogs");

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;
  const filePath = path.join(blogDir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ error: "Blog not found" }, { status: 404 });
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const contentHtml = await markdownToHtml(content);

  return NextResponse.json({ ...data, content: contentHtml });
}
