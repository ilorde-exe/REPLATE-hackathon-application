"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

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
    <div>
      <div className="flex flex-col px-6 py-2 mt-8">
        <div className="p-4 rounded-xl shadow-lg border-2">
          <span className="text-2xl text-bold">
            Create a beacon for food donation
          </span>
          <br />
          <br />
          Click the button below to let charitable organizations know about
          excess food
          <div className="mt-4 flex justify-center">
            <Link
              href="/donate"
              class="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
            >
              <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
              <span class="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
              <span class="relative text-white">Donate</span>
            </Link>
          </div>
        </div>
        {data ? (
          <div>
            <br />
            {data.map((event) => (
              <div className="flex flex-col py-2 ">
                <div className="p-4 rounded-xl shadow-lg border-2">
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
