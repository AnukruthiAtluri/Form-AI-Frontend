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
export declare type WorkExperienceCreateFormInputValues = {
    UserProfile?: any;
};
export declare type WorkExperienceCreateFormValidationValues = {
    UserProfile?: ValidationFunction<any>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type WorkExperienceCreateFormOverridesProps = {
    WorkExperienceCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    UserProfile?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type WorkExperienceCreateFormProps = React.PropsWithChildren<{
    overrides?: WorkExperienceCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: WorkExperienceCreateFormInputValues) => WorkExperienceCreateFormInputValues;
    onSuccess?: (fields: WorkExperienceCreateFormInputValues) => void;
    onError?: (fields: WorkExperienceCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: WorkExperienceCreateFormInputValues) => WorkExperienceCreateFormInputValues;
    onValidate?: WorkExperienceCreateFormValidationValues;
} & React.CSSProperties>;
export default function WorkExperienceCreateForm(props: WorkExperienceCreateFormProps): React.ReactElement;
