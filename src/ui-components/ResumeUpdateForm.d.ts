/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { StorageManagerProps } from "@aws-amplify/ui-react-storage";
import { Resume as Resume0 } from "../models";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ResumeUpdateFormInputValues = {
    Resume?: string;
};
export declare type ResumeUpdateFormValidationValues = {
    Resume?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ResumeUpdateFormOverridesProps = {
    ResumeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Resume?: PrimitiveOverrideProps<StorageManagerProps>;
} & EscapeHatchProps;
export declare type ResumeUpdateFormProps = React.PropsWithChildren<{
    overrides?: ResumeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    resume?: Resume0;
    onSubmit?: (fields: ResumeUpdateFormInputValues) => ResumeUpdateFormInputValues;
    onSuccess?: (fields: ResumeUpdateFormInputValues) => void;
    onError?: (fields: ResumeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ResumeUpdateFormInputValues) => ResumeUpdateFormInputValues;
    onValidate?: ResumeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ResumeUpdateForm(props: ResumeUpdateFormProps): React.ReactElement;
