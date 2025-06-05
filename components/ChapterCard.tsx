import { BookOpen } from 'lucide-react'

export function ChapterCard({ chapter }) {
  return (
    <div className="p-4 border rounded-md bg-card shadow-md flex justify-between items-center">
      <div>
        <h3 className="text-md font-semibold">{chapter.name}</h3>
        <p className="text-sm text-muted-foreground">{chapter.unit} - {chapter.class}</p>
      </div>
      <BookOpen />
    </div>
  )
}