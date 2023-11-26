export const createResume = /* GraphQL */ `
  mutation CreateResume(
    $input: CreateResumeInput!
    $condition: ModelResumeConditionInput
  ) {
    createResume(input: $input, condition: $condition) {
      id
      Resume
      UserProfile {
        id
        firstName
        lastName
        DOB
        phoneNumber
        Email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      resumeUserProfileId
      __typename
    }
  }
`;
export const updateResume = /* GraphQL */ `
  mutation UpdateResume(
    $input: UpdateResumeInput!
    $condition: ModelResumeConditionInput
  ) {
    updateResume(input: $input, condition: $condition) {
      id
      Resume
      UserProfile {
        id
        firstName
        lastName
        DOB
        phoneNumber
        Email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      resumeUserProfileId
      __typename
    }
  }
`;
export const deleteResume = /* GraphQL */ `
  mutation DeleteResume(
    $input: DeleteResumeInput!
    $condition: ModelResumeConditionInput
  ) {
    deleteResume(input: $input, condition: $condition) {
      id
      Resume
      UserProfile {
        id
        firstName
        lastName
        DOB
        phoneNumber
        Email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      resumeUserProfileId
      __typename
    }
  }
`;
export const createExperienceDetails = /* GraphQL */ `
  mutation CreateExperienceDetails(
    $input: CreateExperienceDetailsInput!
    $condition: ModelExperienceDetailsConditionInput
  ) {
    createExperienceDetails(input: $input, condition: $condition) {
      id
      Company
      Location
      JobTitle
      ExperienceType
      StartMonth
      StartYear
      EndMonth
      EndYear
      Description
      UserProfile {
        id
        firstName
        lastName
        DOB
        phoneNumber
        Email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      experienceDetailsUserProfileId
      __typename
    }
  }
`;
export const updateExperienceDetails = /* GraphQL */ `
  mutation UpdateExperienceDetails(
    $input: UpdateExperienceDetailsInput!
    $condition: ModelExperienceDetailsConditionInput
  ) {
    updateExperienceDetails(input: $input, condition: $condition) {
      id
      Company
      Location
      JobTitle
      ExperienceType
      StartMonth
      StartYear
      EndMonth
      EndYear
      Description
      UserProfile {
        id
        firstName
        lastName
        DOB
        phoneNumber
        Email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      experienceDetailsUserProfileId
      __typename
    }
  }
`;
export const deleteExperienceDetails = /* GraphQL */ `
  mutation DeleteExperienceDetails(
    $input: DeleteExperienceDetailsInput!
    $condition: ModelExperienceDetailsConditionInput
  ) {
    deleteExperienceDetails(input: $input, condition: $condition) {
      id
      Company
      Location
      JobTitle
      ExperienceType
      StartMonth
      StartYear
      EndMonth
      EndYear
      Description
      UserProfile {
        id
        firstName
        lastName
        DOB
        phoneNumber
        Email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      experienceDetailsUserProfileId
      __typename
    }
  }
`;
export const createEducationDetails = /* GraphQL */ `
  mutation CreateEducationDetails(
    $input: CreateEducationDetailsInput!
    $condition: ModelEducationDetailsConditionInput
  ) {
    createEducationDetails(input: $input, condition: $condition) {
      id
      SchoolName
      Major
      DegreeType
      GPA
      StartMonth
      StartYear
      EndMonth
      EndYear
      UserProfile {
        id
        firstName
        lastName
        DOB
        phoneNumber
        Email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      educationDetailsUserProfileId
      __typename
    }
  }
`;
export const updateEducationDetails = /* GraphQL */ `
  mutation UpdateEducationDetails(
    $input: UpdateEducationDetailsInput!
    $condition: ModelEducationDetailsConditionInput
  ) {
    updateEducationDetails(input: $input, condition: $condition) {
      id
      SchoolName
      Major
      DegreeType
      GPA
      StartMonth
      StartYear
      EndMonth
      EndYear
      UserProfile {
        id
        firstName
        lastName
        DOB
        phoneNumber
        Email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      educationDetailsUserProfileId
      __typename
    }
  }
`;
export const deleteEducationDetails = /* GraphQL */ `
  mutation DeleteEducationDetails(
    $input: DeleteEducationDetailsInput!
    $condition: ModelEducationDetailsConditionInput
  ) {
    deleteEducationDetails(input: $input, condition: $condition) {
      id
      SchoolName
      Major
      DegreeType
      GPA
      StartMonth
      StartYear
      EndMonth
      EndYear
      UserProfile {
        id
        firstName
        lastName
        DOB
        phoneNumber
        Email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      educationDetailsUserProfileId
      __typename
    }
  }
`;
export const createResources = /* GraphQL */ `
  mutation CreateResources(
    $input: CreateResourcesInput!
    $condition: ModelResourcesConditionInput
  ) {
    createResources(input: $input, condition: $condition) {
      id
      CurrentRole
      UserProfile {
        id
        firstName
        lastName
        DOB
        phoneNumber
        Email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      resourcesUserProfileId
      owner
      __typename
    }
  }
`;
export const updateResources = /* GraphQL */ `
  mutation UpdateResources(
    $input: UpdateResourcesInput!
    $condition: ModelResourcesConditionInput
  ) {
    updateResources(input: $input, condition: $condition) {
      id
      CurrentRole
      UserProfile {
        id
        firstName
        lastName
        DOB
        phoneNumber
        Email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      resourcesUserProfileId
      owner
      __typename
    }
  }
`;
export const deleteResources = /* GraphQL */ `
  mutation DeleteResources(
    $input: DeleteResourcesInput!
    $condition: ModelResourcesConditionInput
  ) {
    deleteResources(input: $input, condition: $condition) {
      id
      CurrentRole
      UserProfile {
        id
        firstName
        lastName
        DOB
        phoneNumber
        Email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      resourcesUserProfileId
      owner
      __typename
    }
  }
`;
export const createPortfolioLinks = /* GraphQL */ `
  mutation CreatePortfolioLinks(
    $input: CreatePortfolioLinksInput!
    $condition: ModelPortfolioLinksConditionInput
  ) {
    createPortfolioLinks(input: $input, condition: $condition) {
      id
      LinkedinURL
      GithubURL
      PortfolioURL
      OtherURL
      UserProfile {
        id
        firstName
        lastName
        DOB
        phoneNumber
        Email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      portfolioLinksUserProfileId
      owner
      __typename
    }
  }
`;
export const updatePortfolioLinks = /* GraphQL */ `
  mutation UpdatePortfolioLinks(
    $input: UpdatePortfolioLinksInput!
    $condition: ModelPortfolioLinksConditionInput
  ) {
    updatePortfolioLinks(input: $input, condition: $condition) {
      id
      LinkedinURL
      GithubURL
      PortfolioURL
      OtherURL
      UserProfile {
        id
        firstName
        lastName
        DOB
        phoneNumber
        Email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      portfolioLinksUserProfileId
      owner
      __typename
    }
  }
`;
export const deletePortfolioLinks = /* GraphQL */ `
  mutation DeletePortfolioLinks(
    $input: DeletePortfolioLinksInput!
    $condition: ModelPortfolioLinksConditionInput
  ) {
    deletePortfolioLinks(input: $input, condition: $condition) {
      id
      LinkedinURL
      GithubURL
      PortfolioURL
      OtherURL
      UserProfile {
        id
        firstName
        lastName
        DOB
        phoneNumber
        Email
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      portfolioLinksUserProfileId
      owner
      __typename
    }
  }
`;
export const createUserProfile = /* GraphQL */ `
  mutation CreateUserProfile(
    $input: CreateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    createUserProfile(input: $input, condition: $condition) {
      id
      firstName
      lastName
      DOB
      phoneNumber
      Email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const updateUserProfile = /* GraphQL */ `
  mutation UpdateUserProfile(
    $input: UpdateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    updateUserProfile(input: $input, condition: $condition) {
      id
      firstName
      lastName
      DOB
      phoneNumber
      Email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
export const deleteUserProfile = /* GraphQL */ `
  mutation DeleteUserProfile(
    $input: DeleteUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    deleteUserProfile(input: $input, condition: $condition) {
      id
      firstName
      lastName
      DOB
      phoneNumber
      Email
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
      __typename
    }
  }
`;
