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
        photography and building projects which are informative and mimimal.
        I&apos;m interested in Full-Stack/Software developer as I love designing
        and coding front-end for user experience, and also building the systems
        and platforms to ensure the information the user is getting is accurate,
        clear, and clean.
      </section>

      {/* Projects */}
      <section id="projects" className="py-22 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Projects</h2>
        <p className="mb-8">
          Some work I&apos;ve done which includes school projects and personal
          ones to develop my skills.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href="https://github.com/Haruni26/Restaurant-Review-Website"
            target="_blank"
          >
            <div className="rounded-xl bg-[#1f2a36] p-6 border border-transparent hover:border-gray-200 transition-colors cursor-pointer">
              <h3 className="text-xl font-semibold mb-2">
                Restaurant Review Site
              </h3>
              <p>
                Site which allows users to view and submit reviews for various
                restaurants in Halifax
              </p>
              <strong className="text-sm">
                HTML & CSS - Still In Development
              </strong>
            </div>
          </a>

          <a href="https://github.com/Haruni26/a220-site" target="_blank">
            <div className="rounded-xl bg-[#1f2a36] p-6 border border-transparent hover:border-amber-200 transition-colors cursor-pointer">
              <h3 className="text-xl font-semibold mb-2">A220 Site</h3>
              <p>
                Website that gives information and showcases the Airbus A220
                aircraft
              </p>
              <strong className="text-sm text-amber-400">
                NextJs & Tailwind - In Early Development
              </strong>
            </div>
          </a>

          <div className="rounded-xl bg-[#1f2a36] p-6">
            <h3 className="text-xl font-semibold mb-2">
              Fictional Pan Am Airline Site
            </h3>
            <p>
              Fictional site for the former airline Pan Am which allows you to
              &quot;book&quot;, &quot;review&quot;, and &quot;track&quot;
              flights.
            </p>
            <strong className="text-red-400">- Work in Progress -</strong>
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
