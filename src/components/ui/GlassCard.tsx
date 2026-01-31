export default function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-white/70 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl ${className}`}
    >
      {children}
    </div>
  );
}
