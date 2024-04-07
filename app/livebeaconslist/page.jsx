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
    <div className=" font-serif">
      <div className="flex flex-col px-6 py-2 mt-8">
        <div className="p-3">
          <h1 className="text-5xl text-bold">
          Live Beacons
          </h1>

        <div className="mt-20">
          <h2 className="text-3xl mt-2">Ritik weds Figma</h2>
          <h3 className="text-lg mt-2">Food for ~120</h3>
          <h3 className="text-lg mt-2">Available from 10:00PM</h3>
          <h3 className="text-lg mt-2">2.5km</h3>
          
          <div className="pt-3">
            <Link
              href="/donate"
              class="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded"
            >
              Approve
            </Link>
          </div>
          <div className="pt-3">
            <Link
              href="/donate"
              class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded"
            >
              Reject
            </Link>
          </div>
          <hr class="h-px my-8 bg-orange-500 border-0"></hr>
        </div>

        <div className="mt-2">
          <h2 className="text-3xl mt-2">Advay weds Nikon</h2>
          <h3 className="text-lg mt-2">Food for ~40</h3>
          <h3 className="text-lg mt-2">Available from 10:00PM</h3>
          <h3 className="text-lg mt-2">2.5km</h3>
          <hr class="h-px my-8 bg-orange-500 border-0"></hr>
        </div>

        <div className="mt-2">
          <h2 className="text-3xl mt-2">Priyavrat weds Ferrari</h2>
          <h3 className="text-lg mt-2">Food for ~200</h3>
          <h3 className="text-lg mt-2">Available from 03:00PM</h3>
          <h3 className="text-lg mt-2">5km</h3>
          <hr class="h-px my-8 bg-orange-500 border-0"></hr>
        </div>

        <div className="mt-2">
          <h2 className="text-3xl mt-2">Ferrari win celebration</h2>
          <h3 className="text-lg mt-2">Food for ~20</h3>
          <h3 className="text-lg mt-2">Available from 02:00PM</h3>
          <h3 className="text-lg mt-2">5km</h3>
          <hr class="h-px my-8 bg-orange-500 border-0"></hr>
        </div>

        </div>

      </div>
    </div>
  );
}
