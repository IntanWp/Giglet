import Image from "next/image"

export function JobCard({
  title,
  date,
  description,
  fee,
  imageQuery,
}: {
  title: string
  date: string
  description: string
  fee: string
  imageQuery: string
}) {
  return (
    <article className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
      <div className="relative h-40 md:h-44 w-full">
        <Image
          src={`/images/${imageQuery}.png`}
          alt={title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, 100vw"
        />
      </div>
      <div className="p-4 md:p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base md:text-lg font-semibold">{title}</h3>
          <span className="shrink-0 text-xs md:text-sm font-semibold text-foreground/80">{date}</span>
        </div>
        <p className="mt-1 text-sm md:text-base text-foreground/70">{description}</p>
        <div className="mt-3 border-t border-border pt-3 flex items-center justify-between text-sm md:text-base">
          <span className="text-foreground/60">Fee</span>
          <span className="font-semibold">{fee}</span>
        </div>
      </div>
    </article>
  )
}
