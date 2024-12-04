'use client'
import { FC, forwardRef, HTMLAttributes, useState, useEffect } from 'react'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkMath from 'remark-math'
import remarkRehype from 'remark-rehype'
import remarkGfm from 'remark-gfm'
import rehypeStringify from 'rehype-stringify'
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize'
import rehypeMathJax from 'rehype-mathjax'
import addClasses from 'rehype-class-names'

interface MarkdownProps extends HTMLAttributes<HTMLDivElement> {
    rawText: string
}

const Markdown: FC<MarkdownProps> = forwardRef<HTMLDivElement, MarkdownProps>(
    ({ rawText, ...props }, ref) => {
        const [innerHtml, setInnerHtml] = useState('')

        useEffect(() => {
            unified()
                .use(remarkParse)
                .use(remarkGfm)
                .use(remarkMath, { singleDollarTextMath: true })
                .use(remarkRehype)
                .use(rehypeSanitize, {
                    ...defaultSchema,
                    attributes: {
                        ...defaultSchema.attributes,
                        // The `language-*` regex is allowed by default.
                        code: [['className', /^language-./, 'math-inline', 'math-display']],
                    },
                })
                .use(rehypeMathJax)
                .use(addClasses, {
                    table: 'table-auto border-collapse border border-accent w-full text-left ',
                    th: 'border border-primary-300 px-1.5 py-1 bg-primary-100',
                    td: 'border border-primary-300 px-1.5 py-1',
                    tr: 'odd:bg-primary-50',
                    blockquote: 'bg-primary-50 text-center py-1 px-2 border-x-2 border-primary-400',
                })
                .use(rehypeStringify)
                .process(rawText)
                .then((processedContent) => {
                    setInnerHtml(processedContent.toString())
                })
        }, [rawText])
        //debug
        useEffect(() => {
            const ast = unified()
                .use(remarkParse)
                .use(remarkMath, { singleDollarTextMath: false })
                .parse(rawText)
            console.log(ast)

            unified()
                .use(remarkRehype)
                .run(ast)
                .then((root) => console.log(root))
        }, [rawText])

        // Potential security risk with `dangerouslySetInnerHTML`
        return <div ref={ref} {...props} dangerouslySetInnerHTML={{ __html: innerHtml }} />
    },
)

export default Markdown

Markdown.displayName = 'Markdown'
