import { type MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { promises as fs } from "fs";

type Frontmatter = {
  title: string;
  date: string;
  brief: string;
};

const readMdxFile = async (content: string) => {
  const options = {
    parseFrontmatter: true,
  };

  const serialized = await serialize(content, options);

  const frontmatter = serialized.frontmatter as Frontmatter;
  return { frontmatter, serialized };
};

const getMdxFile = async (filepath: string) => {
  const content = await fs.readFile(filepath, "utf-8");
  const { frontmatter, serialized } = await readMdxFile(content);

  const slug = filepath
    .replace("src/articles/", "")
    .replace(".mdx", "")
    .replace(/\/index$/, "");

  return { slug, frontmatter, serialized };
};

const getMdxFiles = async (dirpath: string) => {
  const filenames = await fs.readdir(dirpath);
  const files = await Promise.all(
    filenames.map(async (filename) => {
      const filepath = `${dirpath}/${filename}`;
      return getMdxFile(filepath);
    })
  );

  return files;
};

export const getArticle = async (slug: string) => {
  const filepath = `src/articles/${slug}.mdx`;
  return await getMdxFile(filepath);
};

export const getArticles = async () => {
  return await getMdxFiles("src/articles");
};
