//old code from the old codebase


'use client'
import {FC, forwardRef, TextareaHTMLAttributes, useState} from 'react'
import {useController, UseFormRegisterReturn} from "react-hook-form";
import {Tab} from '@headlessui/react'
import { AtSymbolIcon, CodeBracketIcon, LinkIcon } from '@heroicons/react/20/solid'
import {cn} from "@/lib/cn";
import Button, {buttonVariants} from "@/ui/Button";
import {CubeTransparentIcon} from "@heroicons/react/24/solid";
import FieldLabel from "@/ui/FieldLabel";
import Markdown from "@/ui/Markdown";
import FieldError from "@/ui/FieldError";
import FieldDescription from "@/ui/FieldDescription";
import Textarea from "@/ui/Textarea";
import MathpixModal from "@/component/atoms/MathPixModal";

interface  MarkdownTextareaGroupProps {
    className?:string
    name:string
    label:string
    errormsg?:string
    description?:string
}

const MarkdownTextareaGroup:FC<MarkdownTextareaGroupProps> =
    ({className, name,label,errormsg,description}) => {

        const { field: { onChange, value,  ref, onBlur,disabled } } = useController(
            {name: name}
        );

        return <div className={className}>
            <Tab.Group>
                {({ selectedIndex }) => (
                    <>
                        {/*Area for the tabs and actions on top start here*/}
                        <Tab.List className="flex gap-x-4 items-center">
                            <FieldLabel htmlFor={name}>{label}</FieldLabel>
                            <Tab
                                className={({ selected }) =>
                                    cn(
                                        selected
                                            ? buttonVariants({variant:'active',size:'sm'})
                                            : buttonVariants({variant:'soft',size:'sm'}),
                                        ''
                                    )
                                }
                            >
                                Write
                            </Tab>
                            <Tab
                                className={({ selected }) =>
                                    cn(
                                        selected
                                            ? buttonVariants({variant:'active',size:'sm'})
                                            : buttonVariants({variant:'soft',size:'sm'}),
                                        ''
                                    )
                                }
                            >
                                Preview
                            </Tab>

                            {selectedIndex === 0 ? (
                                <div className="ml-auto flex items-center space-x-5">
                                    <MathpixModal callback={onChange} />
                                </div>
                            ) : null}
                        </Tab.List>
                        {/*Area for the Panels starts here*/}
                        <Tab.Panels className="mt-2">
                            {/*Editor*/}
                            <Tab.Panel className="-m-0.5 rounded-lg p-0.5">
                                <Textarea
                                    ref={ref}
                                    onBlur={onBlur}
                                    disabled={disabled}
                                    rows={5}
                                    id={name}
                                    placeholder="Add your Latex..."
                                    value={value}
                                    onChange={e => {
                                        onChange(e.target.value)
                                    }}
                                />
                            </Tab.Panel>
                            {/*Viewer*/}
                            <Tab.Panel >
                                <div className="my-4 pb-4 border-b">
                                    <Markdown rawText={value} />
                                </div>
                            </Tab.Panel>
                        </Tab.Panels>
                    </>
                )}
            </Tab.Group>
            {errormsg ?
                <FieldError>{errormsg}</FieldError> :
                <FieldDescription>{description}</FieldDescription>
            }
        </div>
    }

MarkdownTextareaGroup.displayName = "MarkdownTextareaGroup"

export default MarkdownTextareaGroup