import { getCachedGlobal } from "@/utilities/getGlobals";
import Link from "next/link";
import React from "react";

import type { Footer } from "@/payload-types";

import { ThemeSelector } from "@/providers/Theme/ThemeSelector";
import { CMSLink } from "@/components/Link";
import { Logo } from "@/components/Logo/Logo";
import Container from "@/components/ui/container";

export async function Footer() {
  const footerData: Footer = await getCachedGlobal("footer", 1)();

  const navItems = footerData?.navItems || [];

  return (
    <footer className="border-border dark:bg-card mt-auto border-t bg-black text-white">
      <Container className="flex flex-col gap-8 py-8 md:flex-row md:justify-between">
        <Link className="flex items-center" href="/">
          <Logo />
        </Link>

        <div className="flex flex-col-reverse items-start gap-4 md:flex-row md:items-center">
          <ThemeSelector />
          <nav className="flex flex-col gap-4 md:flex-row">
            {navItems.map(({ link }, i) => {
              return <CMSLink className="text-white" key={i} {...link} />;
            })}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
