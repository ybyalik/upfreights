'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Ship,
  Plane,
  Home,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Calendar,
  User,
  FileCheck,
  HelpCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { validateQuoteForm, sanitizeInput } from '@/lib/validation';

const steps = [
  { id: 1, title: 'Service Type', icon: Ship },
  { id: 2, title: 'Timeline', icon: Calendar },
  { id: 3, title: 'Contact Info', icon: User },
];

const serviceTypes = [
  {
    id: 'sea',
    title: 'Sea Freight',
    description: 'Cost-effective for large shipments',
    icon: Ship,
    transitTime: '15-35 days',
  },
  {
    id: 'air',
    title: 'Air Freight',
    description: 'Fast delivery for urgent cargo',
    icon: Plane,
    transitTime: '2-5 days',
  },
  {
    id: 'door-to-door',
    title: 'Door to Door',
    description: 'Complete end-to-end solution',
    icon: Home,
    transitTime: 'Varies by mode',
  },
  {
    id: 'customs-clearance',
    title: 'Customs Clearance',
    description: 'Expert customs brokerage services',
    icon: FileCheck,
    transitTime: '1-3 days',
  },
  {
    id: 'other',
    title: 'Other',
    description: 'Other logistics services',
    icon: HelpCircle,
    transitTime: 'Contact us',
  },
];

const timelineOptions = [
  'As soon as possible',
  'Within 1 week',
  'Within 2 weeks',
  'Within 1 month',
  'Flexible / Planning ahead',
];

