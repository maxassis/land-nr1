"use client";
import Image from "next/image";
import * as motion from "motion/react-client";

interface CardSectionProps {
  title: string;
  text: string;
  imageSrc: string;
  imageFirst?: boolean;
}

export default function CardSection({
  title,
  text,
  imageSrc,
  imageFirst = true,
}: CardSectionProps) {
  return (
    <motion.div
      initial={{ x: imageFirst ? -300 : 300, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "linear", delay: 0.3 }}
      viewport={{ once: true }}
    >
      <div className="rounded-4xl h-auto lg:h-[25rem] bg-primary overflow-hidden grid grid-cols-1 lg:grid-cols-2 mb-6">
        <div
          className={`
            h-[9.38rem] lg:h-full lg:w-full 
            order-1 
            ${imageFirst ? "lg:order-1" : "lg:order-2"}
          `}
        >
          <Image
            src={imageSrc}
            alt="Banner"
            width={500}
            height={500}
            quality={100}
            className="object-cover object-[center_20%] w-full h-full"
            unoptimized
          />
        </div>

        <div
          className={`
            p-8 grid place-content-start 
            order-2 
            ${imageFirst ? "lg:order-2" : "lg:order-1"}
          `}
        >
          <h3 className="text-3xl font-bold mb-2">{title}</h3>
          <p className="text-lg">{text}</p>
        </div>
      </div>
    </motion.div>
  );
}
