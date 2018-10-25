import { ID, Identifiable, Timestamps } from '../types';

export type WorkspaceMembership = Readonly<{
  memberId: ID;
  workspaceId: ID;

  role: WorkspaceMembershipRole;
}> &
  Identifiable &
  Timestamps;

export enum WorkspaceMembershipRole {
  Owner = 'owner',
  Admin = 'admin',
  Member = 'member',
}
