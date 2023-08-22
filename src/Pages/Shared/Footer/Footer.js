import React from "react";
import { Link } from "react-router-dom";
import footer from '../../../../src/assets/images/footer-bg.png';
import MainButton from "../../../components/MainButton";
import Whatsapp from './Whatsapp';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';

const Footer = () => {

  const noNamed = [
    { name: "Emergency Check Up", link: "/emergency" },
    { name: "Monthly Check Up", link: "/checkup" },
    { name: "Treatment of Personal Diseases", link: "/personal-treatment" },
    { name: "Tooth Extraction", link: "/tooth-extract" },
    { name: "Check Up", link: "/checkup" },
  ];
  const ourAddress = [
    { name: "New York - 101010 Hudson", link: "//google.com/map" }
  ];


  return (
    <div className='bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(${footer})` }}>
      <footer className='grid md:grid-cols-2 lg:grid-cols-4 gap-10 px-10 pt-12 pb-6'>
        <div>
          <span className="footer-title block">Services</span>
          <Link className="link link-hover block py-1">Emergency Checkup</Link>
          <Link className="link link-hover block py-1 my-2">Monthly Checkup</Link>
          <Link className="link link-hover block py-1">Weekly Checkup</Link>
          <Link className="link link-hover block py-1">Deep Checkup</Link>
        </div>
        <div>
          <span className="footer-title block">ORAL HEALTH</span>
          <Link className="link link-hover block py-1">Fluoride Treatment</Link>
          <Link className="link link-hover block py-1">Cavity Filling</Link>
          <Link className="link link-hover block py-1">Teath Whitening</Link>
        </div>
        <div>
          <span className="footer-title block">QUICK LINKS</span>
          <Link className="link link-hover block py-1">Terms & Conditions</Link>
          <Link className="link link-hover block py-1">Privacy, Policy</Link>
          <Link className="link link-hover block py-1">Safety Now</Link>
        </div>
        <div>
          <span className="footer-title block">OUR ADDRESS</span>
          <Link className="link link-hover block py-1">New York - 101010 Hudson</Link>
          <ul className="flex justify-between py-2">

            <li className="icon text-2xl mr-2 text-primary hover:text-black border-2 rounded-full w-11 h-11 flex items-center justify-center"><a href="/"><FaFacebook /></a></li>
            <li className="icon text-2xl mr-2 text-primary hover:text-black border-2 rounded-full w-11 h-11 flex items-center justify-center"><a href="/"><FaLinkedin /></a></li>
            <li className="icon text-2xl mr-2 text-primary hover:text-black border-2 rounded-full w-11 h-11 flex items-center justify-center"><a href="/"><AiFillYoutube /></a></li>
            <li className="icon text-2xl mr-2 text-primary hover:text-black border-2 rounded-full w-11 h-11 flex items-center justify-center"><a href="/"><Whatsapp /></a></li>
          </ul>
          <Link className="link link-hover py-2"><MainButton>Get Notify</MainButton></Link>
        </div>
      </footer>
      <p className='text-center py-10'>&copy; Copyright {new Date().getFullYear()} All Rights Reserved</p>
    </div>
  );
};

export default Footer;