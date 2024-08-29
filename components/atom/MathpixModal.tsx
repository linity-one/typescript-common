'use client'
import React, {useState, FC} from 'react';
import {image_to_latex} from "./MathpixModal/fetch";
import {VariantProps} from "cva";
import Button, {ButtonVariants} from "../ui/Button";
import Modal from "./Modal";
import FileInput from "../ui/FileInput";
import {AICreateIcon} from "../ui/Icons";
import {promiseToast} from "../toast/toast";
import {locale, localized_string} from "../../lib/localized";


const display_data : {modal_text:localized_string, subtext:localized_string,button_Text:localized_string} =
    {
        modal_text: {en:'upload your file'},
        button_Text:{en:'convert'},
        subtext: {en:'all usual image types are accepted'},
    }

interface MathpixModalProps extends  React.ButtonHTMLAttributes<HTMLButtonElement> {
    callback?: (text: string) => Promise<void>
    buttonVariants?: VariantProps<typeof ButtonVariants>
    locale?: locale
}


const MathpixModal: FC<MathpixModalProps> = ({locale='en',callback, buttonVariants:{variant,size} = {theme:'dark',variant:'tertiary'}}) => {
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
        if (file == null) {
            return
        }
        let prom =  image_to_latex(file).then(
            value => {
                callback ? callback(value).then(
                    ()  =>  {
                        closeModal()
                    },
                    reason => {
                        throw reason
                    }
                ) : {}

            },
            reason => {
                throw reason
            }
        )
        promiseToast( prom, {
                pending: 'Loading...',
                success: 'picture has been converted',
                error:  'Oops... '
            }
        )

    };

    return (
        <>
            <Button
                variant={variant}
                size={size}
                type={"button"}
                onClick={openModal}
            >
                Create from picture
                <AICreateIcon aria-hidden="true"  size='default'/>
            </Button>

            <Modal  title={display_data.modal_text[locale]!} isOpen={isOpen} close={closeModal} >
                <FileInput className='mb-1' fileIcons={['jpg','png']} subtext={display_data.subtext[locale]!}/>
                <Button onClick={handleUpload} className='w-full'>{display_data.button_Text[locale]!}</Button>
            </Modal>
        </>
    );
}

export default MathpixModal;