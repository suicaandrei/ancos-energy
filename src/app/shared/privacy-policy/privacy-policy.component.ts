import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  template: `
    <app-navbar></app-navbar>
    <div class="p-5 mt-32 min-h-[80vh]">
      <p>
        Privacy Policy <br /><br />

        At Ancos Energy, we are committed to protecting your privacy and
        ensuring the security of your personal information. This privacy policy
        outlines how we collect, use, and protect the information you provide to
        us when using our website and services.<br /><br />

        Information We Collect: We collect personal information, including name,
        email address, address, and phone numbers, via contact forms on our
        website. We may also collect information through cookies to improve your
        browsing experience and analyze website traffic.<br /><br />

        How We Use Your Information: We use the information collected to provide
        and improve our natural gases services, including the design,
        maintenance, and technical inspections of installations. Your
        information may also be used to communicate with you, respond to
        inquiries, and personalize your experience.<br /><br />

        Data Security: We take appropriate measures to safeguard your personal
        information and maintain its confidentiality. Your information is
        securely stored on our systems, which are protected by industry-standard
        security measures. We do not share your information with third parties
        without your consent, except as required by law or as necessary to
        fulfill our services to you.<br /><br />

        Opt-Out: You have the option to opt-out of certain data collection
        activities, such as cookies. You can adjust your browser settings to
        reject cookies or choose not to provide certain personal information
        when using our contact forms. However, please note that opting out may
        affect your experience on our website.<br /><br />

        Your Rights: You have the right to access, update, or delete your
        personal information held by us. If you have any questions or concerns
        about your privacy or data security, please contact us at
        andrei.cosma@ancosenergy.ro.<br /><br />
      </p>
    </div>
    <app-footer></app-footer>
  `,
})
export class PrivacyPolicyComponent {}
