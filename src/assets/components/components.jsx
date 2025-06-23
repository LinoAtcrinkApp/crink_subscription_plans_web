import styled from 'styled-components';
import { theme, typography } from '../../styles/theme';
import { SubscriptionPlan } from '../../data/subscription/subscription_plan';
import { useState } from 'react';

// Styled components for the Card
// Wrapper to maintain consistent space in the layout
const CardWrapper = styled.div`
  /* Fixed dimensions to prevent layout shifts */
  width: 320px; 
  height: 380px; /* Fixed height tall enough for expanded content */
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCard = styled.div`
  /* Base card styling */
  width: 280px; /* Base width */
  min-height: 200px; /* Base height */
  padding: 24px;
  background-color: white;
  border-radius: 16px;
  box-shadow: ${props => props.$isHovered ? 
    '0 16px 32px rgba(0, 0, 0, 0.15)' : 
    '0 8px 16px rgba(0, 0, 0, 0.1)'};
  position: absolute; /* Take out of document flow */
  overflow: hidden;
  
  /* Flex layout */
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.$isHovered ? 'flex-start' : 'center'};
  align-items: center;
  
  /* Much slower transition for smoother effect */
  transition: all 1.2s cubic-bezier(0.22, 1, 0.36, 1);
  transform: ${props => props.$isHovered ? 'scale(1.12) translateY(-10px)' : 'scale(1)'}; 
  z-index: ${props => props.$isHovered ? 2 : 1};
  
  /* Removing color bar as requested */
  
  /* Popular badge styling */
  .badge {
    position: absolute;
    top: 12px;
    right: 12px;
    background-color: ${theme.status.success.main};
    color: white;
    font-size: 12px;
    font-weight: bold;
    padding: 4px 8px;
    border-radius: 12px;
    opacity: ${props => props.$isHovered ? 1 : 0.9};
    transform: ${props => props.$isHovered ? 'scale(1.1)' : 'scale(1)'};
    transition: all 0.3s ease;
  }
`;

const Title = styled.h2`
  font-size: ${props => props.$isHovered ? '28px' : '24px'};
  color: ${theme.text.primary};
  text-align: center;
  margin: 0 0 ${props => props.$isHovered ? '16px' : '8px'};
  letter-spacing: 1.2px;
  transition: all 0.3s ease;
`;

const Price = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${theme.accent.main};
  margin: 8px 0;
  
  .duration {
    font-size: 14px;
    color: ${theme.text.secondary};
    font-weight: normal;
  }
`;

const BenefitsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 16px 0;
  width: 100%;
  
  li {
    padding: 8px 0;
    display: flex;
    align-items: center;
    font-size: 14px;
    color: ${theme.text.secondary};
    
    &::before {
      content: '✓';
      color: ${theme.status.success.main};
      margin-right: 8px;
      font-weight: bold;
    }
  }
`;

const Button = styled.button`
  background: ${theme.gradient.backgroundPurple};
  color: white;
  border: none;
  border-radius: 24px;
  padding: 10px 24px;
  font-size: 16px;
  font-weight: 600;
  margin-top: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

// Plan details component to show when card is hovered
const PlanDetails = ({ plan }) => (
  <>
    <Price>
      {plan.formattedPrice} <span className="duration">/ {plan.formattedDuration}</span>
    </Price>
    
    <BenefitsList>
      {plan.benefits.map((benefit, index) => (
        <li key={index}>{benefit}</li>
      ))}
    </BenefitsList>
    
    <Button>Choose Plan</Button>
  </>
);

// Main Card component
export const Card = ({ plan, showBadge = false }) => {
  
  return (
    <CardWrapper> {/* Stable wrapper to prevent layout shifts */}
      <StyledCard 
        $color={plan.color}
      >
        {showBadge && <div className="badge">POPULAR</div>}
        <Title>{plan.title}</Title>
        <PlanDetails plan={plan} />
      </StyledCard>
    </CardWrapper>
  );
}

// No duplicate PlanDetails needed - we already have one defined above
// No duplicate Card export needed - it's already exported in line 145