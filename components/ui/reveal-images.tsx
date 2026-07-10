import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageSource {
  src: string;
  alt: string;
}

interface ShowImageListItemProps {
  text: string;
  images: [ImageSource, ImageSource];
}

function RevealImageListItem({ text, images }: ShowImageListItemProps) {
  const container = "absolute right-8 -top-1 z-40 h-20 w-16";
  const effect =
    "relative duration-500 delay-100 shadow-none group-hover:shadow-xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full w-16 h-16 overflow-hidden transition-all rounded-md";

  return (
    <div className="group relative h-fit w-fit overflow-visible py-8">
      <p className="text-4xl sm:text-6xl md:text-7xl font-black text-foreground transition-all duration-500 group-hover:opacity-40 leading-none">
        {text}
      </p>
      <div className={container}>
        <div className={effect}>
          <Image
            alt={images[1].alt}
            src={images[1].src}
            width={80}
            height={80}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div
        className={cn(
          container,
          "translate-x-0 translate-y-0 rotate-0 transition-all delay-150 duration-500 group-hover:translate-x-6 group-hover:translate-y-6 group-hover:rotate-12",
        )}
      >
        <div className={cn(effect, "duration-200")}>
          <Image
            alt={images[0].alt}
            src={images[0].src}
            width={80}
            height={80}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

function RevealImageList() {
  const items: ShowImageListItemProps[] = [
    {
      text: "Performance Ads",
      images: [
        {
          src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&auto=format&fit=crop&q=60",
          alt: "Best digital marketing agency team in Indore optimizing ad campaigns",
        },
        {
          src: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=200&auto=format&fit=crop&q=60",
          alt: "Indore performance marketing ads optimization dashboard",
        },
      ],
    },
    {
      text: "Automation",
      images: [
        {
          src: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=200&auto=format&fit=crop&q=60",
          alt: "Marketing automation services by top Indore digital marketing company",
        },
        {
          src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&auto=format&fit=crop&q=60",
          alt: "Automated sales funnel workflow setup for Indore businesses",
        },
      ],
    },
    {
      text: "Web & Funnels",
      images: [
        {
          src: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=200&auto=format&fit=crop&q=60",
          alt: "Custom website designing company in Indore creating high converting layouts",
        },
        {
          src: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=200&auto=format&fit=crop&q=60",
          alt: "Conversion optimized sales funnel design in Indore",
        },
      ],
    },
    {
      text: "Branding",
      images: [
        {
          src: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=200&auto=format&fit=crop&q=60",
          alt: "Creative branding and logo design services in Indore MP",
        },
        {
          src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&auto=format&fit=crop&q=60",
          alt: "Graphic designing and brand identity development in Indore",
        },
      ],
    },
    {
      text: "Lead Gen",
      images: [
        {
          src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&auto=format&fit=crop&q=60",
          alt: "Lead generation agency Indore building sales pipeline",
        },
        {
          src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&auto=format&fit=crop&q=60",
          alt: "High converting lead capture landing page in Indore MP",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col gap-1 rounded-sm bg-background px-4 sm:px-8 py-4">
      <h3 className="text-sm font-black uppercase text-muted-foreground tracking-widest">
        Our services in Indore
      </h3>
      {items.map((item, index) => (
        <RevealImageListItem key={index} text={item.text} images={item.images} />
      ))}
    </div>
  );
}

export { RevealImageList, RevealImageListItem };
