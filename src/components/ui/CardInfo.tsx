"use client";
import Image from "next/image";

interface CardInfoProps {
  imageSrc: string;
  title: string;
  description: string;
}

export default function CardInfo({ imageSrc, title, description }: CardInfoProps) {
  return (
    <div>
      <Image
        src={imageSrc}
        alt={title}
        width={100}
        height={66}
        quality={50}
        className="mx-auto mb-8"
      />

      <h2 className="text-center text-black font-bold text-4xl mb-3">
        {title}
      </h2>

      <p className="text-center align-middle text-black">
        {description}
      </p>
    </div>
  );
}
