# RiboInsightHub

A web platform for exploring and comparing ORF caller outputs across different tools and datasets. This platform provides an interactive interface to visualize and analyze results from various ORF calling tools, making it easier to understand their performance and compare their outputs.

## Features

- **UCSC Genome Browser Integration**
  - Direct visualization of ORF calls in the UCSC Genome Browser
  - Custom track hub generation for annotated and novel ORFs
  - Easy track selection and management

- **Tool Comparison**
  - Interactive comparison matrix showing overlap between different tools
  - Performance metrics visualization
  - Sample-specific comparisons

- **Dataset Overview**
  - Support for multiple sample types (pancreatic, fibroblast, endothelial)
  - Individual and pooled sample analysis
  - Comprehensive dataset metadata

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Landing page
│   ├── compare/           # Comparison views
│   ├── tools/             # Individual tool pages
│   └── browse/            # Genome browser integration
├── components/            
│   ├── Navigation/        # Navigation components
│   ├── TrackHub/          # UCSC track hub components
│   ├── Comparison/        # Comparison visualization components
│   └── DataTable/         # Results table components
├── lib/
│   ├── types/            # TypeScript interfaces
│   ├── utils/            # Utility functions
│   └── api/              # API handlers
└── public/
    └── data/             # Static data files
```

## Getting Started

1. **Prerequisites**
   - Node.js (v18 or later)
   - npm or yarn

2. **Installation**
   ```bash
   # Clone the repository
   git clone https://github.com/yourusername/RiboInsightHub.git
   cd RiboInsightHub

   # Install dependencies
   npm install

   # Start the development server
   npm run dev
   ```

3. **Configuration**
   - Update the base URL in the environment configuration
   - Configure UCSC Genome Browser track hub settings
   - Add your tool data and comparisons

## Usage

1. **Viewing Tool Comparisons**
   - Navigate to the Compare page
   - Select tools and samples to compare
   - View overlap statistics and performance metrics

2. **Genome Browser Integration**
   - Go to the Browse page
   - Select region of interest
   - Choose tracks to display
   - Open in UCSC Genome Browser

3. **Adding New Tools**
   - Follow the data format specified in the types
   - Add tool results in the required format
   - Update the track hub configuration

## Data Format

### Tool Output Format
```typescript
interface ORF {
  id: string;
  chromosome: string;
  start: number;
  end: number;
  strand: '+' | '-';
  exons: Array<{start: number, end: number}>;
  type: 'annotated' | 'novel';
  tool: string;
  sample: string;
  score?: number;
}
```

### Comparison Results Format
```typescript
interface ComparisonResult {
  toolA: string;
  toolB: string;
  sample: string;
  metrics: {
    sharedORFs: number;
    uniqueToA: number;
    uniqueToB: number;
    overlapPercentage: number;
  };
}
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- UCSC Genome Browser team for their excellent browser and API
- The ORF calling tool developers for their contributions to the field
- The research community for providing valuable datasets