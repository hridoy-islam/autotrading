"use client";

interface BreadCumbProps {
  title: string;
}

export default function BreadCumb({ title }: BreadCumbProps) {
  return (
    <div className="homepagebg text-white -mt-20">
      <div className="container mx-auto pt-36 pb-20 ">
        <h2 className="text-6xl text-white border-primary border-l-5 pl-5">
          {title}
        </h2>
      </div>
    </div>
  );
}
