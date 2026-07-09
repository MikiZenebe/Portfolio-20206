import { useCounter } from "../hooks/useCounter";

interface CounterProps {
  value: number;
  suffix?: string;
}

export default function Counter({ value, suffix = "" }: CounterProps) {
  const [ref, count] = useCounter(value);
  return (
    <span ref={ref} className="font-display tabular-nums">
      {count}
      {suffix}
    </span>
  );
}
