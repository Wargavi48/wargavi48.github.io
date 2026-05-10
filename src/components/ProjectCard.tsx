import { Card, CardHeader, CardContent } from "@/components/ui/card"

interface CardProps {
    imageLink: string;
    title: string;
    description: string;
    onClick?: () => void;
}

const ProjectCard = ({imageLink, title, description, onClick}: CardProps) => {
  return (
        <Card onClick={onClick} className="h-full cursor-pointer overflow-hidden rounded-xl border border-black/10 bg-white/65 transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-[#2a232b]/70">
            <CardHeader className="p-3">
                <img
                    src={`${imageLink}`}
                    width="400"
                    height="225"
                    alt="Project"
                    className="aspect-[16/9] overflow-hidden rounded-lg object-cover"
                />
            </CardHeader>
            <CardContent className="space-y-3 p-4 pt-0 md:p-5 md:pt-1">
                <h3 className="line-clamp-2 text-lg font-black leading-tight text-[var(--text)]">{title}</h3>
                <p className="line-clamp-3 text-sm leading-6 text-[var(--text-soft)]">
                    {description}
                </p>
                <div className="inline-flex rounded-lg bg-[var(--brand)] px-3 py-2 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-[#8f0a00] dark:bg-[#ff5f4f] dark:text-[#201213] dark:hover:bg-[#ff7265]">
                  View Detail
                </div>
            </CardContent>
        </Card>
  )
}

export default ProjectCard
