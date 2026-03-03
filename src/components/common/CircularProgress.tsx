const CircularProgress = () => {
  return (
    <div className="relative w-28 h-28 shrink-0">
    <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
      <circle
        cx="50"
        cy="50"
        r="42"
        fill="none"
        stroke="hsl(var(--border))"
        strokeWidth="6"
      />
      <circle
        cx="50"
        cy="50"
        r="42"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray="0 264"
      />
    </svg>

    <div className="absolute inset-0 flex flex-col items-center justify-center">
      <p className="text-2xl font-bold text-primary">0%</p>
      <p className="text-[11px] text-muted-foreground">In Progress</p>
    </div>
  </div>
  )
}

export default CircularProgress