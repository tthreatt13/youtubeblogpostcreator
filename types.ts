
export enum AppStep {
  DISCOVERY = 'DISCOVERY',
  INPUT = 'INPUT',
  PROCESSING = 'PROCESSING',
  RESULT = 'RESULT'
}

export interface DiscoveryAnswers {
  referenceMethod: string;
  imageSelectionStrategy: string;
  seoFocus: string;
  workflowIntegration: string;
}

export interface BlogDraft {
  title: string;
  content: string;
  thumbnailUrl: string;
  extractedImages: { url: string; timestamp: string; caption: string }[];
  seoMetadata: {
    title: string;
    description: string;
    keywords: string[];
    semanticClusters: string[];
  };
}

export interface YouTubeInfo {
  videoId: string;
  thumbnailUrl: string;
  title: string;
}
