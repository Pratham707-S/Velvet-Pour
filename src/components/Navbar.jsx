const navLinks = [
  { id: "cocktails", title: "Cocktails" },
  { id: "about", title: "About Us" },
  { id: "work", title: "The Art" },
  { id: "contact", title: "Contact" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-colors duration-300">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="logo" className="w-8 h-8" />
          <p className="font-modern-negra text-xl text-yellow">Velvet Pour</p>
        </a>

        <ul className="flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-white-100 hover:text-yellow transition-colors font-sans text-sm tracking-wide"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
