#!/bin/bash

# Generate WebP versions of all PNG images in public/images
# Requires: brew install webp (for cwebp)

echo "🖼️  Generating WebP images..."

# Find all PNG files in public/images
find public/images -name "*.png" | while read -r png_file; do
  webp_file="${png_file%.png}.webp"
  
  # Skip if WebP already exists and is newer
  if [ -f "$webp_file" ] && [ "$webp_file" -nt "$png_file" ]; then
    echo "⏭️  Skipping $png_file (WebP up to date)"
    continue
  fi
  
  # Convert PNG to WebP
  if command -v cwebp &> /dev/null; then
    cwebp -q 80 "$png_file" -o "$webp_file" 2>/dev/null
    echo "✅ Created $webp_file"
  else
    echo "❌ cwebp not found. Install with: brew install webp"
    exit 1
  fi
done

echo ""
echo "🎉 Done! WebP images generated."
echo ""
echo "📊 Size comparison:"
echo "   PNG total: $(find public/images -name "*.png" -exec du -ch {} + | grep total | cut -f1)"
echo "   WebP total: $(find public/images -name "*.webp" -exec du -ch {} + 2>/dev/null | grep total | cut -f1)"
