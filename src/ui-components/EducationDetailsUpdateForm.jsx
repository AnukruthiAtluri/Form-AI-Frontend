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
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { getEducationDetails, listUserProfiles } from "../graphql/queries";
import { updateEducationDetails } from "../graphql/mutations";
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
export default function EducationDetailsUpdateForm(props) {
  const {
    id: idProp,
    educationDetails: educationDetailsModelProp,
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
  const [UserProfileLoading, setUserProfileLoading] = React.useState(false);
  const [UserProfileRecords, setUserProfileRecords] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = educationDetailsRecord
      ? { ...initialValues, ...educationDetailsRecord, UserProfile }
      : initialValues;
    setSchoolName(cleanValues.SchoolName);
    setMajor(cleanValues.Major);
    setDegreeType(cleanValues.DegreeType);
    setGPA(cleanValues.GPA);
    setStartMonth(cleanValues.StartMonth);
    setStartYear(cleanValues.StartYear);
    setEndMonth(cleanValues.EndMonth);
    setEndYear(cleanValues.EndYear);
    setUserProfile(cleanValues.UserProfile);
    setCurrentUserProfileValue(undefined);
    setCurrentUserProfileDisplayValue("");
    setErrors({});
  };
  const [educationDetailsRecord, setEducationDetailsRecord] = React.useState(
    educationDetailsModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getEducationDetails.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getEducationDetails
        : educationDetailsModelProp;
      const UserProfileRecord = record ? await record.UserProfile : undefined;
      setUserProfile(UserProfileRecord);
      setEducationDetailsRecord(record);
    };
    queryData();
  }, [idProp, educationDetailsModelProp]);
  React.useEffect(resetStateValues, [educationDetailsRecord, UserProfile]);
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
  const fetchUserProfileRecords = async (value) => {
    setUserProfileLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ firstName: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await API.graphql({
          query: listUserProfiles.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listUserProfiles?.items;
      var loaded = result.filter(
        (item) => !UserProfileIdSet.has(getIDValue.UserProfile?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setUserProfileRecords(newOptions.slice(0, autocompleteLength));
    setUserProfileLoading(false);
  };
  React.useEffect(() => {
    fetchUserProfileRecords("");
  }, []);
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          SchoolName: SchoolName ?? null,
          Major: Major ?? null,
          DegreeType: DegreeType ?? null,
          GPA: GPA ?? null,
          StartMonth: StartMonth ?? null,
          StartYear: StartYear ?? null,
          EndMonth: EndMonth ?? null,
          EndYear: EndYear ?? null,
          UserProfile: UserProfile ?? null,
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
          const modelFieldsToSave = {
            SchoolName: modelFields.SchoolName ?? null,
            Major: modelFields.Major ?? null,
            DegreeType: modelFields.DegreeType ?? null,
            GPA: modelFields.GPA ?? null,
            StartMonth: modelFields.StartMonth ?? null,
            StartYear: modelFields.StartYear ?? null,
            EndMonth: modelFields.EndMonth ?? null,
            EndYear: modelFields.EndYear ?? null,
            educationDetailsUserProfileId: modelFields?.UserProfile?.id ?? null,
          };
          await API.graphql({
            query: updateEducationDetails.replaceAll("__typename", ""),
            variables: {
              input: {
                id: educationDetailsRecord.id,
                ...modelFieldsToSave,
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
      {...getOverrideProps(overrides, "EducationDetailsUpdateForm")}
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
          options={UserProfileRecords.filter(
            (r) => !UserProfileIdSet.has(getIDValue.UserProfile?.(r))
          ).map((r) => ({
            id: getIDValue.UserProfile?.(r),
            label: getDisplayValue.UserProfile?.(r),
          }))}
          isLoading={UserProfileLoading}
          onSelect={({ id, label }) => {
            setCurrentUserProfileValue(
              UserProfileRecords.find((r) =>
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
          defaultValue={UserProfile}
          onChange={(e) => {
            let { value } = e.target;
            fetchUserProfileRecords(value);
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
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || educationDetailsModelProp)}
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
              !(idProp || educationDetailsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
