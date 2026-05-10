import React, { useEffect, useState } from "react";

interface ProjectModalProps {
  project: {
    imageLink: string;
    title: string;
    description: string;
    article: string;
    projectLink: string;
  };
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const markdownLinkRegex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
  const urlRegex = /(https?:\/\/[^\s<>"']+)/g;
  const iframeSrcRegex = /<iframe[^>]*src=["'](https?:\/\/[^"']+)["'][^>]*>(?:<\/iframe>)?/gi;
  const iframeLinks = Array.from(project.article.matchAll(iframeSrcRegex)).map((match) => match[1]);
  const embedLinks = Array.from(new Set(iframeLinks));
  const articleText = project.article.replace(iframeSrcRegex, "").trim();
  const markdownLinks = Array.from(articleText.matchAll(markdownLinkRegex)).map((match) => ({
    label: match[1],
    href: match[2],
  }));
  const articleTextWithoutMarkdownLinks = articleText.replace(markdownLinkRegex, (_, label: string) => label);
  const articleParts = articleTextWithoutMarkdownLinks.split(urlRegex);

  useEffect(() => {
    if (!isClosing) return;
    const timer = window.setTimeout(() => onClose(), 220);
    return () => window.clearTimeout(timer);
  }, [isClosing, onClose]);

  const requestClose = () => {
    setIsClosing(true);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm transition-opacity duration-200 ${
        isClosing ? "opacity-0" : "opacity-100"
      }`}
      onClick={requestClose}
    >
      <div
        className={`relative max-h-[90vh] w-full max-w-[92vw] overflow-y-auto rounded-xl border border-white/20 bg-[var(--surface)] p-6 transition-all duration-200 md:max-w-[80vw] lg:max-w-[60vw] ${
          isClosing ? "translate-y-2 opacity-0" : "translate-y-0 opacity-100"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={requestClose}
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/60 text-2xl font-bold text-[var(--text)] transition hover:bg-white dark:bg-black/20"
          aria-label="Close project"
        >
          &times;
        </button>

        <img
          src={project.imageLink}
          alt={project.title}
          className="mb-5 h-auto w-full rounded-lg border border-black/10 object-cover dark:border-white/10"
        />

        <div className="mb-3 flex flex-col gap-3 pr-10 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-2xl font-black text-[var(--text)]">{project.title}</h1>
          <a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit rounded-lg bg-[var(--brand)] px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[#8f0a00] dark:bg-[#ff5f4f] dark:text-[#201213] dark:hover:bg-[#ff7265]"
          >
            Go to Project
          </a>
        </div>
        <p className="mb-4 text-base leading-7 text-[var(--text-soft)]">{project.description}</p>
        {articleText && (
          <p className="mb-4 whitespace-pre-line text-[15px] leading-7 text-[var(--text)]">
            {articleParts.map((part, index) => {
              if (/^https?:\/\/\S+$/.test(part)) {
                return (
                  <a
                    key={`${part}-${index}`}
                    href={part}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="break-all font-semibold text-[var(--brand)] underline decoration-2 underline-offset-2"
                  >
                    {part}
                  </a>
                );
              }
              let segment = part;
              markdownLinks.forEach((link) => {
                segment = segment.replace(link.label, `__LINK_LABEL__${link.label}__`);
              });
              const tokenized = segment.split(/(__LINK_LABEL__.*?__)/g);
              return (
                <React.Fragment key={`text-${index}`}>
                  {tokenized.map((token, tokenIndex) => {
                    const tokenMatch = token.match(/^__LINK_LABEL__(.*?)__$/);
                    if (!tokenMatch) return <React.Fragment key={`seg-${tokenIndex}`}>{token}</React.Fragment>;
                    const label = tokenMatch[1];
                    const markdownLink = markdownLinks.find((item) => item.label === label);
                    if (!markdownLink) return <React.Fragment key={`seg-${tokenIndex}`}>{label}</React.Fragment>;
                    return (
                      <a
                        key={`seg-${tokenIndex}`}
                        href={markdownLink.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-[var(--brand)] underline decoration-2 underline-offset-2"
                      >
                        {markdownLink.label}
                      </a>
                    );
                  })}
                </React.Fragment>
              );
            })}
          </p>
        )}

        {embedLinks.length > 0 && (
          <div className="space-y-4">
            {embedLinks.map((link) => (
              <div key={link} className="rounded-lg border border-black/10 bg-white/35 p-3 dark:border-white/10 dark:bg-black/15">
                <iframe
                  src={link}
                  title={`Embedded content: ${project.title}`}
                  className="h-[380px] w-full rounded-md"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;
