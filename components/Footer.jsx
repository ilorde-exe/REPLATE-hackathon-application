import React from "react";

const Footer = () => {
  return (
    <footer class="flex flex-col font-serif items-center  text-center text-surface mt-8 lg:text-left">
      <div class="container p-6">
        <div class="grid gap-4 lg:rid-cols-2">
          <div class=" md:mb-0">
            <h5 class="mb-2 font-medium uppercase">our mission</h5>

            <p class="">
              Giving hope one bite at a time. Replate connects surplus food from
              events to those in need, reducing food waste and hunger while
              fostering compassion and community.
            </p>
          </div>
        </div>
      </div>

      <div class="w-full bg-black/5 p-4 text-center">
        © 2024 Copyright:
        <a href="https://tw-elements.com/">Replate</a>
      </div>
    </footer>
  );
};

export default Footer;
