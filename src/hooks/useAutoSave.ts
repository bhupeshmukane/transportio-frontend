import { useEffect, useRef } from "react";

export default function useAutoSave(
  key: string,
  data: any,
  delay = 1500
) {
  const timeout = useRef<any>(null);

  useEffect(() => {
    timeout.current = setTimeout(() => {
      localStorage.setItem(key, JSON.stringify(data));
    }, delay);

    return () => clearTimeout(timeout.current);
  }, [data]);

  useEffect(() => {
    const interval = setInterval(() => {
      localStorage.setItem(key, JSON.stringify(data));
    }, 5000);

    return () => clearInterval(interval);
  }, [data]);
}
