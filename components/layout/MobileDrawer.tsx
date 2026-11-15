"use client";

import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

type Props = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function MobileDrawer({ open, onClose, children }: Props) {
  // Render closed first, so the browser has a starting state to animate from.
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!mounted) return null;

  return createPortal(
    <div
      aria-hidden={!open}
      className={
        open
          ? "fixed inset-0 z-60 transition-[visibility] duration-500 visible delay-0"
          : "fixed inset-0 z-60 transition-[visibility] duration-500 invisible delay-500"
      }
    >
      {/* Overlay */}
      <div
        onClick={onClose}
        className={
          open
            ? "absolute inset-0 cursor-pointer bg-footer-bg/40 transition-opacity duration-500 ease-out opacity-100"
            : "absolute inset-0 cursor-pointer bg-footer-bg/40 transition-opacity duration-500 ease-out opacity-0"
        }
      />
      {/* Panel */}
      <aside
        role="dialog"
        aria-modal="true"
        className={
          open
            ? "absolute inset-y-0 right-0 h-dvh w-[86%] max-w-sm transform-gpu overflow-y-auto bg-white shadow-2xl will-change-transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] translate-x-0"
            : "absolute inset-y-0 right-0 h-dvh w-[86%] max-w-sm transform-gpu overflow-y-auto bg-white shadow-2xl will-change-transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] translate-x-full"
        }
      >
        {children}
      </aside>
    </div>,
    document.body,
  );
}
