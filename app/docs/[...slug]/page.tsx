import { DocsContent } from '@/components/docs-content';

export default function DocPage({ params }: { params: { slug: string[] } }) {
  // In a real app, you would fetch content based on params.slug
  // For now, we'll reuse the DocsContent component
  return <DocsContent />;
}
