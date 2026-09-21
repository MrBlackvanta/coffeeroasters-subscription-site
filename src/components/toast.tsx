"use client";

import { CheckIcon, CloseIcon } from "@/components/icons";
import { useEffect, useState } from "react";

const visibleFor = 7000;

type Props = {
  message: string | null;
  onDismiss: () => void;
};

export default function Toast({ message, onDismiss }: Props) {
  const [heldOpen, setHeldOpen] = useState(false);

  useEffect(() => {
    if (!message || heldOpen) return;

    const timer = setTimeout(onDismiss, visibleFor);
    return () => clearTimeout(timer);
  }, [message, heldOpen, onDismiss]);

  function dismiss() {
    setHeldOpen(false);
    onDismiss();
  }

  return (
    <div role="status" className="v-toast-region">
      {message && (
        <div
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
