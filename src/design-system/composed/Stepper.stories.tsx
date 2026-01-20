import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Stepper, type Step } from './Stepper'
import { Button } from '../primitives/Button'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const meta = {
  title: 'Design System/Composed/Stepper',
  component: Stepper,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
Multi-step wizard/stepper component for guided user flows.

**Perfect for:**
- Registration and onboarding
- Checkout processes
- Multi-step forms
- Setup wizards
- Configuration flows
        `,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Stepper>

export default meta
type Story = StoryObj<typeof meta>

// Sample step content components
const AccountStep = () => (
  <div className="p-6 space-y-4">
    <h3 className="text-2xl font-medium mb-4">Create Account</h3>
    <div className="space-y-3">
      <div>
        <label className="block text-sm text-white/60 mb-1">Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
        />
      </div>
      <div>
        <label className="block text-sm text-white/60 mb-1">Password</label>
        <input
          type="password"
          placeholder="••••••••"
          className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
        />
      </div>
    </div>
  </div>
)

const CompanyStep = () => (
  <div className="p-6 space-y-4">
    <h3 className="text-2xl font-medium mb-4">Company Information</h3>
    <div className="space-y-3">
      <div>
        <label className="block text-sm text-white/60 mb-1">Company Name</label>
        <input
          type="text"
          placeholder="Acme Corporation"
          className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
        />
      </div>
      <div>
        <label className="block text-sm text-white/60 mb-1">Industry</label>
        <select className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20">
          <option>Technology</option>
          <option>Healthcare</option>
          <option>Finance</option>
          <option>Other</option>
        </select>
      </div>
    </div>
  </div>
)

const PlanStep = () => (
  <div className="p-6 space-y-4">
    <h3 className="text-2xl font-medium mb-4">Choose Your Plan</h3>
    <div className="grid grid-cols-3 gap-4">
      {['Starter', 'Professional', 'Enterprise'].map((plan) => (
        <div
          key={plan}
          className="p-4 border border-white/10 rounded-lg hover:border-white/30 cursor-pointer transition-colors"
        >
          <div className="font-medium mb-2">{plan}</div>
          <div className="text-sm text-white/60">Perfect for small teams</div>
        </div>
      ))}
    </div>
  </div>
)

const ConfirmStep = () => (
  <div className="p-6 space-y-4">
    <h3 className="text-2xl font-medium mb-4">Confirm Details</h3>
    <div className="space-y-3">
      <div className="p-4 bg-white/5 rounded-lg">
        <div className="text-sm text-white/60 mb-1">Email</div>
        <div>you@example.com</div>
      </div>
      <div className="p-4 bg-white/5 rounded-lg">
        <div className="text-sm text-white/60 mb-1">Company</div>
        <div>Acme Corporation</div>
      </div>
      <div className="p-4 bg-white/5 rounded-lg">
        <div className="text-sm text-white/60 mb-1">Plan</div>
        <div>Professional</div>
      </div>
    </div>
  </div>
)

const sampleSteps: Step[] = [
  {
    id: '1',
    label: 'Account',
    description: 'Your details',
    content: <AccountStep />,
  },
  {
    id: '2',
    label: 'Company',
    description: 'Organization info',
    content: <CompanyStep />,
  },
  {
    id: '3',
    label: 'Plan',
    description: 'Choose plan',
    content: <PlanStep />,
  },
  {
    id: '4',
    label: 'Confirm',
    description: 'Review & submit',
    content: <ConfirmStep />,
  },
]

/**
 * Interactive Stepper with Navigation
 */
export const Interactive: Story = {
  args: {},
  render: () => {
    const [currentStep, setCurrentStep] = useState(0)

    return (
      <div className="max-w-4xl mx-auto">
        <Stepper
          steps={sampleSteps}
          currentStep={currentStep}
          onStepChange={setCurrentStep}
        />

        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          <Button
            variant="primary"
            onClick={() =>
              setCurrentStep(Math.min(sampleSteps.length - 1, currentStep + 1))
            }
            disabled={currentStep === sampleSteps.length - 1}
          >
            {currentStep === sampleSteps.length - 1 ? 'Submit' : 'Continue'}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    )
  },
}

/**
 * Minimal variant without descriptions
 */
export const Minimal: Story = {
  args: {},
  render: () => {
    const [currentStep, setCurrentStep] = useState(1)

    return (
      <div className="max-w-4xl mx-auto">
        <Stepper
          steps={sampleSteps}
          currentStep={currentStep}
          onStepChange={setCurrentStep}
          variant="minimal"
        />
      </div>
    )
  },
}

/**
 * Without step numbers
 */
export const WithoutNumbers: Story = {
  args: {},
  render: () => {
    const [currentStep, setCurrentStep] = useState(2)

    return (
      <div className="max-w-4xl mx-auto">
        <Stepper
          steps={sampleSteps}
          currentStep={currentStep}
          onStepChange={setCurrentStep}
          showNumbers={false}
        />
      </div>
    )
  },
}

/**
 * Registration Flow Example
 */
export const RegistrationFlow: Story = {
  args: {},
  render: () => {
    const [currentStep, setCurrentStep] = useState(0)

    const registrationSteps: Step[] = [
      {
        id: 'account',
        label: 'Account',
        description: 'Create your account',
        content: <AccountStep />,
      },
      {
        id: 'company',
        label: 'Company',
        description: 'Tell us about your business',
        content: <CompanyStep />,
      },
      {
        id: 'plan',
        label: 'Plan',
        description: 'Select your subscription',
        content: <PlanStep />,
      },
    ]

    return (
      <div className="max-w-3xl mx-auto bg-[#1A1A1A]/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-medium mb-2">Create Account</h2>
          <p className="text-white/60">
            Step {currentStep + 1} of {registrationSteps.length}
          </p>
        </div>

        <Stepper
          steps={registrationSteps}
          currentStep={currentStep}
          onStepChange={setCurrentStep}
        />

        <div className="flex justify-between mt-8 pt-6 border-t border-white/10">
          {currentStep > 0 ? (
            <Button
              variant="outline"
              onClick={() => setCurrentStep(currentStep - 1)}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          ) : (
            <div />
          )}

          <Button
            variant="primary"
            onClick={() => {
              if (currentStep < registrationSteps.length - 1) {
                setCurrentStep(currentStep + 1)
              } else {
                alert('Registration complete!')
              }
            }}
          >
            {currentStep === registrationSteps.length - 1
              ? 'Complete'
              : 'Continue'}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    )
  },
}

/**
 * Checkout Flow Example
 */
export const CheckoutFlow: Story = {
  args: {},
  render: () => {
    const [currentStep, setCurrentStep] = useState(0)

    const checkoutSteps: Step[] = [
      {
        id: 'cart',
        label: 'Cart',
        content: (
          <div className="p-6">
            <h3 className="text-2xl font-medium mb-4">Shopping Cart</h3>
            <div className="space-y-3">
              <div className="p-4 bg-white/5 rounded-lg flex justify-between">
                <span>Product 1</span>
                <span>$29</span>
              </div>
              <div className="p-4 bg-white/5 rounded-lg flex justify-between">
                <span>Product 2</span>
                <span>$49</span>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 'shipping',
        label: 'Shipping',
        content: (
          <div className="p-6">
            <h3 className="text-2xl font-medium mb-4">Shipping Address</h3>
            <div className="space-y-3">
              <input
                placeholder="Street Address"
                className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-lg"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  placeholder="City"
                  className="px-4 py-3 bg-black/30 border border-white/10 rounded-lg"
                />
                <input
                  placeholder="Postal Code"
                  className="px-4 py-3 bg-black/30 border border-white/10 rounded-lg"
                />
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 'payment',
        label: 'Payment',
        content: (
          <div className="p-6">
            <h3 className="text-2xl font-medium mb-4">Payment Method</h3>
            <div className="p-4 bg-white/5 rounded-lg">
              <div className="text-sm text-white/60">Credit Card</div>
              <input
                placeholder="Card Number"
                className="w-full mt-2 px-4 py-3 bg-black/30 border border-white/10 rounded-lg"
              />
            </div>
          </div>
        ),
      },
    ]

    return (
      <div className="max-w-2xl mx-auto">
        <Stepper
          steps={checkoutSteps}
          currentStep={currentStep}
          onStepChange={setCurrentStep}
        />

        <div className="flex justify-between mt-8">
          <Button
            variant="ghost"
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
          >
            Back
          </Button>

          <Button
            variant="primary"
            onClick={() =>
              setCurrentStep(Math.min(checkoutSteps.length - 1, currentStep + 1))
            }
          >
            {currentStep === checkoutSteps.length - 1 ? 'Pay Now' : 'Next'}
          </Button>
        </div>
      </div>
    )
  },
}
