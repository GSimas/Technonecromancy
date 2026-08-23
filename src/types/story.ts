export type Locale = 'pt' | 'en';

export interface LocalizedText {
  pt: string;
  en: string;
}

export interface SourceRef {
  page: string;
  locator: LocalizedText;
}

export interface EvidenceItem {
  id: string;
  claim: LocalizedText;
  source: SourceRef;
  caveat?: LocalizedText;
}

export interface StorySection {
  id: string;
  eyebrow: LocalizedText;
  title: LocalizedText;
  paragraphs: LocalizedText[];
  callout?: LocalizedText;
  sourceNote: LocalizedText;
  visual:
    | 'hook'
    | 'funnel'
    | 'simulacraLadder'
    | 'preservedVsEmbodied'
    | 'caseWindows'
    | 'riskTable'
    | 'necroFlow'
    | 'governanceWheel';
}

export interface FunnelStep {
  id: string;
  label: LocalizedText;
  description: LocalizedText;
}

export interface SimulacraStep {
  order: number;
  orderLabel: LocalizedText;
  relation: LocalizedText;
  affordance: LocalizedText;
}

export interface PreservedRow {
  id: string;
  dimension: LocalizedText;
  retained: LocalizedText;
  embodied: LocalizedText;
}

export interface CaseWindow {
  id: string;
  name: LocalizedText;
  modality: LocalizedText;
  description: LocalizedText;
  tension: LocalizedText;
  source: SourceRef;
}

export interface RiskRow {
  id: string;
  vector: LocalizedText;
  mechanism: LocalizedText;
  mitigation: LocalizedText;
}

export interface GovernanceItem {
  id: string;
  label: LocalizedText;
  detail: LocalizedText;
}

export interface PriorityStep {
  id: string;
  title: LocalizedText;
  actors: LocalizedText;
  action: LocalizedText;
}
