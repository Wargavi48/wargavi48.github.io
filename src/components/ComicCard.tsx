import { Card, CardHeader, CardContent } from "@/components/ui/card";

interface CardProps {
  thumbnail: string;
  title: string;
  onClick?: () => void;
}

const ComicCard = ({ thumbnail, title, onClick }: CardProps) => {
  return (
    <Card className="w-80 h-80 flex flex-col" onClick={onClick}> {/* Ensure it uses flex to fill height */}
      <CardHeader className="flex-grow"> {/* Ensure header grows to occupy space */}
        <img
          className="w-full h-full aspect-[16/9] rounded-t-xl object-cover" 
          src={thumbnail}
          alt={title}
        />
      </CardHeader>
      <CardContent className="flex-none h-1/3 flex items-center justify-center"> {/* Fixed height for content */}
        <h3 className="text-xl font-bold text-center">{title}</h3>
      </CardContent>
    </Card>
  );
};

export default ComicCard;
