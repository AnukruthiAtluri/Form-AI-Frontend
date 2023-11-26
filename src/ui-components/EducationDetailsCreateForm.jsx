/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { EducationDetails, UserProfile as UserProfile0 } from "../models";
import {
  fetchByPath,
  getOverrideProps,
  useDataStoreBinding,
  validateField,
} from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function EducationDetailsCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    SchoolName: "",
    Major: "",
    DegreeType: "",
    GPA: "",
    StartMonth: "",
    StartYear: "",
    EndMonth: "",
    EndYear: "",
    UserProfile: undefined,
  };
  const [SchoolName, setSchoolName] = React.useState(initialValues.SchoolName);
  const [Major, setMajor] = React.useState(initialValues.Major);
  const [DegreeType, setDegreeType] = React.useState(initialValues.DegreeType);
  const [GPA, setGPA] = React.useState(initialValues.GPA);
  const [StartMonth, setStartMonth] = React.useState(initialValues.StartMonth);
  const [StartYear, setStartYear] = React.useState(initialValues.StartYear);
  const [EndMonth, setEndMonth] = React.useState(initialValues.EndMonth);
  const [EndYear, setEndYear] = React.useState(initialValues.EndYear);
  const [UserProfile, setUserProfile] = React.useState(
    initialValues.UserProfile
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setSchoolName(initialValues.SchoolName);
    setMajor(initialValues.Major);
    setDegreeType(initialValues.DegreeType);
    setGPA(initialValues.GPA);
    setStartMonth(initialValues.StartMonth);
    setStartYear(initialValues.StartYear);
    setEndMonth(initialValues.EndMonth);
    setEndYear(initialValues.EndYear);
    setUserProfile(initialValues.UserProfile);
    setCurrentUserProfileValue(undefined);
    setCurrentUserProfileDisplayValue("");
    setErrors({});
  };
  const [currentUserProfileDisplayValue, setCurrentUserProfileDisplayValue] =
    React.useState("");
  const [currentUserProfileValue, setCurrentUserProfileValue] =
    React.useState(undefined);
  const UserProfileRef = React.createRef();
  const getIDValue = {
    UserProfile: (r) => JSON.stringify({ id: r?.id }),
  };
  const UserProfileIdSet = new Set(
    Array.isArray(UserProfile)
      ? UserProfile.map((r) => getIDValue.UserProfile?.(r))
      : getIDValue.UserProfile?.(UserProfile)
  );
  const userProfileRecords = useDataStoreBinding({
    type: "collection",
    model: UserProfile0,
  }).items;
  const getDisplayValue = {
    UserProfile: (r) => `${r?.firstName ? r?.firstName + " - " : ""}${r?.id}`,
  };
  const validations = {
    SchoolName: [],
    Major: [],
    DegreeType: [],
    GPA: [],
    StartMonth: [],
    StartYear: [],
    EndMonth: [],
    EndYear: [],
    UserProfile: [],
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
          SchoolName,
          Major,
          DegreeType,
          GPA,
          StartMonth,
          StartYear,
          EndMonth,
          EndYear,
          UserProfile,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(
                    fieldName,
                    item,
                    getDisplayValue[fieldName]
                  )
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(
                fieldName,
                modelFields[fieldName],
                getDisplayValue[fieldName]
              )
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
          await DataStore.save(new EducationDetails(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "EducationDetailsCreateForm")}
      {...rest}
    >
      <TextField
        label="School name"
        isRequired={false}
        isReadOnly={false}
        value={SchoolName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              SchoolName: value,
              Major,
              DegreeType,
              GPA,
              StartMonth,
              StartYear,
              EndMonth,
              EndYear,
              UserProfile,
            };
            const result = onChange(modelFields);
            value = result?.SchoolName ?? value;
          }
          if (errors.SchoolName?.hasError) {
            runValidationTasks("SchoolName", value);
          }
          setSchoolName(value);
        }}
        onBlur={() => runValidationTasks("SchoolName", SchoolName)}
        errorMessage={errors.SchoolName?.errorMessage}
        hasError={errors.SchoolName?.hasError}
        {...getOverrideProps(overrides, "SchoolName")}
      ></TextField>
      <TextField
        label="Major"
        isRequired={false}
        isReadOnly={false}
        value={Major}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              SchoolName,
              Major: value,
              DegreeType,
              GPA,
              StartMonth,
              StartYear,
              EndMonth,
              EndYear,
              UserProfile,
            };
            const result = onChange(modelFields);
            value = result?.Major ?? value;
          }
          if (errors.Major?.hasError) {
            runValidationTasks("Major", value);
          }
          setMajor(value);
        }}
        onBlur={() => runValidationTasks("Major", Major)}
        errorMessage={errors.Major?.errorMessage}
        hasError={errors.Major?.hasError}
        {...getOverrideProps(overrides, "Major")}
      ></TextField>
      <TextField
        label="Degree type"
        isRequired={false}
        isReadOnly={false}
        value={DegreeType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              SchoolName,
              Major,
              DegreeType: value,
              GPA,
              StartMonth,
              StartYear,
              EndMonth,
              EndYear,
              UserProfile,
            };
            const result = onChange(modelFields);
            value = result?.DegreeType ?? value;
          }
          if (errors.DegreeType?.hasError) {
            runValidationTasks("DegreeType", value);
          }
          setDegreeType(value);
        }}
        onBlur={() => runValidationTasks("DegreeType", DegreeType)}
        errorMessage={errors.DegreeType?.errorMessage}
        hasError={errors.DegreeType?.hasError}
        {...getOverrideProps(overrides, "DegreeType")}
      ></TextField>
      <TextField
        label="Gpa"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={GPA}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              SchoolName,
              Major,
              DegreeType,
              GPA: value,
              StartMonth,
              StartYear,
              EndMonth,
              EndYear,
              UserProfile,
            };
            const result = onChange(modelFields);
            value = result?.GPA ?? value;
          }
          if (errors.GPA?.hasError) {
            runValidationTasks("GPA", value);
          }
          setGPA(value);
        }}
        onBlur={() => runValidationTasks("GPA", GPA)}
        errorMessage={errors.GPA?.errorMessage}
        hasError={errors.GPA?.hasError}
        {...getOverrideProps(overrides, "GPA")}
      ></TextField>
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
              SchoolName,
              Major,
              DegreeType,
              GPA,
              StartMonth: value,
              StartYear,
              EndMonth,
              EndYear,
              UserProfile,
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
              SchoolName,
              Major,
              DegreeType,
              GPA,
              StartMonth,
              StartYear: value,
              EndMonth,
              EndYear,
              UserProfile,
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
              SchoolName,
              Major,
              DegreeType,
              GPA,
              StartMonth,
              StartYear,
              EndMonth: value,
              EndYear,
              UserProfile,
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
              SchoolName,
              Major,
              DegreeType,
              GPA,
              StartMonth,
              StartYear,
              EndMonth,
              EndYear: value,
              UserProfile,
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
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              SchoolName,
              Major,
              DegreeType,
              GPA,
              StartMonth,
              StartYear,
              EndMonth,
              EndYear,
              UserProfile: value,
            };
            const result = onChange(modelFields);
            value = result?.UserProfile ?? value;
          }
          setUserProfile(value);
          setCurrentUserProfileValue(undefined);
          setCurrentUserProfileDisplayValue("");
        }}
        currentFieldValue={currentUserProfileValue}
        label={"User profile"}
        items={UserProfile ? [UserProfile] : []}
        hasError={errors?.UserProfile?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("UserProfile", currentUserProfileValue)
        }
        errorMessage={errors?.UserProfile?.errorMessage}
        getBadgeText={getDisplayValue.UserProfile}
        setFieldValue={(model) => {
          setCurrentUserProfileDisplayValue(
            model ? getDisplayValue.UserProfile(model) : ""
          );
          setCurrentUserProfileValue(model);
        }}
        inputFieldRef={UserProfileRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="User profile"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search UserProfile"
          value={currentUserProfileDisplayValue}
          options={userProfileRecords
            .filter((r) => !UserProfileIdSet.has(getIDValue.UserProfile?.(r)))
            .map((r) => ({
              id: getIDValue.UserProfile?.(r),
              label: getDisplayValue.UserProfile?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentUserProfileValue(
              userProfileRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentUserProfileDisplayValue(label);
            runValidationTasks("UserProfile", label);
          }}
          onClear={() => {
            setCurrentUserProfileDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.UserProfile?.hasError) {
              runValidationTasks("UserProfile", value);
            }
            setCurrentUserProfileDisplayValue(value);
            setCurrentUserProfileValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("UserProfile", currentUserProfileDisplayValue)
          }
          errorMessage={errors.UserProfile?.errorMessage}
          hasError={errors.UserProfile?.hasError}
          ref={UserProfileRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "UserProfile")}
        ></Autocomplete>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
