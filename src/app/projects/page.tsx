import { LinkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    name: "One Cloud",
    description:
      "Um ERP para gerenciamento de empresas baseado em nuvem, com várias funcionalidades, incluindo CRM, Vendas, Estoque...",
    url: "https://one.amplosoftware.com",
    image: "/projects/one-cloud.svg",
  },
  {
    name: "Vanguard",
    description:
      "Um sistema operacional baseado em UNIX para computadores pessoais e servidores, com interface gráfica e linha de comando.",
    url: "https://github.com/nashi-labs/vanguard",
    image: "/projects/vanguard.svg",
  },
  {
    name: "Stack Shop",
    description:
      "Um e-commerce completo, com sistema de pagamento, carrinho de compras, gerenciamento de estoque e muito mais.",
    url: "https://github.com/saullo/stack-shop",
    image: "/projects/stack-shop.svg",
  },
  {
    name: "Spark Space",
    description:
      "Um chat em tempo real com suporte a salas, emojis, imagens e muito mais.",
    url: "https://github.com/saullo/spark-space",
    image: "/projects/spark-space.svg",
  },
  {
    name: "Muse Cast",
    description:
      "Uma plataforma de streaming de vídeo com suporte a transmissão ao vivo, vídeos sob demanda e muito mais.",
    url: "https://github.com/saullo/muse-cast",
    image: "/projects/muse-cast.svg",
  },
];

const ProjectsPage = () => {
  return (
    <div className="space-y-6">
      <div className="max-w-4xl">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Projetos que fiz tentando aprender algo novo ou deixar minha marca no
          mundo
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-3xl">
          Trabalhei em vários pequenos projetos ao longo dos anos, mas estes são
          os que mais me orgulham. Muitos deles são de código aberto, então se
          você encontrar algo que desperte seu interesse, confira o código e
          contribua se tiver ideias de como ele pode ser melhorado.
        </p>
      </div>

      <div className="grid grid-cols-6 gap-4">
        {projects.map((project, index) => (
          <Link
            href={project.url}
            key={index}
            target="_blank"
            className="flex flex-col gap-y-6 group hover:bg-gray-50 p-6 rounded-xl col-span-2 transition ease-in-out duration-200"
          >
            <Image
              width={40}
              height={40}
              className="inline-block h-10 w-10"
              src={project.image}
              alt=""
            />

            <div>
              <div className="text-lg font-semibold">{project.name}</div>
              <p className="text-sm text-gray-600">{project.description}</p>
            </div>

            <div className="flex items-center gap-x-2">
              <LinkIcon className="h-4 w-4" />
              {project.url.replace("https://", "")}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
