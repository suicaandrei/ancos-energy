import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  template: `
    <app-navbar></app-navbar>
    <div class="p-5  mt-32 min-h-[80vh]">
      <p>
        Terms of Service<br /><br />

        By using the Ancos Energy website and services, you agree to the
        following terms:<br /><br />

        Service Usage: You agree to use our natural gases services in accordance
        with all applicable laws and regulations, including ANRE standards.<br /><br />

        Accuracy of Information: You are responsible for providing accurate and
        up-to-date information when using our contact forms or interacting with
        our services.<br /><br />

        Limitation of Liability: Ancos Energy shall not be liable for any
        damages or losses arising from the use of our website or services,
        except as required by law.<br /><br />

        Changes to Terms: We reserve the right to update or modify these terms
        of service at any time. Continued use of our website and services
        constitutes acceptance of these changes.<br /><br />

        If you have any questions or concerns about our privacy policy or terms
        of service, please contact us at andrei.cosma@ancosenergy.ro.
      </p>
    </div>
    <app-footer></app-footer>
  `,
})
export class TermsComponent {}
