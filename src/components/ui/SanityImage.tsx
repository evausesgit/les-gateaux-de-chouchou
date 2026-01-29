'use client';

import Image from 'next/image';
import { urlFor } from '@/sanity/lib/client';
import { SanityImage as SanityImageType } from '@/types';

interface SanityImageProps {
  image: SanityImageType | null | undefined;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  sizes?: string;
  priority?: boolean;
  placeholder?: string;
}

export default function SanityImage({
  image,
  alt,
  width,
  height,
  fill,
  className,
  sizes,
  priority,
  placeholder = '🎂',
}: SanityImageProps) {
  // Si pas d'image ou pas de référence valide, afficher le placeholder
  if (!image?.asset?._ref) {
    return (
      <div
        className={`flex items-center justify-center bg-rose-poudre ${className}`}
        style={!fill ? { width, height } : undefined}
      >
        <span className="text-6xl">{placeholder}</span>
      </div>
    );
  }

  const imageUrl = urlFor(image)
    .width(width || 800)
    .height(height || 800)
    .fit('crop')
    .url();

  if (fill) {
    return (
      <Image
        src={imageUrl}
        alt={alt}
        fill
        className={className}
        sizes={sizes}
        priority={priority}
      />
    );
  }

  return (
    <Image
      src={imageUrl}
      alt={alt}
      width={width || 400}
      height={height || 400}
      className={className}
      sizes={sizes}
      priority={priority}
    />
  );
}
