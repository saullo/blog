import Link from "next/link";

const HomePage = () => {
  return (
    <div className="space-y-6 max-w-4xl">
      <Link href="/" className="group block flex-shrink-0">
        <div className="flex items-center">
          <div>
            <img
              className="inline-block h-14 w-14 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div className="ml-3">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Saullo Bretas Silva
            </h4>
            <p className="text-sm text-muted-foreground">
              Bem vindo ao meu blog!
            </p>
          </div>
        </div>
      </Link>

      <div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Engenheior de Software, fundador e amante de jogos.
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-2xl">
          Meu nome é Saullo Bretas Silva, sou um engenheiro de software e
          fundador da <br />{" "}
          <Link
            href="https://www.amplasoftware.com"
            className="text-indigo-600"
            target="_blank"
          >
            Ampla Software
          </Link>
          . Estou sempre em busca de novos desafios e oportunidades de
          aprendizado. Aqui você vai encontrar artigos sobre programação,
          liderança, jogos e muito mais.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
