/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ExperienceDetailsUpdateFormInputValues = {
    Company?: string;
    Location?: string;
    JobTitle?: string;
    ExperienceType?: string;
    StartMonth?: string;
    StartYear?: string;
    EndMonth?: string;
    EndYear?: string;
    Description?: string;
};
export declare type ExperienceDetailsUpdateFormValidationValues = {
    Company?: ValidationFunction<string>;
    Location?: ValidationFunction<string>;
    JobTitle?: ValidationFunction<string>;
    ExperienceType?: ValidationFunction<string>;
    StartMonth?: ValidationFunction<string>;
    StartYear?: ValidationFunction<string>;
    EndMonth?: ValidationFunction<string>;
    EndYear?: ValidationFunction<string>;
    Description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ExperienceDetailsUpdateFormOverridesProps = {
    ExperienceDetailsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Company?: PrimitiveOverrideProps<TextFieldProps>;
    Location?: PrimitiveOverrideProps<SelectFieldProps>;
    JobTitle?: PrimitiveOverrideProps<TextFieldProps>;
    ExperienceType?: PrimitiveOverrideProps<SelectFieldProps>;
    StartMonth?: PrimitiveOverrideProps<TextFieldProps>;
    StartYear?: PrimitiveOverrideProps<TextFieldProps>;
    EndMonth?: PrimitiveOverrideProps<TextFieldProps>;
    EndYear?: PrimitiveOverrideProps<TextFieldProps>;
    Description?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type ExperienceDetailsUpdateFormProps = React.PropsWithChildren<{
    overrides?: ExperienceDetailsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    experienceDetails?: any;
    onSubmit?: (fields: ExperienceDetailsUpdateFormInputValues) => ExperienceDetailsUpdateFormInputValues;
    onSuccess?: (fields: ExperienceDetailsUpdateFormInputValues) => void;
    onError?: (fields: ExperienceDetailsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ExperienceDetailsUpdateFormInputValues) => ExperienceDetailsUpdateFormInputValues;
    onValidate?: ExperienceDetailsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ExperienceDetailsUpdateForm(props: ExperienceDetailsUpdateFormProps): React.ReactElement;
