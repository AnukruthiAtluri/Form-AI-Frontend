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
export declare type EducationHistoryUpdateFormInputValues = {
    UserProfile?: any;
};
export declare type EducationHistoryUpdateFormValidationValues = {
    UserProfile?: ValidationFunction<any>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EducationHistoryUpdateFormOverridesProps = {
    EducationHistoryUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    UserProfile?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type EducationHistoryUpdateFormProps = React.PropsWithChildren<{
    overrides?: EducationHistoryUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    educationHistory?: any;
    onSubmit?: (fields: EducationHistoryUpdateFormInputValues) => EducationHistoryUpdateFormInputValues;
    onSuccess?: (fields: EducationHistoryUpdateFormInputValues) => void;
    onError?: (fields: EducationHistoryUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EducationHistoryUpdateFormInputValues) => EducationHistoryUpdateFormInputValues;
    onValidate?: EducationHistoryUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EducationHistoryUpdateForm(props: EducationHistoryUpdateFormProps): React.ReactElement;
