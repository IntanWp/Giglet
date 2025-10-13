import Image from "next/image";
import Link from "next/link";

export function JobCard({
  title,
  date,
  description,
  fee,
  imageQuery,
}: {
  title: string;
  date: string;
  description: string;
  fee: string;
  imageQuery: string;
}) {
  return (
    <Link
      href={`/job-detail`}
      className="block transition-transform hover:scale-[1.02] hover:shadow-md"
    >
      <article className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex flex-col h-full">
        <div className="relative h-40 md:h-44 w-full">
          <Image
            src={`/images/${imageQuery}.png`}
            alt={title}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 33vw, 100vw"
          />
        </div>
        <div className="p-4 md:p-5 flex flex-col flex-grow">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-base md:text-lg font-semibold">{title}</h3>
            <span className="shrink-0 text-xs md:text-sm font-semibold text-foreground/80">
              {date}
            </span>
          </div>
          <p className="mt-1 text-sm md:text-base text-foreground/70 flex-grow">
            {description}
          </p>
          <div className="mt-3 flex items-center justify-between text-sm md:text-base">
            <span className="font-bold">Fee</span>
            <span className="font-semibold">{fee}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
