"use client";

import { CloseIcon, Logo, MenuIcon } from "@/components/icons";
import { type RefObject, useEffect, useRef, useState } from "react";

import NavLinks from "./nav-links";

const TAB_STOPS = "a[href], button";

function focusOnceVisible(ref: RefObject<HTMLElement | null>) {
  let frame = requestAnimationFrame(() => {
    frame = requestAnimationFrame(() => ref.current?.focus());
  });
  return () => cancelAnimationFrame(frame);
}

function holdPageBehind() {
  const offset = window.scrollY;
  const { style } = document.body;
  style.position = "fixed";
  style.insetInline = "0";
  style.top = `${-offset}px`;

  return () => {
    style.position = "";
    style.insetInline = "";
    style.top = "";
    window.scrollTo({ top: offset, behavior: "instant" });
  };
}

export default function MobileMenu({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  useEffect(() => (open ? holdPageBehind() : undefined), [open]);

  useEffect(() => {
    if (!open) return;

    const settle = focusOnceVisible(panel);
    const button = trigger.current;
    return () => {
      settle();
      button?.focus();
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const close = () => setOpen(false);
    const breakpoint = window.matchMedia("(min-width: 48rem)");

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") return close();
      if (event.key !== "Tab" || !panel.current) return;

      const stops = [...panel.current.querySelectorAll<HTMLElement>(TAB_STOPS)];
      const [first] = stops;
      const last = stops.at(-1);
      const onFirst =
        document.activeElement === first ||
        document.activeElement === panel.current;

      if (event.shiftKey && onFirst) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    breakpoint.addEventListener("change", close);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      breakpoint.removeEventListener("change", close);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className={className}>
      <button
        ref={trigger}
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-label="Open menu"
        className="text-ink -m-2 block p-2"
      >
        <MenuIcon className="h-3.75 w-4" />
      </button>

      <div
        ref={panel}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        inert={!open}
        className={`from-cream to-cream/50 fixed inset-0 z-50 bg-linear-to-b/srgb from-52% transition-[opacity,visibility] duration-300 outline-none motion-reduce:transition-none ${open ? "visible opacity-100" : "invisible opacity-0"}`}
      >
        <div className="v-container flex items-center justify-between pt-8">
          <Logo className="text-ink h-auto w-40.75" />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="text-ink -m-2 block p-2"
          >
            <CloseIcon className="size-3.5" />
          </button>
        </div>

        <NavLinks
          variant="drawer"
          onNavigate={() => setOpen(false)}
          className="mt-20"
        />
      </div>
    </div>
  );
}
