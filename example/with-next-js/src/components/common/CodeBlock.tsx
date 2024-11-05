"use client";

import "./style.css";

import { useEffect, useState } from "react";
import { codeToHtml } from "shiki";

function CodeBlock({
  code,
  language,
  theme,
}: {
  code: string;
  language?: string;
  theme?: string;
}) {
  const [result, setResult] = useState("");
  const converter = async () => {
    const out = await codeToHtml(code, {
      theme: theme || "github-dark",
      lang: language || "typescript",
      decorations: [
        {
          start: 0,
          end: code.length,
          properties: {
            class: "text-sm",
          },
        },
      ],
    });

    setResult(out);
  };

  useEffect(() => {
    converter();
  }, [code, language, theme]);

  return (
    <div className="my-2 shiki-custom">
      <div dangerouslySetInnerHTML={{ __html: result }} />
    </div>
  );
}

export default CodeBlock;
