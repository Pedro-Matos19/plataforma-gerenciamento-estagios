import { Routes } from '@angular/router';
import { roleGuard } from '../../core/services/role.guard';
import { Candidate } from './candidate/candidate';
import { Company } from './company/company';
import { MyApplications } from './candidate/my-applications/my-applications';
import { ManageApplications } from './company/manage-applications/manage-applications';

export const usersRoutes: Routes = [
  {
    path: 'candidate/my-applications',
    component: MyApplications,
    canActivate: [() => roleGuard('CANDIDATE')()],
  },
  {
    path: 'candidate',
    component: Candidate,
    canActivate: [() => roleGuard('CANDIDATE')()],
  },
  {
    path: 'company',
    component: Company,
    canActivate: [() => roleGuard('COMPANY')()],
  },
  {
    path: 'company/vaga/:id/candidaturas',
    component: ManageApplications,
    canActivate: [() => roleGuard('COMPANY')()],
  },
];
