"use client";

import { useEffect } from "react";
import { applyDomainTheme } from "@/utils/applyDomainTheme";

export default function DomainThemeProvider({ children }) {
  useEffect(() => {
    applyDomainTheme();
  }, []);

  return <>{children}</>;
}
