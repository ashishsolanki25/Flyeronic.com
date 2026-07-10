"use client";

import { createContext, useCallback, useContext, useState, useRef } from "react";

/* ─── Types ─── */
interface Toast {
  id: string;
  type: "success" | "error";
  title: string;
  message: string;
}

interface ToastContextValue {
  showToast: (type: "success" | "error", title: string, message: string) => void;
}

/* ─── Context ─── */
const ToastContext = createContext<ToastContextValue>({ showToast: () => {} });

/* ─── Icons ─── */
const SuccessIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
    <circle cx="10" cy="10" r="10" fill="#10B981" />
    <path d="M6 10l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ErrorIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
    <circle cx="10" cy="10" r="10" fill="#EF4444" />
    <path d="M7 7l6 6M13 7l-6 6" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

/* ─── Single Toast item ─── */
function ToastItem({ toast, onRemove }: { toast: Toast; onRemove: (id: string) => void }) {
  const ref = useRef<HTMLDivElement>(null);

  const dismiss = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add("toast--exit");
    el.addEventListener("animationend", () => onRemove(toast.id), { once: true });
  }, [toast.id, onRemove]);

  /* Auto-dismiss after 5 s */
  useRef<ReturnType<typeof setTimeout> | undefined>(
    setTimeout(dismiss, 5000)
  );

  return (
    <div
      ref={ref}
      role="alert"
      aria-live="polite"
      className={`toast toast--${toast.type}`}
    >
      {toast.type === "success" ? <SuccessIcon /> : <ErrorIcon />}
      <div>
        <p style={{ fontWeight: 600, marginBottom: 2 }}>{toast.title}</p>
        <p style={{ opacity: 0.8, fontSize: "0.8125rem" }}>{toast.message}</p>
      </div>
      <button
        onClick={dismiss}
        aria-label="Dismiss"
        style={{
          marginLeft: "auto",
          background: "none",
          border: "none",
          cursor: "pointer",
          opacity: 0.5,
          fontSize: "1.1rem",
          lineHeight: 1,
          padding: "0 2px",
          color: "inherit",
        }}
      >
        ×
      </button>
    </div>
  );
}

/* ─── Provider ─── */
export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback(
    (type: "success" | "error", title: string, message: string) => {
      const id = `${Date.now()}-${Math.random()}`;
      setToasts((prev) => [...prev, { id, type, title, message }]);
    },
    []
  );

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toasts.length > 0 && (
        <div className="toast-container" aria-label="Notifications">
          {toasts.map((t) => (
            <ToastItem key={t.id} toast={t} onRemove={removeToast} />
          ))}
        </div>
      )}
    </ToastContext.Provider>
  );
}

/* ─── Hook ─── */
export function useToast() {
  return useContext(ToastContext);
}
