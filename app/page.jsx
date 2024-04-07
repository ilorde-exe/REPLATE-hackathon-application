"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";
import heroimage from "/public/hero-image.png";


export default function Home() {
  const [data, setData] = useState(null);
  const fetchDataFromBenkiAPI = async () => {
    try {
      const response = await axios.get(
        "http://10.19.12.15:3001/api/data/publicfetch/"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDataFromBenkiAPI();
  }, []);

  return (
    <div className=" font-serif">
      <div className="flex flex-col px-6 py-2 mt-8">
        <div className="p-3">
          <h1 className="text-4xl text-bold">Share your Celebration, Feed the hungry: Donate Your Event leftovers Today!</h1>
          <br />
          
          <div className="mt-4">
            <Link
              href="/donate"
              class="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded"
            >
              Replate Now
            </Link>
          </div>
          <Image
      src={heroimage}
      width={500}
      height={500}
      alt="Picture of Hero"
      className="m-5"
    />
        </div>
        {data ? (
          <div>
            <br />
            {data.map((event) => (
              <div className="flex flex-col py-2 ">
                <div className="p-4 rounded-xl shadow-lg border-2 border-amber-100">
                  <div key={event.EntryID}>
                    <h2 className="text-lg text-semibold">
                      {event["Name of the Event"]}
                    </h2>
                    <p>Date: {event.Date}</p>
                    <p>
                      <iframe
                        width="360"
                        height="375"
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        src={`https://www.google.com/maps/embed/v1/place?key=APIKEY=${encodeURIComponent(
                          event.Address
                        )}`}
                      ></iframe>
                      <br />
                      {event.Address}
                    </p>
                    <p>Description: {event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
