import { gql } from "@apollo/client";
export const GET_JOBS = gql`
  query GetJobs {
    getJobs {
      id
      location
      locationType
      salary
      slug
      title
      type
      updatedat
      description
      createdAt
      companyLogoUrl
      campanyName
      approved
      applicationUrl
      applicationEmail
    }
  }
`;
