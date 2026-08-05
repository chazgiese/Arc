import { ScrollArea } from "@/components/ui/scroll-area"

const tags = Array.from({ length: 40 }, (_, i) => `v1.2.0-beta.${40 - i}`)

export default function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-56 w-56 rounded-xl border border-border">
      <div className="p-4">
        <h4 className="mb-3 st-body-md-strong text-text">Tags</h4>
        {tags.map((tag) => (
          <div
            key={tag}
            className="border-b border-border py-2 st-body-sm text-text-subtle last:border-b-0"
          >
            {tag}
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}
