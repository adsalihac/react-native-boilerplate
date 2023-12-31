import React from "react";
// import Lottie from "lottie-react";

export default function Animation({
  animation,
}: {
  animation: string;
}): JSX.Element {
  const animationFile = () => {
    if (animation === "coming-soon") {
      return require("../../static/animation/coming-soon.json");
    }
  };

  const defaultOptions = {
    // loop: true,
    // autoplay: true,
    animationData: animationFile(),
    // rendererSettings: {
    //   preserveAspectRatio: "xMidYMid slice",
    // },
  };

  // return <Lottie animationData={animationFile} height={240} width={"75%"} />;
  return <span>Comming Soon</span>;

}
