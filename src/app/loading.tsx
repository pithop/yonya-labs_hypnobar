export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#050508] z-[9999]">
      <div className="text-center">
        <h2 className="font-serif text-3xl font-bold tracking-widest text-primary animate-pulse">
          HYPNOBAR
        </h2>
        <div className="mt-4 w-48 h-1 bg-white/10 rounded-full mx-auto overflow-hidden">
          <div className="w-1/2 h-full bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  );
}
