"use client";
import React from "react";
import { useState } from "react";

const page = () => {
  const [input, setInput] = useState("");
  return (
    <div>
      <div class="font-[sans-serif] text-[#333]">
        <div class="min-h-screen flex flex-col items-center justify-center py-6 px-4">
          <div class="max-w-md w-full border py-8 px-6 rounded-xl border-gray-300 bg-white">
            <h2 class="text-center text-3xl font-extrabold">
              Enter all the neccessary details
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
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBHgskmG3f7puRGh6avIDMryMKu8w7oR2M&&q=india`}
              ></iframe>
            )}

            <form class="mt-10 space-y-4">
              <div>
                <input
                  name="text"
                  type="text"
                  required
                  class="w-full text-sm px-4 py-3 rounded outline-none border-2 focus:border-blue-500"
                  placeholder="Title"
                />
              </div>
              <div>
                <textarea
                  id="textarea-label"
                  class="py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  rows="3"
                  placeholder="Description"
                ></textarea>
              </div>
              <div>
                <textarea
                  id="textarea-label"
                  class="py-3 px-4 block w-full border-2 border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  rows="3"
                  placeholder="Address"
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                ></textarea>
              </div>
              <div class="!mt-10">
                <button
                  type="submit"
                  class="w-full py-2.5 px-4 text-sm rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                >
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
