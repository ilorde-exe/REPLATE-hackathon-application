"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { Dialog } from "@headlessui/react";

export default function Home() {
  const [data, setData] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  const fetchDataFromBenkiAPI = async () => {
    try {
      const response = await axios.get(
        "http://10.19.2.160:3001/api/data/publicfetch/"
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDataFromBenkiAPI();
  }, []);

  function handleCLick() {}
  return (
    <div className=" font-serif">
      <div className="flex flex-col px-6 py-2 mt-8">
        <div className="p-3">
          <h1 className="text-5xl text-bold">Live Beacons</h1>

          {data ? (
            <div>
              <br />
              {data.map((event) => (
                <div key={event.EntryID} className="flex flex-col py-2 ">
                  <div className="p-2">
                    <div key={event.EntryID}>
                      <h2 className="text-4xl text-semibold text-orange-400">
                        {event["Name of the Event"]}
                      </h2>
                      <p className="text-gray-500">Date: {event.Date}</p>
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
                      <br />
                      <p>Description: {event.description}</p>
                      <br />
                      <div className="w-full flex justify-between">
                        <button class="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">
                          Accept Beacon
                        </button>
                        <button
                          onClick={handleCLick}
                          href="/"
                          class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
                        >
                          Cancel Beacon
                        </button>
                      </div>

                      <hr class="h-px my-8 bg-orange-500 border-0" />
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
      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Panel>
          <Dialog.Title>Deactivate account</Dialog.Title>
          <Dialog.Description>
            This will permanently deactivate your account
          </Dialog.Description>

          <p>
            Are you sure you want to deactivate your account? All of your data
            will be permanently removed. This action cannot be undone.
          </p>

          <button onClick={() => setIsOpen(false)}>Deactivate</button>
          <button onClick={() => setIsOpen(false)}>Cancel</button>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
}
