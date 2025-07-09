/**
 * Contact Section Component for HostelLandingTemplateV1
 * Displays contact information, social media, and contact form
 * All content is loaded from contact.json
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, MessageCircle, Mail, MapPin, Clock, Instagram, 
  Facebook, ExternalLink 
} from "lucide-react";
import { TikTokIcon } from "@/components/icons/TikTokIcon";
import contactData from "@/data/contact.json";

// Icon mapping for dynamic icon rendering
const iconMap = {
  Instagram,
  Facebook,
  TikTok: TikTokIcon,
  ExternalLink,
};

export const ContactSection = () => {
  const { title, description, contact_info, social_media, booking_platforms, contact_form, hours, ui_labels } = contactData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(contact_info.whatsapp.message);
    window.open(`${contact_info.whatsapp.link}?text=${message}`, '_blank');
  };

  return (
    <section className="py-20 bg-background" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-section text-foreground mb-4">
            {title}
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up">
            {/* Quick Contact */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>{ui_labels.quick_contact_title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* WhatsApp */}
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <MessageCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-semibold text-green-800">{ui_labels.whatsapp_label}</p>
                      <p className="text-sm text-green-600">{contact_info.phone.display}</p>
                    </div>
                  </div>
                  <Button variant="whatsapp" size="sm" onClick={handleWhatsAppClick}>
                    {ui_labels.chat_now_button}
                  </Button>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">{contact_info.phone.display}</p>
                    <p className="text-sm text-muted-foreground">{contact_info.phone.available}</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">{contact_info.email.address}</p>
                    <p className="text-sm text-muted-foreground">{contact_info.email.response_time}</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">{ui_labels.address_label}</p>
                    <p className="text-sm text-muted-foreground">{contact_info.address.full}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card className="border-0 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                   {ui_labels.hours_title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">{ui_labels.reception_label}</span>
                  <Badge variant="outline">{hours.reception}</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">{ui_labels.checkin_label}</span>
                  <span className="text-sm text-muted-foreground">{hours.check_in}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">{ui_labels.checkout_label}</span>
                  <span className="text-sm text-muted-foreground">{hours.check_out}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>{ui_labels.contact_form_title}</CardTitle>
                <p className="text-sm text-muted-foreground">{contact_form.note}</p>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{ui_labels.message_sent_title}</h3>
                    <p className="text-muted-foreground">{contact_form.success_message}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                         <Label htmlFor="name">{ui_labels.form_labels.name}</Label>
                         <Input
                           id="name"
                           value={formData.name}
                           onChange={(e) => handleInputChange('name', e.target.value)}
                           placeholder={contact_form.fields.find(f => f.name === 'name')?.placeholder}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                         <Label htmlFor="email">{ui_labels.form_labels.email}</Label>
                         <Input
                           id="email"
                           type="email"
                           value={formData.email}
                           onChange={(e) => handleInputChange('email', e.target.value)}
                           placeholder={contact_form.fields.find(f => f.name === 'email')?.placeholder}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                       <Label htmlFor="phone">{ui_labels.form_labels.phone}</Label>
                       <Input
                         id="phone"
                         type="tel"
                         value={formData.phone}
                         onChange={(e) => handleInputChange('phone', e.target.value)}
                         placeholder={contact_form.fields.find(f => f.name === 'phone')?.placeholder}
                      />
                    </div>

                    <div className="space-y-2">
                       <Label htmlFor="subject">{ui_labels.form_labels.subject}</Label>
                       <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                         <SelectTrigger>
                           <SelectValue placeholder={ui_labels.form_placeholders.subject} />
                        </SelectTrigger>
                        <SelectContent>
                          {contact_form.fields.find(f => f.name === 'subject')?.options?.map((option, index) => (
                            <SelectItem key={index} value={option}>{option}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                       <Label htmlFor="message">{ui_labels.form_labels.message}</Label>
                       <Textarea
                         id="message"
                         value={formData.message}
                         onChange={(e) => handleInputChange('message', e.target.value)}
                         placeholder={ui_labels.form_placeholders.message}
                        rows={4}
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="cta" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? ui_labels.sending_text : contact_form.submit_text}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};