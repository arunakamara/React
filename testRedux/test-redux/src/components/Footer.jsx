const Footer = () => {
  return (
    <>
      <footer className="text-stone-300 text-sm p-1 flex justify-between items-center">
        <address >123 Street, City, Country <br/> Email: info@example.com</address>
        <p className="text-sm self-end mb-1">© <i>2025 Brain.</i> All rights reserved.</p>
        <nav className="flex gap-2">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
