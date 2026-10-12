// Reusable TextLink component for internal and external web links.
//colors:
//primary-text: #24324A navy
//hover-text: #C9A063 gold
//hover-border: #24324A navy


// TextLink styles live in app/globals.css; the hover gold uses the accessible text shade.
import Link from "next/link";

type TextLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  download?: boolean | string;
};

export default function TextLink({ href, children, className, download }: TextLinkProps) {

    if (!href) {
        console.error("TextLink missing href");
        return null;
    }

    const baseClass = "text-link";

    const combinedClassName=`${baseClass} ${className ?? ""}`;

    // External destinations and PDF reads open in a new tab. Explicit downloads
    // use a native anchor and a downward arrow; internal navigation stays in this tab.
    // ButtonLink deliberately retains its separate appearance and behavior.
    const isDownload = download !== undefined && download !== false;
    const isExternal = /^(?:https?:\/\/|\/\/|mailto:)/i.test(href);
    const opensNewTab = isExternal || /\.pdf(?:[?#]|$)/i.test(href);
    const content = (
        <>
            {children}
            {(isDownload || opensNewTab) && <span aria-hidden="true"> {isDownload ? "↓" : "↗"}</span>}
            {((!isDownload && opensNewTab) || (isDownload && isExternal)) && <span className="sr-only"> (opens in a new tab)</span>}
        </>
    );

    if (isDownload) {
        // Cross-origin downloads depend on the host's Content-Disposition header.
        // Keep the current page available if the browser follows the URL instead.
        return <a href={href} download={download} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined} className={combinedClassName}>{content}</a>;
    }

    return (
        <Link href={href} target={opensNewTab ? "_blank" : undefined} rel={opensNewTab ? "noopener noreferrer" : undefined} className={combinedClassName}>
            {content}
        </Link>
    );
}
