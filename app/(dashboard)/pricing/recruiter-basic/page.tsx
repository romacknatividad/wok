import { RecruiterPlanPage } from '@/components/pricing/recruiter-plan-page';
import { recruiterPlanPages } from '@/components/pricing/recruiter-plan-data';

export default function RecruiterBasicPage() {
  return <RecruiterPlanPage data={recruiterPlanPages['recruiter-basic']} />;
}
