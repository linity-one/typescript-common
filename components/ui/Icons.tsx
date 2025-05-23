import { FC } from 'react'
import { cva, VariantProps } from 'cva'
import { cn } from '../../lib/cn'
import Linkedin from '../svg/linkedin'
import Location from '../svg/location'
import Mail from '../svg/mail'
import Social from '../svg/social'
import Language from '../svg/language'
import Search from '../svg/search'
import { SvgVariantsProps } from '../svg/SVGWrapper'
import Instagram from '../svg/instagram'
import X from '../svg/x'
import Menu from '../svg/menu'
import Chevronup from '../svg/chevronup'
import ChevronDown from '../svg/chevrondown'
import Chevronleft from '../svg/chevronleft'
import AddFriend from '../svg/addfriend'
import Bookmark from '../svg/bookmark'
import Chat from '../svg/chat'
import Comment from '../svg/comment'
import Create from '../svg/create'
import Goal from '../svg/goal'
import Heart from '../svg/heart'
import Profile from '../svg/profile'
import Settings from '../svg/settings'
import Learn from '../svg/learn'
import ChevronRight from '../svg/chevronright'
import Logout from '../svg/logout'
import Success from '../svg/success'
import Error from '../svg/error'
import Alert from '../svg/alert'
import Info from '../svg/info'
import Plus from '../svg/plus'
import Aicreate from '../svg/aicreate'
import Image from '../svg/image'
import Video from '../svg/video'
import Audio from '../svg/audio'
import Check from '../svg/check'
import Pause from '../svg/pause'
import Play from '../svg/play'
import Target from '../svg/target'
import Share from '../svg/share'
import Admin from '../svg/admin'
import Picture from '../svg/picture'
import Attachement from '../svg/attachement'
import Internet from '../svg/internet'
import Switch from '../svg/switch'
import Write from '../svg/write'
import Guard from '../svg/guard'
import RemoveFriend from '../svg/remove_friend'
import Link from '../svg/link'
import SendMessage from '../svg/send_message'
import TrendDown from '../svg/trend_down'
import TrendUp from '../svg/trend_up'
import Pencil from '../svg/pencil'
import Dashboard from '../svg/dashboard'
import Exercise from '../svg/exercise'
import Playlist from '../svg/playlist'
import Hamburger from '../svg/hamburger'
import Group from '../svg/group'
import ArrowUpRight from '../svg/arrowupright'
import ThreeDots from '../svg/threedots'

const IconsVariants = cva('', {
    variants: {
        variant: {
            outline: '',
            outlineSidenav: '',
        },
    },
    compoundVariants: [],
    defaultVariants: {
        variant: 'outline',
    },
})

export interface IconsProps extends VariantProps<typeof IconsVariants> {
    size: SvgVariantsProps['size']
    className?: string
    fill?: string
}

export const PlayIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <Play size={size} className={cn(IconsVariants({ variant, className }))} />
}

export const PauseIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <Pause size={size} className={cn(IconsVariants({ variant, className }))} />
}

export const TargetIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <Target size={size} className={cn(IconsVariants({ variant, className }))} />
}

export const LinkedInIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <Linkedin size={size} className={cn(IconsVariants({ variant, className }))} />
}

export const InstagramIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <Instagram size={size} className={cn(IconsVariants({ variant, className }))} />
}

//real icons

export const LogoutIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <Logout size={size} className={cn(IconsVariants({ variant, className }))} />
}

export const SuccessIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <Success size={size} className={cn(IconsVariants({ variant, className }))} />
}

export const AlertIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <Alert size={size} className={cn(IconsVariants({ variant, className }))} />
}

export const ErrorIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <Error size={size} className={cn(IconsVariants({ variant, className }))} />
}

export const InformationIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <Info size={size} className={cn(IconsVariants({ variant, className }))} />
}
export const ChevronDownIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <ChevronDown size={size} className={cn(IconsVariants({ variant, className }))} />
}
export const ChevronUpIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <Chevronup size={size} className={cn(IconsVariants({ variant, className }))} />
}

export const ChevronRightIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <ChevronRight size={size} className={cn(IconsVariants({ variant, className }))} />
}

export const ChevronLeftIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <Chevronleft size={size} className={cn(IconsVariants({ variant, className }))} />
}

export const SwitchIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <Switch size={size} className={cn(IconsVariants({ variant, className }))} />
}

export const SocialIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <Social size={size} className={cn(IconsVariants({ variant, className }))} />
}

