import React, { forwardRef, InputHTMLAttributes } from 'react'
import { cva, VariantProps } from 'cva'
import { cn } from '@/common/lib/cn'
import FileIcon, { fileName } from './FileIcon'
import Tag from './Tag'
import { Field, Input } from '@headlessui/react'

const FileInputVariants = cva('border border-dashed  relative', {
    variants: {
        theme: {
            dark: '',
            light: '',
        },
    },
    defaultVariants: {
        theme: 'dark',
    },
})

interface FileInputProps
    extends InputHTMLAttributes<HTMLInputElement>,
        VariantProps<typeof FileInputVariants> {
    fileIcons: fileName[]
    text: string
    bold_text: string
    subtext: string
    files: File[] | string[]
}

const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
    ({ text, bold_text, files, subtext, fileIcons, className, type: _, theme, ...props }, ref) => {
        return (
            <Field>
                <div
                    className={cn(
                        'border border-dashed border-primary-400 relative rounded-xl py-4 flex flex-col gap-1',
                        className,
                    )}
                >
                    <Input
                        multiple
                        type={'file'}
                        className="cursor-pointer absolute block opacity-0 w-full h-full z-50"
                        ref={ref}
                        {...props}
                    />
                    <div className="flex flex-row mx-auto w-fit">
                        {fileIcons.map((file, idx) => (
                            <FileIcon theme={theme ? theme : undefined} fileName={file} key={idx} />
                        ))}
                    </div>
                    <div className="text-center top-0 right-0 left-0 m-auto text-primary-600">
                        <p>
                            {text}
                            <span className={'font-bold'}>{bold_text}</span>
                        </p>
                        <p className="text-subtext ">{subtext}</p>
                    </div>
                </div>
                {files && files.length > 0 && (
                    <ul className="list-none flex flex-row gap-x-4">
                        {files.map((file, index) => (
                            <li key={index}>
                                <Tag>{typeof file === 'string' ? file : file.name}</Tag>
                            </li>
                        ))}
                    </ul>
                )}
            </Field>
        )
    },
)

FileInput.displayName = 'FileInput'

export default FileInput
