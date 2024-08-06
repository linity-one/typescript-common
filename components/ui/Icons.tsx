import { FC } from 'react';
import { cva, VariantProps } from 'cva';
import { cn } from '@/common/lib/cn';
import Linkedin from '../svg/linkedin';
import Location from '../svg/location';
import Mail from '../svg/mail';
import Social from '../svg/social';
import Language from '../svg/language';
import Search from '../svg/search';
import { SvgVariantsProps } from '../svg/SVGWrapper';
import Instagram from '../svg/instagram';
import X from '../svg/x';
import Menu from '../svg/menu';

const IconsVariants = cva('', {
  variants: {
    color: {
      gunmetal: 'text-gunmetal',
      lime: 'text-lime',
      cloud: 'text-cloud',
      slate: 'text-slate',
      storm: 'text-storm',
    },
    hoverColor: {
      gunmetal: 'hover:text-gunmetal',
      lime: 'hover:text-lime',
      cloud: 'hover:text-cloud',
      slate: 'hover:text-slate',
      storm: 'hover:text-storm',
    },
  },
  compoundVariants: [],
  defaultVariants: {
    color: 'gunmetal',
    hoverColor: 'gunmetal',
  },
});

interface IconsProps extends VariantProps<typeof IconsVariants> {
  size: SvgVariantsProps['size'];
}

export const LinkedInIcon: FC<IconsProps> = ({ size, color, hoverColor }) => {
  return (
    <Linkedin
      size={size}
      className={cn(IconsVariants({ color, hoverColor }))}
    />
  );
};

export const InstagramIcon: FC<IconsProps> = ({ size, color, hoverColor }) => {
  return (
    <Instagram
      size={size}
      className={cn(IconsVariants({ color, hoverColor }))}
    />
  );
};

export const LocationIcon: FC<IconsProps> = ({ size, color, hoverColor }) => {
  return (
    <Location
      size={size}
      className={cn(IconsVariants({ color, hoverColor }))}
    />
  );
};

export const MailIcon: FC<IconsProps> = ({ size, color, hoverColor }) => {
  return (
    <Mail size={size} className={cn(IconsVariants({ color, hoverColor }))} />
  );
};

export const SocialIcon: FC<IconsProps> = ({ size, color, hoverColor }) => {
  return (
    <Social size={size} className={cn(IconsVariants({ color, hoverColor }))} />
  );
};

export const LanguageIcon: FC<IconsProps> = ({ size, color, hoverColor }) => {
  return (
    <Language
      size={size}
      className={cn(IconsVariants({ color, hoverColor }))}
    />
  );
};

export const SearchIcon: FC<IconsProps> = ({ size, color, hoverColor }) => {
  return (
    <Search size={size} className={cn(IconsVariants({ color, hoverColor }))} />
  );
};

export const XIcon: FC<IconsProps> = ({ size, color, hoverColor }) => {
  return <X size={size} className={cn(IconsVariants({ color, hoverColor }))} />;
};

export const MenuIcon: FC<IconsProps> = ({ size, color, hoverColor }) => {
  return (
    <Menu size={size} className={cn(IconsVariants({ color, hoverColor }))} />
  );
};
