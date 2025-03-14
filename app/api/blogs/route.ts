import { BlogType } from "@/types/blogs";
import fs from "fs";
import matter from "gray-matter";
import { NextResponse } from "next/server";
import path from "path";

const blogDir = path.join(process.cwd(), "public/contents/blogs");

export async function GET() {
  if (!fs.existsSync(blogDir)) {
    return NextResponse.json(
      { error: "No blogs directory found" },
      { status: 404 }
    );
  }

  const files = fs.readdirSync(blogDir);
  const posts = files
    .map((file) => {
      const fileContent = fs.readFileSync(path.join(blogDir, file), "utf8");
      console.log("each file", file);
      const { data } = matter(fileContent);
      return { ...data, file } as BlogType; // Include metadata from the Markdown file
    })
    .filter((post) => post.date) // Ensure date exists
    .sort((a, b) => (b.date > a.date ? 1 : -1)); // Sort by date descending (newest first)
  return NextResponse.json(posts);
}
