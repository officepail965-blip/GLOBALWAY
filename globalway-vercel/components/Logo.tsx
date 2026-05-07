/**
 * GlobalWay International — Logo original
 * PNG extrait depuis le fichier source, fond 100% transparent.
 * Deux variantes : gold (fond clair) et white (fond sombre).
 */

interface LogoProps {
  variant?: "gold" | "white";
  className?: string;
}

export default function Logo({ variant = "gold", className = "h-10 w-auto" }: LogoProps) {
  const src = variant === "white"
    ? "/images/logo-white.png"
    : "/images/logo-gold.png";

  return (
    <img
      src={src}
      alt="GlobalWay International"
      className={className}
      style={{ objectFit: "contain" }}
    />
  );
}
