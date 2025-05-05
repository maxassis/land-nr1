"use client";

import * as motion from "motion/react-client";

type CardItemProps = {
  number: string;
  title: string;
  text: string;
  fromLeft?: boolean;
};

export default function CardItem({
  number,
  title,
  text,
  fromLeft = true,
}: CardItemProps) {
  return (
    <motion.div
      initial={{ x: fromLeft ? -300 : 300, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "linear", delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col-reverse md:flex-row h-auto md:min-h-[22.93rem] bg-white rounded-4xl gap-4 md:gap-5 p-10">
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl md:text-4xl text-primary font-bold mb-4 md:mb-2 text-center md:text-left">
            {title}
          </h3>
          <p className="text-[1.12rem] text-black text-center md:text-left">
            {text}
          </p>
        </div>
        <div className="text-7xl text-center md:text-[160px] text-primary">
          {number}
        </div>
      </div>
    </motion.div>
  );
}
