interface CompanyDefinition{
  name: string;
}

interface JobDefinition {
  description: string;
  priority: number;
  id: string;
  role: string;
  url: string;
  city: string;
  company: CompanyDefinition;
}

export default JobDefinition;
