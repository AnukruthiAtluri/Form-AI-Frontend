/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { UserProfile as UserProfile0 } from "../models";
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
export declare type EducationDetailsCreateFormInputValues = {
    SchoolName?: string;
    Major?: string;
    DegreeType?: string;
    GPA?: number;
    StartMonth?: string;
    StartYear?: string;
    EndMonth?: string;
    EndYear?: string;
    UserProfile?: UserProfile0;
};
export declare type EducationDetailsCreateFormValidationValues = {
    SchoolName?: ValidationFunction<string>;
    Major?: ValidationFunction<string>;
    DegreeType?: ValidationFunction<string>;
    GPA?: ValidationFunction<number>;
    StartMonth?: ValidationFunction<string>;
    StartYear?: ValidationFunction<string>;
    EndMonth?: ValidationFunction<string>;
    EndYear?: ValidationFunction<string>;
    UserProfile?: ValidationFunction<UserProfile0>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EducationDetailsCreateFormOverridesProps = {
    EducationDetailsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    SchoolName?: PrimitiveOverrideProps<TextFieldProps>;
    Major?: PrimitiveOverrideProps<TextFieldProps>;
    DegreeType?: PrimitiveOverrideProps<TextFieldProps>;
    GPA?: PrimitiveOverrideProps<TextFieldProps>;
    StartMonth?: PrimitiveOverrideProps<TextFieldProps>;
    StartYear?: PrimitiveOverrideProps<TextFieldProps>;
    EndMonth?: PrimitiveOverrideProps<TextFieldProps>;
    EndYear?: PrimitiveOverrideProps<TextFieldProps>;
    UserProfile?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type EducationDetailsCreateFormProps = React.PropsWithChildren<{
    overrides?: EducationDetailsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: EducationDetailsCreateFormInputValues) => EducationDetailsCreateFormInputValues;
    onSuccess?: (fields: EducationDetailsCreateFormInputValues) => void;
    onError?: (fields: EducationDetailsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EducationDetailsCreateFormInputValues) => EducationDetailsCreateFormInputValues;
    onValidate?: EducationDetailsCreateFormValidationValues;
} & React.CSSProperties>;
export default function EducationDetailsCreateForm(props: EducationDetailsCreateFormProps): React.ReactElement;
