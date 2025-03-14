import fs from "fs";
import matter from "gray-matter";
import { NextResponse } from "next/server";
import path from "path";

const blogDir = path.join(process.cwd(), "contents/blogs");

export async function GET() {
  if (!fs.existsSync(blogDir)) {
    return NextResponse.json(
      { error: "No blog directory found" },
      { status: 404 }
    );
  }

  const files = fs.readdirSync(blogDir);
  const posts = files.map((file) => {
    const fileContent = fs.readFileSync(path.join(blogDir, file), "utf8");
    const { data } = matter(fileContent);
    return { ...data }; // Include metadata from the Markdown file
  });

  return NextResponse.json(posts);
}
