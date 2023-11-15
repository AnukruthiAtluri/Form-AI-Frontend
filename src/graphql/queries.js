/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getResume = /* GraphQL */ `
  query GetResume($id: ID!) {
    getResume(id: $id) {
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
        owner
        __typename
      }
      createdAt
      updatedAt
      resumeUserProfileId
      __typename
    }
  }
`;
export const listResumes = /* GraphQL */ `
  query ListResumes(
    $filter: ModelResumeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResumes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Resume
        createdAt
        updatedAt
        resumeUserProfileId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getExperienceDetails = /* GraphQL */ `
  query GetExperienceDetails($id: ID!) {
    getExperienceDetails(id: $id) {
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
        owner
        __typename
      }
      createdAt
      updatedAt
      experienceDetailsUserProfileId
      __typename
    }
  }
`;
export const listExperienceDetails = /* GraphQL */ `
  query ListExperienceDetails(
    $filter: ModelExperienceDetailsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExperienceDetails(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        createdAt
        updatedAt
        experienceDetailsUserProfileId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getEducationDetails = /* GraphQL */ `
  query GetEducationDetails($id: ID!) {
    getEducationDetails(id: $id) {
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
        owner
        __typename
      }
      createdAt
      updatedAt
      educationDetailsUserProfileId
      __typename
    }
  }
`;
export const listEducationDetails = /* GraphQL */ `
  query ListEducationDetails(
    $filter: ModelEducationDetailsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEducationDetails(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        SchoolName
        Major
        DegreeType
        GPA
        StartMonth
        StartYear
        EndMonth
        EndYear
        createdAt
        updatedAt
        educationDetailsUserProfileId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getResources = /* GraphQL */ `
  query GetResources($id: ID!) {
    getResources(id: $id) {
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
        owner
        __typename
      }
      createdAt
      updatedAt
      resourcesUserProfileId
      owner
      __typename
    }
  }
`;
export const listResources = /* GraphQL */ `
  query ListResources(
    $filter: ModelResourcesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResources(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        CurrentRole
        createdAt
        updatedAt
        resourcesUserProfileId
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPortfolioLinks = /* GraphQL */ `
  query GetPortfolioLinks($id: ID!) {
    getPortfolioLinks(id: $id) {
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
        owner
        __typename
      }
      createdAt
      updatedAt
      portfolioLinksUserProfileId
      owner
      __typename
    }
  }
`;
export const listPortfolioLinks = /* GraphQL */ `
  query ListPortfolioLinks(
    $filter: ModelPortfolioLinksFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPortfolioLinks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        LinkedinURL
        GithubURL
        PortfolioURL
        OtherURL
        createdAt
        updatedAt
        portfolioLinksUserProfileId
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUserProfile = /* GraphQL */ `
  query GetUserProfile($id: ID!) {
    getUserProfile(id: $id) {
      id
      firstName
      lastName
      DOB
      phoneNumber
      Email
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listUserProfiles = /* GraphQL */ `
  query ListUserProfiles(
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        DOB
        phoneNumber
        Email
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
