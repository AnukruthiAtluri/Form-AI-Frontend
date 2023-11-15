/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type UntitledModelCreateFormInputValues = {
    Resume?: string;
    UserProfile?: any;
};
export declare type UntitledModelCreateFormValidationValues = {
    Resume?: ValidationFunction<string>;
    UserProfile?: ValidationFunction<any>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UntitledModelCreateFormOverridesProps = {
    UntitledModelCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Resume?: PrimitiveOverrideProps<TextFieldProps>;
    UserProfile?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type UntitledModelCreateFormProps = React.PropsWithChildren<{
    overrides?: UntitledModelCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UntitledModelCreateFormInputValues) => UntitledModelCreateFormInputValues;
    onSuccess?: (fields: UntitledModelCreateFormInputValues) => void;
    onError?: (fields: UntitledModelCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UntitledModelCreateFormInputValues) => UntitledModelCreateFormInputValues;
    onValidate?: UntitledModelCreateFormValidationValues;
} & React.CSSProperties>;
export default function UntitledModelCreateForm(props: UntitledModelCreateFormProps): React.ReactElement;
