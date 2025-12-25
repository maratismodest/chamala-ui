import React, {ComponentPropsWithRef, FC} from 'react';

type TextareaProps = ComponentPropsWithRef<'textarea'> & {}

export const Textarea: FC<TextareaProps> = ({children, ...rest}) => {
    return (
        <textarea {...rest}>
                {children}
        </textarea>
    );
};

