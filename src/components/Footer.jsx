import React from "react";
import { Link } from "react-router";
import logo from "../assets/images/logo.png";
import facebook from "../assets/images/facebook.png";
import youtube from "../assets/images/youtube.png";
import telegram from "../assets/images/telegram.png";
import twitter from "../assets/images/twitter.png";

export default function Footer() {
  return (
    <footer className="w-full h-[318px] px-30 py-15 mt-[52px] border-2 border-[#E5E7EB]">
      <div className="container flex gap-70 justify-start">
        <div>
          <Link to="" className="inline-block mb-5">
            <img src={logo} alt="logo image" />
          </Link>
          <ul className="flex flex-col gap-4">
            <li>
              <Link to="" className="flex gap-2">
                <img src={facebook} alt="facebook logo" className="w-5 h-5" />
                <p className="font-poppins font-normal text-[16px] text-secondary">
                  Facebook
                </p>
              </Link>
            </li>
            <li>
              <Link to="" className="flex gap-2">
                <img src={youtube} alt="youtube logo" className="w-5 h-5" />
                <p className="font-poppins font-normal text-[16px] text-secondary">
                  Youtube
                </p>
              </Link>
            </li>
            <li>
              <Link to="" className="flex gap-2">
                <img src={telegram} alt="telegram logo" className="w-5 h-5" />
                <p className="font-poppins font-normal text-[16px] text-secondary">
                  Telegram
                </p>
              </Link>
            </li>
            <li>
              <Link to="" className="flex gap-2">
                <img src={twitter} alt="twitter logo" className="w-5 h-5" />
                <p className="font-poppins font-normal text-[16px] text-secondary">
                  Twitter
                </p>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Link to="" className="inline-block font-poppins font-semibold text-[16px] text-theme mb-5">Getting started</Link>
          <ul className="flex flex-col gap-4">
            <li>
              <Link to="">
                <p className="font-poppins font-normal text-[16px] text-secondary">
                  Release Notes
                </p>
              </Link>
            </li>
            <li>
              <Link to="">
                <p className="font-poppins font-normal text-[16px] text-secondary">
                  Upgrade Guide
                </p>
              </Link>
            </li>
            <li>
              <Link to="">
                <p className="font-poppins font-normal text-[16px] text-secondary">
                  Browser Support
                </p>
              </Link>
            </li>
            <li>
              <Link to="">
                <p className="font-poppins font-normal text-[16px] text-secondary">
                  Dark Mode
                </p>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Link to="" className="inline-block font-poppins font-semibold text-[16px] text-theme mb-5">Explore</Link>
          <ul className="flex flex-col gap-4">
            <li>
              <Link to="">
                <p className="font-poppins font-normal text-[16px] text-secondary">
                  Prototyping
                </p>
              </Link>
            </li>
            <li>
              <Link to="">
                <p className="font-poppins font-normal text-[16px] text-secondary">
                  Design systems
                </p>
              </Link>
            </li>
            <li>
              <Link to="">
                <p className="font-poppins font-normal text-[16px] text-secondary">
                  Pricing
                </p>
              </Link>
            </li>
            <li>
              <Link to="">
                <p className="font-poppins font-normal text-[16px] text-secondary">
                  Security
                </p>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Link to="" className="inline-block font-poppins font-semibold text-[16px] text-theme mb-5">Community</Link>
          <ul className="flex flex-col gap-4">
            <li>
              <Link to="">
                <p className="font-poppins font-normal text-[16px] text-secondary">
                  Discussion Forums
                </p>
              </Link>
            </li>
            <li>
              <Link to="">
                <p className="font-poppins font-normal text-[16px] text-secondary">
                  Code of Conduct
                </p>
              </Link>
            </li>
            <li>
              <Link to="">
                <p className="font-poppins font-normal text-[16px] text-secondary">
                  Contributing
                </p>
              </Link>
            </li>
            <li>
              <Link to="">
                <p className="font-poppins font-normal text-[16px] text-secondary">
                  API Reference
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
