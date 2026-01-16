import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react"

export function Footer({data}) {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* TOP FOOTER */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-3 items-start">

          {/* LEFT : LOGO + DESC */}
          <div>
            <h3 className="text-2xl font-bold text-white">
              {data}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">
              Marvel City is a thoughtfully planned residential project offering
              modern homes, quality construction, and a comfortable lifestyle
              in a well-connected location of Hisar.
            </p>
          </div>

          {/* CENTER : QUICK LINKS */}
          <div className="text-left md:text-center">
            <h4 className="mb-3 text-sm font-semibold text-white">
              Quick Links
            </h4>

            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="transition hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#amenities" className="transition hover:text-white">
                  Amenities
                </a>
              </li>
              {/* <li>
                <a href="#location" className="transition hover:text-white">
                  Location
                </a>
              </li> */}
              <li>
                <a href="#contact" className="transition hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* RIGHT : SOCIAL ACCOUNTS */}
          <div className="md:text-right">
            <h4 className="mb-3 text-sm font-semibold text-white">
              Follow Us
            </h4>

            <div className="flex gap-3 md:justify-end">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded-full border border-gray-700 p-2 transition hover:bg-white hover:text-gray-900"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full border border-gray-700 p-2 transition hover:bg-white hover:text-gray-900"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-gray-700 p-2 transition hover:bg-white hover:text-gray-900"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="rounded-full border border-gray-700 p-2 transition hover:bg-white hover:text-gray-900"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 py-4 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} DealAcres. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
