/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { PortfolioLinks } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function PortfolioLinksUpdateForm(props) {
  const {
    id: idProp,
    portfolioLinks: portfolioLinksModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    LinkedinURL: "",
    GithubURL: "",
    PortfolioURL: "",
    OtherURL: "",
  };
  const [LinkedinURL, setLinkedinURL] = React.useState(
    initialValues.LinkedinURL
  );
  const [GithubURL, setGithubURL] = React.useState(initialValues.GithubURL);
  const [PortfolioURL, setPortfolioURL] = React.useState(
    initialValues.PortfolioURL
  );
  const [OtherURL, setOtherURL] = React.useState(initialValues.OtherURL);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = portfolioLinksRecord
      ? { ...initialValues, ...portfolioLinksRecord }
      : initialValues;
    setLinkedinURL(cleanValues.LinkedinURL);
    setGithubURL(cleanValues.GithubURL);
    setPortfolioURL(cleanValues.PortfolioURL);
    setOtherURL(cleanValues.OtherURL);
    setErrors({});
  };
  const [portfolioLinksRecord, setPortfolioLinksRecord] = React.useState(
    portfolioLinksModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(PortfolioLinks, idProp)
        : portfolioLinksModelProp;
      setPortfolioLinksRecord(record);
    };
    queryData();
  }, [idProp, portfolioLinksModelProp]);
  React.useEffect(resetStateValues, [portfolioLinksRecord]);
  const validations = {
    LinkedinURL: [{ type: "URL" }],
    GithubURL: [{ type: "URL" }],
    PortfolioURL: [],
    OtherURL: [{ type: "URL" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          LinkedinURL,
          GithubURL,
          PortfolioURL,
          OtherURL,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            PortfolioLinks.copyOf(portfolioLinksRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "PortfolioLinksUpdateForm")}
      {...rest}
    >
      <TextField
        label="Linkedin url"
        isRequired={false}
        isReadOnly={false}
        value={LinkedinURL}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LinkedinURL: value,
              GithubURL,
              PortfolioURL,
              OtherURL,
            };
            const result = onChange(modelFields);
            value = result?.LinkedinURL ?? value;
          }
          if (errors.LinkedinURL?.hasError) {
            runValidationTasks("LinkedinURL", value);
          }
          setLinkedinURL(value);
        }}
        onBlur={() => runValidationTasks("LinkedinURL", LinkedinURL)}
        errorMessage={errors.LinkedinURL?.errorMessage}
        hasError={errors.LinkedinURL?.hasError}
        {...getOverrideProps(overrides, "LinkedinURL")}
      ></TextField>
      <TextField
        label="Github url"
        isRequired={false}
        isReadOnly={false}
        value={GithubURL}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LinkedinURL,
              GithubURL: value,
              PortfolioURL,
              OtherURL,
            };
            const result = onChange(modelFields);
            value = result?.GithubURL ?? value;
          }
          if (errors.GithubURL?.hasError) {
            runValidationTasks("GithubURL", value);
          }
          setGithubURL(value);
        }}
        onBlur={() => runValidationTasks("GithubURL", GithubURL)}
        errorMessage={errors.GithubURL?.errorMessage}
        hasError={errors.GithubURL?.hasError}
        {...getOverrideProps(overrides, "GithubURL")}
      ></TextField>
      <TextField
        label="Portfolio url"
        isRequired={false}
        isReadOnly={false}
        value={PortfolioURL}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LinkedinURL,
              GithubURL,
              PortfolioURL: value,
              OtherURL,
            };
            const result = onChange(modelFields);
            value = result?.PortfolioURL ?? value;
          }
          if (errors.PortfolioURL?.hasError) {
            runValidationTasks("PortfolioURL", value);
          }
          setPortfolioURL(value);
        }}
        onBlur={() => runValidationTasks("PortfolioURL", PortfolioURL)}
        errorMessage={errors.PortfolioURL?.errorMessage}
        hasError={errors.PortfolioURL?.hasError}
        {...getOverrideProps(overrides, "PortfolioURL")}
      ></TextField>
      <TextField
        label="Other url"
        isRequired={false}
        isReadOnly={false}
        value={OtherURL}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              LinkedinURL,
              GithubURL,
              PortfolioURL,
              OtherURL: value,
            };
            const result = onChange(modelFields);
            value = result?.OtherURL ?? value;
          }
          if (errors.OtherURL?.hasError) {
            runValidationTasks("OtherURL", value);
          }
          setOtherURL(value);
        }}
        onBlur={() => runValidationTasks("OtherURL", OtherURL)}
        errorMessage={errors.OtherURL?.errorMessage}
        hasError={errors.OtherURL?.hasError}
        {...getOverrideProps(overrides, "OtherURL")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || portfolioLinksModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || portfolioLinksModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
