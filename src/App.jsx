import './App.css'
import { component_styles as component } from './styles/component_styles'
import { theme, typography } from './styles/theme'
import { Card } from './assets/components/components.jsx'
import { subscriptionPlans } from './data/subscription/subscription_data'

function App() {
  return (
    <div
      style={{
        ...component.column.style,
        background: theme.gradient.backgroundPurple,
        minHeight: '100vh',
        width: '100vw',
        paddingBottom: '60px',
      }}
    >
      {/* Header Section */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '40px',
        padding: '40px 20px',
        textAlign: 'center',
      }}>
        <h1 style={{
          ...typography.h1Style,
          fontSize: '42px',
          marginBottom: '16px',
          color: 'white',
        }}>Your Wellbeing Matters</h1>

        <p style={{
          ...typography.pStyle,
          fontSize: '20px',
          maxWidth: '600px',
          lineHeight: '1.6',
        }}>Because self-care isn't selfish—it's essential. Choose the plan that's right for your journey.</p>
      </div>

      {/* Cards displaying the subscription plans */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        padding: '0 20px',
      }}>
        {subscriptionPlans.map((plan, index) => (
          <Card key={index} plan={plan} />
        ))}
      </div>

      {/* Footer section with additional info */}
      <div style={{
        marginTop: '60px',
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: '14px',
      }}>
        <a
          href="https://wa.me/919946869805?text=Hi%20Crink%20Support%2C%20I%20have%20a%20question"
          target="_blank"
          rel="noopener noreferrer"
          style={{...typography.pStyle, fontSize: '14px'}}
        >
          Questions? Contact our support team.
        </a>
      </div>
    </div>
  )
}

export default App