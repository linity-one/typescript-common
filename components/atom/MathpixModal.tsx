//old code from the old codebase


'use client'
import React, {useState, FC} from 'react';
import Button from "@/ui/Button";
import Modal from "@/ui/Modal";
import Title from "@/ui/Title";
import {CubeTransparentIcon} from "@heroicons/react/24/solid";
import {image_to_latex} from "@/lib/mathpix/fetch";
import {toast} from "sonner";
import {create_explanation} from "@/lib/backend/explanation";



interface MathpixModalProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    callback?: (text: string) => void
}


const MathpixModal: FC<MathpixModalProps> = ({callback}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [file, setFile] = useState<File|null>(null);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };


    const handleFileChange = (event: any) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        closeModal()
        if (file == null) {
            return
        }
        let prom =  image_to_latex(file).then(
            value => {
                callback ? callback(value) : {}

            },
            reason => {
                throw reason
            }
        )
        toast.promise( prom, {
                loading: 'Loading...',
                success: () => {return 'picture has been converted'},
                error: () => {return 'Oops... '}
            }
        )

    };

    return (
        <>
            <Button
                type={"button"}
                onClick={openModal}
            >
                <span className={'mr-2'}>Create from picture</span>
                <CubeTransparentIcon className="h-5 w-5" aria-hidden="true" />
            </Button>

            <Modal isOpen={isOpen} close={()=>setIsOpen(false)}>
                <Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                >
                    Upload File
                </Title>

                <div className="mt-2">
                    <input type="file" onChange={handleFileChange}/>
                </div>

                <div className="mt-4">
                    <button
                        type="button"
                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                        onClick={handleUpload}
                    >
                        Submit
                    </button>
                </div>
            </Modal>
        </>
    );
}

export default MathpixModal;