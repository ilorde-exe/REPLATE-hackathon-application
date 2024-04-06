import React from "react";

const page = () => {
  return (
    <div>
      <div class="bg-gray-50 font-[sans-serif] text-[#333]">
        <div class="min-h-screen flex flex-col items-center justify-center py-6 px-4">
          <div class="max-w-md w-full border py-8 px-6 rounded border-gray-300 bg-white">
            <h2 class="text-center text-3xl font-extrabold">
              Create your account
            </h2>
            <form class="mt-10 space-y-4">
              <div>
                <input
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  class="w-full text-sm px-4 py-3 rounded outline-none border-2 focus:border-blue-500"
                  placeholder="Email address"
                />
              </div>
              <div>
                <input
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  class="w-full text-sm px-4 py-3 rounded outline-none border-2 focus:border-blue-500"
                  placeholder="Password"
                />
              </div>
              <div>
                <input
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  class="w-full text-sm px-4 py-3 rounded outline-none border-2 focus:border-blue-500"
                  placeholder="Re-type Password"
                />
              </div>
              <div class="flex items-center justify-between gap-4"></div>
              <div class="!mt-10">
                <button
                  type="submit"
                  class="w-full py-2.5 px-4 text-sm rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                >
                  Register
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
