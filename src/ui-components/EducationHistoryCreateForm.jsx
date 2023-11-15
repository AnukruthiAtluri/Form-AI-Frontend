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
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { listUserProfiles } from "../graphql/queries";
import { createEducationHistory } from "../graphql/mutations";
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
export default function EducationHistoryCreateForm(props) {
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
    UserProfile: undefined,
  };
  const [UserProfile, setUserProfile] = React.useState(
    initialValues.UserProfile
  );
  const [UserProfileLoading, setUserProfileLoading] = React.useState(false);
  const [UserProfileRecords, setUserProfileRecords] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
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
  const getDisplayValue = {
    UserProfile: (r) => `${r?.firstName ? r?.firstName + " - " : ""}${r?.id}`,
  };
  const validations = {
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
          const modelFieldsToSave = {
            educationHistoryUserProfileId: modelFields?.UserProfile?.id,
          };
          await API.graphql({
            query: createEducationHistory.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFieldsToSave,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "EducationHistoryCreateForm")}
      {...rest}
    >
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
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
