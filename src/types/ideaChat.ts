export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface ProjectProposal {
  projectTitle: string;
  businessType: string;
  problem: string;
  ideaSummary: string;
  keyFeatures: string[];
  expectedImpact: string;
  suggestedLine: string;
}

export interface SendProposalPayload {
  clientName: string;
  clientEmail: string;
  clientPhone?: string;
  proposal: ProjectProposal;
}
