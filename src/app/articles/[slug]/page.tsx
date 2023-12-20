import { getArticle, getArticles } from "@/actions/articles";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MdxContent } from "../components/mdx-content";

type Props = {
  params: {
    slug: string;
  };
};

const ArticlePage = async ({ params }: Props) => {
  const article = await getArticle(params.slug);
  if (!article) return notFound();

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <p className="text-sm text-gray-600">{article.frontmatter.date}</p>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {article.frontmatter.title}
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          {article.frontmatter.brief}
        </p>
      </div>

      <MdxContent source={article.serialized} />
    </div>
  );
};

export default ArticlePage;
