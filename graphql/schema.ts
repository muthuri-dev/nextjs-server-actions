export const typeDefs = `#graphql
type Job{
  id:ID!         
  slug:String             
  title:String        
  type:String            
  locationType:String  
  location:String       
  description:String    
  salary:Int         
  campanyName:String     
  applicationEmail:String
  applicationUrl:String 
  companyLogoUrl:String
  approved:Boolean
  createdAt:String
  updatedat:String       
}
type Query{
    getJobs:[Job]
}
`;
