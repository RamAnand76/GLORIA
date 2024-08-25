import Close from './_close';
import Dashboard from './_dashboard';
import DefaultLoader from './_defaultLoader';
import DownArrow from './_dropdown';
import Employees from './_employees';
import Info from './_info';
import Menu from './_menu';
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
};
const GetIcons = (iconName = 'default'): JSX.Element => {
  return iconObject[iconName] || iconObject.default;
};
export default GetIcons;
