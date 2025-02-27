import { ORF, Tool, Sample } from '../types/orf';

export function generateHubText(hubName: string, shortLabel: string, longLabel: string): string {
  return `hub ${hubName}
shortLabel ${shortLabel}
longLabel ${longLabel}
genomesFile genomes.txt
email example@example.com
descriptionUrl description.html`;
}

export function generateGenomesText(genome: string = 'hg38'): string {
  return `genome ${genome}
trackDb trackDb.txt`;
}

export function generateTrackDbEntry(
  tool: Tool,
  sample: Sample,
  type: 'annotated' | 'novel',
  bigBedUrl: string
): string {
  const trackName = `${tool.id}_${sample.id}_${type}`;
  const displayName = `${tool.name} ${type} ORFs (${sample.name})`;
  
  return `track ${trackName}
bigDataUrl ${bigBedUrl}
shortLabel ${displayName}
longLabel ${displayName} from ${tool.name} v${tool.version}
type bigBed 12
visibility pack
color ${type === 'annotated' ? '0,100,0' : '200,0,0'}
priority ${type === 'annotated' ? 1 : 2}`;
}

export function generateTrackHubUrls(baseUrl: string, hubName: string): {
  hubUrl: string;
  trackDbUrl: string;
  genomesUrl: string;
} {
  return {
    hubUrl: `${baseUrl}/hubs/${hubName}/hub.txt`,
    trackDbUrl: `${baseUrl}/hubs/${hubName}/trackDb.txt`,
    genomesUrl: `${baseUrl}/hubs/${hubName}/genomes.txt`,
  };
}

export function formatORFForBigBed(orf: ORF): string {
  // BigBed 12 format: chrom start end name score strand thickStart thickEnd itemRgb blockCount blockSizes blockStarts
  const blockCount = orf.exons.length;
  const blockSizes = orf.exons.map(exon => exon.end - exon.start).join(',');
  const blockStarts = orf.exons.map(exon => exon.start - orf.start).join(',');
  
  return [
    orf.chromosome,
    orf.start,
    orf.end,
    orf.id,
    orf.score || 0,
    orf.strand,
    orf.start,
    orf.end,
    orf.type === 'annotated' ? '0,100,0' : '200,0,0',
    blockCount,
    blockSizes,
    blockStarts
  ].join('\t');
} 