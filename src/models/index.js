// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Resume, ExperienceDetails, EducationDetails, Resources, PortfolioLinks, UserProfile } = initSchema(schema);

export {
  Resume,
  ExperienceDetails,
  EducationDetails,
  Resources,
  PortfolioLinks,
  UserProfile
};