export default function QuotePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState({
    serviceType: '',
    timeline: '',
    specialRequirements: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
  });

  const handleChange = (name: string, value: string) => {
    // Sanitize input to prevent injection
    const sanitizedValue = sanitizeInput(value);
    setFormData({ ...formData, [name]: sanitizedValue });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const validation = validateQuoteForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          shippingType: formData.serviceType,
          origin: 'China',
          destination: 'To be discussed',
          message: `Timeline: ${formData.timeline}\n\nSpecial Requirements:\n${formData.specialRequirements}`,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to submit quote request');
      }

      setIsSubmitted(true);
    } catch (error) {
      setErrors({
        submit: error instanceof Error ? error.message : 'Failed to submit. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <>
        <section className="bg-gradient-hero py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Quote Request Received!
              </h1>
              <p className="text-lg text-white/80 mb-8">
                Thank you for your inquiry. Our team will review your request and
                send you a detailed quote within 24 hours.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
                <p className="text-white/90 mb-2">
                  <strong>Reference Number:</strong> QR-{Date.now().toString(36).toUpperCase()}
                </p>
                <p className="text-white/70 text-sm">
                  Please save this reference for your records.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-orange hover:bg-orange-dark text-white">
                  <Link href="/">Return Home</Link>
                </Button>
                <Button
                  variant="outline"
                  className="!border-white/40 !text-white !bg-transparent hover:!bg-white/10"
                  onClick={() => {
                    setIsSubmitted(false);
                    setCurrentStep(1);
                    setFormData({
                      serviceType: '',
                      timeline: '',
                      specialRequirements: '',
                      firstName: '',
                      lastName: '',
                      email: '',
                      phone: '',
                      company: '',
                    });
                  }}
                >
                  Submit Another Quote
                </Button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get a Free Quote
            </h1>
            <p className="text-lg text-white/80">
              Fill out the form below and receive a customized quote within 24 hours.
              No obligation, completely free.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="py-6 sm:py-8 border-b border-border bg-card">
        <div className="container mx-auto px-4">
          <div className="flex justify-between max-w-3xl mx-auto">
            {steps.map((step) => {
              const Icon = step.icon;
              const isActive = step.id === currentStep;
              const isCompleted = step.id < currentStep;

              return (
                <div
                  key={step.id}
                  className={cn(
                    'flex flex-col items-center flex-1',
                    isActive && 'text-orange',
                    isCompleted && 'text-green-500',
                    !isActive && !isCompleted && 'text-muted-foreground'
                  )}
                >
                  <div
                    className={cn(
                      'w-11 h-11 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mb-1 sm:mb-2',
                      isActive && 'bg-orange text-white',
                      isCompleted && 'bg-green-500 text-white',
                      !isActive && !isCompleted && 'bg-muted'
                    )}
                  >
                    {isCompleted ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      <Icon className="h-5 w-5" />
                    )}
                  </div>
                  {/* Show step number on mobile, full title on larger screens */}
                  <span className="text-[10px] sm:text-xs font-medium sm:hidden">
                    {isActive ? step.title.split(' ')[0] : step.id}
                  </span>
                  <span className="text-xs font-medium hidden sm:block">{step.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
            {/* Step 1: Service Type */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Select Service Type
                </h2>
                <p className="text-muted-foreground mb-6">
                  Choose the service that best fits your shipping needs
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {serviceTypes.map((type) => {
                    const Icon = type.icon;
                    const isSelected = formData.serviceType === type.id;

                    return (
                      <Card
                        key={type.id}
                        className={cn(
                          'cursor-pointer transition-all hover:shadow-lg hover:scale-[1.02]',
                          isSelected
                            ? 'border-orange ring-2 ring-orange/20 bg-orange/5'
                            : 'border-border/50 hover:border-orange/30'
                        )}
                        onClick={() => handleChange('serviceType', type.id)}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4">
                            <div
                              className={cn(
                                'w-14 h-14 rounded-xl flex items-center justify-center shrink-0',
                                isSelected ? 'bg-orange text-white' : 'bg-secondary'
                              )}
                            >
                              <Icon className="h-7 w-7" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-foreground text-base">
                                {type.title}
                              </h3>
                            </div>
                            <div
                              className={cn(
                                'w-5 h-5 rounded-full border-2 shrink-0',
                                isSelected
                                  ? 'border-orange bg-orange'
                                  : 'border-muted-foreground/40'
                              )}
                            >
                              {isSelected && (
                                <div className="w-full h-full flex items-center justify-center">
                                  <CheckCircle className="w-3 h-3 text-white" />
                                </div>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 2: Timeline */}
            {currentStep === 2 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Timeline & Requirements
                  </h2>
                  <p className="text-muted-foreground">
                    Let us know your timeline and any special requirements
                  </p>
                </div>

                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center">
                        <Calendar className="h-5 w-5 text-orange" />
                      </div>
                      <Label className="text-base font-semibold">When do you need the shipment delivered?</Label>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {timelineOptions.map((option) => (
                        <div
                          key={option}
                          className={cn(
                            'cursor-pointer transition-all p-4 rounded-lg border-2',
                            formData.timeline === option
                              ? 'border-orange bg-orange/5'
                              : 'border-border/50 hover:border-orange/30 hover:bg-muted/30'
                          )}
                          onClick={() => handleChange('timeline', option)}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={cn(
                                'w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0',
                                formData.timeline === option
                                  ? 'border-orange bg-orange'
                                  : 'border-muted-foreground/40'
                              )}
                            >
                              {formData.timeline === option && (
                                <div className="w-2 h-2 rounded-full bg-white" />
                              )}
                            </div>
                            <span className="text-sm font-medium text-foreground">
                              {option}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                        <HelpCircle className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <Label htmlFor="specialRequirements" className="text-base font-semibold">
                          Special Requirements
                        </Label>
                        <p className="text-sm text-muted-foreground">Optional</p>
                      </div>
                    </div>
                    <Textarea
                      id="specialRequirements"
                      value={formData.specialRequirements}
                      onChange={(e) => handleChange('specialRequirements', e.target.value)}
                      placeholder="Any special handling, insurance requirements, or other notes..."
                      rows={4}
                      className="resize-none"
                    />
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Step 3: Contact Info */}
            {currentStep === 3 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Your Contact Information
                  </h2>
                  <p className="text-muted-foreground">
                    We'll use this information to send you your personalized quote
                  </p>
                </div>

                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-lg bg-orange/10 flex items-center justify-center">
                        <User className="h-5 w-5 text-orange" />
                      </div>
                      <div>
                        <p className="text-base font-semibold">Personal Details</p>
                        <p className="text-sm text-muted-foreground">Required fields marked with *</p>
                      </div>
                    </div>

                    <div className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="text-sm font-medium">First Name *</Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => handleChange('firstName', e.target.value)}
                            placeholder="John"
                            required
                            maxLength={50}
                            className={cn('h-11', errors.firstName && 'border-red-500')}
                          />
                          {errors.firstName && (
                            <p className="text-sm text-red-500">{errors.firstName}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-sm font-medium">Last Name *</Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => handleChange('lastName', e.target.value)}
                            placeholder="Smith"
                            required
                            maxLength={50}
                            className={cn('h-11', errors.lastName && 'border-red-500')}
                          />
                          {errors.lastName && (
                            <p className="text-sm text-red-500">{errors.lastName}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm font-medium">Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            placeholder="john@company.com"
                            required
                            maxLength={254}
                            className={cn('h-11', errors.email && 'border-red-500')}
                          />
                          {errors.email && (
                            <p className="text-sm text-red-500">{errors.email}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-sm font-medium">Phone *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleChange('phone', e.target.value)}
                            placeholder="+1 (555) 000-0000"
                            required
                            maxLength={20}
                            className={cn('h-11', errors.phone && 'border-red-500')}
                          />
                          {errors.phone && (
                            <p className="text-sm text-red-500">{errors.phone}</p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-sm font-medium">Company <span className="text-muted-foreground font-normal">(optional)</span></Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleChange('company', e.target.value)}
                          placeholder="Your Company Name"
                          maxLength={100}
                          className={cn('h-11', errors.company && 'border-red-500')}
                        />
                        {errors.company && (
                          <p className="text-sm text-red-500">{errors.company}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Error Message */}
            {errors.submit && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm">{errors.submit}</p>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-border">
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>

              {currentStep < 3 ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  className="bg-orange hover:bg-orange-dark text-white"
                  disabled={currentStep === 1 && !formData.serviceType}
                >
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="bg-orange hover:bg-orange-dark text-white"
                  disabled={isSubmitting || !formData.firstName || !formData.email || !formData.phone}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                  {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
