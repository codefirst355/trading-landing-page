import React from "react";

function Footer() {
  return (
    <div className="w-full flex flex-col lg:flex-row items-start lg:justify-center gap-6 md:gap-10 lg:gap-16 pt-32 pb-5 pl-10 lg:pl-0 text-start lg:text-center">
      <div className="flex flex-col gap-4">
        <span className="text-[20px]">Policy Documents</span>
        <p className="w-[90%] lg:w-32 text-start text-base">
          <span className="hidden lg:block">Regulations Privacy policy Service agreement Risk disclosure Rules of
          trading Payment policy Refund Policy</span>
          <p className="*:underline *:underline-offset-1 visible lg:hidden flex flex-col gap-2">
            <p>Regulations</p>
            <p>Privacy policy</p>
            <p>Service agreement</p>
            <p>Risk disclosure</p>
            <p>Rules of trading</p>
            <p>Payment policy</p>
            <p>Refund Policy</p>
          </p>
        </p>
      </div>
      <div className="flex flex-col pt-2 gap-1 w-[90%] md:w-[50rem] text-xs">
        <p className="text-start">
          The website services are not available in a number of countries,
          including USA, Canada, Hong Kong, EEA countries, Russia as well as for
          persons under 18 years of age.
        </p>
        <p className="text-start">
          Risk Warning: Trading Forex and Leveraged Financial Instruments
          involves significant risk and can result in the loss of your invested
          capital. You should not invest more than you can afford to lose and
          should ensure that you fully understand the risks involved. Trading
          leveraged products may not be suitable for all investors. Trading
          non-leveraged products such as stocks also involves risk as the value
          of a stock can fall as well as rise, which could mean getting back
          less than you originally put in. Past performance is no guarantee of
          future results. Before trading, please take into consideration your
          level of experience, investment objectives and seek independent
          financial advice if necessary. It is the responsibility of the Client
          to ascertain whether he/she is permitted to use the services of the
          xxxx brand based on the legal requirements in his/her country of
          residence.
        </p>
        <p className="text-start">
          Maxbit LLC is the owner of the stockik.com domain
        </p>
        <p className="text-start text-muted">
          Copyright © 2023 xxxxx . All rights reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
