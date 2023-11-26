/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateResume = /* GraphQL */ `
  subscription OnCreateResume($filter: ModelSubscriptionResumeFilterInput) {
    onCreateResume(filter: $filter) {
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
export const onUpdateResume = /* GraphQL */ `
  subscription OnUpdateResume($filter: ModelSubscriptionResumeFilterInput) {
    onUpdateResume(filter: $filter) {
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
export const onDeleteResume = /* GraphQL */ `
  subscription OnDeleteResume($filter: ModelSubscriptionResumeFilterInput) {
    onDeleteResume(filter: $filter) {
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
export const onCreateExperienceDetails = /* GraphQL */ `
  subscription OnCreateExperienceDetails(
    $filter: ModelSubscriptionExperienceDetailsFilterInput
  ) {
    onCreateExperienceDetails(filter: $filter) {
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
export const onUpdateExperienceDetails = /* GraphQL */ `
  subscription OnUpdateExperienceDetails(
    $filter: ModelSubscriptionExperienceDetailsFilterInput
  ) {
    onUpdateExperienceDetails(filter: $filter) {
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
export const onDeleteExperienceDetails = /* GraphQL */ `
  subscription OnDeleteExperienceDetails(
    $filter: ModelSubscriptionExperienceDetailsFilterInput
  ) {
    onDeleteExperienceDetails(filter: $filter) {
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
export const onCreateEducationDetails = /* GraphQL */ `
  subscription OnCreateEducationDetails(
    $filter: ModelSubscriptionEducationDetailsFilterInput
  ) {
    onCreateEducationDetails(filter: $filter) {
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
export const onUpdateEducationDetails = /* GraphQL */ `
  subscription OnUpdateEducationDetails(
    $filter: ModelSubscriptionEducationDetailsFilterInput
  ) {
    onUpdateEducationDetails(filter: $filter) {
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
export const onDeleteEducationDetails = /* GraphQL */ `
  subscription OnDeleteEducationDetails(
    $filter: ModelSubscriptionEducationDetailsFilterInput
  ) {
    onDeleteEducationDetails(filter: $filter) {
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
export const onCreateResources = /* GraphQL */ `
  subscription OnCreateResources(
    $filter: ModelSubscriptionResourcesFilterInput
    $owner: String
  ) {
    onCreateResources(filter: $filter, owner: $owner) {
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
export const onUpdateResources = /* GraphQL */ `
  subscription OnUpdateResources(
    $filter: ModelSubscriptionResourcesFilterInput
    $owner: String
  ) {
    onUpdateResources(filter: $filter, owner: $owner) {
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
export const onDeleteResources = /* GraphQL */ `
  subscription OnDeleteResources(
    $filter: ModelSubscriptionResourcesFilterInput
    $owner: String
  ) {
    onDeleteResources(filter: $filter, owner: $owner) {
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
export const onCreatePortfolioLinks = /* GraphQL */ `
  subscription OnCreatePortfolioLinks(
    $filter: ModelSubscriptionPortfolioLinksFilterInput
    $owner: String
  ) {
    onCreatePortfolioLinks(filter: $filter, owner: $owner) {
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
export const onUpdatePortfolioLinks = /* GraphQL */ `
  subscription OnUpdatePortfolioLinks(
    $filter: ModelSubscriptionPortfolioLinksFilterInput
    $owner: String
  ) {
    onUpdatePortfolioLinks(filter: $filter, owner: $owner) {
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
export const onDeletePortfolioLinks = /* GraphQL */ `
  subscription OnDeletePortfolioLinks(
    $filter: ModelSubscriptionPortfolioLinksFilterInput
    $owner: String
  ) {
    onDeletePortfolioLinks(filter: $filter, owner: $owner) {
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
export const onCreateUserProfile = /* GraphQL */ `
  subscription OnCreateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
    $owner: String
  ) {
    onCreateUserProfile(filter: $filter, owner: $owner) {
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
export const onUpdateUserProfile = /* GraphQL */ `
  subscription OnUpdateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
    $owner: String
  ) {
    onUpdateUserProfile(filter: $filter, owner: $owner) {
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
export const onDeleteUserProfile = /* GraphQL */ `
  subscription OnDeleteUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
    $owner: String
  ) {
    onDeleteUserProfile(filter: $filter, owner: $owner) {
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
