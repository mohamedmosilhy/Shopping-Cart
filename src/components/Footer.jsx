const Footer = () => {
  return (
    <footer className="relative z-10 mt-6">
      <div className="max-w-6xl mx-auto px-4 md:px-8 pb-6">
        <div className="rounded-2xl border border-white/60 bg-gradient-to-r from-slate-900 to-slate-700 text-slate-100 px-5 md:px-8 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 shadow-lg">
          <p className="font-medium">
            &copy; {new Date().getFullYear()} URBANE. Crafted for bold
            wardrobes.
          </p>
          <p className="text-sm text-slate-300">
            Modern essentials, elevated expression.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
