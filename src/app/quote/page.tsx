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
  Package,
  MapPin,
  Calendar,
  User,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { chinesePorts, chineseAirports, destinationPorts } from '@/lib/data/ports';
import { destinations } from '@/lib/data/destinations';

const steps = [
  { id: 1, title: 'Shipping Type', icon: Ship },
  { id: 2, title: 'Route', icon: MapPin },
  { id: 3, title: 'Cargo Details', icon: Package },
  { id: 4, title: 'Timeline', icon: Calendar },
  { id: 5, title: 'Contact Info', icon: User },
];

const shippingTypes = [
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
];

const cargoTypes = [
  'General Merchandise',
  'Electronics',
  'Textiles & Apparel',
  'Furniture',
  'Machinery',
  'Food Products',
  'Chemicals',
  'Automotive Parts',
  'Other',
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

  const [formData, setFormData] = useState({
    shippingType: '',
    originCity: '',
    originPort: '',
    destinationCountry: '',
    destinationCity: '',
    cargoType: '',
    cargoDescription: '',
    weight: '',
    weightUnit: 'kg',
    length: '',
    width: '',
    height: '',
    dimensionUnit: 'cm',
    quantity: '1',
    timeline: '',
    specialRequirements: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
  });

  const handleChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const getOriginPorts = () => {
    if (formData.shippingType === 'air') {
      return chineseAirports;
    }
    return chinesePorts;
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
                  className="border-white/30 text-white hover:bg-white/10"
                  onClick={() => {
                    setIsSubmitted(false);
                    setCurrentStep(1);
                    setFormData({
                      shippingType: '',
                      originCity: '',
                      originPort: '',
                      destinationCountry: '',
                      destinationCity: '',
                      cargoType: '',
                      cargoDescription: '',
                      weight: '',
                      weightUnit: 'kg',
                      length: '',
                      width: '',
                      height: '',
                      dimensionUnit: 'cm',
                      quantity: '1',
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
            {/* Step 1: Shipping Type */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Select Shipping Type
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {shippingTypes.map((type) => {
                    const Icon = type.icon;
                    const isSelected = formData.shippingType === type.id;

                    return (
                      <Card
                        key={type.id}
                        className={cn(
                          'cursor-pointer transition-all hover:shadow-md',
                          isSelected
                            ? 'border-orange ring-2 ring-orange/20'
                            : 'border-border/50'
                        )}
                        onClick={() => handleChange('shippingType', type.id)}
                      >
                        <CardContent className="p-6 text-center">
                          <div
                            className={cn(
                              'w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center',
                              isSelected ? 'bg-orange text-white' : 'bg-secondary'
                            )}
                          >
                            <Icon className="h-7 w-7" />
                          </div>
                          <h3 className="font-semibold text-foreground mb-1">
                            {type.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            {type.description}
                          </p>
                          <p className="text-xs text-orange">{type.transitTime}</p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Step 2: Route */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Origin & Destination
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-border/50">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-foreground mb-4">Origin (China)</h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="originPort">
                            {formData.shippingType === 'air' ? 'Airport' : 'Port'}
                          </Label>
                          <Select
                            value={formData.originPort}
                            onValueChange={(value) => handleChange('originPort', value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select origin" />
                            </SelectTrigger>
                            <SelectContent>
                              {getOriginPorts().map((port) => (
                                <SelectItem key={port.id} value={port.id}>
                                  {port.city} ({port.code})
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border/50">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-foreground mb-4">Destination</h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="destinationCountry">Country</Label>
                          <Select
                            value={formData.destinationCountry}
                            onValueChange={(value) => handleChange('destinationCountry', value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select country" />
                            </SelectTrigger>
                            <SelectContent>
                              {destinations.map((dest) => (
                                <SelectItem key={dest.id} value={dest.id}>
                                  {dest.flag} {dest.country}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="destinationCity">City</Label>
                          <Input
                            id="destinationCity"
                            value={formData.destinationCity}
                            onChange={(e) => handleChange('destinationCity', e.target.value)}
                            placeholder="Destination city"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* Step 3: Cargo Details */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Cargo Details
                </h2>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="cargoType">Cargo Type</Label>
                    <Select
                      value={formData.cargoType}
                      onValueChange={(value) => handleChange('cargoType', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select cargo type" />
                      </SelectTrigger>
                      <SelectContent>
                        {cargoTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cargoDescription">Cargo Description</Label>
                    <Textarea
                      id="cargoDescription"
                      value={formData.cargoDescription}
                      onChange={(e) => handleChange('cargoDescription', e.target.value)}
                      placeholder="Describe your cargo (product details, packaging, etc.)"
                      rows={3}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="weight">Total Weight</Label>
                      <div className="flex gap-2">
                        <Input
                          id="weight"
                          type="number"
                          value={formData.weight}
                          onChange={(e) => handleChange('weight', e.target.value)}
                          placeholder="0"
                          className="flex-1"
                        />
                        <Select
                          value={formData.weightUnit}
                          onValueChange={(value) => handleChange('weightUnit', value)}
                        >
                          <SelectTrigger className="w-20">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="kg">kg</SelectItem>
                            <SelectItem value="lbs">lbs</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="quantity">Quantity (units/packages)</Label>
                      <Input
                        id="quantity"
                        type="number"
                        value={formData.quantity}
                        onChange={(e) => handleChange('quantity', e.target.value)}
                        placeholder="1"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Dimensions (optional)</Label>
                    <div className="grid grid-cols-3 gap-2 sm:flex sm:gap-2 sm:items-center">
                      <Input
                        type="number"
                        value={formData.length}
                        onChange={(e) => handleChange('length', e.target.value)}
                        placeholder="Length"
                        className="sm:flex-1"
                      />
                      <Input
                        type="number"
                        value={formData.width}
                        onChange={(e) => handleChange('width', e.target.value)}
                        placeholder="Width"
                        className="sm:flex-1"
                      />
                      <Input
                        type="number"
                        value={formData.height}
                        onChange={(e) => handleChange('height', e.target.value)}
                        placeholder="Height"
                        className="sm:flex-1"
                      />
                    </div>
                    <Select
                      value={formData.dimensionUnit}
                      onValueChange={(value) => handleChange('dimensionUnit', value)}
                    >
                      <SelectTrigger className="w-full sm:w-24 mt-2 sm:mt-0">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cm">cm</SelectItem>
                        <SelectItem value="in">in</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Timeline */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Timeline & Requirements
                </h2>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>When do you need the shipment delivered?</Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {timelineOptions.map((option) => (
                        <Card
                          key={option}
                          className={cn(
                            'cursor-pointer transition-all',
                            formData.timeline === option
                              ? 'border-orange ring-2 ring-orange/20'
                              : 'border-border/50 hover:border-border'
                          )}
                          onClick={() => handleChange('timeline', option)}
                        >
                          <CardContent className="p-4 flex items-center space-x-3">
                            <div
                              className={cn(
                                'w-4 h-4 rounded-full border-2',
                                formData.timeline === option
                                  ? 'border-orange bg-orange'
                                  : 'border-muted-foreground'
                              )}
                            >
                              {formData.timeline === option && (
                                <div className="w-full h-full flex items-center justify-center">
                                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                                </div>
                              )}
                            </div>
                            <span className="text-sm font-medium text-foreground">
                              {option}
                            </span>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="specialRequirements">
                      Special Requirements (optional)
                    </Label>
                    <Textarea
                      id="specialRequirements"
                      value={formData.specialRequirements}
                      onChange={(e) => handleChange('specialRequirements', e.target.value)}
                      placeholder="Any special handling, insurance requirements, or other notes..."
                      rows={4}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Contact Info */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Your Contact Information
                </h2>

                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleChange('firstName', e.target.value)}
                        placeholder="John"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleChange('lastName', e.target.value)}
                        placeholder="Smith"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        placeholder="+1 (555) 000-0000"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company (optional)</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleChange('company', e.target.value)}
                      placeholder="Your Company Name"
                    />
                  </div>
                </div>
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

              {currentStep < 5 ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  className="bg-orange hover:bg-orange-dark text-white"
                  disabled={
                    (currentStep === 1 && !formData.shippingType) ||
                    (currentStep === 2 && (!formData.originPort || !formData.destinationCountry))
                  }
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
