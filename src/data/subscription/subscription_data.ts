import { PlanDuration, SubscriptionPlan } from './subscription_plan';
import { theme } from '../../styles/theme';

// Define plan durations
const monthly = new PlanDuration('Monthly', 12.99);
const quarterly = new PlanDuration('3 Months', 9.99);
const biannual = new PlanDuration('6 Months', 8.99);
const annual = new PlanDuration('Annual', 7.99);

// Define subscription plans
export const subscriptionPlans: SubscriptionPlan[] = [
  new SubscriptionPlan(
    'NOURISH',
    [
      'Daily guided meditations',
      'Weekly wellness check-ins',
      'Access to relaxation audio library',
      'Basic sleep tracking'
    ],
    quarterly, 
    false,
    theme.gradient.backgroundPurple
  ),
  new SubscriptionPlan(
    'FLOURISH',
    [
      'All NOURISH benefits',
      'Personalized wellness coach',
      'Priority support',
      'Exclusive content library',
      'Advanced mood tracking'
    ],
    biannual,
    true,
    'linear-gradient(to right, #FF4081, #C60055)'
  ),
  new SubscriptionPlan(
    'THRIVE',
    [
      'All FLOURISH benefits',
      'One-on-one therapy sessions',
      'Customized wellness plans',
      'Premium app integrations',
      'VIP wellness events access',
      'Family account sharing'
    ],
    annual,
    false,
    'linear-gradient(to right, #28A745, #1E7E34)'
  )
];

// Get a specific plan by title
export const getPlanByTitle = (title: string): SubscriptionPlan | undefined => {
  return subscriptionPlans.find(plan => plan.title === title);
};

// Default featured plan
export const featuredPlan = subscriptionPlans.find(plan => plan.popular) || subscriptionPlans[0];
