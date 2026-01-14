'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Ship,
  Plane,
  Home,
  FileCheck,
  HelpCircle,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Calendar,
  User,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const serviceTypes = [
  { id: 'sea', title: 'Sea Freight', icon: Ship },
  { id: 'air', title: 'Air Freight', icon: Plane },
  { id: 'door-to-door', title: 'Door to Door', icon: Home },
  { id: 'customs-clearance', title: 'Customs Clearance', icon: FileCheck },
  { id: 'other', title: 'Other', icon: HelpCircle },
];

const timelineOptions = [
  'As soon as possible',
  'Within 1 week',
  'Within 2 weeks',
  'Within 1 month',
  'Flexible',
];

interface HeroQuoteFormProps {
  className?: string;
  defaultService?: string;
}

export function HeroQuoteForm({ className, defaultService = '' }: HeroQuoteFormProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: defaultService,
    timeline: '',
    specialRequirements: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

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
          message: `Timeline: ${formData.timeline}\n\nSpecial Requirements:\n${formData.specialRequirements}`,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      setIsSubmitted(true);
    } catch {
      // Still show success to user, but log error
      console.error('Failed to submit quote');
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className={cn('bg-white/10 backdrop-blur-sm border-white/20', className)}>
        <CardContent className="p-6 text-center">
          <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-white mb-2">Request Received!</h3>
          <p className="text-white/70 text-sm">
            We'll send you a quote within 24 hours.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card data-hero-quote-form className={cn('bg-white/10 backdrop-blur-sm border-white/20', className)}>
      <CardContent className="p-6">
        {/* Step Indicator */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-white">Get a Quick Quote</h3>
          <div className="flex items-center gap-1">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={cn(
                  'w-2 h-2 rounded-full transition-all',
                  step === currentStep
                    ? 'bg-orange w-4'
                    : step < currentStep
                    ? 'bg-green-500'
                    : 'bg-white/30'
                )}
              />
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Step 1: Service Type */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="text-white/80 text-sm">Service Type</Label>
                <div className="grid grid-cols-2 gap-2">
                  {serviceTypes.map((type) => {
                    const Icon = type.icon;
                    const isSelected = formData.serviceType === type.id;
                    return (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => handleChange('serviceType', type.id)}
                        className={cn(
                          'flex items-center gap-2 p-2.5 rounded-lg border transition-all text-left',
                          isSelected
                            ? 'bg-orange border-orange text-white'
                            : 'bg-white/5 border-white/20 text-white/80 hover:bg-white/10 hover:border-white/30'
                        )}
                      >
                        <Icon className="h-4 w-4 shrink-0" />
                        <span className="text-xs font-medium truncate">{type.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Timeline & Requirements */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="text-white/80 text-sm flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  When do you need it?
                </Label>
                <div className="grid grid-cols-1 gap-2">
                  {timelineOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleChange('timeline', option)}
                      className={cn(
                        'flex items-center gap-2 p-2.5 rounded-lg border transition-all text-left',
                        formData.timeline === option
                          ? 'bg-orange border-orange text-white'
                          : 'bg-white/5 border-white/20 text-white/80 hover:bg-white/10 hover:border-white/30'
                      )}
                    >
                      <div
                        className={cn(
                          'w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0',
                          formData.timeline === option
                            ? 'border-white bg-white'
                            : 'border-white/40'
                        )}
                      >
                        {formData.timeline === option && (
                          <div className="w-2 h-2 rounded-full bg-orange" />
                        )}
                      </div>
                      <span className="text-sm">{option}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="hero-requirements" className="text-white/80 text-sm">
                  Special Requirements (optional)
                </Label>
                <Textarea
                  id="hero-requirements"
                  value={formData.specialRequirements}
                  onChange={(e) => handleChange('specialRequirements', e.target.value)}
                  placeholder="Any special handling needs..."
                  rows={2}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 resize-none text-sm"
                />
              </div>
            </div>
          )}

          {/* Step 3: Contact Info */}
          {currentStep === 3 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-2">
                <User className="h-4 w-4 text-white/80" />
                <Label className="text-white/80 text-sm">Contact Information</Label>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <Input
                  value={formData.firstName}
                  onChange={(e) => handleChange('firstName', e.target.value)}
                  placeholder="First Name *"
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-9 text-sm"
                />
                <Input
                  value={formData.lastName}
                  onChange={(e) => handleChange('lastName', e.target.value)}
                  placeholder="Last Name *"
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-9 text-sm"
                />
              </div>

              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                placeholder="Email *"
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-9 text-sm"
              />

              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                placeholder="Phone *"
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-9 text-sm"
              />

              <Input
                value={formData.company}
                onChange={(e) => handleChange('company', e.target.value)}
                placeholder="Company (optional)"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 h-9 text-sm"
              />
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-2 pt-2">
            {currentStep > 1 && (
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={prevStep}
                className="!border-white/30 !text-white !bg-transparent hover:!bg-white/10 flex-1"
              >
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back
              </Button>
            )}

            {currentStep < 3 ? (
              <Button
                type="button"
                onClick={nextStep}
                size="sm"
                className="bg-orange hover:bg-orange-dark text-white flex-1"
                disabled={currentStep === 1 && !formData.serviceType}
              >
                Continue
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            ) : (
              <Button
                type="submit"
                size="sm"
                className="bg-orange hover:bg-orange-dark text-white flex-1"
                disabled={isSubmitting || !formData.firstName || !formData.email || !formData.phone}
              >
                {isSubmitting ? 'Submitting...' : 'Get Quote'}
                {!isSubmitting && <ArrowRight className="h-4 w-4 ml-1" />}
              </Button>
            )}
          </div>

        </form>
      </CardContent>
    </Card>
  );
}
