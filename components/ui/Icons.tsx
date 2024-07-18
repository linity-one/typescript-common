import { FC } from 'react';
import { cva, VariantProps } from 'cva';
import Arrow from '../svg/arrow';
import { cn } from '@/common/lib/cn';

const IconsVariants = cva('', {
  variants: {
    size: {
      main: 'h-3 w-3',
    },
    colour: {
      gunmetal: 'text-gunmetal',
      lime: 'text-lime',
      'rasperry-rose': 'text-rasperry-rose',
      'butterfly-blush': 'text-butterfly-blush',
    },
  },
  compoundVariants: [],
  defaultVariants: {
    size: 'main',
    colour: 'gunmetal',
  },
});

interface IconsProps extends VariantProps<typeof IconsVariants> {}

export const ArrowIcon: FC<IconsProps> = ({ size, colour }) => {
  return <Arrow className={cn(IconsVariants({ colour, size }))} />;
};
