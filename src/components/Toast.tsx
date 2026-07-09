import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, X } from "lucide-react";

interface ToastProps {
  message: string;
  visible: boolean;
  onClose: () => void;
}

export default function Toast({ message, visible, onClose }: ToastProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-8 right-8 z-[150] flex items-center gap-3 rounded-xl border border-border bg-surface px-5 py-4 shadow-2xl shadow-black/50"
        >
          <CheckCircle2 className="h-5 w-5 text-accent" />
          <p className="text-sm text-ink">{message}</p>
          <button onClick={onClose} className="ml-2 text-muted hover:text-ink" aria-label="Close notification">
            <X className="h-4 w-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
