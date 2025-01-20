import React from "react";

import type { Page } from "@/payload-types";

import RichText from "@/components/RichText";
import Container from "@/components/ui/container";

type LowImpactHeroType =
  | {
      children?: React.ReactNode;
      richText?: never;
    }
  | (Omit<Page["hero"], "richText"> & {
      children?: never;
      richText?: Page["hero"]["richText"];
    });

export const LowImpactHero: React.FC<LowImpactHeroType> = ({
  children,
  richText,
}) => {
  return (
    <Container className="mt-16">
      <div className="max-w-[48rem]">
        {children ||
          (richText && <RichText data={richText} enableGutter={false} />)}
      </div>
    </Container>
  );
};
