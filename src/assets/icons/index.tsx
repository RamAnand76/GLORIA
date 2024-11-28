import Add from './_add';
import FileAttach from './_attach';
import Attendence from './_attendence';
import BackArrow from './_backArrow';
import Backward from './_backward';
import BronzeIcon from './_bronze';
import Close from './_close';
import Colleges from './_college';
import Dashboard from './_dashboard';
import DefaultLoader from './_defaultLoader';
import { DeleteIcon } from './_delete';
import { DownloadIcon } from './_download';
import DownArrow from './_dropdown';
import { EditIcon } from './_edit';
import Employees from './_employees';
import { EyeIcon } from './_eyeIcon';
import Filter from './_filter';
import Forward from './_forward';
import GoldIcon from './_gold';
import Info from './_info';
import KebabIcon from './_kebabIcon';
import Menu from './_menu';
import NotificationIcon from './_notification';
import SilverIcon from './_silver';
import Students from './_students';
import Upload from './_upload';

const iconObject: { [key: string]: JSX.Element } = {
  default: <DefaultLoader />,
  dashboard: <Dashboard />,
  employees: <Employees />,
  students: <Students />,
  menu: <Menu />,
  close: <Close />,
  upload: <Upload />,
  info: <Info />,
  downArrow: <DownArrow />,
  edit: <EditIcon />,
  download: <DownloadIcon />,
  delete: <DeleteIcon />,
  eye: <EyeIcon />,
  forward: <Forward />,
  backward: <Backward />,
  filter: <Filter />,
  kebabIcon: <KebabIcon />,
  backArrow: <BackArrow />,
  fileAttach: <FileAttach />,
  add: <Add />,
  colleges: <Colleges />,
  Gold: <GoldIcon />,
  Silver: <SilverIcon />,
  Bronze: <BronzeIcon />,
  Notification: <NotificationIcon />,
  'attendence-list': <Attendence />,
};
const GetIcons = (iconName = 'default'): JSX.Element => {
  return iconObject[iconName] || iconObject.default;
};
export default GetIcons;
