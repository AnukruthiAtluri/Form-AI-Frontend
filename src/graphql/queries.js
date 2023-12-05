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
        profilePicture
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
        _version
        _deleted
        _lastChangedAt
        resumeUserProfileId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncResumes = /* GraphQL */ `
  query SyncResumes(
    $filter: ModelResumeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncResumes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        Resume
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        resumeUserProfileId
        __typename
      }
      nextToken
      startedAt
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
        profilePicture
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
        _version
        _deleted
        _lastChangedAt
        experienceDetailsUserProfileId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncExperienceDetails = /* GraphQL */ `
  query SyncExperienceDetails(
    $filter: ModelExperienceDetailsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncExperienceDetails(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
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
        _version
        _deleted
        _lastChangedAt
        experienceDetailsUserProfileId
        __typename
      }
      nextToken
      startedAt
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
        profilePicture
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
        _version
        _deleted
        _lastChangedAt
        educationDetailsUserProfileId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncEducationDetails = /* GraphQL */ `
  query SyncEducationDetails(
    $filter: ModelEducationDetailsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEducationDetails(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
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
        _version
        _deleted
        _lastChangedAt
        educationDetailsUserProfileId
        __typename
      }
      nextToken
      startedAt
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
        profilePicture
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
        _version
        _deleted
        _lastChangedAt
        resourcesUserProfileId
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncResources = /* GraphQL */ `
  query SyncResources(
    $filter: ModelResourcesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncResources(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        CurrentRole
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        resourcesUserProfileId
        owner
        __typename
      }
      nextToken
      startedAt
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
        profilePicture
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
        _version
        _deleted
        _lastChangedAt
        portfolioLinksUserProfileId
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncPortfolioLinks = /* GraphQL */ `
  query SyncPortfolioLinks(
    $filter: ModelPortfolioLinksFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPortfolioLinks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        LinkedinURL
        GithubURL
        PortfolioURL
        OtherURL
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        portfolioLinksUserProfileId
        owner
        __typename
      }
      nextToken
      startedAt
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
      profilePicture
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
        profilePicture
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncUserProfiles = /* GraphQL */ `
  query SyncUserProfiles(
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserProfiles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        firstName
        lastName
        DOB
        phoneNumber
        Email
        profilePicture
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
