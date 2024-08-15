import { FC } from "react";
import { cva, VariantProps } from "cva";
import { cn } from "@/common/lib/cn";
import Linkedin from "../svg/linkedin";
import Location from "../svg/location";
import Mail from "../svg/mail";
import Social from "../svg/social";
import Language from "../svg/language";
import Search from "../svg/search";
import { SvgVariantsProps } from "../svg/SVGWrapper";
import Instagram from "../svg/instagram";
import X from "../svg/x";
import Menu from "../svg/menu";
import Chevronup from "../svg/chevronup";
import ChevronDown from "../svg/chevrondown";
import Chevronleft from "../svg/chevronleft";
import AddFriend from "../svg/addfriend";
import Bookmark from "../svg/bookmark";
import Chat from "../svg/chat";
import Comment from "../svg/comment";
import Create from "../svg/create";
import Goal from "../svg/goal";
import Heart from "../svg/heart";
import Profile from "../svg/profile";
import Settings from "../svg/settings";
import Learn from "../svg/learn";
import ChevronRight from "../svg/chevronright";

const IconsVariants = cva("", {
  variants: {
    color: {
      gunmetal: "text-gunmetal",
      lime: "text-lime",
      cloud: "text-cloud",
      slate: "text-slate",
      storm: "text-storm",
    },
  },
  compoundVariants: [],
  defaultVariants: {
    color: "gunmetal",
  },
});

interface IconsProps extends VariantProps<typeof IconsVariants> {
  size: SvgVariantsProps["size"];
}

export const LinkedInIcon: FC<IconsProps> = ({ size, color }) => {
  return <Linkedin size={size} className={cn(IconsVariants({ color }))} />;
};

export const InstagramIcon: FC<IconsProps> = ({ size, color }) => {
  return <Instagram size={size} className={cn(IconsVariants({ color }))} />;
};

export const LocationIcon: FC<IconsProps> = ({ size, color }) => {
  return <Location size={size} className={cn(IconsVariants({ color }))} />;
};

export const MailIcon: FC<IconsProps> = ({ size, color }) => {
  return <Mail size={size} className={cn(IconsVariants({ color }))} />;
};

export const SocialIcon: FC<IconsProps> = ({ size, color }) => {
  return <Social size={size} className={cn(IconsVariants({ color }))} />;
};

export const LanguageIcon: FC<IconsProps> = ({ size, color }) => {
  return <Language size={size} className={cn(IconsVariants({ color }))} />;
};

export const SearchIcon: FC<IconsProps> = ({ size, color }) => {
  return <Search size={size} className={cn(IconsVariants({ color }))} />;
};

export const XIcon: FC<IconsProps> = ({ size, color }) => {
  return <X size={size} className={cn(IconsVariants({ color }))} />;
};

export const MenuIcon: FC<IconsProps> = ({ size, color }) => {
  return <Menu size={size} className={cn(IconsVariants({ color }))} />;
};

export const ChevronUpIcon: FC<IconsProps> = ({ size, color }) => {
  return <Chevronup size={size} className={cn(IconsVariants({ color }))} />;
};

export const ChevronDownIcon: FC<IconsProps> = ({ size, color }) => {
  return <ChevronDown size={size} className={cn(IconsVariants({ color }))} />;
};

export const ChevronLeftIcon: FC<IconsProps> = ({ size, color }) => {
  return <Chevronleft size={size} className={cn(IconsVariants({ color }))} />;
};

export const ChevronRightIcon: FC<IconsProps> = ({ size, color }) => {
  return <ChevronRight size={size} className={cn(IconsVariants({ color }))} />;
};

export const AddFriendIcon: FC<IconsProps> = ({ size, color }) => {
  return <AddFriend size={size} className={cn(IconsVariants({ color }))} />;
};

export const LearnIcon: FC<IconsProps> = ({ size, color }) => {
  return <Learn size={size} className={cn(IconsVariants({ color }))} />;
};

export const BookmarkIcon: FC<IconsProps> = ({ size, color }) => {
  return <Bookmark size={size} className={cn(IconsVariants({ color }))} />;
};

export const ChatIcon: FC<IconsProps> = ({ size, color }) => {
  return <Chat size={size} className={cn(IconsVariants({ color }))} />;
};

export const CommentIcon: FC<IconsProps> = ({ size, color }) => {
  return <Comment size={size} className={cn(IconsVariants({ color }))} />;
};

export const CreateIcon: FC<IconsProps> = ({ size, color }) => {
  return <Create size={size} className={cn(IconsVariants({ color }))} />;
};

export const GoalIcon: FC<IconsProps> = ({ size, color }) => {
  return <Goal size={size} className={cn(IconsVariants({ color }))} />;
};

export const HeartIcon: FC<IconsProps> = ({ size, color }) => {
  return <Heart size={size} className={cn(IconsVariants({ color }))} />;
};

export const ProfileIcon: FC<IconsProps> = ({ size, color }) => {
  return <Profile size={size} className={cn(IconsVariants({ color }))} />;
};

export const SettingsIcon: FC<IconsProps> = ({ size, color }) => {
  return <Settings size={size} className={cn(IconsVariants({ color }))} />;
};
