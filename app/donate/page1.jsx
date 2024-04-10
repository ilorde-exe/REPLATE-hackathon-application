"use client";
import React from "react";
import { useState } from "react";

const page = () => {
  const [input, setInput] = useState("");
  return (
    <div>
      <div class="font-serif text-[#333]">
        <div class="min-h-screen flex flex-col items-center justify-center py-6 px-4">
          <div class="max-w-md w-full border-2 py-8 px-6 rounded-xl border-amber-100 bg-amber-50">
            <h2 class="text-center text-3xl font-extrabold font-serif">
              Start Beacon
            </h2>
            <br />
            {input ? (
              <iframe
                width="360"
                height="375"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBHgskmG3f7puRGh6avIDMryMKu8w7oR2M&&q=${encodeURIComponent(
                  input
                )}`}
              ></iframe>
            ) : (
              <iframe
                width="360"
                height="375"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=APIKEY=india`}
              ></iframe>
            )}

            <form class="mt-10 space-y-4">
              <div>
                <input
                  name="text"
                  type="text"
                  required
                  class="w-full text-sm px-4 py-3 outline-none border-b- bg-amber-50 focus:border-blue-500 border-b border-orange-500"
                  placeholder="Title"
                />
              </div>
              <div>
                <textarea
                  id="textarea-label"
                  class="w-full text-sm px-4 py-3 outline-none border-b- bg-amber-50 focus:border-blue-500 border-b border-orange-500"
                  rows="1"
                  placeholder="Description"
                ></textarea>
              </div>
              <div>
                <textarea
                  id="textarea-label"
                  class="w-full text-sm px-4 py-3 outline-none border-b- bg-amber-50 focus:border-blue-500 border-b border-orange-500"
                  rows="1"
                  placeholder="Address"
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                ></textarea>
              </div>
              <button
                href="/donate"
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

export default page;
