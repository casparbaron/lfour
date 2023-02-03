import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">kontakt</h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              wir beraten  
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              kostenfrei
            </h1>
            <Button type="primary">jetzt unverbindlich termin vereinbaren</Button>
            <div className="mt-10">
              {/*<Socials />*/}
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        design made in germany. <br></br>powered by{" "}
        <Link href="onlyblacklines.netlify.app">
          <a className="underline underline-offset-1">onlyblacklines</a>
        </Link>
      </h1>
    </>
  );
};

export default Footer;
