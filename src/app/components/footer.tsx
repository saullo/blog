const navigation = [
  { name: "Sobre", href: "/about" },
  { name: "Artigos", href: "/articles" },
  { name: "Projetos", href: "/projects" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="mx-auto max-w-7xl overflow-hidden px-6 pt-20 sm:pt-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.map((item) => (
            <div key={item.name} className="pb-6">
              <a
                href={item.href}
                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; {year} Saullo Bretas Silva. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
