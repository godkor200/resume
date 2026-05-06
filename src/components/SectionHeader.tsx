export default function SectionHeader({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="text-2xl font-bold text-gray-900 tracking-tight">{label}</h2>
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  )
}
