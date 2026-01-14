import { Text } from "portfolio-ui";
import { useState, useEffect } from "react";

interface Props {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  className?: string;
  textColor?:
    | "mono.50"
    | "mono.900" /* Add other colors if needed from design system */;
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
    console.log("=== TypingAnimation useEffect ===");
    console.log("Current state:", {
      index,
      subIndex,
      reverse,
      currentWord: words[index],
      wordLength: words[index]?.length,
      words: words,
    });

    if (words.length === 0) {
      console.log("❌ No words - returning early");
      return;
    }

    let timeout: NodeJS.Timeout;

    // Typing forward
    if (!reverse && subIndex < words[index].length) {
      console.log("✅ Branch: Typing forward", {
        subIndex,
        wordLength: words[index].length,
      });
      timeout = setTimeout(() => {
        console.log("⏱️ Timeout fired: incrementing subIndex from", subIndex);
        setSubIndex((prev) => prev + 1);
      }, typingSpeed);
    }
    // Pause after typing complete
    else if (!reverse && subIndex === words[index].length) {
      console.log("✅ Branch: Pause after typing", { pauseTime });
      timeout = setTimeout(() => {
        console.log("⏱️ Timeout fired: setting reverse to true");
        setReverse(true);
      }, pauseTime);
    }
    // Deleting backward
    else if (reverse && subIndex > 0) {
      console.log("✅ Branch: Deleting backward", { subIndex });
      timeout = setTimeout(() => {
        console.log("⏱️ Timeout fired: decrementing subIndex from", subIndex);
        setSubIndex((prev) => prev - 1);
      }, deletingSpeed);
    }
    // Move to next word after deleting complete
    else if (reverse && subIndex === 0) {
      console.log("✅ Branch: Move to next word", {
        currentIndex: index,
        wordsLength: words.length,
      });
      timeout = setTimeout(() => {
        console.log("⏱️ Timeout fired: moving to next word");
        setReverse(false);
        setIndex((prev) => (prev + 1) % words.length);
      }, 50); // Small delay to ensure smooth transition
    } else {
      console.log("❌ No branch matched! This should not happen.");
    }

    return () => {
      console.log("🧹 Cleanup: clearing timeout");
      clearTimeout(timeout);
    };
  }, [subIndex, index, reverse, words, typingSpeed, deletingSpeed, pauseTime]);

  if (words.length === 0) return null;

  return (
    <Text className={className} color={textColor}>
      {words[index].substring(0, subIndex)}
      <span style={{ opacity: blink ? 1 : 0 }}>|</span>
    </Text>
  );
};
