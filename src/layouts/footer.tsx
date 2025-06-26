import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-100 border-t mt-10 px-6 py-4 fixed bottom-0 w-full">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <span className="text-sm text-gray-500">
          © 2025 FundingPips. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
