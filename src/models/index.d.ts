import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";





type EagerResume = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Resume, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Resume?: string | null;
  readonly UserProfile?: UserProfile | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly resumeUserProfileId?: string | null;
}

type LazyResume = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Resume, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Resume?: string | null;
  readonly UserProfile: AsyncItem<UserProfile | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly resumeUserProfileId?: string | null;
}

export declare type Resume = LazyLoading extends LazyLoadingDisabled ? EagerResume : LazyResume

export declare const Resume: (new (init: ModelInit<Resume>) => Resume) & {
  copyOf(source: Resume, mutator: (draft: MutableModel<Resume>) => MutableModel<Resume> | void): Resume;
}

type EagerExperienceDetails = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ExperienceDetails, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Company?: string | null;
  readonly Location?: string | null;
  readonly JobTitle?: string | null;
  readonly ExperienceType?: string | null;
  readonly StartMonth?: string | null;
  readonly StartYear?: string | null;
  readonly EndMonth?: string | null;
  readonly EndYear?: string | null;
  readonly Description?: string | null;
  readonly UserProfile?: UserProfile | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly experienceDetailsUserProfileId?: string | null;
}

type LazyExperienceDetails = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ExperienceDetails, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Company?: string | null;
  readonly Location?: string | null;
  readonly JobTitle?: string | null;
  readonly ExperienceType?: string | null;
  readonly StartMonth?: string | null;
  readonly StartYear?: string | null;
  readonly EndMonth?: string | null;
  readonly EndYear?: string | null;
  readonly Description?: string | null;
  readonly UserProfile: AsyncItem<UserProfile | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly experienceDetailsUserProfileId?: string | null;
}

export declare type ExperienceDetails = LazyLoading extends LazyLoadingDisabled ? EagerExperienceDetails : LazyExperienceDetails

export declare const ExperienceDetails: (new (init: ModelInit<ExperienceDetails>) => ExperienceDetails) & {
  copyOf(source: ExperienceDetails, mutator: (draft: MutableModel<ExperienceDetails>) => MutableModel<ExperienceDetails> | void): ExperienceDetails;
}

type EagerEducationDetails = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EducationDetails, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly SchoolName?: string | null;
  readonly Major?: string | null;
  readonly DegreeType?: string | null;
  readonly GPA?: number | null;
  readonly StartMonth?: string | null;
  readonly StartYear?: string | null;
  readonly EndMonth?: string | null;
  readonly EndYear?: string | null;
  readonly UserProfile?: UserProfile | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly educationDetailsUserProfileId?: string | null;
}

type LazyEducationDetails = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EducationDetails, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly SchoolName?: string | null;
  readonly Major?: string | null;
  readonly DegreeType?: string | null;
  readonly GPA?: number | null;
  readonly StartMonth?: string | null;
  readonly StartYear?: string | null;
  readonly EndMonth?: string | null;
  readonly EndYear?: string | null;
  readonly UserProfile: AsyncItem<UserProfile | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly educationDetailsUserProfileId?: string | null;
}

export declare type EducationDetails = LazyLoading extends LazyLoadingDisabled ? EagerEducationDetails : LazyEducationDetails

export declare const EducationDetails: (new (init: ModelInit<EducationDetails>) => EducationDetails) & {
  copyOf(source: EducationDetails, mutator: (draft: MutableModel<EducationDetails>) => MutableModel<EducationDetails> | void): EducationDetails;
}

type EagerResources = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Resources, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly CurrentRole?: string | null;
  readonly UserProfile?: UserProfile | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly resourcesUserProfileId?: string | null;
}

type LazyResources = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Resources, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly CurrentRole?: string | null;
  readonly UserProfile: AsyncItem<UserProfile | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly resourcesUserProfileId?: string | null;
}

export declare type Resources = LazyLoading extends LazyLoadingDisabled ? EagerResources : LazyResources

export declare const Resources: (new (init: ModelInit<Resources>) => Resources) & {
  copyOf(source: Resources, mutator: (draft: MutableModel<Resources>) => MutableModel<Resources> | void): Resources;
}

type EagerPortfolioLinks = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PortfolioLinks, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly LinkedinURL?: string | null;
  readonly GithubURL?: string | null;
  readonly PortfolioURL?: string | null;
  readonly OtherURL?: string | null;
  readonly UserProfile?: UserProfile | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly portfolioLinksUserProfileId?: string | null;
}

type LazyPortfolioLinks = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PortfolioLinks, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly LinkedinURL?: string | null;
  readonly GithubURL?: string | null;
  readonly PortfolioURL?: string | null;
  readonly OtherURL?: string | null;
  readonly UserProfile: AsyncItem<UserProfile | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly portfolioLinksUserProfileId?: string | null;
}

export declare type PortfolioLinks = LazyLoading extends LazyLoadingDisabled ? EagerPortfolioLinks : LazyPortfolioLinks

export declare const PortfolioLinks: (new (init: ModelInit<PortfolioLinks>) => PortfolioLinks) & {
  copyOf(source: PortfolioLinks, mutator: (draft: MutableModel<PortfolioLinks>) => MutableModel<PortfolioLinks> | void): PortfolioLinks;
}

type EagerUserProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly DOB?: string | null;
  readonly phoneNumber?: string | null;
  readonly Email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName?: string | null;
  readonly lastName?: string | null;
  readonly DOB?: string | null;
  readonly phoneNumber?: string | null;
  readonly Email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserProfile = LazyLoading extends LazyLoadingDisabled ? EagerUserProfile : LazyUserProfile

export declare const UserProfile: (new (init: ModelInit<UserProfile>) => UserProfile) & {
  copyOf(source: UserProfile, mutator: (draft: MutableModel<UserProfile>) => MutableModel<UserProfile> | void): UserProfile;
}