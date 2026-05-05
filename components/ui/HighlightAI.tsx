import React from "react";

interface HighlightAIProps {
  text: string;
}

export const HighlightAI: React.FC<HighlightAIProps> = ({ text }) => {
  if (!text) return null;

  // Split by "AI" (case sensitive) and map to wrap it
  const parts = text.split(/(AI)/g);

  return (
    <>
      {parts.map((part, index) =>
        part === "AI" ? (
          <span key={index} className="text-accent-ai">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
};
