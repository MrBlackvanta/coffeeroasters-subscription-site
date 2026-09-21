"use client";

import { CheckIcon, CloseIcon } from "@/components/icons";
import { useEffect, useState } from "react";

const visibleFor = 7000;
const fadeOutFor = 300;

type Props = {
  message: string | null;
  onDismiss: () => void;
};

export default function Toast({ message, onDismiss }: Props) {
  const [heldOpen, setHeldOpen] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    if (!message || heldOpen || fadingOut) return;

    const timer = setTimeout(() => setFadingOut(true), visibleFor);
    return () => clearTimeout(timer);
  }, [message, heldOpen, fadingOut]);

  useEffect(() => {
    if (!fadingOut) return;

    const timer = setTimeout(() => {
      setFadingOut(false);
      onDismiss();
    }, fadeOutFor);
    return () => clearTimeout(timer);
  }, [fadingOut, onDismiss]);

  function dismiss() {
    setHeldOpen(false);
    setFadingOut(true);
  }

  return (
    <div role="status" className="v-toast-region">
      {message && (
        <div
          data-open={!fadingOut || undefined}
          onFocusCapture={() => setHeldOpen(true)}
          onBlurCapture={() => setHeldOpen(false)}
          className="v-toast"
        >
          <CheckIcon className="shrink-0" />

          <p className="text-body-sm">{message}</p>

          <button
            type="button"
            onClick={dismiss}
            className="grid size-6 shrink-0 place-items-center text-white/80 transition-[color] hover:text-white"
          >
            <CloseIcon />
            <span className="sr-only">Dismiss</span>
          </button>
        </div>
      )}
    </div>
  );
}
