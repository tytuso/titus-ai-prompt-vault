export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:justify-center sm:gap-10">

        <a
          href="https://www.youtube.com/channel/UCtsabnw7zjz3SjINHTZdpig"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-emerald-600"
        >
          YouTube
        </a>

        <a
          href="https://whatsapp.com/channel/0029VbChtp4HwXb40wfDg90G"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-emerald-600"
        >
          WhatsApp
        </a>

        <a
          href="https://titussimplifies.com"
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-emerald-600"
        >
          Main Website
        </a>

      </div>
    </footer>
  );
}