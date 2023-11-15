/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid } from "@aws-amplify/ui-react";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import {
  fetchByPath,
  getOverrideProps,
  processFile,
  validateField,
} from "./utils";
import { API } from "aws-amplify";
import { getResume } from "../graphql/queries";
import { updateResume } from "../graphql/mutations";
import { Field } from "@aws-amplify/ui-react/internal";
export default function ResumeUpdateForm(props) {
  const {
    id: idProp,
    resume: resumeModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Resume: undefined,
  };
  const [resume, setResume] = React.useState(initialValues.Resume);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = resumeRecord
      ? { ...initialValues, ...resumeRecord }
      : initialValues;
    setResume(cleanValues.Resume);
    setErrors({});
  };
  const [resumeRecord, setResumeRecord] = React.useState(resumeModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getResume.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getResume
        : resumeModelProp;
      setResumeRecord(record);
    };
    queryData();
  }, [idProp, resumeModelProp]);
  React.useEffect(resetStateValues, [resumeRecord]);
  const validations = {
    Resume: [],
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
          Resume: Resume ?? null,
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
            query: updateResume.replaceAll("__typename", ""),
            variables: {
              input: {
                id: resumeRecord.id,
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
      {...getOverrideProps(overrides, "ResumeUpdateForm")}
      {...rest}
    >
      <Field
        errorMessage={errors.Resume?.errorMessage}
        hasError={errors.Resume?.hasError}
        label={"Resume"}
        isRequired={false}
        isReadOnly={false}
      >
        {resumeRecord && (
          <StorageManager
            defaultFiles={[{ key: resumeRecord.Resume }]}
            onUploadSuccess={({ key }) => {
              setResume((prev) => {
                let value = key;
                if (onChange) {
                  const modelFields = {
                    Resume: value,
                  };
                  const result = onChange(modelFields);
                  value = result?.Resume ?? value;
                }
                return value;
              });
            }}
            onFileRemove={({ key }) => {
              setResume((prev) => {
                let value = initialValues?.resume;
                if (onChange) {
                  const modelFields = {
                    Resume: value,
                  };
                  const result = onChange(modelFields);
                  value = result?.Resume ?? value;
                }
                return value;
              });
            }}
            processFile={processFile}
            accessLevel={"private"}
            acceptedFileTypes={[".pdf", ".word"]}
            isResumable={false}
            showThumbnails={true}
            maxFileCount={1}
            maxSize={5000000}
            {...getOverrideProps(overrides, "Resume")}
          ></StorageManager>
        )}
      </Field>
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
          isDisabled={!(idProp || resumeModelProp)}
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
              !(idProp || resumeModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
