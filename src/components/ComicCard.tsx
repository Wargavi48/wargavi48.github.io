import { Card, CardHeader, CardContent } from "@/components/ui/card";

interface CardProps {
  thumbnail: string;
  title: string;
  onClick?: () => void;
}

const ComicCard = ({ thumbnail, title, onClick }: CardProps) => {
  return (
    <Card
      className="h-80 w-80 cursor-pointer overflow-hidden rounded-xl border border-black/10 bg-white/65 transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-[#2a232b]/70"
      onClick={onClick}
    >
      <CardHeader className="flex-grow p-3">
        <img
          className="h-full w-full aspect-[16/9] rounded-lg object-cover"
          src={thumbnail}
          alt={title}
        />
      </CardHeader>
      <CardContent className="flex h-1/3 flex-none items-center justify-center p-4 pt-0">
        <h3 className="text-center text-lg font-black text-[var(--text)]">{title}</h3>
      </CardContent>
    </Card>
  );
};

export default ComicCard;
