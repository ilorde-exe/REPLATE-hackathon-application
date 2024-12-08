"use client";
import React from "react";
import { useState } from "react";

const Page = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddresss] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: `${name}`,
      date: "2024-04-07",
      eventId: "1232",
      expectedFood: "21",
      status: true,
      description: `${description}`,
      address: `${address}`,
    };
    console.log(formData);

    // formData = await ky.post('https://example.com', {json: {foo: true}}).json();

    //   try {
    //     // Send POST request to your server
    //     const response = await axios.post(
    //       "http://10.19.12.15:8000/api/data/publicpost/",formData,{
    //         headers: {
    //           "Content-Type": "application/json",
    //           // Add additional headers if needed
    //         },
    //       }
    //     );
    //     console.log(response.data);
    //     // Reset form after successful submission
    //   } catch (error) {
    //     console.error("Error:", error);
    //   }
    // };

    fetch("http://10.19.12.15:8000/api/data/publicpost/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  };

  return (
    <div>
      <div class="font-serif text-[#333]">
        <div class="min-h-screen flex flex-col items-center justify-center py-6 px-4">
          <div class="max-w-md w-full border-2 py-8 px-6 rounded-xl border-amber-100 bg-amber-50">
            <h2 class="text-center text-3xl font-extrabold font-serif">
              Enter all the neccessary details
            </h2>
            <br />
            {address ? (
              <iframe
                width="360"
                height="375"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBHgskmG3f7puRGh6avIDMryMKu8w7oR2M&&q=${encodeURIComponent(
                  address
                )}`}
              ></iframe>
            ) : (
              <iframe
                width="360"
                height="375"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBHgskmG3f7puRGh6avIDMryMKu8w7oR2M&&q=india`}
              ></iframe>
            )}

            <form class="mt-10 space-y-4" onSubmit={handleSubmit}>
              <div>
                <input
                  name="text"
                  type="text"
                  required
                  class="w-full text-sm px-4 py-3 rounded outline-none border-2 focus:border-blue-500"
                  placeholder="Title"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  value={name}
                />
              </div>
              <div>
                <textarea
                  id="textarea-label"
                  class="py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  rows="3"
                  placeholder="Description"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  value={description}
                ></textarea>
              </div>
              <div>
                <textarea
                  id="textarea-label"
                  class="py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  rows="3"
                  placeholder="Address"
                  onChange={(e) => {
                    setAddresss(e.target.value);
                  }}
                  value={address}
                ></textarea>
              </div>
              <button
                type="submit"
                class="bg-orange-500 hover:bg-orange-400 text-white font-bold py-2 px-4 border-b-4 border-orange-700 hover:border-orange-500 rounded"
              >
                Replate Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
