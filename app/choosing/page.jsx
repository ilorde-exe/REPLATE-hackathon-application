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
          <h1 className="text-5xl text-bold">
          Extend your hand, spread the warmth of your Celebration:  Donate your excess food today!
          </h1>
          <br />

          <div className="py-3">
            <Link
              href="/donate"
              class="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded"
            >
              Join Beacon
            </Link>
          </div>
          <div className="py-3">
            <Link
              href="/donate"
              class="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded"
            >
              Start Beacon
            </Link>
          </div>
          <p className="text-xl mt-20 text-gray-500">A food beacon is a prominent initiative or location for facilitating food sharing, similar to a lighthouse guiding ships. It directs individuals to food resources, fostering community support, and alleviating food insecurity. </p>          
        </div>

      </div>
    </div>
  );
}
