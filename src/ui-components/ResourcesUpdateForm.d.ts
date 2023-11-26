/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Resources } from "../models";
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
export declare type ResourcesUpdateFormInputValues = {
    CurrentRole?: string;
};
export declare type ResourcesUpdateFormValidationValues = {
    CurrentRole?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ResourcesUpdateFormOverridesProps = {
    ResourcesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    CurrentRole?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ResourcesUpdateFormProps = React.PropsWithChildren<{
    overrides?: ResourcesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    resources?: Resources;
    onSubmit?: (fields: ResourcesUpdateFormInputValues) => ResourcesUpdateFormInputValues;
    onSuccess?: (fields: ResourcesUpdateFormInputValues) => void;
    onError?: (fields: ResourcesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ResourcesUpdateFormInputValues) => ResourcesUpdateFormInputValues;
    onValidate?: ResourcesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ResourcesUpdateForm(props: ResourcesUpdateFormProps): React.ReactElement;
