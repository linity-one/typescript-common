import { FC } from 'react';
import { cva, VariantProps } from 'cva';
import { cn } from '@/common/lib/cn';
import Arrow from '../svg/arrow';
import Linkedin from '../svg/linkedin';
import Location from '../svg/location';
import Mail from '../svg/mail';
import Social from '../svg/social';
import Language from '../svg/language';
import Search from '../svg/search';

const IconsVariants = cva('', {
  variants: {
    size: {
      main: 'h-3 w-3',
    },
    colour: {
      gunmetal: 'text-gunmetal',
      lime: 'text-lime',
      cloud: 'text-cloud',
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

export const LinkedInIcon: FC<IconsProps> = ({ size, colour }) => {
  return <Linkedin className={cn(IconsVariants({ colour, size }))} />;
};

export const InstagramIcon: FC<IconsProps> = ({ size, colour }) => {
  return <Search className={cn(IconsVariants({ colour, size }))} />;
};

export const LocationIcon: FC<IconsProps> = ({ size, colour }) => {
  return <Location className={cn(IconsVariants({ colour, size }))} />;
};

export const MailIcon: FC<IconsProps> = ({ size, colour }) => {
  return <Mail className={cn(IconsVariants({ colour, size }))} />;
};

export const SocialIcon: FC<IconsProps> = ({ size, colour }) => {
  return <Social className={cn(IconsVariants({ colour, size }))} />;
};

export const LanguageIcon: FC<IconsProps> = ({ size, colour }) => {
  return <Language className={cn(IconsVariants({ colour, size }))} />;
};

export const SearchIcon: FC<IconsProps> = ({ size, colour }) => {
  return <Search className={cn(IconsVariants({ colour, size }))} />;
};
