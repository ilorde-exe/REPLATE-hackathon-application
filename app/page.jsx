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
          <h1 className="text-4xl text-bold">
            Share your Celebration, Feed the hungry: Donate Your Event leftovers
            Today!
          </h1>
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
          <h1 className="text-5xl mb-2">About us</h1>
          <p className="py-3 text-xl text-gray-500">
            Did you know that, on average, small Indian weddings result in a
            staggering 40% of food going to waste? For grandiose celebrations,
            the wastage can soar even higher, reaching a shocking 60%. <br />
            <br />
            Our mission is to make donating this food to credible organisations
            as easy as ordering a Cab, while providing you with heartfelt
            blessings of the needy and ensure that every bite serves a purpose.
          </p>
        </div>

        <h1 className="text-5xl mt-10 mb-2">Impact</h1>
        <p className="py-3 text-xl text-gray-500">
          We have been blessed to touch the lives of 20,000 families, ensuring
          to keep away 83,000kgs of edible food away from the Landfills and
          138tonnes of CO2eq away from our lungs. <br />
          <br />
          We’ve been touched by inundating words of appreciation from Donors and
          Consumers alike, providing them a purpose to contribute to a seemingly
          difficult task easily and the latter, the elixir of Life, helping them
          lead better lives for themselves and their families.
        </p>

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
                        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBHgskmG3f7puRGh6avIDMryMKu8w7oR2M&&q=${encodeURIComponent(
                          event.Address
                        )}`}
                      ></iframe>
                      <br />
                      Address:{event.Address}
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
