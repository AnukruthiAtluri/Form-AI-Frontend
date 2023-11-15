/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type PortfolioLinksCreateFormInputValues = {
    LinkedinURL?: string;
    GithubURL?: string;
    PortfolioURL?: string;
    OtherURL?: string;
};
export declare type PortfolioLinksCreateFormValidationValues = {
    LinkedinURL?: ValidationFunction<string>;
    GithubURL?: ValidationFunction<string>;
    PortfolioURL?: ValidationFunction<string>;
    OtherURL?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PortfolioLinksCreateFormOverridesProps = {
    PortfolioLinksCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    LinkedinURL?: PrimitiveOverrideProps<TextFieldProps>;
    GithubURL?: PrimitiveOverrideProps<TextFieldProps>;
    PortfolioURL?: PrimitiveOverrideProps<TextFieldProps>;
    OtherURL?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PortfolioLinksCreateFormProps = React.PropsWithChildren<{
    overrides?: PortfolioLinksCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PortfolioLinksCreateFormInputValues) => PortfolioLinksCreateFormInputValues;
    onSuccess?: (fields: PortfolioLinksCreateFormInputValues) => void;
    onError?: (fields: PortfolioLinksCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PortfolioLinksCreateFormInputValues) => PortfolioLinksCreateFormInputValues;
    onValidate?: PortfolioLinksCreateFormValidationValues;
} & React.CSSProperties>;
export default function PortfolioLinksCreateForm(props: PortfolioLinksCreateFormProps): React.ReactElement;
