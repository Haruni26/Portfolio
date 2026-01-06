export default function Home() {
  return (
    <main className="bg-[#0f161d] text-white">
      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-linear-to-b from-[#344861] to-[#0f161d]">
        <h1
          id="hero-name"
          className="text-center text-6xl font-bold drop-shadow-lg mb-6"
        >
          Aaron Seymour
        </h1>

        <p className="text-lg max-w-xl text-center p-5">
          CS Student | Software Developer
        </p>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="leading-relaxed text-lg"></p>
        Hey 👋, I&apos;m Aaron and I&apos;m a Computer Science major from the
        Bahamas studying in Halifax. I love traveling, aircraft, music,
        photography and building projects which are informative and mimimal if
        possible. I love designing and coding front-end for user experience, and
        also building the systems and platforms to ensure the information the
        user is getting is accurate, clear, and clean.
      </section>

      {/* Projects */}
      <section id="projects" className="py-22 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Projects</h2>
        <p className="mb-8">
          Some work I&apos;ve done which includes school projects and personal
          ones to develop my skills.
        </p>

        {/* A220 Project */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-[#1f2a36] p-6">
            <h3 className="text-2xl font-bold mb-2 text-white">A220 Site</h3>

            <p className="text-gray-300 mb-4">
              Website that gives information and showcases the Airbus A220
              aircraft.
            </p>

            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-xs font-medium bg-gray-700 text-gray-200 px-3 py-1 rounded-full">
                Next.Js
              </span>
              <span className="text-xs font-medium bg-gray-700 text-gray-200 px-3 py-1 rounded-full">
                Tailwind CSS
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://a220-site.vercel.app/"
                target="_blank"
                className="text-center border border-gray-400 rounded-lg px-4 py-2 font-semibold text-sm hover:bg-gray-700 transition"
              >
                Visit Website
              </a>

              <a
                href="https://github.com/Haruni26/a220-site"
                target="_blank"
                className="text-center border border-sky-600 rounded-lg px-4 py-2 font-semibold text-sm hover:bg-sky-900 transition"
              >
                View GitHub
              </a>
            </div>
          </div>

          {/* Junkanoo Project */}
          <div className="rounded-2xl bg-[#1f2a36] p-6">
            <h3 className="text-2xl font-bold mb-2 text-white">
              Junkanoo Site
            </h3>

            <p className="text-gray-300 mb-4">
              Website that showcases Junkanoo in the Bahamas with history and a
              gallery.
            </p>

            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-xs font-medium bg-gray-700 text-gray-200 px-3 py-1 rounded-full">
                Next.Js
              </span>
              <span className="text-xs font-medium bg-gray-700 text-gray-200 px-3 py-1 rounded-full">
                Tailwind CSS
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://junkanoo-site.vercel.app/"
                target="_blank"
                className="text-center border border-gray-400 rounded-lg px-4 py-2 font-semibold text-sm hover:bg-gray-700 transition"
              >
                Visit Website
              </a>

              <a
                href="https://github.com/Haruni26/junkanoo-site"
                target="_blank"
                className="text-center border border-sky-600 rounded-lg px-4 py-2 font-semibold text-sm hover:bg-sky-900 transition"
              >
                View GitHub
              </a>
            </div>
          </div>

          {/* Airliner Project */}
          <div className="rounded-xl bg-[#1f2a36] p-6 flex flex-col">
            <h3 className="text-xl font-semibold mb-2">
              Fictional Airliner Site
            </h3>

            <p>
              Fictional site for the fictional airline which allows you to book,
              review, and track flights.
            </p>

            <strong className="text-red-400 mt-12">
              - In Heavy Development
            </strong>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Contact</h2>
        <p className="leading-relaxed p-2 mb-8 text-(--color-fg-muted)">
          Let&apos;s connect!
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          {/* LinkedIn  */}
          <a
            href="https://www.linkedin.com/in/aaron-ns"
            target="_blank"
            rel="noopener noreferrer"
            className="
        flex-1
        rounded-2xl 
        p-6 
        bg-blue-800
        border 
        border-(--color-border)
        transition-all
        hover:border-(--color-primary)
        cursor-pointer
      "
          >
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-2xl font-bold text-(--color-fg)">LinkedIn</h3>
            </div>
            <p className="text-(--color-fg-muted)">
              Connect with me professionally.
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Haruni26"
            target="_blank"
            rel="noopener noreferrer"
            className="
        flex-1
        rounded-2xl 
        p-6 
        bg-(--color-bg-2) 
        border 
        border-(--color-border)
        transition-all
        hover:border-(--color-primary)
        hover:bg-(--color-bg-3)
        cursor-pointer
      "
          >
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-2xl font-bold text-(--color-fg)">GitHub</h3>
            </div>
            <p className="text-(--color-fg-muted)">
              Check out my repositories and projects.
            </p>
          </a>

          {/* Email */}
          <a
            href="mailto:aaron.seymour995@gmail.com"
            className="
        flex-1
        rounded-2xl 
        p-6 
        bg-green-800
        border 
        border-(--color-border)
        transition-all
        hover:border-(--color-primary)
        cursor-pointer
      "
          >
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-2xl font-bold text-(--color-fg)">Email</h3>
            </div>
            <p className="text-(--color-fg-muted)">
              Send me a message anytime.
            </p>
          </a>
        </div>
      </section>
    </main>
  );
}