export const SettingsIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <Settings size={size} className={cn(IconsVariants({ variant, className }))} />
}

export const ProfileIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <Profile size={size} className={cn(IconsVariants({ variant, className }))} />
}

export const MenuIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <Menu size={size} className={cn(IconsVariants({ variant, className }))} />
}

export const MailIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <Mail size={size} className={cn(IconsVariants({ variant, className }))} />
}

export const LocationIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <Location size={size} className={cn(IconsVariants({ variant, className }))} />
}

export const HeartIcon: FC<IconsProps> = ({ size, variant, className, fill }) => {
    return <Heart size={size} fill={fill} className={cn(IconsVariants({ variant, className }))} />
}

export const LearnIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <Learn size={size} className={cn(IconsVariants({ variant, className }))} />
}

export const LanguageIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <Language size={size} className={cn(IconsVariants({ variant, className }))} />
}

export const GoalIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <Goal size={size} className={cn(IconsVariants({ variant, className }))} />
}

export const CreateIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <Create size={size} className={cn(IconsVariants({ variant, className }))} />
}

export const CommentIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <Comment size={size} className={cn(IconsVariants({ variant, className }))} />
}
export const ChatIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <Chat size={size} className={cn(IconsVariants({ variant, className }))} />
}
export const BookmarkIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <Bookmark size={size} className={cn(IconsVariants({ variant, className }))} />
}
export const AddFriendIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <AddFriend size={size} className={cn(IconsVariants({ variant, className }))} />
}

export const SearchIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <Search size={size} className={cn(IconsVariants({ variant, className }))} />
}

export const PlusIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <Plus size={size} className={cn(IconsVariants({ variant, className }))} />
}

export const XIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <X size={size} className={cn(IconsVariants({ variant, className }))} />
}

export const AICreateIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <Aicreate size={size} className={cn(IconsVariants({ variant, className }))} />
}

export const WriteIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <Write size={size} className={cn(IconsVariants({ variant, className }))} />
}

export const ImageIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <Image size={size} className={cn(IconsVariants({ variant, className }))} />
}

export const VideoIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <Video size={size} className={cn(IconsVariants({ variant, className }))} />
}

export const AudioIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <Audio size={size} className={cn(IconsVariants({ variant, className }))} />
}

export const CheckIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <Check size={size} className={cn(IconsVariants({ variant, className }))} />
}

export const ShareIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <Share size={size} className={cn(IconsVariants({ variant, className }))} />
}

export const AdminIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <Admin size={size} className={cn(IconsVariants({ variant, className }))} />
}

export const PictureIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <Picture size={size} className={cn(IconsVariants({ variant, className }))} />
}

export const AttachementIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <Attachement size={size} className={cn(IconsVariants({ variant, className }))} />
}

export const InternetIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <Internet size={size} className={cn(IconsVariants({ variant, className }))} />
}

export const GuardIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <Guard size={size} className={cn(IconsVariants({ variant, className }))} />
}

export const RemoveFriendIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <RemoveFriend size={size} className={cn(IconsVariants({ variant, className }))} />
}

export const LinkIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <Link size={size} className={cn(IconsVariants({ variant, className }))} />
}

export const SendMessageIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <SendMessage size={size} className={cn(IconsVariants({ variant, className }))} />
}

export const TrendDownIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <TrendDown size={size} className={cn(IconsVariants({ variant, className }))} />
}

export const TrendUpIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <TrendUp size={size} className={cn(IconsVariants({ variant, className }))} />
}

export const PencilIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <Pencil size={size} className={cn(IconsVariants({ variant, className }))} />
}

export const DashboardIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <Dashboard size={size} className={cn(IconsVariants({ variant, className }))} />
}

export const ExerciseIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <Exercise size={size} className={cn(IconsVariants({ variant, className }))} />
}

export const PlaylistIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <Playlist size={size} className={cn(IconsVariants({ variant, className }))} />
}

export const HamburgerIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <Hamburger size={size} className={cn(IconsVariants({ variant, className }))} />
}

export const GroupIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <Group size={size} className={cn(IconsVariants({ variant, className }))} />
}

export const ArrowUpRightIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <ArrowUpRight size={size} className={cn(IconsVariants({ variant, className }))} />
}

export const ThreeDotsIcon: FC<IconsProps> = ({ size, variant, className }) => {
    return <ThreeDots size={size} className={cn(IconsVariants({ variant, className }))} />
}
