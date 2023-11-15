/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps } from "@aws-amplify/ui-react";
import { StorageManagerProps } from "@aws-amplify/ui-react-storage";
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
export declare type ResumeCreateFormInputValues = {
    Resume?: string;
};
export declare type ResumeCreateFormValidationValues = {
    Resume?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ResumeCreateFormOverridesProps = {
    ResumeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Resume?: PrimitiveOverrideProps<StorageManagerProps>;
} & EscapeHatchProps;
export declare type ResumeCreateFormProps = React.PropsWithChildren<{
    overrides?: ResumeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ResumeCreateFormInputValues) => ResumeCreateFormInputValues;
    onSuccess?: (fields: ResumeCreateFormInputValues) => void;
    onError?: (fields: ResumeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ResumeCreateFormInputValues) => ResumeCreateFormInputValues;
    onValidate?: ResumeCreateFormValidationValues;
} & React.CSSProperties>;
export default function ResumeCreateForm(props: ResumeCreateFormProps): React.ReactElement;
