"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AuthButton from "../resuable/button/AuthButton";
import Countdown from "../resuable/button/Countdown";

const AuthConfirmEmail = ({ text }: { text: string }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(
      () => {
        setShow(true);
      },
      2 * 60 * 1000,
    );
  }, []);
  return (
    <div className="mt-6">
      <div className="text-start pb-2">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
          If you don't see an email from us within 2 minutes, one of these
          things could have happened:
        </p>
        <ul className="list-disc list-outside pl-5 ps-4 text-sm text-gray-700 dark:text-gray-300 font-medium">
          <li className="mb-2">
            The email might be in your spam folder. (If you use Gmail, please
            check your Promotions folder as well.)
          </li>
          <li className="mb-2">The email address you entered has a typo.</li>
          <li className="mb-2">
            You accidentally entered another email address. (Usually happens
            with auto-complete.)
          </li>
          <li className="mb-2">
            We can't deliver the email to the address (Usually because of
            corporate firewalls or filtering.)
          </li>
        </ul>
      </div>

      <div className="mt-6">
        {show ? (
          <Link href="/auth/resend-verification-email">
            <AuthButton>{text}</AuthButton>
          </Link>
        ) : (
          <Countdown />
        )}
      </div>
    </div>
  );
};

export default AuthConfirmEmail;
