/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps } from "@aws-amplify/ui-react";
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
export declare type EducationHistoryCreateFormInputValues = {
    UserProfile?: any;
};
export declare type EducationHistoryCreateFormValidationValues = {
    UserProfile?: ValidationFunction<any>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EducationHistoryCreateFormOverridesProps = {
    EducationHistoryCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    UserProfile?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type EducationHistoryCreateFormProps = React.PropsWithChildren<{
    overrides?: EducationHistoryCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EducationHistoryCreateFormInputValues) => EducationHistoryCreateFormInputValues;
    onSuccess?: (fields: EducationHistoryCreateFormInputValues) => void;
    onError?: (fields: EducationHistoryCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EducationHistoryCreateFormInputValues) => EducationHistoryCreateFormInputValues;
    onValidate?: EducationHistoryCreateFormValidationValues;
} & React.CSSProperties>;
export default function EducationHistoryCreateForm(props: EducationHistoryCreateFormProps): React.ReactElement;
