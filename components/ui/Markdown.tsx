"use client";
import { FC, forwardRef, HTMLAttributes, useState, useEffect } from "react";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import remarkGfm from "remark-gfm";
import rehypeStringify from "rehype-stringify";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import rehypeMathJax from "rehype-mathjax";
import rehypeMathJaxBrowser from "rehype-mathjax/browser";

interface MarkdownProps extends HTMLAttributes<HTMLParagraphElement> {
  rawText: string;
}

const Markdown: FC<MarkdownProps> = forwardRef<
  HTMLParagraphElement,
  MarkdownProps
>(({ rawText, ...props }, ref) => {
  const [innerHtml, setInnerHtml] = useState("");

  useEffect(() => {
    unified()
      .use(remarkParse)
      //.use(remarkGfm)
      .use(remarkMath,{singleDollarTextMath:true})
      .use(remarkRehype)
      .use(rehypeSanitize, {
        ...defaultSchema,
        attributes: {
          ...defaultSchema.attributes,
          // The `language-*` regex is allowed by default.
          code: [["className", /^language-./, "math-inline", "math-display"]],
        },
      })
      .use(rehypeMathJax)
      .use(rehypeStringify)
      .process(rawText)
      .then((processedContent) => {
        setInnerHtml(processedContent.toString());
      });
  }, [rawText]);
  //debug
    useEffect(() => {
        const ast = unified()
            .use(remarkParse)
            .use(remarkMath,{singleDollarTextMath:false})
            .parse(rawText)
        console.log(ast)

     unified()
            .use(remarkRehype)
            .run(ast)
            .then( (root) => console.log(root))
    }, [rawText]);


  // Potential security risk with `dangerouslySetInnerHTML`
  return (
    <p ref={ref} {...props} dangerouslySetInnerHTML={{ __html: innerHtml }} />
  );
});

export default Markdown;

Markdown.displayName = "Markdown";
