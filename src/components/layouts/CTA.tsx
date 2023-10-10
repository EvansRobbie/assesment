import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BiLogoFacebookCircle } from "react-icons/bi";

const CTA = () => {
  return (
    <div className="my-5">
      <div className="py-4 inline-flex flex-col gap-4 items-center justify-center w-full">
        <button className="max-w-max py-1.5 px-4 bg-slate-950 hover:border-l-4 hover:border-r-4 hover:border-slate-950 text-slate-200 hover:text-slate-950 active:scale-105 flex items-center gap-4 hover:bg-transparent transitions rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
            />
          </svg>

          <span className="text-sm font-bold">Pay Cash</span>
        </button>
        <button className="max-w-max py-1.5 active:scale-105 px-4 flex items-center group gap-4 hover:text-slate-950 hover:bg-slate-900/30 transitions text-slate-900 border border-slate-950 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
            />
          </svg>

          <span className="text-sm font-bold transitions group-hover:translate-x-2">
            Buy on Loan
          </span>
        </button>
      </div>
      <div className="my-5 inline-flex gap-4 items-center justify-center w-full">
        <button className="max-w-max active:scale-105 py-1.5 px-4 bg-green-700 text-slate-200 flex items-center gap-4 hover:bg-emerald-500 transitions rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
            />
          </svg>

          <span className="text-sm font-bold">Talk to us</span>
        </button>
        <button className="max-w-max active:scale-105 py-1.5 px-4 flex items-center gap-4 hover:text-slate-950 hover:bg-slate-900/30 transitions text-slate-200 bg-slate-900 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>
          <span className="text-sm font-bold">Call Now</span>
        </button>
      </div>
      <h3 className="my-4 font-bold text-center text-slate-950">OR</h3>

      <div className="flex items-center  gap-20 justify-center w-full">
        <div className="rounded-full group hover:bg-slate-200 transitions h-12 w-12 flex items-center justify-center bg-slate-950">
          <FaWhatsapp
            className="text-slate-200 group-hover:text-slate-950  group-hover:scale-105 transitions"
            size={30}
          />
        </div>
        <div className="rounded-full group hover:bg-slate-200 transitions  flex items-center justify-center  h-12 w-12 bg-slate-950">
          <FaSquareXTwitter
            className="text-slate-200 group-hover:text-slate-950  group-hover:scale-105 transitions"
            size={30}
          />
        </div>
        <div className="rounded-full group hover:bg-slate-200 transitions flex items-center justify-center h-12 w-12 bg-slate-950">
          <BiLogoFacebookCircle
            className="text-slate-200 group-hover:text-slate-950  group-hover:scale-105  transitions"
            size={33}
          />
        </div>
      </div>
    </div>
  );
};

export default CTA;
