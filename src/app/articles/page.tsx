import { getArticles } from "@/actions/articles";
import { NewspaperIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ArticlesPage = async () => {
  const articles = await getArticles();

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Escrevendo um sistema operacional criando uma empresa e outras
          maluquices
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-md">
          Todas as minhas ideias e feitos na programação, liderança design de
          produto e muito mais.
        </p>
      </div>

      <div>
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <Link
              href={`/articles/${article.slug}`}
              key={index}
              className="px-4 py-6 rounded-xl hover:bg-gray-50 group transition ease-in-out duration-200"
            >
              <div className="flex flex-col gap-y-4">
                <div>
                  <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
                    {article.frontmatter.title}
                  </h4>
                  <p className="text-xs text-gray-600">
                    {article.frontmatter.date}
                  </p>
                </div>
                <p className="text-sm text-gray-600">
                  {article.frontmatter.brief}
                </p>
                <small className="text-sm font-medium leading-none text-indigo-500 group-hover:text-indigo-600">
                  Ler artigo &rarr;
                </small>
              </div>
            </Link>
          ))
        ) : (
          <div className="text-center">
            <NewspaperIcon className="mx-auto h-12 w-12 text-gray-900" />
            <h3 className="mt-2 text-sm font-semibold text-gray-900">
              Ainda não há artigos
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Aguarde enquanto escrevo!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticlesPage;
