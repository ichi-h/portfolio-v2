import { useState, useEffect } from "react";
import { Text } from "portfolio-ui";

interface Props {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  className?: string;
  textColor?: "mono.50" | "mono.900" /* Add other colors if needed from design system */;
}

export const TypingAnimation = ({
  words,
  typingSpeed = 150,
  deletingSpeed = 100,
  pauseTime = 5000,
  className,
  textColor = "mono.50",
}: Props) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  useEffect(() => {
    if (index === words.length) {
       // Loop back to start if we want infinite loop over words array? 
       // The requirement says "looping" so yes.
       setIndex(0);
       return;
    }

    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => {
        setReverse(true);
      }, pauseTime);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <Text className={className} color={textColor}>
      {`${words[index].substring(0, subIndex)}${blink ? "|" : "\u00A0"}`}
    </Text>
  );
};
