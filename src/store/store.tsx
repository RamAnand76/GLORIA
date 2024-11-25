import { create } from 'zustand';
import appStore from './actions';

export interface IStore {
  bulkRegisterData: IBulkRegister_R;
  userDetails: IUserDetails;
  selectedRowIds: { [page: number | string]: string[] };
  courseDetails: IAddCollege;
  setCourseDetails: (data: IAddCollege) => void;
  setSelectedRowIds: (id: { [page: number | string]: string[] }) => void;
  setBulkRegisterData: (data: IBulkRegister_R) => void;
  setUserDetails: (data: IUserDetails) => void;
}

const useStore = create<IStore>()(appStore);

export default useStore;
