import React from "react";

interface Props {
  left: React.ReactNode;
  right: React.ReactNode;
}
const AuthLayout = ({ left, right }: Props) => {
  return (
    <section className="flex h-screen overflow-hidden">
      <div className="w-6/12">{left}</div>
      <div className="w-6/12">{right}</div>
    </section>
  );
};

export default AuthLayout;
