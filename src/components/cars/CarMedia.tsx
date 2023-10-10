"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import useSWR from "swr";
import { AiFillPlayCircle } from "react-icons/ai";

const fetcher = (...args: any) => fetch(args).then((res) => res.json());
const CarMedia = ({ car }: { car: carEntity }) => {
  const [image, setImage] = useState<string | null>(`${car.imageUrl}`);
  const carId = car && car.id;
  const { data, error, isLoading } = useSWR(
    `/api/getCarMedia?carId=${carId}`,
    fetcher
  );
  const media = data && data[1];
  if (error) {
    console.log(error);
  }

  const imgRef = useRef<HTMLImageElement | null>(null);
  const setImagePreview = (url: string) => {
    const image = imgRef.current && (imgRef.current.src = url);
    setImage(image);
  };

  return (
    <div className="w-full max-w-md  ">
      {image?.includes("video") || image?.includes("mp4") ? (
        <div className="w-full  transitions h-[300px] rounded-md max-w-md">
          <iframe
            width="16/9"
            height="full"
            src={image}
            // frameBorder="0"
            allowFullScreen
            title={car.title}
            className="w-full h-full rounded "
          />
        </div>
      ) : (
        <div
          ref={imgRef}
          className="relative w-full  transitions h-[300px] rounded-md overflow-hidden max-w-md "
        >
          <Image
            className="object-cover transitions"
            src={`${image ? image : car.imageUrl}`}
            fill
            priority
            alt={`${car.title}`}
          />
        </div>
      )}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="space-x-2 overflow-auto my-4 whitespace-nowrap">
          {media.carMediaList.length > 0 &&
            media.carMediaList.map((image: mediaEntity) => (
              <div
                key={image.id}
                onClick={() => setImagePreview(image.url)}
                className=" inline-block border border-gray-200 p-1 rounded-md hover:border-slate-950 transitions"
              >
                {image.type.includes("video") ? (
                  <div
                    onClick={() => setImagePreview(image.url)}
                    className="relative w-[200px] cursor-pointer h-[100px]  overflow-hidden"
                  >
                    <video
                      width="16/9" // Set a responsive width (16:9 aspect ratio)
                      height="full" // Take up full height of the container
                      src={image.url}
                      autoPlay={false}
                      loop={true}
                      muted
                      className="w-full h-full rounded object-cover  " // Apply additional Tailwind
                      title={image.name}
                    />
                    <div className="absolute  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50 w-5 h-5 md:h-7 md:w-7 flex items-center justify-center  bg-slate-200/90 rounded-full opacity-100">
                      <AiFillPlayCircle className=" icon-style  h-3 w-3 md:w-6 md:h-6 text-slate-900/70 " />
                    </div>
                  </div>
                ) : (
                  <div className="relative cursor-pointer w-[200px] h-[100px]">
                    <Image
                      className="object-cover rounded "
                      src={`${image.url}`}
                      fill
                      priority
                      alt={`${image.name}`}
                    />
                  </div>
                )}
              </div>
            ))}
        </div>
      )}
      <table className="w-full px-4 ">
        <thead>
          <tr>
            <td></td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Year of manufacture</td>
            <td>{car.year}</td>
          </tr>
          <tr>
            <td>Location</td>
            <td className="text-sm flex gap-2">
              <span>{car.city}</span>
              <span className="font-bold">{car.country}</span>
            </td>
          </tr>
          <tr>
            <td>Availavility</td>
            <td>{car.sold ? "Sold" : "Available"}</td>
          </tr>
          <tr>
            <td>Mileage</td>
            <td className="flex gap-2">
              <span>{car.mileage}</span>
              <span className="font-bold">{car.mileageUnit}</span>
            </td>
          </tr>
          {car.model && (
            <tr>
              <td>Drive</td>
              <td>{car.model.wheelType}</td>
            </tr>
          )}
          <tr>
            <td>Fuel Type</td>
            <td>{car.fuelType}</td>
          </tr>
          <tr>
            <td>Transmission</td>
            <td>{car.transmission} cc</td>
          </tr>
          <tr>
            <td>Engine Size</td>
            <td>{car.ccMeasurement}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CarMedia;
