/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { PortfolioLinks } from "../models";
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
export declare type PortfolioLinksUpdateFormInputValues = {
    LinkedinURL?: string;
    GithubURL?: string;
    PortfolioURL?: string;
    OtherURL?: string;
};
export declare type PortfolioLinksUpdateFormValidationValues = {
    LinkedinURL?: ValidationFunction<string>;
    GithubURL?: ValidationFunction<string>;
    PortfolioURL?: ValidationFunction<string>;
    OtherURL?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PortfolioLinksUpdateFormOverridesProps = {
    PortfolioLinksUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    LinkedinURL?: PrimitiveOverrideProps<TextFieldProps>;
    GithubURL?: PrimitiveOverrideProps<TextFieldProps>;
    PortfolioURL?: PrimitiveOverrideProps<TextFieldProps>;
    OtherURL?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PortfolioLinksUpdateFormProps = React.PropsWithChildren<{
    overrides?: PortfolioLinksUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    portfolioLinks?: PortfolioLinks;
    onSubmit?: (fields: PortfolioLinksUpdateFormInputValues) => PortfolioLinksUpdateFormInputValues;
    onSuccess?: (fields: PortfolioLinksUpdateFormInputValues) => void;
    onError?: (fields: PortfolioLinksUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PortfolioLinksUpdateFormInputValues) => PortfolioLinksUpdateFormInputValues;
    onValidate?: PortfolioLinksUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PortfolioLinksUpdateForm(props: PortfolioLinksUpdateFormProps): React.ReactElement;
