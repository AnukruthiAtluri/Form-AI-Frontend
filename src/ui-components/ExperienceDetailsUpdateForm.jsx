/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { getExperienceDetails } from "../graphql/queries";
import { updateExperienceDetails } from "../graphql/mutations";
export default function ExperienceDetailsUpdateForm(props) {
  const {
    id: idProp,
    experienceDetails: experienceDetailsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Company: "",
    Location: "",
    JobTitle: "",
    ExperienceType: "",
    StartMonth: "",
    StartYear: "",
    EndMonth: "",
    EndYear: "",
    Description: "",
  };
  const [Company, setCompany] = React.useState(initialValues.Company);
  const [Location, setLocation] = React.useState(initialValues.Location);
  const [JobTitle, setJobTitle] = React.useState(initialValues.JobTitle);
  const [ExperienceType, setExperienceType] = React.useState(
    initialValues.ExperienceType
  );
  const [StartMonth, setStartMonth] = React.useState(initialValues.StartMonth);
  const [StartYear, setStartYear] = React.useState(initialValues.StartYear);
  const [EndMonth, setEndMonth] = React.useState(initialValues.EndMonth);
  const [EndYear, setEndYear] = React.useState(initialValues.EndYear);
  const [Description, setDescription] = React.useState(
    initialValues.Description
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = experienceDetailsRecord
      ? { ...initialValues, ...experienceDetailsRecord }
      : initialValues;
    setCompany(cleanValues.Company);
    setLocation(cleanValues.Location);
    setJobTitle(cleanValues.JobTitle);
    setExperienceType(cleanValues.ExperienceType);
    setStartMonth(cleanValues.StartMonth);
    setStartYear(cleanValues.StartYear);
    setEndMonth(cleanValues.EndMonth);
    setEndYear(cleanValues.EndYear);
    setDescription(cleanValues.Description);
    setErrors({});
  };
  const [experienceDetailsRecord, setExperienceDetailsRecord] = React.useState(
    experienceDetailsModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getExperienceDetails.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getExperienceDetails
        : experienceDetailsModelProp;
      setExperienceDetailsRecord(record);
    };
    queryData();
  }, [idProp, experienceDetailsModelProp]);
  React.useEffect(resetStateValues, [experienceDetailsRecord]);
  const validations = {
    Company: [],
    Location: [],
    JobTitle: [],
    ExperienceType: [],
    StartMonth: [],
    StartYear: [],
    EndMonth: [],
    EndYear: [],
    Description: [],
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
          Company: Company ?? null,
          Location: Location ?? null,
          JobTitle: JobTitle ?? null,
          ExperienceType: ExperienceType ?? null,
          StartMonth: StartMonth ?? null,
          StartYear: StartYear ?? null,
          EndMonth: EndMonth ?? null,
          EndYear: EndYear ?? null,
          Description: Description ?? null,
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
          await API.graphql({
            query: updateExperienceDetails.replaceAll("__typename", ""),
            variables: {
              input: {
                id: experienceDetailsRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ExperienceDetailsUpdateForm")}
      {...rest}
    >
      <TextField
        label="Company"
        isRequired={false}
        isReadOnly={false}
        value={Company}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Company: value,
              Location,
              JobTitle,
              ExperienceType,
              StartMonth,
              StartYear,
              EndMonth,
              EndYear,
              Description,
            };
            const result = onChange(modelFields);
            value = result?.Company ?? value;
          }
          if (errors.Company?.hasError) {
            runValidationTasks("Company", value);
          }
          setCompany(value);
        }}
        onBlur={() => runValidationTasks("Company", Company)}
        errorMessage={errors.Company?.errorMessage}
        hasError={errors.Company?.hasError}
        {...getOverrideProps(overrides, "Company")}
      ></TextField>
      <SelectField
        label="Location"
        placeholder="Please select an option"
        isDisabled={false}
        value={Location}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Company,
              Location: value,
              JobTitle,
              ExperienceType,
              StartMonth,
              StartYear,
              EndMonth,
              EndYear,
              Description,
            };
            const result = onChange(modelFields);
            value = result?.Location ?? value;
          }
          if (errors.Location?.hasError) {
            runValidationTasks("Location", value);
          }
          setLocation(value);
        }}
        onBlur={() => runValidationTasks("Location", Location)}
        errorMessage={errors.Location?.errorMessage}
        hasError={errors.Location?.hasError}
        {...getOverrideProps(overrides, "Location")}
      >
        <option
          children="Sunnyvale"
          value="Sunnyvale"
          {...getOverrideProps(overrides, "Locationoption0")}
        ></option>
        <option
          children="Arlington"
          value="Arlington"
          {...getOverrideProps(overrides, "Locationoption1")}
        ></option>
        <option
          children="Boston"
          value="Boston"
          {...getOverrideProps(overrides, "Locationoption2")}
        ></option>
        <option
          children="NewYork"
          value="NewYork"
          {...getOverrideProps(overrides, "Locationoption3")}
        ></option>
      </SelectField>
      <TextField
        label="Job title"
        isRequired={false}
        isReadOnly={false}
        value={JobTitle}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Company,
              Location,
              JobTitle: value,
              ExperienceType,
              StartMonth,
              StartYear,
              EndMonth,
              EndYear,
              Description,
            };
            const result = onChange(modelFields);
            value = result?.JobTitle ?? value;
          }
          if (errors.JobTitle?.hasError) {
            runValidationTasks("JobTitle", value);
          }
          setJobTitle(value);
        }}
        onBlur={() => runValidationTasks("JobTitle", JobTitle)}
        errorMessage={errors.JobTitle?.errorMessage}
        hasError={errors.JobTitle?.hasError}
        {...getOverrideProps(overrides, "JobTitle")}
      ></TextField>
      <SelectField
        label="Experience type"
        placeholder="Please select an option"
        isDisabled={false}
        value={ExperienceType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Company,
              Location,
              JobTitle,
              ExperienceType: value,
              StartMonth,
              StartYear,
              EndMonth,
              EndYear,
              Description,
            };
            const result = onChange(modelFields);
            value = result?.ExperienceType ?? value;
          }
          if (errors.ExperienceType?.hasError) {
            runValidationTasks("ExperienceType", value);
          }
          setExperienceType(value);
        }}
        onBlur={() => runValidationTasks("ExperienceType", ExperienceType)}
        errorMessage={errors.ExperienceType?.errorMessage}
        hasError={errors.ExperienceType?.hasError}
        {...getOverrideProps(overrides, "ExperienceType")}
      >
        <option
          children="Internship"
          value="Internship"
          {...getOverrideProps(overrides, "ExperienceTypeoption0")}
        ></option>
        <option
          children="Part-Time"
          value="Part-Time"
          {...getOverrideProps(overrides, "ExperienceTypeoption1")}
        ></option>
        <option
          children="full-Time"
          value="full-Time"
          {...getOverrideProps(overrides, "ExperienceTypeoption2")}
        ></option>
      </SelectField>
      <TextField
        label="Start month"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={StartMonth}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Company,
              Location,
              JobTitle,
              ExperienceType,
              StartMonth: value,
              StartYear,
              EndMonth,
              EndYear,
              Description,
            };
            const result = onChange(modelFields);
            value = result?.StartMonth ?? value;
          }
          if (errors.StartMonth?.hasError) {
            runValidationTasks("StartMonth", value);
          }
          setStartMonth(value);
        }}
        onBlur={() => runValidationTasks("StartMonth", StartMonth)}
        errorMessage={errors.StartMonth?.errorMessage}
        hasError={errors.StartMonth?.hasError}
        {...getOverrideProps(overrides, "StartMonth")}
      ></TextField>
      <TextField
        label="Start year"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={StartYear}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Company,
              Location,
              JobTitle,
              ExperienceType,
              StartMonth,
              StartYear: value,
              EndMonth,
              EndYear,
              Description,
            };
            const result = onChange(modelFields);
            value = result?.StartYear ?? value;
          }
          if (errors.StartYear?.hasError) {
            runValidationTasks("StartYear", value);
          }
          setStartYear(value);
        }}
        onBlur={() => runValidationTasks("StartYear", StartYear)}
        errorMessage={errors.StartYear?.errorMessage}
        hasError={errors.StartYear?.hasError}
        {...getOverrideProps(overrides, "StartYear")}
      ></TextField>
      <TextField
        label="End month"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={EndMonth}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Company,
              Location,
              JobTitle,
              ExperienceType,
              StartMonth,
              StartYear,
              EndMonth: value,
              EndYear,
              Description,
            };
            const result = onChange(modelFields);
            value = result?.EndMonth ?? value;
          }
          if (errors.EndMonth?.hasError) {
            runValidationTasks("EndMonth", value);
          }
          setEndMonth(value);
        }}
        onBlur={() => runValidationTasks("EndMonth", EndMonth)}
        errorMessage={errors.EndMonth?.errorMessage}
        hasError={errors.EndMonth?.hasError}
        {...getOverrideProps(overrides, "EndMonth")}
      ></TextField>
      <TextField
        label="End year"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={EndYear}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Company,
              Location,
              JobTitle,
              ExperienceType,
              StartMonth,
              StartYear,
              EndMonth,
              EndYear: value,
              Description,
            };
            const result = onChange(modelFields);
            value = result?.EndYear ?? value;
          }
          if (errors.EndYear?.hasError) {
            runValidationTasks("EndYear", value);
          }
          setEndYear(value);
        }}
        onBlur={() => runValidationTasks("EndYear", EndYear)}
        errorMessage={errors.EndYear?.errorMessage}
        hasError={errors.EndYear?.hasError}
        {...getOverrideProps(overrides, "EndYear")}
      ></TextField>
      <TextAreaField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={Description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Company,
              Location,
              JobTitle,
              ExperienceType,
              StartMonth,
              StartYear,
              EndMonth,
              EndYear,
              Description: value,
            };
            const result = onChange(modelFields);
            value = result?.Description ?? value;
          }
          if (errors.Description?.hasError) {
            runValidationTasks("Description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("Description", Description)}
        errorMessage={errors.Description?.errorMessage}
        hasError={errors.Description?.hasError}
        {...getOverrideProps(overrides, "Description")}
      ></TextAreaField>
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
          isDisabled={!(idProp || experienceDetailsModelProp)}
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
              !(idProp || experienceDetailsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
