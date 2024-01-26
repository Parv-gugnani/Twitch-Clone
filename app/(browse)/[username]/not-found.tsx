import { StreamPlayerSkeleton } from "@/components/stream-player";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const NotFoundPage = () => {
  return (
    <div className="h-full flex flex-col space-y-4 items-center justify-center text-muted-foreground">
      <h1 className="text-4xl">404 💀</h1>

      <Image
        src="/laughing-cat.gif"
        alt="Not Found GIF"
        width={100}
        height={100}
      />

      <p>Bro cant even write correctly</p>
      <Button variant="secondary" asChild>
        <Link href="/">Go Back Home</Link>
      </Button>
    </div>
  );
};

export default NotFoundPage;
