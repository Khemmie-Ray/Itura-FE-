import React from "react";
import Image from "next/image";
import ProtectedRoute from "@/components/dashboard/ProtectedRoutes";

const Library = () => {
  const libraryData = [
    {
      id: 0,
      image: "https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604884/carousel3_a6phci.svg",
    },
    {
      id: 1,
      image: "https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604884/carousel3_a6phci.svg",
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dqw6qvymf/image/upload/v1752604884/carousel3_a6phci.svg",
    },
  ];
  return (
    <ProtectedRoute>
    <main className="w-[90%] lg:w-[80%] md:w-[80%] mx-auto mb-8">
      <div className="flex justify-between flex-wrap">
        {libraryData.map((info) => (
          <div className="w-[48%] lg:w-[32%] md:w-[32%] p-4 border border-white/10 rounded-2xl bg-white/10" key={info.id}>
             <Image
              src={info.image}
              alt="AI generated images"
              width={300}
              height={300}
              className="w-[100%] ml-auto"
            />
          </div>
        ))}
      </div>
    </main>
    </ProtectedRoute>
  );
};

export default Library;
