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
export declare type EducationDetailsUpdateFormInputValues = {
    SchoolName?: string;
    Major?: string;
    DegreeType?: string;
    GPA?: number;
    StartMonth?: string;
    StartYear?: string;
    EndMonth?: string;
    EndYear?: string;
    UserProfile?: any;
};
export declare type EducationDetailsUpdateFormValidationValues = {
    SchoolName?: ValidationFunction<string>;
    Major?: ValidationFunction<string>;
    DegreeType?: ValidationFunction<string>;
    GPA?: ValidationFunction<number>;
    StartMonth?: ValidationFunction<string>;
    StartYear?: ValidationFunction<string>;
    EndMonth?: ValidationFunction<string>;
    EndYear?: ValidationFunction<string>;
    UserProfile?: ValidationFunction<any>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EducationDetailsUpdateFormOverridesProps = {
    EducationDetailsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type EducationDetailsUpdateFormProps = React.PropsWithChildren<{
    overrides?: EducationDetailsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    educationDetails?: any;
    onSubmit?: (fields: EducationDetailsUpdateFormInputValues) => EducationDetailsUpdateFormInputValues;
    onSuccess?: (fields: EducationDetailsUpdateFormInputValues) => void;
    onError?: (fields: EducationDetailsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EducationDetailsUpdateFormInputValues) => EducationDetailsUpdateFormInputValues;
    onValidate?: EducationDetailsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EducationDetailsUpdateForm(props: EducationDetailsUpdateFormProps): React.ReactElement;
